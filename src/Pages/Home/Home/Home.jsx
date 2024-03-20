import Banner from "../../../Components/AllHome/Banner";
import BecomeInstructour from "../../../Components/AllHome/BecomeInstructour";
import CommonQuestion from "../../../Components/AllHome/CommonQuestion";
import CourseContent from "../../../Components/AllHome/CourseBenefits/CourseContent";
import MainSlider from "../../../Components/AllHome/MainSlider";
import PartnerSection from "../../../Components/AllHome/PartnerSection";
import PlatformOverview from "../../../Components/AllHome/PlatformOverview";

const Home = () => {
    return (
        <div>
   
            {/* <MainSlider></MainSlider> */}
            <Banner></Banner>
            <PartnerSection></PartnerSection>
           <BecomeInstructour></BecomeInstructour>
           <PlatformOverview></PlatformOverview>
           <CourseContent></CourseContent>
           <CommonQuestion></CommonQuestion>
        </div>
    );
};

export default Home;