import { formatDate, formatPhone } from '~~>shared/lib/utils/entitiesFormat';
import { type IEmployee } from '~~>shared/model/types';

export const infoData = (user: IEmployee) => [
	{
		id: 1,
		typeInfo: 'Контактный телефон:',
		value: user.phone ? formatPhone(user.phone) : '+x xxx xxx-xx-xx',
	},
	{
		id: 2,
		typeInfo: 'Дата рождения:',
		value: user.birthdate ? formatDate(user.birthdate) : 'xx.xx.xxxx',
	},
	{
		id: 3,
		typeInfo: 'Дата устройства:',
		value: user.dateOfEmployment
			? formatDate(user.dateOfEmployment)
			: 'xx.xx.xxxx',
	},
];
