


const MainSlider = () => {
    return (
            <div className="carousel  w-full h-[800px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/6DNC1Fn/slide-11.png" className="w-full" />
    <div className="absolute flex items-center h-full gap-5 left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
    <div className='text-white items-center text-center justify-center space-y-7 pl-12 '>
            <h2 className='lg:text-6xl text-4xl py-5 lg:ml-36 text-center font-bold '>Take your skills to the next level and unleash your inner superhero!</h2>
            
            {/* <div className=' py-5 text-center mx-auto'>
            <Link to="/joinAdmin"><button className="btn btn-primary mr-5 ">Join as Admin</button></Link>
            <Link to="/joinEmployee"><button className="btn btn-outline btn-primary pr-5">Join as Employee</button></Link>
            </div> */}
         </div>
    </div>
    
    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    
    
    
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/xqD1Mk6/slide-12.png" className="w-full" />
    <div className="absolute flex items-center h-full gap-5 left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
    <div className='text-white space-y-7 pl-12 '>
    <h2 className='lg:text-6xl text-4xl py-5 lg:ml-36 text-center font-bold '>Enhance your skills to superhero levels! Unleash your full potential with our transformative learning experiences.</h2>
            
            {/* <div className=' py-5 text-center mx-auto'>
            <Link to="/joinAdmin"><button className="btn btn-primary mr-5 ">Join as Admin</button></Link>
            <Link to="/joinEmployee"><button className="btn btn-outline btn-primary pr-5">Join as Employee</button></Link>
            </div> */}
         </div>
    </div>
    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    
  </div> 
  
  
</div>
        
    );
};

export default MainSlider;