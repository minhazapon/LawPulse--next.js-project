import AllCase from "./AllCase";
import Banner from "./Banner";



export const metadata = {
    title: "lawpulse -- case study",
    description: "lawpulse -- case study",
  };


const page = () => {

    return (
        <div>

            <Banner></Banner>
            <AllCase></AllCase>
            
        </div>
    );
};

export default page;