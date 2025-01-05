// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Multilingual } from "~/i18n";

export const SITE_TITLE: string | Multilingual = {
    en: "hellokaton's digital garden",
    zh: "hellokaton 的数字花园"
};

export const SITE_DESCRIPTION: string | Multilingual = {
    en: "This is Katon's private land.",
    zh: "这里是 katon 的自留地。",
};

export const X_ACCOUNT: string | Multilingual = "@hellokaton";

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
    en: "This page is not available in your language.",
    zh: "此页面不支持您的语言",
};