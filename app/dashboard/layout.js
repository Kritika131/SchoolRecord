"use client";
import Link from "next/link";
import "./dashboardStyle.css"
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from 'next/image'

const DashboardLayout = ({ children }) => {
  const [openMenu,setOpenMenu] = useState(false)
  const pathname = usePathname();
  return (
    <div className="flex flex-col w-full h-full">
      {/* navbar for mobile screen  */}
      <div className="nav_mobile   bg-slate-950 py-4 px-16 flex border-b-2 border-white  items-center justify-between text-white">
        <nav className=" bg-slate-950   font-bold text-2xl  ">Dashboard</nav>
        <div onClick={()=>setOpenMenu(!openMenu)}>
        {openMenu ? <span>✖</span> : <img src="https://icon-library.com/images/white-menu-icon-png/white-menu-icon-png-18.jpg" width="40px" height="40px" alt="" /> }
        </div>
        
       
      </div>
      {/* navbar for screen  */}
      <div className="nav_screen   bg-slate-950 py-4 px-16 flex border-b-2 border-white  items-center justify-between text-white">
        <nav className=" bg-slate-950   font-bold text-2xl  "> <Link href={"http://localhost:3000/dashboard"}>Dashboard</Link></nav>
               
        <div className="links flex gap-4 text-lg">
          <Link
            href="/dashboard/addschool"
            className={`${
              pathname === "/dashboard/addschool" ? "text-orange-600 " : ""
            }`} 
          >
            AddSchool
          </Link>
          <Link
            href="/dashboard/showschool"
            className={`${
              pathname === "/dashboard/showschool" ? "text-orange-600 " : ""
            }`}
          >
            ShowSchool
          </Link>
          
        </div>
      </div>

      <div className="flex justify-center relative  h-full w-full overflow-hidden   bg-blue-950   ">
        <div className={openMenu ? "sm_links  bg-slate-950 transition-all text-white px-20 py-8 font-bold text-lg translate-x-0 min-h-full absolute left-0 top-0 bottom-0    " : "translate-x-[-200px] transition-all" } >
          <ul className=" flex flex-col gap-3">
            
            <li>
              <Link
                href="/dashboard/addschool"
                className={`${
                  pathname === "/dashboard/addschool" ? "text-orange-600 " : ""
                }`} onClick={()=>setOpenMenu(!openMenu)}
              >
                AddSchool
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/showschool"
                className={`${
                  pathname === "/dashboard/showschool" ? "text-orange-600 " : ""
                }`} onClick={()=>setOpenMenu(!openMenu)}
              >
                ShowSchool
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1   ">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
