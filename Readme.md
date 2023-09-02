# Age of Empires 2 DE Macro Server
A simple NodeJS server to automate a sequence of keyboard inputs using RobotJs.

The repo has 2 parts: NodeJS Server and ReactJS App.

## To run the server, with the UI:

### Install dependencies
You have to install dependencies for both NodeJS Server and ReactJS application.

```
npm i
cd react-client
npm i
```

### Start the server
Run the start script from the root of the repo.
This will start both the Node JS server and the ReactJS App

```
npm start
```

If you have your mobile device connected to the same WIFI network, put the IP of the server (the machine on which the server was started), followed by the port number 8046.  
Eg: http://192.168.x.x:8046/

Thats it!! just put your device in landscape mode and use the deck!  
Note: You can use the 'Add to homescreen' feature to open the app directly from home screen and in fullscreen mode.

## If you like to run it in development mode:
This will watch changes to the file and restart the server. Also this does not build the ReactJs App, instead it starts the App in dev mode using ReactJs' dev server.

```
npm run start-dev
```

### Future plans
1. Make the buttons customisable