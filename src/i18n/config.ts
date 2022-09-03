import rmgRuntime from '@railmapgen/rmg-runtime';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageCode, Translation } from '../constants/constants';
import rmgTranslate from '@railmapgen/rmg-translate';

const resources = {
    ...rmgTranslate.resources,
    [LanguageCode.English]: {
        translation: {},
    },
};

i18n.use(initReactI18next)
    .init({
        lng: rmgRuntime.getLanguage(),
        fallbackLng: {
            [LanguageCode.ChineseCN]: [LanguageCode.ChineseSimp, LanguageCode.English],
            [LanguageCode.ChineseHK]: [LanguageCode.ChineseTrad, LanguageCode.English],
            [LanguageCode.ChineseTW]: [LanguageCode.ChineseTrad, LanguageCode.English],

            [LanguageCode.ChineseTrad]: [LanguageCode.ChineseHK, LanguageCode.ChineseTW, LanguageCode.English],

            default: [LanguageCode.English],
        },
        resources,
    })
    .then(t => {
        document.title = t('Seed Project');
        document.documentElement.lang = i18n.language;
    });

export default i18n;

export const translateText = (translation: Translation): string => {
    return (
        i18n.languages.map(lang => translation[lang as LanguageCode]).find(name => name !== undefined) ??
        translation[LanguageCode.English] ??
        '(Translation Error)'
    );
};
