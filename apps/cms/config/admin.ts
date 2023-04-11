import { type EnvFn } from "./types";

const config = ({ env }: { env: EnvFn }) => ({
	auth: {
		secret: env("CMS_ADMIN_JWT_SECRET"),
	},
	apiToken: {
		salt: env("CMS_API_TOKEN_SALT"),
	},
	transfer: {
		token: {
			salt: env("CMS_TRANSFER_TOKEN_SALT"),
		},
	},
});

export default config;
