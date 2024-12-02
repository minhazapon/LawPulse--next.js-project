

const Banner = () => {
    return (
        <div>

        <div>
        <div
        className="hero min-h-screen"
        style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhd3xlbnwwfHwwfHx8MA%3D%3D)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content ">
        <div className=" mt-24 ">
        <div>
        <p className=" text-6xl font-serif text-white  ">Case study</p>
        </div>
        </div>
        </div>
        </div>
        </div>
            
        </div>
    );
};

export default Banner;