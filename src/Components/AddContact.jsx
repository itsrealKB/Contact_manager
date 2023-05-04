import React from "react";

export default function Addcontact({ handleChange, name, email, addToList }) {
  return (
    <div className="add--contact">
      <h1>Add Contact</h1>
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        id="Name"
        value={name}
        name="name"
        onChange={handleChange}
        placeholder="Name"
      />
      <br />
      <label htmlFor="Email">Email</label>
      <input
        type="email"
        id="Email"
        value={email}
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />
      <button className="add--button" onClick={addToList}>
        Add
      </button>
    </div>
  );
}
