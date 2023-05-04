import React from "react";

export default function Contact({ name, email, deleteFromList }) {
  return (
    <>
      <div className="contact">
        <div className="details">
          <img src="Images/user--avatar.png" className="profile--image" />
          <div className="contact--details">
            <p className="name">{name}</p>
            <p className="email">{email}</p>
          </div>
        </div>
        <img
          src="Images/trash--icon.png"
          className="delete--contact"
          onClick={deleteFromList}
        />
      </div>
      <hr />
    </>
  );
}
