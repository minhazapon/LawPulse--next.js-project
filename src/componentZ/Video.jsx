


const Video = () => {
    return (
        <div className=" mt-20 mb-20 ml-14 mr-14 ">


            <div>

            <video width=" w-full " height="240" controls preload="none">
            <source src="https://assets.mixkit.co/videos/23115/23115-720.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>

            </div>
            
        </div>
    );
};

export default Video;