import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 



const Banner = () => {
    return (
        <Carousel  >
                <div>
                    <img src="https://i.ibb.co/6DNC1Fn/slide-11.png" />
                   
                </div>
                <div>
                <img src="https://i.ibb.co/xqD1Mk6/slide-12.png" />
                </div>
                <div>
                <img src="https://i.ibb.co/xqD1Mk6/slide-12.png" />
                    
                </div>
                <div>
                <img src="https://i.ibb.co/xqD1Mk6/slide-12.png" />
                   
                </div>
                
            </Carousel>
    );
};

export default Banner;