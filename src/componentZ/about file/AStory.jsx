import Image from "next/image";
import a1 from '../pic file/img1-about.png'



const AStory = () => {
    return (
        <div>

        <div className=" mt-20 mb-20 ml-14 mr-14 flex-col md:flex-row lg:flex-row flex justify-between items-center gap-10 ">
        
        <div>
        <div>
         <p className=" text-xl font-semibold  text-gray-400 ">OUR EXPERTISE</p>
         <p className=" text-5xl font-semibold mt-6 text-[#493628] ">Story About Attorna
         </p>
        </div>
        <div>
         <p className=" text-xs mt-5 text-gray-400 ">At Attorna, we understand that navigating the intricate landscape of legal<br></br> challenges can be daunting. Our seasoned team of dedicated legal<br></br> professionals is here to guide you through your legal journey with expertise<br></br> and empathy.</p>
         <p className=" text-xs mt-5 text-gray-400 ">Founded on principles of integrity, diligence, and client-centricity, AttornaM<br></br> prides itself on delivering tailored legal solutions that prioritize your unique<br></br> circumstances.</p>
         <button className=" btn bg-[#926a4e] mt-5 text-white ">Contact Us</button>
        </div>
        </div>
        
        
        <div>
           
           <Image src={a1} alt="l1" height={500} width={700} />
        
        
        </div>
        
        </div>
            
        </div>
    );
};

export default AStory;