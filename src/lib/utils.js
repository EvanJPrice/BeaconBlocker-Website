// Helper to create page URLs for react-router
export function createPageUrl(pageName) {
    const routes = {
        'Home': '/',
        'Privacy': '/privacy',
    };
    return routes[pageName] || '/';
}
