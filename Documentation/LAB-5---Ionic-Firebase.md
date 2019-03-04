# Ionic FireBase

## Team 6-1

### Introduction:
Creating Basic Login and Registration page using firebase Authentication and Database along with local notifications plugin.

### Main Objective:
1) Creating Login and Registration page using Firebase authentication.
2) Providing Interface for user to add local notifications to the device using local notifications ionic plugin.
3) Saving user specific notification details in firebase database and retrieving the details when user logs in again.
4) Deploying the application to ionic/android/web

### Design and Implementaion steps for above tasks:

### Task-1:  Creating Login and Registration page using Firebase authentication:
1) Created account and authenticated into firebase website. ( https://console.firebase.google.com )
2) Enabled email/password authentication mechanism for current project development.
3) Installing Angular FireBase2 using command `npm install firebase angularfire2 --save`.
4) Adding the environment config values to connect with the firebase application.
5) Importing required Angualar Firebase Modules for the project like Auth and Database/store
6) Replaced local storage with Firebase Authentication method in AuthService file.
Firebase authentication methods like 
createUserWithEmailAndPassword
signInWithEmailAndPassword
These methods do basic validations on the parameters/arguments/data ( whether email is valid or not , password exceeds 6 chars or not )
7) Login and Register pages call the AuthService methods for creating and authenticating the users in real time using firebase.
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-5/Ionic-Firebase/Screenshots/User%20Auth%20error.png)
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-5/Ionic-Firebase/Screenshots/FB%20AUth.png)
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-5/Ionic-Firebase/Screenshots/FB%20Auth%20code.png)

### Task-2: Providing Interface for user to add local notifications to the device using local notifications ionic plugin.
1) Created basic html page to allow user to add local notifications.
2) Installed Local notification ionic plugin using command `ionic cordovaplugin  add cordova-plugin-local-notification`.
3) Imported Local notification plugin provider in app.module.ts 
4) on submitting the form, scheduling the notification using the methods provided by the plugin.
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-5/Ionic-Firebase/Screenshots/Notifications%201.png)
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-5/Ionic-Firebase/Screenshots/Notifications2.png)
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-5/Ionic-Firebase/Screenshots/Adding%20Notifications.png)
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-5/Ionic-Firebase/Screenshots/Display%20Notifications.png)

### Task-3: Saving user specific notification details in firebase database and retrieving the details when user logs in again.
1) Getting the authenticated user details from the Authservice provider.
2) Creating the collection name with user email address and storing it in firebase real time database.
3) Reading the items present in the user specific collection to retrieve previously stored local notification details.
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-5/Ionic-Firebase/Screenshots/Database.png)
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-5/Ionic-Firebase/Screenshots/Display%20Notifications.png)
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-5/Ionic-Firebase/Screenshots/Displayying%20Notifs.png)

### Task-4: Deploying the application in android/ionic/web:
1) Deployed the Ionic Application in Ionic Lab
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-5/Ionic-Firebase/Screenshots/Ionic%20Lab.png)

### Conclusion:
1) We have learnt how to store user authentication details in firebase and how to use the tools and methods provided by firebase.
2) We have learnt how to add notifications to the devices.
3) We have also learnt how to store user specific details and retrieve them when needed using firebase real time database and storage. 

### Task Responsibilities:
1) Sindhusha Tiyyagura: Basic Authentication using Firebase, Adding Local Notifications using ionic plugin.
2) Pradeepika Kolluru: Storing user notification details to firebase database and showing user previously saved notifications when user logs into his account.
