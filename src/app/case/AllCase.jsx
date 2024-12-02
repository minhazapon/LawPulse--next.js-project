import Image from "next/image";
import c1 from '@/componentZ/pic file/case.png'

import cs1 from '@/componentZ/pic file/cs1.jpg'
import cs2 from '@/componentZ/pic file/cs2.jpg'
import cs3 from '@/componentZ/pic file/cs3.jpg'
import cs4 from '@/componentZ/pic file/cs4.jpg'
import cs5 from '@/componentZ/pic file/cs5.jpg'
import cs6 from '@/componentZ/pic file/cs6.jpg'
import cs7 from '@/componentZ/pic file/cs7.jpg'
import cs8 from '@/componentZ/pic file/cs8.jpg'
import cs9 from '@/componentZ/pic file/cs9.jpg'





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

            <div className=" flex justify-center mt-10 ">
                <div className=" grid  md:grid-cols-3 gap-5 ">
                 

                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                  <figure>
                    <Image className=" w-full h-[250px] "
                      src={cs1}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" text-2xl font-serif mb-5 ">Family Violence</h2>
                  </div>
                </div>

                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                  <figure>
                    <Image className=" w-full h-[250px] "
                      src={cs2}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" text-2xl font-serif mb-5 ">Giving Million Air Its Wings</h2>
                  </div>
                </div>

                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                  <figure>
                    <Image className=" w-full h-[250px] "
                      src={cs3}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" text-2xl font-serif mb-5 ">Accident Insurance</h2>
                  </div>
                </div>


                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                  <figure>
                    <Image className=" w-full h-[250px] "
                      src={cs4}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" text-2xl font-serif mb-5 ">Making Sure It’s Closed</h2>
                  </div>
                </div>


                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                  <figure>
                    <Image className=" w-full h-[250px] "
                      src={cs5}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" text-2xl font-serif mb-5 ">Public Company Fraud</h2>
                  </div>
                </div>


                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                  <figure>
                    <Image className=" w-full h-[250px] "
                      src={cs6}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" text-2xl font-serif mb-5 ">Nighmare on Wall Street</h2>
                  </div>
                </div>


                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                  <figure>
                    <Image className=" w-full h-[250px] "
                      src={cs7}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" text-2xl font-serif mb-5 ">Privacy Matter</h2>
                  </div>
                </div>


                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                  <figure>
                    <Image className=" w-full h-[250px] "
                      src={cs8}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" text-2xl font-serif mb-5 ">MaTix Tax Invation</h2>
                  </div>
                </div>


                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                  <figure>
                    <Image className=" w-full h-[250px] "
                      src={cs9}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" text-2xl font-serif mb-5 ">Failure of Apple Acquisition</h2>
                  </div>
                </div>


             



                </div>
            </div>
            
        </div>
    );
};

export default AllCase;