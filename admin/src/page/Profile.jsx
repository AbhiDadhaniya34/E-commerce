import Sidebar from "../componet/Sidebar";
import abhi from "../image/abhi.JPG";

function Profile() {
  return (
    <div className="grid grid-cols-[0.3fr,1fr]">
      <Sidebar />
      <div className="container mx-auto my-auto p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Admin Profile
        </h2>
        <div className="bg-white p-4 rounded shadow-md">
          <div className="text-center">
            <img
              src={abhi}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Abhi Dadhaniya</h3>
            <p className="text-gray-600">Admin</p>
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-4">Profile Information</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-semibold">Email:</span>
                <span className="text-gray-600">abhidadhaniya@gmail.com</span>
              </div>
              <div>
                <span className="font-semibold">Phone:</span>
                <span className="text-gray-600">(+91)9727282149</span>
              </div>
            </div>
          </div>
          {/* <div className="mt-6">
          <h4 className="text-lg font-semibold mb-4">Actions</h4>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            Edit Profile
          </button>
          <button className="ml-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">
            Logout
          </button>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
