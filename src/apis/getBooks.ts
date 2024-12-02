import axios from 'axios';
const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;

// 단일 책의 정보
export interface Book {
	title: string;
	contents: string;
	url: string;
	isbn: string;
	datetime: string; // 출판일
	authors: string[]; // 저자 배열
	publisher: string; // 출판사
	translators: string[]; // 번역가 배열
	price: number; // 정가
	sale_price: number; // 판매가
	thumbnail: string; // 썸네일 URL
	status: string; // 판매 상태
}

// 응답 메타 정보
export interface BookMeta {
	total_count: number; // 총 검색 결과 개수
	pageable_count: number; // 페이지네이션 가능한 결과 개수
	is_end: boolean; // 마지막 페이지 여부
}
// API 응답 구조
export interface BookResponse {
	documents: Book[];
	meta: BookMeta;
}
export const getBooks = async (query: string): Promise<BookResponse | null> => {
	const url = 'https://dapi.kakao.com/v3/search/book';

	try {
		const response = await axios.get(url, {
			params: { query },
			headers: {
				Authorization: `KakaoAK ${REST_API_KEY}`,
			},
		});
		return response.data;
	} catch (error) {
		console.error('Error fetching books:', error);
		return null;
	}
};
