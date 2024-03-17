const Registration = require("../Model/RegistrtionSchema");

// To Register Eamployee

const registerEmployee = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newRegistration = new Registration({
      name,
      email,
      password,
    });
    await newRegistration.save();
    res.status(200).json({
      message: "Empoloy Registered SuccessFully",
      data: newRegistration,
    });
  } catch (error) {
    res.status(400).json({ message: "An error Occured !!" });
  }
};

//  To See all registered users

const ViewRegistration = async (req, res) => {
  try {
    const registeredPeoples = await Registration.find();
    res.json(registeredPeoples);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// To Edit Registration Details

const EditRegistration = async (req, res) => {
  try {
    console.log("EditRegistration function called with request params:", req.params);
    const { id } = req.params;
    const { ...rest } = req.body;

    console.log("Request body:", rest);
    const updateRegistration = await Registration.findByIdAndUpdate(id, rest, {
      new: true,
      runValidators: true,
    });

    if (!updateRegistration) {
      console.log("Employee not found for id:", id);
      return res.status(404).json({ message: "Employee not found" });
    }

    console.log("Updated registration:", updateRegistration);
    res.json(updateRegistration);
    console.log("edit section", updateRegistration);
  } catch (error) {
    console.error("An error occurred in EditRegistration:", error);
    res.status(500).json({ message: "An Error Occurred!!" });
  }
};


// To Delete Registration

const RemoveRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await Registration.findByIdAndDelete(id);
    res.json({ message: "User Deleted SucessFully" });
  } catch (error) {
    res.status(404).json({ message: "An Error Occured!!" });
  }
};

module.exports = {
  registerEmployee,
  ViewRegistration,
  EditRegistration,
  RemoveRegistration,
};
