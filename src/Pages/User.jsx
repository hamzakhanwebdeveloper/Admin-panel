import React, { useState } from 'react';

function User() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    userId: '',
    address: '', // New state for address input
    reason: ''   // New state for reason textarea
  });

  // Handle input change for all forms
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    console.log('Adding user:', userData);
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    console.log('Updating user:', userData);
  };

  const handleSubmitDelete = (e) => {
    e.preventDefault();
    console.log('Deleting user with ID:', userData.userId, 'Reason:', userData.reason);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-wrap gap-6 justify-between"> {/* Flex container for 3 forms */}
        
        {/* Add User Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-[30%]">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <i className="fas fa-user-plus mr-2"></i> Add User
          </h2>
          <form onSubmit={handleSubmitAdd}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* New Address Input */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={userData.address}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full">
              Add User
            </button>
          </form>
        </div>

        {/* Update User Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-[30%]">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <i className="fas fa-user-edit mr-2"></i> Update User
          </h2>
          <form onSubmit={handleSubmitUpdate}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button type="submit" className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 w-full">
              Update User
            </button>
          </form>
        </div>

        {/* Delete User Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-[30%]">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <i className="fas fa-user-times mr-2"></i> Delete User
          </h2>
          <form onSubmit={handleSubmitDelete}>
            <div className="mb-4">
              <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID</label>
              <input
                type="text"
                id="userId"
                name="userId"
                value={userData.userId}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            {/* Reason for Deletion Textarea */}
            <div className="mb-4">
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for Deletion</label>
              <textarea
                id="reason"
                name="reason"
                value={userData.reason}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 w-full">
              Delete User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
