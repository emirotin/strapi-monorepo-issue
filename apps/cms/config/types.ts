// Strapi should be providing this type, but it doesn't

export type DbType = "mysql" | "postgres" | "sqlite";

export interface EnvFn {
	(key: string, defaultValue?: string): string;
	bool(key: string, defaultValue?: boolean): boolean;
	int(key: string, defaultValue?: number): number;
	float(key: string, defaultValue?: number): number;
	array<T = unknown>(key: string, defaultValue?: Array<T>): Array<T>;
}
