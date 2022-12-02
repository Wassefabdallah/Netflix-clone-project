import React, { useRef } from 'react'
import { auth } from '../firebase';
import './SignupScreen.css'

function SignupScreen() {

  //TWO VARIABLES TO POINT TO TE EMAIL AND PASSWORD IN THE <INPUT>
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

 //FETCH THE EMAIL AND PASSWORD TEXT WHEN CLICKING ON SIGN-IN BUTTON TO CREATE USER AND SEND IT TO FIREBASE
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
        console.log(authUser);
    }).catch ((error) => {
      alert(error.message)
    });
  };

  //LOG IN AFTER INTRODUCING THE EMAIL AND PASSWORD OF AN EXISTING ACCOUT OTHERWISE POP-UP ERROR MESSAGE
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  }


  return (
    <div className="signupScreen">
      <form action="">
        <h1> Sign In test</h1>
        <input ref={emailRef} type="email" placeholder="Email" /> {/* ref={emailRef} to fill the variable we created on top with the users input */}
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>Sign In</button> {/*  onClick={signIn} to trigger the JS function we created to sign in via firebase*/}

        <h4>
          <span className='signupScreen__grey'>New to Netflix?</span>
          <span className='signupScreen_link' onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen