import { type EnvFn } from "./types";

const middleware = ({ env }: { env: EnvFn }) => [
	"strapi::errors",
	{
		name: "strapi::security",
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					"connect-src": ["'self'", "https:"],
					"img-src": [
						"'self'",
						"data:",
						"blob:",
						"dl.airtable.com",
						`${env("CMS_AWS_BUCKET")}.s3.${env(
							"CMS_AWS_REGION"
						)}.amazonaws.com`,
					],
					"media-src": [
						"'self'",
						"data:",
						"blob:",
						"dl.airtable.com",
						`${env("CMS_AWS_BUCKET")}.s3.${env(
							"CMS_AWS_REGION"
						)}.amazonaws.com`,
					],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
	"strapi::cors",
	"strapi::poweredBy",
	"strapi::logger",
	"strapi::query",
	"strapi::body",
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];

export default middleware;
