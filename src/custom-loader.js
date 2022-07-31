import Manifest from './manifest';
import IconImage from './assets/img/icon.svg';
import BannerImage from './assets/img/banners/custom-loader.svg';
export default class CustomLoader extends PluginSystem {
    // Loader type, important!
    type = 'java-modded';

    constructor() {
        super(Manifest.id);
    }

    async init() {
        // Registers a new loader via the plugin api.
        // http://docs.mdpkm.voxelified.com/docs/plugin-api/pluginsystem#addloader
        this.addLoader('custom_example', {
            icon: IconImage,
            type: this.type,
            banner: BannerImage
        });
    }

    async getVersions() {
        // in a normal plugin, this should make a request to some external server.
        return {
            '1.18.2': ['1.18.2-1.0.0']
        };
    }

    async downloadManifest(path, game, version) {
        // check out how this is set-up here:
        // https://github.com/Blookerss/mdpkm-site/tree/main/public

        // http://docs.mdpkm.voxelified.com/docs/plugin-api/api#makeRequest
        const manifest = await API.makeRequest(
            `https://mdpkm.voxelified.com/example-plugin/manifest.json`
        );
        await Util.writeFile(path, JSON.stringify(manifest));
    }
};