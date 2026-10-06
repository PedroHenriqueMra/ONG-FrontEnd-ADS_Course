export function getItem(key, fallback) {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
 
    try {
        return JSON.parse(raw);
    } catch (error) {
        console.warn(`storage: valor corrompido em "${key}", usando fallback.`, error);
        return fallback;
    }
}

export function setItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.warn(`storage: não foi possível gravar "${key}".`, error);
        return false;
    }
}