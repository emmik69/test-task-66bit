const UniversalTable = ({ className = '', data, renderHead, renderBody }) => {
	return (
		<table className={className}>
			<thead>
				<tr>{renderHead()}</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr key={item.id}>{renderBody({ item, index })}</tr>
				))}
			</tbody>
		</table>
	);
};

export default UniversalTable;
