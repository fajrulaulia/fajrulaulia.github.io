import React, { useState } from "react";
import Navigation from '../components/Navbar'
import FAButton from "../components/Button";
import FATextField from "../components/Textfield";

function Login() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleButtonClick = () => {
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  return (
    <React.Fragment>
      <Navigation active="register" />
      <section className="flex items-center min-h-screen">
        <div className="mx-auto md:w-1/3">
          <div className="shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Signup</h2>
            <FATextField
              label="Name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(value) => handleInputChange("name", value)} />
            <FATextField
              label="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(value) => handleInputChange("email", value)} />
            <FATextField
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={formData.password} onChange={(value) => handleInputChange("password", value)} />
            <FAButton
              title="Signup"
              color="success"
              onClick={handleButtonClick} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Login;
