import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styles';
import { Search } from './pages/Search';

const queryClient = new QueryClient();
const router = createBrowserRouter([
	{
		path: '/',
		element: <Search name='card' />,
	},
]);

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />

				<QueryClientProvider client={queryClient}>
					<div className='App'>
						<RouterProvider router={router} />
					</div>
				</QueryClientProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
