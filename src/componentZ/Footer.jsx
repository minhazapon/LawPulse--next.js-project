import Image from "next/image";
import logo from './pic file/logo.png'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { FaAddressBook } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className=" mt-20 ">

           <div className=" flex justify-center  gap-32 bg-black text-white p-24  ">


            <div>
            <Image src={logo} width={60} height={60} alt="" />
            </div>


            <div>
              <p className=" text-3xl  font-semibold ">Contact Info</p>
              <div className=" mt-6 flex items-center gap-2 ">
                <p><FaPhone className=" text-yellow-600 "></FaPhone></p>
                <p className=" font-thin "> (1)2345-2345-54</p>
              </div>
              <div className=" mt-5 flex items-center gap-2 ">
                <p><MdEmail className=" text-yellow-600 "></MdEmail></p>
                <p className=" font-thin ">  contact@attornafirm.co</p>
              </div>
              <div className=" mt-5 flex items-center gap-2 ">
                <p><CiClock2 className=" text-yellow-600 "></CiClock2></p>
                <p className=" font-thin "> Mon – Fri 9.00-18.00</p>
              </div>
              <div className=" mt-5 flex items-center gap-2 ">
                <p><FaAddressBook className=" text-yellow-600 "></FaAddressBook></p>
                <p className=" font-thin "> Mon – Fri 9.00-18.00</p>
              </div>
            </div>


            <div>
            <p className=" text-3xl  font-semibold ">Useful Links</p>
            <p className=" mt-3  font-thin ">Practice Areas</p>
            <p className=" mt-3  font-thin ">Privacy & Policy</p>
            <p className=" mt-3  font-thin ">Our Story</p>
            <p className=" mt-3  font-thin ">Be Our Partner</p>
            </div>


            <div>
            <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
                  <label className="label">
                    <span className="label-text text-gray-400 font-thin">Enter your email address</span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      placeholder="username@site.com"
                      className="input input-bordered join-item" />
                    <button className="btn bg-[#A66E38] text-white join-item">Subscribe</button>
                  </div>
                </fieldset>
            </form>
            </div>









           </div>

            
        </div>
    );
};

export default Footer;