import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';


function MainLayout() {
  return (
    <div className="flex items-stretch h-full bg-gray-200">
      <SideBar/>
     <div><Outlet/></div>
    </div>
  );
}

export default MainLayout;