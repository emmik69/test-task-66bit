const UniversalList = (props) => {
	const {
		items,
		renderItem,
		className = '',
		onClick = () => {},
		myRef = null,
	} = props;
	return (
		<ul ref={myRef} className={className} onClick={onClick} tabIndex={-1}>
			{items.map((item, index) => (
				<li key={item.id}>{renderItem({ item, index })}</li>
			))}
		</ul>
	);
};

export default UniversalList;
