import { type IFilter } from '~~>shared/model/types';

const filterControlData: IFilter[] = [
	{
		id: 1,
		name: 'Должность',
		queryKey: 'Position',
		categories: [
			{
				id: 1,
				title: 'Frontend-разработчик',
				state: false,
				queryValue: 'Frontend',
			},
			{
				id: 2,
				title: 'Backend-разработчик',
				state: false,
				queryValue: 'Backend',
			},
			{ id: 3, title: 'Аналитик', state: false, queryValue: 'Analyst' },
			{ id: 4, title: 'Менеджер', state: false, queryValue: 'Manager' },
			{ id: 5, title: 'Дизайнер', state: false, queryValue: 'Designer' },
		],
	},
	{
		id: 2,
		name: 'Пол',
		queryKey: 'Gender',
		categories: [
			{ id: 7, title: 'Мужчина', state: false, queryValue: 'Male' },
			{ id: 8, title: 'Женщина', state: false, queryValue: 'Female' },
		],
	},
	{
		id: 3,
		name: 'Стек технологий',
		queryKey: 'Stack',
		categories: [
			{ id: 9, title: 'CSharp', state: false, queryValue: 'CSharp' },
			{ id: 10, title: 'React', state: false, queryValue: 'React' },
			{ id: 11, title: 'Java', state: false, queryValue: 'Java' },
			{ id: 12, title: 'PHP', state: false, queryValue: 'PHP' },
			{ id: 13, title: 'Figma', state: false, queryValue: 'Figma' },
			{ id: 14, title: 'Word', state: false, queryValue: 'Word' },
		],
	},
];

export { filterControlData };
