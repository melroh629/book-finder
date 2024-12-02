export const palette = {
	primary: '#4880EE',
	red: '#E84118',
	gray: '#DADADA',
	lightGray: '#F2F4F6',
	white: '#fff',
	black: '#222',
};

export const text = {
	primary: '#353C49',
	secondary: '#6D7582',
	subtitle: '#8D94A0',
};

export const typography = {
	title1: {
		fontSize: '24px',
		fontWeight: 700,
		lineHeight: '24px',
	},
	title2: {
		fontSize: '22px',
		fontWeight: 700,
		lineHeight: '24px',
	},
	title3: {
		fontSize: '18px',
		fontWeight: 700,
		lineHeight: '18px',
	},
	body1: {
		fontSize: '20px',
		fontWeight: 500,
		lineHeight: '20px',
	},
	body2: {
		fontSize: '14px',
		fontWeight: 500,
		lineHeight: '14px',
	},
	body2Bold: {
		fontSize: '14px',
		fontWeight: 700,
		lineHeight: '14px',
	},
	caption: {
		fontSize: '16px',
		fontWeight: 500,
		lineHeight: '16px',
	},
	small: {
		fontSize: '10px',
		fontWeight: 500,
		lineHeight: '10px',
	},
};

export const theme = {
	palette,
	text,
	typography,
};
export type Theme = typeof theme;

export default theme;
