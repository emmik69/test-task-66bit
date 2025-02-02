import { FC, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import basicAvatar from '~~>shared/assets/images/avatar.jpg';
import { InfoTag, UniversalList } from '~~>shared/ui/others';
import { type IEmployee } from '~~>shared/model/types';

import styles from './EmployeePreview.module.css';

type EmployeePreviewProps = {
	user: IEmployee;
};

const EmployeePreview: FC<EmployeePreviewProps> = ({ user }) => {
	const [avatarIsLoading, setAvatarIsLoading] = useState(true);

	return (
		<div className={styles['employee-preview']}>
			<img
				src={user.photo}
				alt="Аватар"
				className={styles.avatar}
				onLoad={() => setAvatarIsLoading(false)}
				onError={(e) => {
					e.currentTarget.src = basicAvatar;
				}}
			/>
			{avatarIsLoading ? (
				<CircularProgress size={20} className={styles['img-load']} />
			) : null}
			<div className={styles['title-wrapper']}>
				<h1>{user.name ?? 'Фамилия Имя Отчество'}</h1>
				<p>{user.position ?? 'Должность'}</p>
			</div>
			{user.stack?.length ? (
				<UniversalList
					items={user.stack.map((stack, index) => ({
						id: index,
						title: stack,
					}))}
					renderItem={(item) => (
						<InfoTag className={styles.stack}>{item.title}</InfoTag>
					)}
					className={styles['stack-list']}
				/>
			) : null}
		</div>
	);
};

export default EmployeePreview;
