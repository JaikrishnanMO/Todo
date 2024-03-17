import React, { useEffect, useState } from "react";
import "../Styles/Crud.css";
import axios from "axios";
import Form from "./Form";

const Crud = () => {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [empdata, setEmpdata] = useState([]);
  const [edit, setEdit] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    ViewEmployee();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/Registration/",
        employee
      );
      console.log("Add Employee Response:", response);

      if (response.data) {
        setAddSection(false);
        alert("Employee added Successfully");
        ViewEmployee();
      }
    } catch (error) {
      console.error("Error adding employee:", error);
    }

    setEmployee({
      name: "",
      email: "",
      password: "",
    });
  };

  const ViewEmployee = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/Registration/view"
      );
      console.log("View Employee Response:", response);
      setEmpdata(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  // ViewEmployee();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/Registration/delete/${id}`
      );
      console.log("Delete Employee Response:", response);
      alert(response.data.message);
      ViewEmployee();
    } catch (error) {
      alert("Error deleting employee:");
      console.error("Error deleting employee:", error);
    }
  };

  //for  edit section
  const handleEditChange = async (e) => {
    const { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };

  const handleEditClick = async (el) => {
    setEdit(el);
    setEditSection(true);
  };

  const handleEditUpdate = async (e) => {
    e.preventDefault();
    console.log("Starting the update process...");
    try {
      console.log(edit, "edit data");

      console.log("Sending PUT request to the server...");
      const response = await axios.put(
        `http://localhost:5000/api/Registration/edit/${edit._id}`,
        edit
      );

      console.log("PUT request successful. Response:", response);
      console.log("Employee Updated Successfully", response);
      alert("Updated Successfully");
      console.log("Refreshing employee view...");
      setEditSection(false)
      ViewEmployee();
      console.log("Employee view refreshed.");
    } catch (error) {
      console.log("Error occurred while updating employee:", error);
      alert("Error editing employee:");
    }
    console.log("Update process finished.");
  };

  return (
    <div className="Container">
      <button className="btn" onClick={() => setAddSection(true)}>
        ADD
      </button>

      {addSection && (
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClose={() => setAddSection(false)}
          rest={employee}
        />
      )}
      {editSection && (
        <Form
          handleChange={handleEditChange}
          handleClose={() => setEditSection(false)}
          handleSubmit={handleEditUpdate}
          rest={edit}
        />
      )}

      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {empdata[0] ? (
              empdata.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>
                    <button
                      className="btn btn-edit"
                      onClick={() => handleEditClick(item)}
                    >
                      EDIT
                    </button>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(item._id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <p className="empty">No data Found!</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crud;
