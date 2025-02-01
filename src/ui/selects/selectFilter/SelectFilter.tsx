import { FC, KeyboardEvent, useRef } from 'react';

import { IFilter } from '~~>components/filterControl/filterControlData';
import UniversalList from '~~>ui/others/universalList/UniversalList';
import FilterItem from '~~>ui/others/filterItem/FilterItem';
import { ChevronFactory } from '~~>ui/svg/chevronFactory';

import styles from './SelectFilter.module.css';

type SelectFilterProps = {
	filter: IFilter;
	onChange: (_id: number) => void;
};

const SelectFilter: FC<SelectFilterProps> = ({ filter, onChange }) => {
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
			{filter.name}
			<UniversalList
				myRef={listRef}
				items={filter.categories}
				renderItem={(item) => (
					<FilterItem
						className={styles['filter-item']}
						title={item.title}
						state={item.state}
						onChange={() => onChange(item.id)}
					/>
				)}
				className={styles.select}
				onClick={(e) => e.stopPropagation()}
			/>
			<ChevronFactory type="filter" className={styles['chevron']} />
		</div>
	);
};

export default SelectFilter;
