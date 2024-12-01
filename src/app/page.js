import Banner from "@/componentZ/Banner";
import Case from "@/componentZ/Case";
import Expert from "@/componentZ/Expert";
import FreeConsans from "@/componentZ/FreeConsans";
import Information from "@/componentZ/Information";
import Lawyer from "@/componentZ/Lawyer";
import Numberz from "@/componentZ/Numberz";
import Review from "@/componentZ/Review";
import Story from "@/componentZ/Story";
import Video from "@/componentZ/Video";


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
        <Lawyer></Lawyer>
        <Video></Video>
        <Review></Review>
        <FreeConsans></FreeConsans>
        <Case></Case>




    </div>
  );
}
