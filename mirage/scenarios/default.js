export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('vessel', 50);

  server.loadFixtures('routes');

  server.db.routes.forEach((route) => {
    var waypoints = [];

    route.waypoints.forEach((item) => {
      var waypoint = server.create('waypoint', {
        latitude: item[0],
        longitude: item[1]
      });
      waypoints.push(waypoint);
    });

    server.create('vessel', {
      route: waypoints
    });

  });

}
