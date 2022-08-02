import './patcher';
import Manifest from './manifest';
import NilLoader from './nilloader';
import EnglishCommon from './locales/en/common';
import EnglishPlugin from './locales/en/plugin';

PluginAPI.addLocaleBundle('en', 'app.mdpkm.common', EnglishCommon);
PluginAPI.addLocaleBundle('en', `app.mdpkm.plugin.${Manifest.id}`, EnglishPlugin);

NilLoader.init();