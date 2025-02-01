import { Link } from 'react-router';

import ThemeSwitcher from '~~>ui/inputs/themeSwitcher/ThemeSwitcher';
import UniversalList from '~~>ui/others/universalList/UniversalList';
import BitLogo from '~~>ui/svg/bitLogo/BitLogo';

import { linkData } from './linkData';
import styles from './Header.module.css';

export const Header = () => {
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
