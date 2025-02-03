
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../FormContext";

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setFormData } = useContext(FormContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    setTimeout(() => {
      setFormData(data);

      // Retrieve existing data from localStorage
      const storedData = JSON.parse(localStorage.getItem("formData")) || [];

      // Add new data
      const updatedData = [...storedData, data];

      // Save back to localStorage
      localStorage.setItem("formData", JSON.stringify(updatedData));

      navigate("/display");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="section mt-5">
      <div className="container Form-container">      
        <div className="row px-0">
          <div className="col-lg-6 px-0"></div>
          <div className="col-lg-6 px-0 bg-dark">
            <div className="form-sub py-4">
              <div className="Head text-center">
                <h2>Register Form</h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="m-3">
                  {errors.name && <p>{errors.name.message}</p>}
                  <input placeholder="Name" className="input-size" {...register("name", { required: "Name is required*" })} />
                </div>
                <div className="m-3">
                  {errors.birthdate && <p>{errors.birthdate.message}</p>}
                  <input type="date" className="input-size" {...register("birthdate", { required: "Birthdate is required*" })} />
                </div>
                <div className="m-3">
                  {errors.gender && <p>{errors.gender.message}</p>}
                  <select className="input-size" {...register("gender", { required: "Gender is required*" })}>
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="m-3">
                  {errors.email && <p>{errors.email.message}</p>}
                  <input type="email" className="input-size" placeholder="Email" 
                    {...register("email", { 
                      required: "Email is required*", 
                      pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email format" } 
                    })}
                  />
                </div>
                <div className="m-3">
                  {errors.phone && <p>{errors.phone.message}</p>}
                  <input type="tel" className="input-size" placeholder="Phone" 
                    {...register("phone", { 
                      required: "Phone number is required*", 
                      pattern: { value: /^[0-9]{10}$/, message: "Phone number must be 10 digits" } 
                    })}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
