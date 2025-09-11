/**
 * 
 * @param {string} locale 
 * @param {string} defaultLocale 
 * @returns string
 */
export const getImageBasePath = (locale, defaultLocale) => locale === defaultLocale ? '/img' : `/${locale}/img`