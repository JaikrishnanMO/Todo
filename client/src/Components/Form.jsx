import React from 'react'
import { CgClose } from 'react-icons/cg'

const Form = ({handleChange,handleClose,handleSubmit,rest}) => {
   
  return (
      <div className="addContainer">
          <form action="" onSubmit={handleSubmit}>
            <div className="close-btn" onClick={handleClose}>
              <CgClose />
            </div>
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              required
              placeholder="Enter your name here...."
              name="name"
              onChange={handleChange}
              value={rest.name}
            ></input>

            <label htmlFor="email">Email :</label>
            <input
              type="text"
              required
              placeholder=" Enter your email here...."
              name="email"
              onChange={handleChange}
              value={rest.email}
            ></input>

            <label htmlFor="password">Password :</label>
            <input
              type="text"
              required
              placeholder="Enter your password here...."
              name="password"
              onChange={handleChange}
              value={rest.password}
            ></input>

            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>

  )
}

export default Form
