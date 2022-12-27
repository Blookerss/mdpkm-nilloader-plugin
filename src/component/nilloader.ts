import { create } from 'xmlbuilder2';
import { JavaAgentJson } from 'voxura/src/component/java-agent';
import { Instance, JavaAgent } from 'voxura';
import { fetch, ResponseType } from '@tauri-apps/api/http';

export interface NilLoaderJson extends JavaAgentJson {
	version: string
}
export default class NilLoader extends JavaAgent {
	public static readonly id = 'nilloader'
	public version = '1.0.0'
	public constructor(instance: Instance, data: NilLoaderJson) {
		super(instance, data);
		this.version = data.version;
	}

	public static getVersions() {
		return Promise.resolve([
			VERSIONS.map(v => ({
				id: v,
				category: 0
			}))
		]);
	}

	public toJSON(): NilLoaderJson {
		return {
			version: this.version,
			...super.toJSON()
		};
	}

	public get url() {
		const { version } = this;
		return `${API_BASE}/${version}/nilloader-${version}.jar`;
	}
};

export const API_BASE = 'https://repo.sleeping.town/com/unascribed/nilloader';
export const VERSIONS = await fetch<string>(`${API_BASE}/maven-metadata.xml`, {
	method: 'GET',
	responseType: ResponseType.Text
}).then(({ data }) =>
	(create(data).end({ format: 'object' }) as any as MavenMetadata).metadata.versioning.versions.version.reverse()
);

export interface MavenMetadata {
	metadata: {
		groupId: string
		artifactId: string
		versioning: {
			latest: string
			release: string
			versions: {
				version: string[]
			}
		}
	}
}