import React,{useState} from 'react';
import FormHeader from "../components/shared/FormHeader";
import FormInput from "../components/shared/FormInput";
import FormButton from "../components/shared/FormButton";
import { UserAuth } from '../components/context/AuthContext';
import { auth} from "../firebase";

export default function ProfilePage() {
//const [name, setName] = useState(auth.currentUser.displayName);
const [email, setEmail] = useState(auth.currentUser.email);
const {updateUser} = UserAuth();
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { email};
    console.log(data);
    try {
      await updateUser(email).then((userCredential) => {
      });
    } catch (err) {
      console.log(err);
    }
    //setName(auth.currentUser.displayName);
    setEmail(auth.currentUser.email);
   
  };
  return (
    <div className="loginForm">
      
      <>
          <FormHeader  title={`Welcome ${auth.currentUser.email}`} />
          <h4>Update Profile</h4>
          <div className="imageContainer">          
          <img src={require("../images/pexels-ainbinder-5029795.jpg")} height="150" width="150" alt="" /></div>
          <form onSubmit={onSubmit}>
          { /* <FormInput
              description="Name"
              type="text"
              className="nameInput"
              placeholder="Enter Your Full Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
  /> */}
            <FormInput
              description="Email"
              type="email"
              className="emailInput"
              placeholder="Enter Your Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <FormButton title="Edit Profile" />
            
          </form>
        </>
    </div>
  )
}
