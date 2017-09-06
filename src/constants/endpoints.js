export const ENDPOINTS = {
    USER_INFO: `https://api.instagram.com/v1/users/search`,
    getUserMediaEndpoint: (id) => `https://api.instagram.com/v1/users/${id}/media/recent`
};