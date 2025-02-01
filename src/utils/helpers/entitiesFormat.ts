import { IFilter } from '~~>components/filterControl/filterControlData';

type IMonths = Record<string, string>;

export const formatDate = (inputDate: string): string => {
	const months: IMonths = {
		января: '01',
		февраля: '02',
		марта: '03',
		апреля: '04',
		мая: '05',
		июня: '06',
		июля: '07',
		августа: '08',
		сентября: '09',
		октября: '10',
		ноября: '11',
		декабря: '12',
	};

	const [day, month, year] = inputDate.split(' ');
	return `${day.padStart(2, '0')}.${months[month.toLowerCase()]}.${year}`;
};

export const formatPhone = (inputPhone: string): string => {
	return inputPhone.replace('(', '').replace(')', '');
};

export const formatQueryParams = (
	filterList: IFilter[],
	inputName: string
): string => {
	const params = new URLSearchParams();

	filterList.forEach((filter) => {
		const selectedCategories = filter.categories
			.filter((category) => category.state)
			.map((category) => category.queryValue);

		if (selectedCategories.length > 0) {
			params.set(filter.queryKey, selectedCategories.join(','));
		}
	});

	if (inputName?.length) params.set('Name', inputName);

	return params.toString().replace(/\+/g, '%20');
};

export const formatText = (
	text: string,
	limit: number,
	func: (_formText: string) => void
) => {
	const formText = text
		.trimStart()
		.replace('  ', ' ')
		.replace(
			/[^`~!@#$%^&*()\-_=+{}\\|;:'",.<>/?\w\sА-Яа-яёЁ_,.();:?<>={}№%^"/-]/g,
			''
		);

	if (formText.length <= limit) {
		func(formText);
	}
};
