const routes = {
    login: '/',
    register: '/register',
    registerPlay: '/register_play',
    registerPlay2: '/register_play_profile',
    home: '/home',
    settings: '/settings',
    meeting: '/meeting/:channel',
    projects: '/projects'
    /* project: (projectId) => projectId ? `/projects/${projectId}` : '/projects/:projectId', */
    /* admin: {
        users: '/admin/users',
    } */
}

export default routes;