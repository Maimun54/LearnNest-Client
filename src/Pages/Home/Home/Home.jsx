import BecomeInstructour from "../../../Components/AllHome/BecomeInstructour";
import CommonQuestion from "../../../Components/AllHome/CommonQuestion";
import MainSlider from "../../../Components/AllHome/MainSlider";
import PartnerSection from "../../../Components/AllHome/PartnerSection";

const Home = () => {
    return (
        <div>
   
            <MainSlider></MainSlider>
            <PartnerSection></PartnerSection>
           <CommonQuestion></CommonQuestion>
           <BecomeInstructour></BecomeInstructour>
        </div>
    );
};

export default Home;