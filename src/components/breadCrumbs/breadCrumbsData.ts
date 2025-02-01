export type IBreadCrumb = {
	id: number;
	link: string;
	title: string;
};

export const breadCrumbsData: Record<string, IBreadCrumb> = {
	employees: {
		id: 1,
		link: 'employees',
		title: 'Список сотрудников',
	},
};
