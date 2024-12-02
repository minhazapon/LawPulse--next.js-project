import About from "@/componentZ/about file/About";
import AStory from "@/componentZ/about file/AStory";
import Que from "@/componentZ/about file/Que";
import FreeConsans from "@/componentZ/FreeConsans";
import Information from "@/componentZ/Information";


export const metadata = {
    title: "lawPulse -- about",
    description: "lawPulse -- about",
  };



const page = () => {

    return (
        <div>

            <About></About>
            <AStory></AStory>
            <Que></Que>   
            <Information></Information> 
            <FreeConsans></FreeConsans>   



        </div>
    );
};

export default page;