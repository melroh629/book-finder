import styled from 'styled-components';
import { Select } from 'antd';
import { useRef, useState } from 'react';

interface SearchDetailProps {
	className?: string;
	onSearch: (searchType: string, keyword: string) => void;
	onClose: () => void;
}

export const SearchDetail = ({
	className,
	onSearch,
	onClose,
}: SearchDetailProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [searchType, setSearchType] = useState('title');

	const handleSearch = () => {
		const keyword = inputRef.current?.value.trim() || '';
		onSearch(searchType, keyword);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<StyledContainer className={className}>
			<div className='inner'>
				<StyledFilter>
					<Select
						defaultValue='title'
						style={{ width: 100 }}
						onChange={value => setSearchType(value)}
						options={[
							{ value: 'title', label: '제목' },
							{ value: 'author', label: '저자명' },
							{ value: 'publisher', label: '출판사' },
						]}
					/>
					<input
						ref={inputRef}
						type='text'
						placeholder='검색어 입력'
						onKeyDown={handleKeyDown}
					/>
				</StyledFilter>
				<button className='search' onClick={handleSearch}>
					검색하기
				</button>
				<button className='close' onClick={onClose}>
					닫기
				</button>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	background: #ffffff;
	.inner {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 16px;
		padding: 24px 36px;
		width: 360px;
		height: 160px;
	}
	.search {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		color: #ffffff;
		background: #4880ee;
		height: 36px;
		border-radius: 8px;
		text-align: center;
	}
	.close {
		position: absolute;
		top: 0;
		right: 0;
	}
`;
const StyledFilter = styled.div`
	display: flex;
	gap: 10px;
	input {
		background: skyblue;
	}
`;
