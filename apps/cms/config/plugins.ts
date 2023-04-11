import { type EnvFn } from "./types";

const config = ({ env }: { env: EnvFn }) => ({
	upload: {
		config: {
			provider: "aws-s3",
			providerOptions: {
				baseUrl: env("CMS_CDN_URL"),
				rootPath: env("CMS_CDN_ROOT_PATH"),
				s3Options: {
					accessKeyId: env("CMS_AWS_ACCESS_KEY_ID"),
					secretAccessKey: env("CMS_AWS_ACCESS_SECRET"),
					region: env("CMS_AWS_REGION"),
					params: {
						Bucket: env("CMS_AWS_BUCKET"),
					},
				},
			},
			actionOptions: {
				upload: {},
				uploadStream: {},
				delete: {},
			},
		},
	},
});

export default config;
