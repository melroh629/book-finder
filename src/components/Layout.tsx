import styled from 'styled-components';

interface LayoutProps {
	children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
	return <StyledContainer>{children}</StyledContainer>;
};
const StyledContainer = styled.div`
	width: 960px;
	margin: 0 auto;
	background: beige;
`;
