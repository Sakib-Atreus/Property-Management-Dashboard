import { FaBars } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { MdAddHomeWork, MdDashboard } from "react-icons/md";

function Dashboard() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-white flex flex-col items-center justify-center">

        <Outlet className="h-screen overflow-y-scroll"></Outlet>

        <div className="lg:hidden bg-gray-600 top-0 left-0 right-0 absolute border-b-[1px] border-gray-400"></div>
        <div>
          <div className="md:w-64 w-40 absolute z-30 top-5 md:top-2 md:left-5 left-4 lg:hidden block">
            <Link to="/">
              <img src="" alt="" />
            </Link>
          </div>

          <label
            htmlFor="my-drawer-2"
            className="btn text-2xl bg-gray-100 dark:bg-gray-900 border-none rounded-lg text-gray-800 dark:text-white absolute right-2 top-[-54px] drawer-button lg:hidden"
          >
            <FaBars />
          </label>
        </div>
      </div>


      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white overflow-hidden menu p-4 w-80 h-full mt-0 lg:mt-0">
          {/* Sidebar content here */}

          {/* Sidebar content here */}

          <div className="mt-10 ml-5 text-xl font-semibold flex flex-col gap-2 flex-grow active">
            <NavLink
              to="/"
              className="flex flex-row items-center hover:bg-gray-300 hover:rounded-lg hover:text-black rounded-none p-3 nav"
            >
              <MdDashboard className="w-8 h-8"/>
              <span className="ml-2">Dashboard</span>
            </NavLink>

            <li className="mt-3">
              <div className="flex flex-row hover:bg-gray-300 hover:text-black">
              <FcHome className="w-8 h-8"/>
                <Link
                  className="w-full rounded-none m-0"
                  to="/allProperties"
                >
                  All Properties
                </Link>
              </div>
            </li>

            <li className="mt-3">
              <div className="flex flex-row hover:bg-gray-300 hover:text-black">
              <MdAddHomeWork className="w-8 h-8"/>
                <Link
                  className=" w-full rounded-none m-0"
                  to="/addNewProperty"
                >
                  Add Property
                </Link>
              </div>
            </li>

            <div className="flex flex-col items-center rounded-none mt-auto">
              <p className="text-gray-400 text-sm"></p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
