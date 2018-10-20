import { IContext, TABLE_ENUMS, TABLES } from '../../types';

export const postMetaById = (context: IContext, postId: string) => {
	const { gun } = context;
	return gun.path(`${TABLES.POST_META_BY_ID}.${postId}`);
};

export const postMetasByUsername = (context: IContext, username: string) => {
	const { gun } = context;
	return gun.path(`${TABLES.POST_METAS_BY_USER}.${username}`);
};

export const postMetasByCurrentUser = (context: IContext) => {
	const { gun, account } = context;
	return gun.path(`${TABLES.POST_METAS_BY_USER}.${account.is.alias}`);
};

export const postMetasByPostIdOfCurrentAccount = (
	context: IContext,
	postId: string,
) => {
	const { gun, account } = context;
	return gun.path(`${TABLES.POST_METAS_BY_USER}.${account.is.alias}.${postId}`);
};

export const postByPath = (context: IContext, postPath: string) => {
	const { gun } = context;
	return gun.path(`${TABLES.POSTS}.${postPath}`);
};

export const postsByDate = (context: IContext, datePath: string) => {
	const { gun } = context;
	return gun.path(`${TABLES.POSTS}.${datePath}.${TABLE_ENUMS.PUBLIC}`);
};

export const likesByPostPath = (context: IContext, postPath: string) => {
	const { gun } = context;
	return gun.path(`${TABLES.POSTS}.${postPath}.${TABLE_ENUMS.LIKES}`);
};

export const postLikesByCurrentUser = (context: IContext, postPath: string) => {
	const { gun, account } = context;
	return gun.path(
		`${TABLES.POSTS}.${postPath}.${TABLE_ENUMS.LIKES}.${account.is.alias}`,
	);
};
