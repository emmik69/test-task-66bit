import { MouseEvent, ReactNode, Ref } from 'react';

type UniversalListProps<T> = {
	items: T[];
	renderItem: (_item: T, _index: number) => ReactNode;
	className?: string;
	onClick?: (_e: MouseEvent<HTMLUListElement>) => void;
	myRef?: Ref<HTMLUListElement>;
};

const UniversalList = <T extends { id: number | string }>(
	props: UniversalListProps<T>
): ReactNode => {
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
				<li key={item.id}>{renderItem(item, index)}</li>
			))}
		</ul>
	);
};

export default UniversalList;
