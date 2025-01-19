import { useRef } from 'react';

import UniversalList from 'ui/others/universalList/UniversalList.jsx';
import FilterItem from 'ui/others/filterItem/FilterItem.jsx';
import { ChevronFactory } from 'ui/svg/chevronFactiry';

import styles from './SelectFilter.module.css';

const SelectFilter = ({ filter, onChange }) => {
	const wrapperRef = useRef(null);
	const listRef = useRef(null);

	const onKeyDownSpace = (e) => {
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
				renderItem={({ item }) => (
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
