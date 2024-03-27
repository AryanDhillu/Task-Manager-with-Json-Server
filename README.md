# About the Project

This task manager app features a clean and straightforward user interface, offering essential functionalities such as adding, deleting, and marking tasks as complete with a checkmark. Due to integration with a JSON server, which allows tasks to be stored persistently. Even if the server is shut down, your tasks remain safely stored, ensuring that you can access and manage them whenever needed.

### To run project

Need to have installed git bash (if windows)

1. Navigate to the project directory and execute "npm install" to install all dependencies.

2. Prior to launching the application, initiate the JSON server.
   - Run "npm run server" in the terminal after changing the directory to the main branch.
   - You can monitor the server's activity by visiting "http://localhost:5000/tasks" in your default browser.

3. Optionally, you can customize the port number by specifying it in the "package.json" file under the "scripts" section for the server.

4. To start the application, simply execute "npm start" in the terminal.

