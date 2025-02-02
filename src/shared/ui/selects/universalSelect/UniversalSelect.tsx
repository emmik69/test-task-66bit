import { KeyboardEvent, ReactNode, useRef } from 'react';

import { UniversalList } from '~~>shared/ui/others';
import { ChevronFactory } from '~~>shared/ui/icons';

import styles from './UniversalSelect.module.css';

type UniversalSelectProps<T> = {
	name: string;
	data: T[];
	renderItem: (_item: T, _index: number) => ReactNode;
};

const UniversalSelect = <T extends { id: string | number }>({
	name,
	data,
	renderItem,
}: UniversalSelectProps<T>) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLUListElement>(null);

	const onKeyDownSpace = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === ' ') {
			handleToggle();
			e.preventDefault();
			e.stopPropagation();
		}
	};

	const handleToggle = () => {
		if (listRef.current === document.activeElement) {
			wrapperRef.current?.focus();
		} else {
			listRef.current?.focus();
		}
	};

	return (
		<div
			ref={wrapperRef}
			tabIndex={0}
			className={styles['select-wrapper']}
			onClick={handleToggle}
			onKeyDown={onKeyDownSpace}
			onMouseDown={(e) =>
				e.target !== listRef.current && e.preventDefault()
			}
		>
			{name}
			<UniversalList
				myRef={listRef}
				items={data}
				renderItem={renderItem}
				onClick={(e) => e.stopPropagation()}
				className={styles.select}
			/>
			<ChevronFactory type="filter" className={styles['chevron']} />
		</div>
	);
};

export { UniversalSelect };
