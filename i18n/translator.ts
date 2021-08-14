import i18n from "."

const useTranslate = (section,activeLang) => {
    let current = i18n.ru
    if (activeLang === "ru" || activeLang === "en") {
        current = i18n[activeLang]
    }
    const t = (key) => {
        if (current && current[section] && current[section][key]) {
            return current[section][key]
        }
        else {
            return i18n.en[section][key]
        }
    }
    return {t, current}
}

export default useTranslate