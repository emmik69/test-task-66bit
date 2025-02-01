import { ReactNode } from 'react';

type UniversalTableProps<T> = {
	data: T[];
	renderHead: () => ReactNode;
	renderBody: (_item: T, _index: number) => ReactNode;
	className?: string;
};

const UniversalTable = <T extends { id: number }>(
	props: UniversalTableProps<T>
) => {
	const { className = '', data, renderHead, renderBody } = props;
	return (
		<table className={className}>
			<thead>
				<tr>{renderHead()}</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr key={item.id}>{renderBody(item, index)}</tr>
				))}
			</tbody>
		</table>
	);
};

export default UniversalTable;
