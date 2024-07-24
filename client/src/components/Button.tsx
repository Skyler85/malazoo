import { ReactNode } from 'react';

type Color = 'default' | 'white';
type Size = 'sm' | 'md' | 'full';
type Type = 'button' | 'submit';

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	color?: Color;
	size?: Size;
	type?: Type;
}

export function Button({ children, onClick, color = 'default', type = 'button', size = 'md' }: ButtonProps) {
	return (
		<button
			className={`${buttonTheme.color[color]} ${buttonTheme.size[size]} text-center rounded-md font-semibold border`}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

const buttonTheme = {
	color: {
		default: 'text-white bg-green-400 border-green-400',
		white: 'text-green-400 bg-white border-green-400',
	},

	size: {
		sm: 'px-2 py-1.5 text-sm',
		md: 'px-3 py-2 text-base',
		full: 'py-3 w-full text-base',
	},
};
