import Image from "next/image";
import a2 from "../pic file/a2.png"



const Que = () => {


    return (
        <div className=" mt-20 mb-10 ml-14 mr-14 ">

            <div className=" flex justify-between items-center ">

               <div>
                 <Image src={a2} alt="a2" height={500} width={600} />
               </div>

               
               <div>
                
                
               <div className="join join-vertical w-[600px] h-[600px] ">
                  <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What areas of law does Attorna specialize in?</div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How can I schedule a consultation with Attorna?</div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What sets Attorna apart from other law firms?</div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How much do your legal services cost?</div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Will I have direct contact with an attorney on my case?</div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                </div>
                
                
               </div> 





            </div>
            
        </div>
    );
};

export default Que;