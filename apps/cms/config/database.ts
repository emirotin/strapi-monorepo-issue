import path from "node:path";

import { type DbType, type EnvFn } from "./types";

const config = ({ env }: { env: EnvFn }) => {
	const client = env("CMS_DATABASE_CLIENT", "sqlite") as DbType;

	const connections = {
		mysql: {
			connection: {
				connectionString: env("CMS_DATABASE_URL"),
				CMS_HOST: env("CMS_DATABASE_CMS_HOST", "localCMS_HOST"),
				port: env.int("CMS_DATABASE_PORT", 3306),
				database: env("CMS_DATABASE_NAME", "strapi"),
				user: env("CMS_DATABASE_USERNAME", "strapi"),
				password: env("CMS_DATABASE_PASSWORD", "strapi"),
				ssl: env.bool("CMS_DATABASE_SSL", false) && {
					key: env("CMS_DATABASE_SSL_KEY", undefined),
					cert: env("CMS_DATABASE_SSL_CERT", undefined),
					ca: env("CMS_DATABASE_SSL_CA", undefined),
					capath: env("CMS_DATABASE_SSL_CAPATH", undefined),
					cipher: env("CMS_DATABASE_SSL_CIPHER", undefined),
					rejectUnauthorized: env.bool(
						"CMS_DATABASE_SSL_REJECT_UNAUTHORIZED",
						true
					),
				},
			},
			pool: {
				min: env.int("CMS_DATABASE_POOL_MIN", 2),
				max: env.int("CMS_DATABASE_POOL_MAX", 10),
			},
		},
		postgres: {
			connection: {
				connectionString: env("CMS_DATABASE_URL"),
				CMS_HOST: env("CMS_DATABASE_CMS_HOST", "localCMS_HOST"),
				port: env.int("CMS_DATABASE_PORT", 5432),
				database: env("CMS_DATABASE_NAME", "strapi"),
				user: env("CMS_DATABASE_USERNAME", "strapi"),
				password: env("CMS_DATABASE_PASSWORD", "strapi"),
				ssl: env.bool("CMS_DATABASE_SSL", false) && {
					key: env("CMS_DATABASE_SSL_KEY", undefined),
					cert: env("CMS_DATABASE_SSL_CERT", undefined),
					ca: env("CMS_DATABASE_SSL_CA", undefined),
					capath: env("CMS_DATABASE_SSL_CAPATH", undefined),
					cipher: env("CMS_DATABASE_SSL_CIPHER", undefined),
					rejectUnauthorized: env.bool(
						"CMS_DATABASE_SSL_REJECT_UNAUTHORIZED",
						true
					),
				},
				schema: env("CMS_DATABASE_SCHEMA", "public"),
			},
			pool: {
				min: env.int("CMS_DATABASE_POOL_MIN", 2),
				max: env.int("CMS_DATABASE_POOL_MAX", 10),
			},
		},
		sqlite: {
			connection: {
				filename: path.join(
					__dirname,
					"..",
					"..",
					"database",
					env("CMS_DATABASE_FILENAME", "data.db")
				),
			},
			useNullAsDefault: true,
		},
	};

	return {
		connection: {
			client,
			...connections[client],
			acquireConnectionTimeout: env.int(
				"CMS_DATABASE_CONNECTION_TIMEOUT",
				60000
			),
		},
	};
};

export default config;
