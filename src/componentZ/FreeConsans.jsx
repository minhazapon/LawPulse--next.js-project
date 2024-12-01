"use client"

import { FaAddressCard } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { TbClockHour4 } from "react-icons/tb";
import Swal from "sweetalert2";

const FreeConsans = () => {


    const onContact = async (event) => {
        event.preventDefault();
      
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e87151e8-7baa-471d-b58a-0bd71fe1cd67");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            Swal.fire({
                title: 'Success!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
          event.target.reset();
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
          setResult(data.message);
        }
      };




    return (
        <div>

<section className="bg-blue-50 dark:bg-slate-800" id="contact">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <p className="text-base font-semibold uppercase tracking-wide text-[#926a4e]  dark:text-blue-200">
                    Contact
                </p>
                <h2
                    className="font-heading mb-4 font-bold tracking-tight text-[#926a4e]  dark:text-white text-3xl sm:text-5xl">
                    Get in Touch
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">In hac habitasse platea
                    dictumst
                </p>
            </div>
        </div>
        <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
                <div className="h-full pr-6">
                    <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                        Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
                        sagittis ante, ac tincidunt sem venenatis ut.
                    </p>
                    <ul className="mb-6 md:mb-0">
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#926a4e]  text-gray-50">
                                <p><FaAddressCard/></p>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
                                <p className="text-gray-600 dark:text-slate-400">New York, EEUU</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#926a4e]  text-gray-50">
                            <p><FaPhone/></p>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
                                <p className="text-gray-600 dark:text-slate-400">Mail: tailnext@gmail.com</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#926a4e]  text-gray-50">
                            <p><TbClockHour4/></p>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                    hours</h3>
                                <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                    <form onSubmit={onContact} >
                        <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input className=" w-full p-4 border-[1px] rounded-xl border-gray-400  " placeholder="name" name="name" type="text" />
                              <input className=" w-full p-4 border-[1px] rounded-xl border-gray-400 mt-5  " placeholder="Email" type="email" name="email" id="" />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label  className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="w-full bg-[#926a4e]  text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
            
        </div>
    );
};

export default FreeConsans;