import Manifest from './manifest';
import NilLoaderImage from './assets/img/icons/nilloader.svg';
export default new class NilLoader extends PluginSystem {
    type = 'java-modded';
    versions = [];

    constructor() {
        super(Manifest.id);
    }

    async init() {
        this.registerLaunchTask('MODIFY_FINAL', (instance, { javaArguments }) => {
            if(instance.config?.nilloader) {
                javaArguments.push('-javaagent:nilloader.jar');
                instance.launchLogs.push({
                    type: 'INFO',
                    text: `javaagent has been pushed for NilLoader v${instance.config.nilloader}`,
                    timestamp: Date.now()
                });
            }
        });
        API.makeRequest('https://repo.sleeping.town/com/unascribed/nilloader/maven-metadata.xml').then(data => {
            const { metadata } = xml.create(data).end({ format: 'object' });
            this.versions = metadata.versioning.versions.version.reverse();
        });
        this.icon = await PluginAPI.getPath(Manifest.id, NilLoaderImage);
    }

    async download(instance, version) {
        await Util.downloadFilePath(`https://repo.sleeping.town/com/unascribed/nilloader/${version}/nilloader-${version}.jar`, `${instance.path}/nilloader.jar`);
        await instance.saveConfig({
            ...await instance.getConfig(),
            nilloader: version
        });
        instance.updateStore();
    }

    getVersions() {
        return this.versions;
    }
};