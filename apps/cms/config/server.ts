import { type EnvFn } from "./types";

const config = ({ env }: { env: EnvFn }) => ({
	host: env("CMS_HOST", "0.0.0.0"),
	port: env.int("CMS_PORT", 1337),
	app: {
		keys: env.array<string>("CMS_APP_KEYS"),
	},
	webhooks: {
		populateRelations: env.bool("CMS_WEBHOOKS_POPULATE_RELATIONS", false),
	},
});

export default config;
