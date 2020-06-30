

export const replaceRobotoWithSystemFont = (obj: any) => {
    const keys = Object.keys(obj);
    keys.forEach(function(key) {
        const value = obj[key];
        if (key === 'fontFamily') {
            obj[key] = obj[key].replace("'Roboto',", "'AvenirNextLTPro-Regular',");
        }
        if (typeof value === 'object') {
            replaceRobotoWithSystemFont(obj[key]);
        }
    });
    return obj;
};
