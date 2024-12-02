import styled from 'styled-components';
import { DownOutlined } from '@ant-design/icons';
interface BookListProps {
	title: string;
	authors: string[];
	thumbnail: string;
	price: number;
	onDetailClick: () => void;
}
export const BookList = ({
	title,
	authors,
	thumbnail,
	price,
	onDetailClick,
}: BookListProps) => {
	return (
		<StyledContainer>
			<StyledImg>
				<img src={thumbnail} alt='' />
				<button>좋아요</button>
			</StyledImg>
			<StyledText>
				<h2>{title}</h2>
				<span>{authors.map(item => item)}</span>
			</StyledText>
			<StyledPrice>{price}원</StyledPrice>
			<StyledButtons>
				<button className='button-detail' onClick={onDetailClick}>
					상세보기
					<DownOutlined />
				</button>
				<button className='button-buy'>구매하기</button>
			</StyledButtons>
		</StyledContainer>
	);
};
const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 16px 16px 16px 48px;
	border-bottom: 1px solid #d2d6da;
`;
const StyledImg = styled.div`
	position: relative;
	margin-right: 48px;
	img {
		width: 48px;
		height: 68px;
	}
	button {
		position: absolute;
		top: 0;
		right: 0;
	}
`;
const StyledText = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	width: 408px;
	margin-right: 22px;
	h2 {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		${({ theme }) => theme.typography.title3};
		color: ${({ theme }) => theme.text.primary};
	}
	span {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		${({ theme }) => theme.typography.caption};
		color: ${({ theme }) => theme.text.subtitle};
	}
`;
const StyledPrice = styled.div`
	${({ theme }) => theme.typography.body2Bold};
	color: ${({ theme }) => theme.text.primary};
	margin-right: 56px;
`;
const StyledButtons = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	button {
		width: 115px;
		height: 48px;
		border-radius: 8px;
	}
	.button-detail {
		background: ${({ theme }) => theme.palette.lightGray};
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		color: ${({ theme }) => theme.text.secondary};
		align-self: end;
	}

	.button-buy {
		background: ${({ theme }) => theme.palette.primary};
		color: ${({ theme }) => theme.palette.white};
	}
`;
