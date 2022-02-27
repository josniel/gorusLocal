const routes = {
    login: '/',
    register: '/register',
    home: '/home',
    settings: '/settings',
    account: '/account',    
    projects: '/projects',
    project: (projectId) => projectId ? `/projects/${projectId}` : '/projects/:projectId',
    admin: {
        users: '/admin/users',
    }
}

export default routes;