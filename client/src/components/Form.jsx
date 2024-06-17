import React, { useState } from "react";
import { countries } from "../../data";
import { IoInformationCircleOutline } from "react-icons/io5";
import axios from "axios";

const Form = ({ type }) => {
  const countryCodes = countries;
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(countryCode);
    console.log(phoneNumber);
    localStorage.setItem("formType", type);
    localStorage.setItem("name", name);
    localStorage.setItem("countryCode", countryCode);
    localStorage.setItem("phoneNumber", phoneNumber);

    console.log("setted in local storage");

    try {
      const response = await axios.post("http://localhost:5000/submit", {
        formType: type,
        name,
        countryCode,
        phoneNumber,
      });
      console.log(response.data);
      if (response) {
        alert("Form submitted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center ">
        This is{" "}
        <span className="border-red-400 border-b-[1.5px] py-[.5px]">
          FORM {type}
        </span>
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="border-none border-black flex flex-col justify-center items-center gap-5 mt-5">
          <div className="flex flex-col ">
            <label>Name:</label>

            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              pattern="[A-Za-z]+"
              required
              onChange={(e) => setName(e.target.value)}
              className="w-[200px] py-1.5 px-3 rounded-md outline-none border-[1.7px] border-gray-400 "
            />
            <p className="flex items-center justify-center text-xs mt-1 text-gray-400">
              <IoInformationCircleOutline size={18} />
              Name should contain{" "}
            </p>
            <p className="flex  justify-center text-xs  text-gray-400">
              only alphabetic characters.
            </p>
          </div>
          <div className="flex flex-col ">
            <label>Country Code:</label>
            <select
              value={countryCode}
              required
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-[200px] py-1.5 px-3 rounded-md outline-none border-[1.7px] border-gray-400 "
            >
              <option value="">Select</option>
              {countryCodes.map((country) => (
                <option key={country.dial_code} value={country.dial_code}>
                  {country.country} {country.dial_code}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col ">
            <label>Phone Number:</label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              className="w-[200px] py-1.5 px-3 rounded-md outline-none border-[1.7px] border-gray-400"
              placeholder="xxxxxxxxxx"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <p className="flex items-center justify-center text-xs mt-1 text-gray-400">
              <IoInformationCircleOutline size={18} />
              Enter 10 digits, phone number.
            </p>
          </div>
          <button
            type="submit"
            className="py-1.5 px-3 rounded-md border-2 border-gray-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
