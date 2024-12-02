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
            
        </div>
    );
};

export default page;