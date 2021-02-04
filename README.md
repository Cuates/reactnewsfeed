# reactnewsfeed
> React for News

## Table of Contents
* [Version](#version)
* [Important Note](#important-note)
* [Prerequisite Environment](#prerequisite-environment)
* [Prerequisite React Modules](#prerequisite-react-modules)
* [React Manual Execution](#react-manual-execution)

### Version
* 0.0.1

### **Important Note**
* This script was written with React 17.0.1 methods on NodeJS 15.7.0

### Prerequisite Environment
* Install
  * NodeJS
    * Use the following web site to download for your operating system (Windows/Mac OS/Linux)
      * https://nodejs.org/
      * `node -v`
* Npm
  * `npm install -g npm@latest`
  * `npm -v`

### Prerequisite React Modules
* Install/Update React
  * `npm install react-scripts@latest`
* React
  * `npm install -g create-react-app`
  * Find out the React and React Native version via command line tool
    * `npm view react version`
    * `npm view react-native version`
* Generate React App
  * Navigate to project
    * `cd /path/of/project/location/`
      * `npx create-react-app <project_name>`
        * **WAIT FOR THIS TO FINISH**
* Open Command Prompt without Administrator
  * Navigate to project
    * `cd /path/inside/parent/directory`
      * Serve React project (default HTTP host and port number)
        * `npm start`
* Start React which opens in a browser
  * `npm start`
* TailWindCSS (Make sure you are in the React project folder)
  * Install TailWindCSS
    * `npm install tailwindcss postcss postcss-cli autoprefixer`
    * OR `npm install tailwindcss@latest postcss@latest postcss-cli autoprefixer@latest`
      * **WAIT FOR THIS TO FINISH**
  * Create your configuration file
    * Navigate to root directory
      * `cd /path/inside/parent/directory`
    * `npx tailwindcss init -p`
      * `-p` is optional
  * Reconfigure the package.json file to include the new tailwindcss compiler
    * Open the package.json file in the scripts section
      * <pre>
        "build:css": "postcss src/index.css -o src/tailwind.css",
        "watch:css": "postcss src/index.css -o src/tailwind.css -w",
        "start": "(set PORT=3000 || export PORT=3000) && npm run build:css && react-scripts start",
        "build": "npm run build:css && react-scripts build",
        </pre>
    * Save and exit
    * Build CSS from the command line
      * Open terminal of your choice and execute the following command
        * `npm run build:css`
* FontAwesome
  * Install
    * `npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome`
      * **WAIT FOR THIS TO FINISH**
* React-Spring
  * Install
    * `npm install react-spring`
      * **WAIT FOR THIS TO FINISH**
* Router
  * `npm install react-router-dom`
    * For websites
  * `npm install react-router-native`
    * For native apps
    * If issues, Fix the upstream dependency conflict, or retry with --force or --legacy-peer-deps
      * `npm install react-router-native --legacy-peer-deps`
* Axios
  * `npm install axios`
    * Used to access web service APIs
* React Datepicker
  * `npm install react-datepicker --save`
  * If issues, Fix the upstream dependency conflict, or retry with --force or --legacy-peer-deps
    * `npm install react-datepicker --save --legacy-peer-deps`
* Fix vulnerabilities
  * `npm audit fix`

### React Manual Execution
* Change into the root project directory
  * `cd /root/project/directory`
* Build react project for production
  * `npm run build`
