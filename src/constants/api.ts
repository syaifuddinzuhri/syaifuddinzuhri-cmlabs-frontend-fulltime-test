const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const API = {
    ingredient: {
        list: `${API_URL}list.php?i=list`,
        detail: `${API_URL}filter.php`
    }
}