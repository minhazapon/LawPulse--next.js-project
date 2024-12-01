import Image from "next/image";
import banner from './pic file/banner.jpg'


const Banner = () => {
    return (
        <div>

        <div
        className="hero min-h-screen"
        style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhd3xlbnwwfHwwfHx8MA%3D%3D)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content ">
        <div className=" mt-24 ">
        {/* <div>
        <Image className=" rounded-2xl " src={banner} alt="banner" width={500} height={400} />
        </div> */}
        <div>
        <p className=" text-6xl font-serif text-white  ">Law Pulse Firm</p>
        <p className=" mt-5 text-xl text-white font-serif ">Injustice anywhere is a threat to justice everywhere
        – Martin Luther King Jr.</p>
        <button className=" mt-5 text-white text-xs btn bg-[#A66E38]  ">CONTACT NOW</button>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Banner;