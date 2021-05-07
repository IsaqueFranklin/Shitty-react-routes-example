import app from 'firebase/app';
import 'firebase/auth';

  // Firebase API keys

  const config = {
    apiKey: "AIzaSyDBeE5lTRvhA7SUiOomSAfY9vgOER9gUc0",
    authDomain: "aprendendo-react-81d08.firebaseapp.com",
    databaseURL: "https://aprendendo-react-81d08.firebaseio.com",
    projectId: "aprendendo-react-81d08",
    storageBucket: "aprendendo-react-81d08.appspot.com",
    messagingSenderId: "411976787458",
    appId: "1:411976787458:web:f02d03b5563d803c9ce91b"
  };

  class Firebase {
      constructor(){
          app.initializeApp(config);

          this.auth = app.auth();
      }

      //Auth api

      doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

      doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

      doSignOut = () => this.auth.signOut();

      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

      doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
  }

  export default Firebase;