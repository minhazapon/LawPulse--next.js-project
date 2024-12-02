import Image from "next/image";
import c1 from '@/componentZ/pic file/case.png'



const AllCase = () => {
    return (
        <div className=" mt-10 mb-10 ml-14 mr-14 ">

            <div className=" flex justify-center items-center gap-5 ">
                <p className=" text-6xl font-serif text-[#A66E38] ">Case Study</p>
                <Image src={c1} alt="case" height={60} width={60} />
            </div>
            <div className=" flex justify-center mt-5">
                <p className=" bg-slate-400 h-[1px] w-[400px] "></p>
            </div>
            
        </div>
    );
};

export default AllCase;