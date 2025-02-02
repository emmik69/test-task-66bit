import { Link } from 'react-router';

import { ThemeSwitcher } from '~~>entities/theme';
import { UniversalList } from '~~>shared/ui/others';
import { BitLogo } from '~~>shared/ui/icons';

import { linkData } from '../../lib/consts';
import styles from './Header.module.css';

const Header = () => {
	return (
		<div className={styles.header}>
			<Link to="" className={styles['logo-leveler']}>
				<BitLogo />
			</Link>
			{linkData.length ? (
				<UniversalList
					className={styles['header-list']}
					items={linkData}
					renderItem={(item) => <a href={item.type}>{item.link}</a>}
				/>
			) : null}
			<ThemeSwitcher />
		</div>
	);
};

export { Header };
