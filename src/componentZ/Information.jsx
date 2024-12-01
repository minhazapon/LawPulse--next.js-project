import Image from "next/image";
import icon1 from './pic file/icon01.png'
import icon2 from './pic file/icon02.png'
import icon3 from './pic file/icon03.png'



const Information = () => {

    return (
        <div className="  ml-14 mr-14 mt-20 mb-20  ">

            <div className=" flex justify-between gap-10 flex-col md:flex-row lg:flex-row ">


                <div>
                 <Image src={icon1} alt="icon1" height={60} width={60} />
                 <p className=" text-[#493628] text-xl mt-5 ">WINNING AWARD LAW FIRM</p>
                 <p className=" font-serif mt-5 text-[#4d3f36d8] ">Lawyers and attorneys act as both legal advisors<br></br> and advocates, guiding individuals and businesses<br></br> through intricate legal processes.</p>
                 <button className=" mt-5 btn bg-[#926a4e] text-white ">LEARN MORE</button>
                </div>

                <div>
                 <Image src={icon2} alt="icon1" height={60} width={60} />
                 <p className=" text-[#493628] text-xl mt-5 ">CONFIDENTIAL</p>
                 <p className=" font-serif mt-5 text-[#4d3f36d8] ">Your information is held in strict confidence with <br></br>us.We prioritize safeguarding your sensitive data.<br></br>Rest assured, your case details remain private</p>
                 <button className=" mt-5 btn bg-[#926a4e] text-white ">LEARN MORE</button>
                </div>

                <div>
                 <Image src={icon3} alt="icon1" height={60} width={60} />
                 <p className=" text-[#493628] text-xl mt-5 ">LEGAL PROTECTION</p>
                 <p className=" font-serif mt-5 text-[#4d3f36d8] ">We provide robust legal protection for our clients<br></br>Your rights and interests are our top priority.Rest<br></br> assured for safeguarding your legal rights.</p>
                 <button className=" mt-5 btn bg-[#926a4e] text-white ">LEARN MORE</button>
                </div>




            </div>
            
        </div>
    );
};

export default Information;