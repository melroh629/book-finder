import styled from 'styled-components';
import { IconSearch } from '../icons';

interface InputSearchProps {
	placeholder?: string;
	value?: string;
	onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
export const InputSearch = ({
	placeholder,
	value,
	onKeyDown,
}: InputSearchProps) => {
	return (
		<StyledContainer>
			<StyledIconSearch />
			<StyledInput
				type='text'
				placeholder={placeholder}
				value={value}
				onKeyDown={onKeyDown}
			/>
		</StyledContainer>
	);
};
const StyledContainer = styled.div`
	position: relative;
`;
const StyledIconSearch = styled(IconSearch)`
	position: absolute;
	top: 50%;
	left: 20px;
	transform: translateY(-50%);
`;
const StyledInput = styled.input`
	width: 480px;
	height: 50px;
	padding-left: 51px;
	${({ theme }) => theme.typography.caption};
	background: ${({ theme }) => theme.palette.lightGray};
	border-radius: 100px;
`;
