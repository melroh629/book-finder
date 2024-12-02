import { useQuery } from '@tanstack/react-query';

const fn = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await res.json();
	return data;
};
export const useBoard = () => {
	const boardNoticeQuery = useQuery({
		queryKey: [''],
		queryFn: () => fn(),
		select: ({ content }) => content,
	});

	return {
		data: {
			boardNoticeList: boardNoticeQuery.data ?? [],
		},
		isLoading: boardNoticeQuery.isLoading,
		isError: boardNoticeQuery.isError,
	};
};
