
import { NavLink } from "react-router-dom";
import DropMenu from "./DropMenu";


const Navbar = () => {
  
 
  const navLinks = <>
    {
      
      
        <>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/allclass">All Classes</NavLink></li>
          <li><NavLink to="/teachlearnnest">Teach on LearnNest</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </>
     
    }

  </>



  return (

    <div >
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="https://i.ibb.co/LxV5kmC/rsz-seth-blum-optimized.jpg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">LearnNest
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end">
          <p className="py-5">{}</p>

          <label tabIndex={0} className="ml-5 ">
            <div >
              <div className="w-[30px] py-3 rounded-full ">
                <img src="" alt="" />
              </div>
            </div>
          </label>

        </div>
        <DropMenu></DropMenu>
      </div>
    </div>
  );
};

export default Navbar;