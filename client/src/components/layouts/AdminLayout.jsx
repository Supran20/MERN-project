import { NavLink, Outlet } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { FaServicestack } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
// import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
  // const { user, isLoading } = useAuth();

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  // if (!user.isAdmin) {
  //   return <Navigate to="/" />;
  // }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUserLarge />
                  users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <IoMdContact />
                  contacts
                </NavLink>
              </li>
              <li>
                <FaServicestack />
                services
              </li>
              <li>
                <FaHome />
                home
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
