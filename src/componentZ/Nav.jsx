import Image from "next/image";
import Link from "next/link";
import logo from './pic file/logo.png'





const Nav = () => {


   const nav = <>
   
     <li className=" text-xs text-[#ff8f4f] font-serif font-bold hover:border-[1px] border-cyan-400  " ><Link href="/aboutPage" >PAGES</Link></li>
     <li className=" text-xs text-[#ff8f4f] font-serif font-bold hover:border-[1px] border-cyan-400  " ><Link href="/practice" >PRACTICE AREAS</Link></li>
     <li className=" text-xs text-[#ff8f4f] font-serif font-bold hover:border-[1px] border-cyan-400  " ><Link href="/case" >CASE STUDY</Link></li>
     <li className=" text-xs text-[#ff8f4f] font-serif font-bold hover:border-[1px] border-cyan-400  " ><Link href="/blog" >BLOG</Link></li>
     <li className=" text-xs text-[#ff8f4f] font-serif font-bold hover:border-[1px] border-cyan-400  " ><Link href="/shop" >SHOP</Link></li>
   
   
   
   </>





    return (
        <div>

        <div className="navbar  p-10 fixed ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {nav}
              </ul>
            </div>
            <div className=" ml-6 flex items-center gap-2  ">
            <Image src={logo} width={30} height={30} alt="" />
            <a className=" text-xl text-[#ff8f4f] ">LawPluse</a>
            </div>
           
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               {nav}
            </ul>
          </div>
          <div className="navbar-end mr-6 ">
            <a className="btn bg-[#A66E38] text-white text-xs ">FREE CONSULTATION</a>
          </div>
        </div>
            
        </div>
    );
};

export default Nav;