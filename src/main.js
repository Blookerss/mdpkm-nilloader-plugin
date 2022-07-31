import './patcher';
import Manifest from './manifest';
import CustomLoader from './custom-loader';
import EnglishCommon from './locales/en/common';
import EnglishPlugin from './locales/en/plugin';

// yes, plugins can support multiple languages!
// http://docs.mdpkm.voxelified.com/docs/plugin-api/pluginapi#addlocalebundle
PluginAPI.addLocaleBundle('en', 'app.mdpkm.common', EnglishCommon);
PluginAPI.addLocaleBundle('en', `app.mdpkm.plugin.${Manifest.id}`, EnglishPlugin);

// http://docs.mdpkm.voxelified.com/docs/plugin-api/api#add
await API.add('CustomLoader', new CustomLoader());

// https://react-hot-toast.com/docs/toast
// https://www.i18next.com/overview/api#t
toast(t(`app.mdpkm.plugin.${Manifest.id}:toasts.test_message`));