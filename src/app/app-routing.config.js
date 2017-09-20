const config = ($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', { url: '/' });

    // no hashbang in urls
    $locationProvider.html5Mode(true);
};

const routes = {
    config: config
};

export default routes;
