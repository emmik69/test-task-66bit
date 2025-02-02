type IFilterCategory = {
	id: number;
	title: string;
	state: boolean;
	queryValue: string;
};

export type IEmployee = {
	id: number;
	name: string;
	photo: string;
	phone: string;
	gender: string;
	position: string;
	stack: string[];
	birthdate: string;
	dateOfEmployment: string;
};
export type IFilter = {
	id: number;
	name: string;
	queryKey: string;
	categories: IFilterCategory[];
};
