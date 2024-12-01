import Banner from "@/componentZ/Banner";
import Expert from "@/componentZ/Expert";
import Information from "@/componentZ/Information";
import Numberz from "@/componentZ/Numberz";
import Story from "@/componentZ/Story";


export const metadata = {
  title: "Home",
  description: "home of lawPulse",
};

export default function Home() {

  
  return (
    <div>

        <Banner></Banner>
        <Information></Information>
        <Expert></Expert>
        <Numberz></Numberz>
        <Story></Story>




    </div>
  );
}
