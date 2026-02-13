export const getImageUrl = (url: string) => {
    if (url.startsWith("http") || url.startsWith("/")) {
        return url;
    }
    return `${import.meta.env.STRAPI_URL}${url}`;
};
