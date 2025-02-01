import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import { formatQueryParams, formatText } from 'utils/helpers/entitiesFormat';
import FilterList from 'components/filterList/FilterList.jsx';
import ButtonBase from 'ui/buttons/buttonBase/ButtonBase.jsx';
import UniversalList from 'ui/others/universalList/UniversalList.jsx';
import InfoTag from 'ui/others/infoTag/InfoTag.jsx';
import Cross from 'ui/svg/cross/Cross.jsx';

import { filterControlData } from './filterControlData';
import styles from './FilterControl.module.css';

const FilterControl = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const position = searchParams.get('Position')
		? searchParams.get('Position')
		: '';
	const gender = searchParams.get('Gender') ? searchParams.get('Gender') : '';
	const stack = searchParams.get('Stack') ? searchParams.get('Stack') : '';
	const [name, setName] = useState(
		searchParams.get('Name') ? searchParams.get('Name') : ''
	);
	const [filterList, setFilterList] = useState([]);

	const changeFilterState = (categoryId) => {
		setFilterList((cv) =>
			cv.map((filter) =>
				filter.categories.some((category) => category.id === categoryId)
					? {
							...filter,
							categories: filter.categories.map((category) =>
								category.id === categoryId
									? { ...category, state: !category.state }
									: category
							),
					  }
					: filter
			)
		);
	};

	const updateUrl = () => {
		const queryString = formatQueryParams(filterList, name);
		setSearchParams(queryString);
	};

	useEffect(() => {
		setFilterList(
			filterControlData.map((filter) => {
				switch (filter.queryKey) {
					case 'Position':
						return {
							...filter,
							categories: filter.categories.map((category) =>
								position.includes(category.queryValue)
									? { ...category, state: true }
									: category
							),
						};
					case 'Gender':
						return {
							...filter,
							categories: filter.categories.map((category) =>
								gender.includes(category.queryValue)
									? { ...category, state: true }
									: category
							),
						};
					case 'Stack':
						return {
							...filter,
							categories: filter.categories.map((category) =>
								stack.includes(category.queryValue)
									? { ...category, state: true }
									: category
							),
						};

					default:
						return filter;
				}
			})
		);
	}, [position, gender, stack]);

	return (
		<div className={styles['filter-control']}>
			<div className={styles['filter-bar']}>
				<h1 className={styles.title}>Список сотрудников</h1>
				<FilterList
					filterList={filterList}
					onChange={changeFilterState}
				/>
				<input
					className={styles['input-search']}
					type="text"
					value={name}
					onChange={(e) => formatText(e.target.value, 512, setName)}
					placeholder="Поиск"
				/>
			</div>
			<div className={styles['search-filter-bar']}>
				<div className={styles['active-filters']}>
					<p>Выбранные фильтры:</p>
					<UniversalList
						items={filterList
							.flatMap(({ categories }) => categories)
							.filter(({ state }) => state)}
						renderItem={({ item }) => (
							<InfoTag onClick={() => changeFilterState(item.id)}>
								{item.title}
								<Cross />
							</InfoTag>
						)}
						className={styles['tag-list']}
					/>
				</div>
				<ButtonBase
					className={styles['button-search']}
					onClick={updateUrl}
				>
					Найти
				</ButtonBase>
			</div>
		</div>
	);
};

export default FilterControl;
