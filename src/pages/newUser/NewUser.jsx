import React from "react";
import "./newuser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Jon" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="Jon Smith" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="jon@gmail.com" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="+48503743896" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="Warsaw, Poland" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="other">Other</label>
            <input type="radio" name="gender" id="other" value="other" />
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="">Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
