# browsercap
>npm start
OR
>node index.js

######GUIDE#######
[Setting Up Express]
First, you need to set up an Express project. Follow these steps:

1)Create a new directory for your project:
	>mkdir express-static-file-tutorial
	>cd express-static-file-tutorial

2)Initialize a new Node.js project:
	>npm init -y

3) Install Express as a dependency:
	>npm install express --save
4)Create an entry file, index.js:
	>touch index.js

5)Structuring Your Files
Create a public directory to store your static files. Your project structure should look like this:
	express-static-file-tutorial
	|- index.js
	|- public
	|- shark.png
	|- index.html
6)Creating Your Express Server
In your index.js file, set up a basic Express server:

	const express = require('express');
	const app = express();
	const PORT = 3000;

	app.get('/', (req, res) => {
	res.send('Hello World!');
	});

	app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

7)Serving Static Files
To serve static files, use the express.static middleware. Add the following line to your index.js file:

	app.use(express.static('public'));

This tells Express to serve files from the public directory. Now, you can access your static files via URLs like http://localhost:3000/shark.png.

8)Using a Virtual Path Prefix
If you want to create a virtual path prefix for your static files, you can specify a mount path:

	const path = require('path');
	app.use('/static', express.static(path.join(__dirname, 'public')));

With this setup, you can access your static files via URLs like http://localhost:3000/static/shark.png.
9)Running Your Project
To run your Express server, use the following command:
	>npm start