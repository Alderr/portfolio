//Routing
//each route/link will set up the view and necessary controller for that view.

app.config(function($routeProvider) {
  // necessary always; homepage
  $routeProvider
  .when("/", {
    templateUrl: 'templates/home.html',
    controller: "homeController"
  })

  .when( "/about", {
    templateUrl: "templates/about.html",
    controller: "aboutController"
  })

  .when( "/projects", {
    templateUrl: "templates/projects.html",
    controller: "projectsController"
  })

  .when( "/contact", {
    templateUrl: "templates/contact.html",
    controller: "contactController"
  })
});
