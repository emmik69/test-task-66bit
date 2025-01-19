import ChevronBreadcrumb from './chevronBreadcrumb/ChevronBreadcrumb.jsx';
import ChevronFilter from './chevronFilter/ChevronFilter.jsx';

export const ChevronFactory = ({ type, ...props }) => {
	switch (type) {
		case 'breadcrumb':
			return <ChevronBreadcrumb {...props} />;
		case 'filter':
			return <ChevronFilter {...props} />;
		default:
			return null;
	}
};
