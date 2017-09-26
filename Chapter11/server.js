/**
 * 4.1
 */
// Create a server with a host and port
const hapi 		= require('hapi');
const server 	= new hapi.Server();
const routes 	= require('./routes');

server.connection({ 
    host: 'localhost', 
    port: 8000,
    routes: { cors: true } 
});

//Add the route
server.route(routes);
// Start the server
server.start((err) => {
	if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
/**
 * /4.1
 */


