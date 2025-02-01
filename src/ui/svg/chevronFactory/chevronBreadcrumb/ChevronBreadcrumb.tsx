const ChevronBreadcrumb = ({ className = '' }) => {
	return (
		<svg
			className={className}
			width="1rem"
			height="1rem"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip21_169)">
				<path
					id="Vector (Stroke)"
					d="M4.62 1.95C5.01 1.56 5.64 1.56 6.04 1.95L11.37 7.29C11.76 7.68 11.76 8.31 11.37 8.7L6.04 14.04C5.64 14.43 5.01 14.43 4.62 14.04C4.23 13.65 4.23 13.01 4.62 12.62L9.25 8L4.62 3.37C4.23 2.98 4.23 2.35 4.62 1.95Z"
					fill="#B0B0B0"
					fillOpacity="1.000000"
					fillRule="evenodd"
				/>
			</g>
		</svg>
	);
};

export default ChevronBreadcrumb;
