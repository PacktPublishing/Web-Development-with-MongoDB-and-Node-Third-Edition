# Web Development with MongoDB and Node - Third Edition
This is the code repository for [Web Development with MongoDB and Node - Third Edition](https://www.packtpub.com/web-development/web-development-mongodb-and-node-third-edition?utm_source=github&utm_medium=repository&utm_campaign=9781788395083), published by [Packt](https://www.packtpub.com/?utm_source=github). It contains all the supporting project files necessary to work through the book from start to finish.
## About the Book
This book will help you to get these two technologies working together to build web applications quickly and easily, with effortless deployment to the cloud. You will also learn about angular 4, which consumes pure JSON APOIs from a hapi server.

The book begins by setting up your development environment, running you through the steps necessary to get the main application server up-and-running. Then you will see how to use Node.js to connect to a MongoDB database and perform data manipulations.


## Instructions and Navigation
All of the code is organized into folders. Each folder starts with a number followed by the application name. For example, Chapter02.

Chapter number 1, 2, 3, 10, 12 contains code but that is not executable. So code files are not present.

The code will look like the following:
```
var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080'); 
```

A basic understanding of JavaScript and HTML is the only requirement for this book. However, the design of book also helps the beginner with basic programming knowledge as well as cross platform developer to learn JavaScript and its frameworks.

## Related Products
* [Cross-platform Desktop Application Development: Electron, Node, NW.js, and React](https://www.packtpub.com/web-development/cross-platform-desktop-application-development-electron-node-nwjs-and-react?utm_source=github&utm_medium=repository&utm_campaign=9781788295697)

* [Mastering C++ Programming](https://www.packtpub.com/application-development/mastering-c-programming?utm_source=github&utm_medium=repository&utm_campaign=9781786461629)

* [Beginning C# Hands-On – The Core Language](https://www.packtpub.com/application-development/beginning-c-hands-–-core-language?utm_source=github&utm_medium=repository&utm_campaign=9781788296540)

