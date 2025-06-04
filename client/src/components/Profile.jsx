import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const username = localStorage.getItem("user");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/profile/${username}`).then((res) => {
      if (res.data) {
        setAge(res.data.age || "");
        setDob(res.data.dob || "");
        setContact(res.data.contact || "");
      }
    });
  }, [username]);

  const update = () => {
    axios
      .post("http://localhost:5000/profile/update", {
        username,
        age,
        dob,
        contact,
      })
      .then(() => {
        alert("Updated successfully!");
        setIsModalOpen(false);
      });
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="w-64 bg-white shadow-xl flex flex-col items-center py-8">
        <div className="mb-6">
          <img
            src="https://ui-avatars.com/api/?name=User&background=5A0F1B&color=fff&size=128"
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-[#5A0F1B]"
          />
        </div>
        <h2 className="text-xl font-bold text-[#5A0F1B] mb-2">{username}</h2>
        <p className="text-sm text-gray-500">Student Account</p>

        <nav className="mt-10 w-full px-6">
          <ul className="space-y-4 text-[#5A0F1B] font-medium">
            <li className="hover:text-black cursor-pointer">Dashboard</li>
            <li className="hover:text-black cursor-pointer">Courses</li>
            <li className="hover:text-black cursor-pointer">Settings</li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#5A0F1B]">Profile Overview</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#5A0F1B] text-white px-5 py-2 rounded-lg shadow hover:bg-[#4a0c17]"
          >
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-sm text-gray-500">Username</h3>
            <p className="text-xl font-semibold text-[#5A0F1B] mt-1">{username}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-sm text-gray-500">Age</h3>
            <p className="text-xl font-semibold text-[#5A0F1B] mt-1">{age}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-sm text-gray-500">Date of Birth</h3>
            <p className="text-xl font-semibold text-[#5A0F1B] mt-1">{dob}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-sm text-gray-500">Contact</h3>
            <p className="text-xl font-semibold text-[#5A0F1B] mt-1">{contact}</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <h3 className="text-2xl font-bold text-[#5A0F1B] mb-4 text-center">Edit Profile</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0F1B] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0F1B] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Contact</label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5A0F1B] outline-none"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-400 text-gray-600 rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={update}
                  className="px-5 py-2 bg-[#5A0F1B] text-white rounded-lg hover:bg-[#4a0c17] shadow-md transition"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
