# A Web server that connects with a mysql database
The application is made up of two nodejs programs; **server.js** and **mysql-db.js**. Before you start, you need to install all dependencies as specified in the package.json file-its just like a manifest file that helps package manager ***npm*** run and manage installations on the project.Run the following  command to install all required dependencies:

    npm install

## Running Programs in the Project
You create a database with an existing mysql server by running the **mysql-db.js** program on the machine-local machine or on the EC2. Run the following command:

    node mysql-db.js

or

    npm run creat-database

You get the backend server started by running the following commands:

    node server.js 

or 

    npm run start

# Environment variables
Before running running the program, make sure you set the following environment variables by exporting them in the same terminal process as the **node/npm** commands. Here are the environment variables used by the program. Export themm like so:

    export HOST=xxxxx
    export ROOT_USERNAME=xxxxxx
    export ROOT_PASSWORD=xxxxxx

If you choose to export with ansible, make sure you deloy **server.js** or **mysql-db.js** in thesame playbook as the exported variables.
