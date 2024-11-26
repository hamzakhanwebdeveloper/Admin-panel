// eslint-disable-next-line no-unused-vars
import React from 'react'

function User() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto" style={{ height: '90vh' }}>
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add User</h2>
      
      <form className="w-full">
        <div className="flex flex-wrap -mx-3 mb-4"> {/* Reduced margin bottom */}
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0"> {/* Reduced margin bottom */}
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              First Name
            </label>
            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500" id="grid-first-name" type="text" placeholder="Jane"/> {/* Reduced padding */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500" id="grid-last-name" type="text" placeholder="Doe"/> {/* Reduced padding */}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4"> {/* Reduced margin bottom */}
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Password
            </label>
            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500" id="grid-password" type="password" placeholder="******************"/> {/* Reduced padding */}
          </div>
        </div>
        {/* User ID, Number, and District moved after Password */}
        <div className="flex flex-wrap -mx-3 mb-4"> {/* Reduced margin bottom */}
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0"> {/* Reduced margin bottom */}
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-user-id">
              User ID
            </label>
            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500" id="grid-user-id" type="text" placeholder="User ID"/> {/* Reduced padding */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-number">
              Number
            </label>
            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500" id="grid-number" type="text" placeholder="Phone number"/> {/* Reduced padding */}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4"> {/* Reduced margin bottom */}
          <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0"> {/* Reduced margin bottom */}
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-district">
              District
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500" id="grid-district">
                <option>District 1</option>
                <option>District 2</option>
                <option>District 3</option>
                <option>District 4</option>
              </select>
              {/* Icon in the dropdown */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>
        {/* Address Input Field */}
        <div className="flex flex-wrap -mx-3 mb-4"> {/* Reduced margin bottom */}
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">
              Address
            </label>
            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500" id="grid-address" type="text" placeholder="Your Address"/> {/* Reduced padding */}
          </div>
        </div>
      </form>
    </div>
  )
}

export default User;
