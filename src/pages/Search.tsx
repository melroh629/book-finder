import { useState, useRef } from 'react';
import styled from 'styled-components';

import { Book, getBooks } from '../apis';
import { IconSearch } from '../icons';
import { BookDetail, SearchDetail, Layout, BookList } from '../components';
interface SearchProps {
	name?: string;
}
export const Search = ({ name }: SearchProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [result, setResult] = useState<Book[]>([]); // 전체 검색 결과
	const [isHistory, setIsHistory] = useState<boolean>(true); // 최근 검색어
	const [keywordHistory, setKeywordHistory] = useState<string[]>(() => {
		const savedHistory = localStorage.getItem('keywordHistory');
		return savedHistory ? JSON.parse(savedHistory) : [];
	});
	const [selectedBookIsbn, setSelectedBookIsbn] = useState<string | null>(null);
	const [filteredResult, setFilteredResult] = useState<Book[]>([]); // 필터링 결과
	const [isFiltered, setIsFiltered] = useState(false); // 필터링 여부(상세검색 시 사용)
	const [showDetail, setShowDetail] = useState(false); // 상세검색 여부

	// 최근 검색어 업데이트 함수
	const updateKeywordHistory = (newKeyWord: string) => {
		console.log(`Updating keyword history with: ${newKeyWord}`); // 추가된 키워드 로그
		setKeywordHistory(prev => {
			const updatedHistory = [...prev, newKeyWord];
			console.log('Current history:', updatedHistory);
			if (updatedHistory.length > 8) {
				updatedHistory.shift();
			}
			localStorage.setItem('keywordHistory', JSON.stringify(updatedHistory));
			return updatedHistory;
		});
	};

	// 최근 검색어 삭제 함수
	const deleteKeywordHistory = (keyword: string) => {
		setKeywordHistory(prev => {
			const updatedHistory = prev.filter(item => item !== keyword);
			localStorage.setItem('keywordHistory', JSON.stringify(updatedHistory));
			return updatedHistory;
		});
	};

	// 전체 검색 처리 함수
	const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			console.log('handleKeyDown called');
			const keyword = inputRef.current?.value.trim();
			if (keyword) {
				updateKeywordHistory(keyword);
			}
			if (!keyword) return;
			try {
				const bookResponse = await getBooks(keyword);
				setResult(bookResponse?.documents || []);
			} catch (error) {
				console.error('Error handling search:', error);
				setResult([]); // 에러 발생 시에도 빈 배열 설정
			}
		}
	};

	// 상세 검색 처리 함수
	const handleDetailSearch = (searchType: string, keyword: string) => {
		if (!keyword.trim()) {
			setFilteredResult(result);
			setIsFiltered(false);
			return;
		}

		const filtered = result.filter(book => {
			const searchKeyword = keyword.toLowerCase();
			switch (searchType) {
				case 'title':
					return book.title.toLowerCase().includes(searchKeyword);
				case 'author':
					return book.authors.some(author =>
						author.toLowerCase().includes(searchKeyword)
					);
				case 'publisher':
					return book.publisher.toLowerCase().includes(searchKeyword);
				default:
					return false;
			}
		});

		setFilteredResult(filtered);
		setIsFiltered(true);
		setShowDetail(false);
	};

	return (
		<Layout>
			<StyledTitle>도서검색 : {name}</StyledTitle>
			<StyledSearchContainer>
				<StyledSearch>
					<StyledIconSearch />
					<StyledInput
						placeholder='검색어를 입력하세요'
						ref={inputRef}
						// onFocus={() => setIsHistory(true)}
						onKeyDown={handleKeyDown}
						$isHistory={isHistory}
					/>
					{isHistory && (
						<StyledList>
							{keywordHistory.map((keyword, index) => (
								<p key={index}>
									<span>{keyword}</span>
									<button
										onClick={() => {
											deleteKeywordHistory(keyword);
										}}
									>
										삭제
									</button>
								</p>
							))}
						</StyledList>
					)}
				</StyledSearch>
				<StyledFilter>
					<button onClick={() => setShowDetail(true)}>상세검색</button>
					{showDetail && (
						<StyledSearchDetail
							onSearch={handleDetailSearch}
							onClose={() => setShowDetail(false)}
						/>
					)}
				</StyledFilter>
			</StyledSearchContainer>

			{/* 검색 결과 표시 */}
			{/* isFiltered는 */}
			{(isFiltered ? filteredResult : result).map(book =>
				book.isbn === selectedBookIsbn ? (
					<BookDetail
						key={book.isbn}
						title={book.title}
						authors={book.authors}
						thumbnail={book.thumbnail}
						contents={book.contents}
						price={book.price}
						sale_price={book.sale_price}
						onClose={() => setSelectedBookIsbn(null)}
					/>
				) : (
					<BookList
						key={book.isbn}
						title={book.title}
						authors={book.authors}
						thumbnail={book.thumbnail}
						price={book.price}
						onDetailClick={() =>
							setSelectedBookIsbn(
								book.isbn === selectedBookIsbn ? null : book.isbn
							)
						}
					/>
				)
			)}
		</Layout>
	);
};

const StyledTitle = styled.h1`
	${({ theme }) => theme.typography.title2};
`;
const StyledSearch = styled.div`
	position: relative;
	width: fit-content;
`;
const StyledIconSearch = styled(IconSearch)`
	position: absolute;
	top: 50%;
	left: 20px;
	transform: translateY(-50%);
`;
const StyledInput = styled.input<{ $isHistory?: boolean }>`
	width: 480px;
	height: 50px;
	padding-left: 51px;
	${({ theme }) => theme.typography.caption};
	// background: ${({ theme }) => theme.palette.lightGray};
	background: pink;
	// isHistory가 true일 때, border-radius를  24px 24px 0 0, 디폴트는 100px
	border-radius: ${({ $isHistory }) =>
		$isHistory ? '24px 24px 0 0' : '100px'};
`;
const StyledList = styled.div`
	z-index: 10;
	position: absolute;
	top: 50px;
	left: 0;
	width: 100%;
	padding: 20px;
	border-radius: 0 0 24px 24px;
	background: lightblue;
	display: flex;
	flex-direction: column;
	gap: 10px;
	p {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;
const StyledSearchContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;
const StyledFilter = styled.div`
	position: relative;
`;
const StyledSearchDetail = styled(SearchDetail)`
	position: absolute;
	top: auto;
	left: 0;
`;
