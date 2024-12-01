import Banner from "@/componentZ/Banner";
import Expert from "@/componentZ/Expert";
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




    </div>
  );
}
