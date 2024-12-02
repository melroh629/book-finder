import styled from 'styled-components';
import { UpOutlined } from '@ant-design/icons';
interface BookDetailProps {
	title: string;
	authors: string[];
	thumbnail: string;
	contents: string;
	price: number;
	sale_price: number;
	onClose: () => void;
}
export const BookDetail = ({
	title,
	authors,
	thumbnail,
	contents,
	price,
	sale_price,
	onClose,
}: BookDetailProps) => {
	return (
		<StyledContainer>
			<StyledImg>
				<img src={thumbnail} alt='' />
				<button>좋아요</button>
			</StyledImg>
			<StyledText>
				<div className='title'>
					<h2>{title}</h2>
					<span>{authors.map(item => item)}</span>
				</div>
				<div className='info'>
					<h3>책 소개</h3>
					<pre>{contents}</pre>
				</div>
			</StyledText>
			<StyledDetail>
				<button className='button-detail' onClick={onClose}>
					상세보기 접기
					<UpOutlined />
				</button>
				<div className='price'>
					<span>
						원가 <del>{price}원</del>
					</span>
					<span>
						할인가 <strong>{sale_price}원</strong>
					</span>
				</div>
				<button className='button-buy'>구매하기</button>
			</StyledDetail>
		</StyledContainer>
	);
};
const StyledContainer = styled.div`
	display: flex;
	padding: 24px 16px 40px 54px;
	border-bottom: 1px solid #d2d6da;
`;
const StyledImg = styled.div`
	position: relative;
	margin-right: 32px;
	img {
		width: 210px;
		height: 280px;
	}
	button {
		position: absolute;
		top: 0;
		right: 0;
	}
`;
const StyledText = styled.div`
	.title {
		display: flex;
		gap: 16px;
		align-items: center;
		margin-bottom: 16px;
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
	}
	.info {
		width: 360px;
		margin-right: 48px;
		h3 {
			${({ theme }) => theme.typography.body2Bold};
			color: ${({ theme }) => theme.text.primary};
			margin-bottom: 12px;
		}
		pre {
			${({ theme }) => theme.typography.small};
			color: ${({ theme }) => theme.text.primary};
			white-space: pre-wrap;
			word-break: keep-all;
		}
	}
`;
const StyledDetail = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.button-detail {
		background: ${({ theme }) => theme.palette.lightGray};
		width: 115px;
		height: 48px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		color: ${({ theme }) => theme.text.secondary};
		align-self: end;
	}
	.price {
		display: flex;
		flex-direction: column;
		gap: 8px;
		span {
			display: flex;
			align-items: center;
			align-self: end;
			gap: 5px;
			${({ theme }) => theme.typography.small};
			color: ${({ theme }) => theme.text.subtitle};
			del,
			strong {
				${({ theme }) => theme.typography.title3};
				color: ${({ theme }) => theme.text.primary};
			}
			del {
				font-weight: 400;
			}
		}
	}
	.button-buy {
		width: 240px;
		height: 48px;
		border-radius: 8px;
		background: ${({ theme }) => theme.palette.primary};
		color: ${({ theme }) => theme.palette.white};
	}
`;
