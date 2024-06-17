import React from "react";

const Users = () => {
  const formType = localStorage.getItem("formType");
  const name = localStorage.getItem("name");
  const countryCode = localStorage.getItem("countryCode");
  const phoneNumber = localStorage.getItem("phoneNumber");

  return (
    <div>
      <h1 className="text-center mt-8">Fill the form to see , your Data</h1>
      <div>
        <table className="w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-2 py-2 border-b">Form Type</th>
              <th className="px-2 py-2 border-b">Name</th>
              <th className="px-2 py-2 border-b">Country Code</th>
              <th className="px-2 py-2 border-b">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-100">
              <td className="px-4 py-2 border-b text-center">{formType}</td>
              <td className="px-4 py-2 border-b text-center">{name}</td>
              <td className="px-4 py-2 border-b text-center">{countryCode}</td>
              <td className="px-4 py-2 border-b text-center">{phoneNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
