const Wrapper = ({ children, ...props }: any) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="44"
			height="44"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="#2c3e50"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			{children}
		</svg>
	);
};

export default Wrapper;
