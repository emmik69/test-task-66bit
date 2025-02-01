import { FC } from 'react';

import ChevronBreadcrumb from './chevronBreadcrumb/ChevronBreadcrumb';
import ChevronFilter from './chevronFilter/ChevronFilter';

type ChevronFactoryProps = {
	type: 'breadcrumb' | 'filter';
	className?: string;
};

export const ChevronFactory: FC<ChevronFactoryProps> = ({ type, ...props }) => {
	switch (type) {
		case 'breadcrumb':
			return <ChevronBreadcrumb {...props} />;
		case 'filter':
			return <ChevronFilter {...props} />;
		default:
			return null;
	}
};
