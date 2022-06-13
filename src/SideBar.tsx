import { HiOutlineUserGroup, HiOutlineUserCircle, HiPencilAlt, HiOutlineIdentification, HiOutlineUserAdd, HiOutlineChatAlt } from "react-icons/hi";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="fixed">
   <div className="flex flex-col px-4 space-y-1 bg-gray-700 w-60 h-screen justify-between">
     <div>
    <h1 className="text-3xl font-extrabold text-white mt-5">CODEYOGI</h1>
     <Link to="/lectures" className="text-gray-300 hover:bg-gray-900 hover:text-white flex items-center px-2 py-4 text-sm font-medium rounded-md"><HiOutlineIdentification className="mr-2"/>Lectures</Link>
     <Link to="/assignments" className="text-gray-300 hover:bg-gray-900 hover:text-white flex items-center px-2 py-2 text-sm font-medium rounded-md"><HiPencilAlt className="mr-2"/>Assignments</Link>
       </div>
     <div>
       <Link to="/login" className="text-gray-300 hover:bg-gray-900 hover:text-white flex items-center px-2 py-2 text-sm font-medium rounded-md"><HiOutlineUserAdd className="mr-2"/>Login</Link>
       </div>
    </div>
      </div>
  );
}

export default SideBar;