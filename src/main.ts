import i18n from 'i18next';
import { IMAGES } from 'mdpkm-api/constants';
import { COMPONENT_MAP } from 'voxura';

import Manifest from './manifest.json';
import NilLoader from './component/nilloader';
import NilLoaderIcon from './assets/img/nilloader.svg';

import enMdpkm from './locales/en/mdpkm.json';
import enVoxura from './locales/en/voxura.json';

// Exporting the manifest is REQUIRED for your plugin to load!
export const manifest = Manifest;
export default class NilLoaderPlugin {
    public id = Manifest.id;
    public icon = NilLoaderIcon;
    public version = Manifest.version;

    public minAppVersion = '2.0.0';

    public init() {
		i18n.addResourceBundle('en', 'mdpkm', enMdpkm);
        i18n.addResourceBundle('en', 'voxura', enVoxura);

		IMAGES['component.nilloader'] = NilLoaderIcon;
		COMPONENT_MAP.push(NilLoader);
    }
};