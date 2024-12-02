
import { MdEmail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";



const Call = () => {

    return (

        <div className=" bg-no-repeat bg-cover p-16 " 
        style={{
            backgroundImage: "url(https://www.almajdlawfirm.qa/images/home/slide-1.jpg)",
          }}
        
        >

        <div className=" ml-14 mr-14 mt-20 mb-20 border-[1px] border-gray-400 p-20  text-white ">
            <div>
               <p className=" text-2xl text-center font-serif  ">Are you looking for someone to help?</p>
               <p className=" text-3xl text-center  mt-5 ">Let us help you! Call Now : (1)2345-2345-54</p>
               <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-10 mt-5 ">
               <div className=" mt-5 flex items-center gap-2 ">
                <p><MdEmail className=" text-yellow-600 "></MdEmail></p>
                <p className=" font-thin ">  contact@attornafirm.com</p>
              </div>
              <div className=" mt-5 flex items-center gap-2 ">
                <p><CiClock2 className=" text-yellow-600 "></CiClock2></p>
                <p className=" font-thin "> Mon – Fri 9.00-18.00</p>
              </div>
               </div>
            </div>
        </div>


        </div>

        
    );
};

export default Call;