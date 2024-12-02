import Lawyer from "@/componentZ/Lawyer";
import Call from "@/componentZ/practice area/Call";
import LegalArea from "@/componentZ/practice area/LegalArea";
import PA from "@/componentZ/practice area/PA";



export const metadata = {
    title: "lawPulse -- practice area",
    description: "lawPulse -- practice area",
  };



const page = () => {
    return (
        <div>

            <PA></PA>
            <LegalArea></LegalArea>
            <Call></Call>
            <Lawyer></Lawyer>
            
        </div>
    );
};

export default page;