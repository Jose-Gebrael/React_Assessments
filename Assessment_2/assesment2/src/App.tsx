import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      status: "active",
      dob: "1990-05-15",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "locked",
      dob: "1988-10-22",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      status: "active",
      dob: "1995-02-10",
    },
    {
      name: "Bob",
      email: "bob.martin@example.com",
      status: "locked",
      dob: "1980-08-05",
    },
    {
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      status: "active",
      dob: "1992-11-30",
    },
    {
      name: "David Lee",
      email: "david.lee@example.com",
      status: "locked",
      dob: "1987-07-14",
    },
    {
      name: "Eve",
      email: "eve.green@example.com",
      status: "active",
      dob: "1993-09-21",
    },
    {
      name: "Frank White",
      email: "frank.white@example.com",
      status: "active",
      dob: "1994-01-25",
    },
    {
      name: "Grace Black",
      email: "grace.black@example.com",
      status: "locked",
      dob: "1985-03-17",
    },
    {
      name: "Hannah",
      email: "hannah.purple@example.com",
      status: "active",
      dob: "1996-12-03",
    },
  ];

  function getInitials(name: string) {
    return name.split(" ").map((word) => word[0]).join("").toUpperCase();
  }

  return (
    <>
      <div className="bg-[#3251D0] px-6 py-3 flex items-center justify-between">
        <h1 className="text-white font-semibold text-lg">User Management</h1>
        <div className="flex items-center gap-3">
          <button className="bg-white text-[#3251D0] font-medium px-4 py-2 rounded hover:bg-blue-100 transition cursor-pointer">
            Create User
          </button>
          <button className="bg-red-500 text-white font-medium px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer">
            Logout
          </button>
          <i className="fa-regular fa-moon px-4 py-2 cursor-pointer"></i>
        </div>
      </div>

      <input type="text" placeholder="Search users..."
        className="border border-gray-300 rounded-md m-6 px-4 py-2 w-full max-w-3xs focus:outline-none focus:ring-2 focus:ring-blue-500" />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {users.map((user, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 w-full max-w mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-[#3251D0] text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mb-4">
                {getInitials(user.name)}
              </div>
              <div className="self-start">
                <h2 className="text-xl font-semibold text-gray-900">
                  {user.name}
                </h2>
                <p className="text-gray-500 text-sm">Email: {user.email}</p>
                <p className="text-gray-500 text-sm">Status: {user.status}</p>
                <p className="text-gray-500 text-sm mb-4">
                  Date of Birth: {user.dob}
                </p>
              </div>
              <div className="flex space-x-4 self-end">
                <button className="bg-[#3251D0] text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
