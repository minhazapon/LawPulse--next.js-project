import Image from "next/image";
import ex1 from './pic file/ex1.jpg'
import ex2 from './pic file/ex2.jpg'
import ex3 from './pic file/ex3.jpg'
import ex4 from './pic file/ex4.jpg'
import ex5 from './pic file/ex5.jpg'
import ex6 from './pic file/ex6.webp'
import ex7 from './pic file/ex7.jpg'
import ex8 from './pic file/ex8.webp'



const Expert = () => {


    return (
        <div  className=" ml-14 mr-14 mt-20 mb-20 ">

            <div>

                <div>
                 <p className=" text-xl font-semibold  text-gray-400 ">OUR EXPERTISE</p>
                 <p className=" text-5xl font-semibold mt-6 text-[#493628] ">Legal Practice Areas</p>
                </div>
                
                {/* ------ */}

                <div className=" mt-10 flex ">

                    
                    <div className=" grid  md:grid-cols-3 gap-5 ">
                    

                    <div>
                    <Image className=" rounded-2xl" src={ex1} alt="ex1" height={300} width={400} />
                    <p className=" mt-5 text-xl font-semibold text-[#4e3f34] ">COPORATE & SECURITIES</p>
                    <button className=" btn bg-[#926a4e] mt-5 text-white ">LEARN MORE</button>
                    </div>


                    <div>
                    <Image className=" rounded-2xl" src={ex2} alt="ex1" height={300} width={400} />
                    <p className=" mt-5 text-xl font-semibold text-[#4e3f34] ">Real Estate Law</p>
                    <button className=" btn bg-[#926a4e] mt-5 text-white ">LEARN MORE</button>
                    </div>


                    <div>
                    <Image className=" rounded-2xl" src={ex3} alt="ex1" height={300} width={400} />
                    <p className=" mt-5 text-xl font-semibold text-[#4e3f34] ">Healthcare Law</p>
                    <button className=" btn bg-[#926a4e] mt-5 text-white ">LEARN MORE</button>
                    </div>


                    <div>
                    <Image className=" rounded-2xl" src={ex4} alt="ex1" height={300} width={400} />
                    <p className=" mt-5 text-xl font-semibold text-[#4e3f34] ">Tax LAW</p>
                    <button className=" btn bg-[#926a4e] mt-5 text-white ">LEARN MORE</button>
                    </div>

                    <div>
                    <Image className=" rounded-2xl" src={ex7} alt="ex1" height={300} width={400} />
                    <p className=" mt-5 text-xl font-semibold text-[#4e3f34] ">Insurance Law</p>
                    <button className=" btn bg-[#926a4e] mt-5 text-white ">LEARN MORE</button>
                    </div>

                    <div>
                    <Image className=" rounded-2xl" src={ex8} alt="ex1" height={300} width={400} />
                    <p className=" mt-5 text-xl font-semibold text-[#4e3f34] ">E-commerce Law</p>
                    <button className=" btn bg-[#926a4e] mt-5 text-white ">LEARN MORE</button>
                    </div>
            

                    </div>
 



                </div>


            </div>
            
        </div>
    );
};

export default Expert;