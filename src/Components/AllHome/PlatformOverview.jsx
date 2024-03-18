

// const PlatformOverview = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default PlatformOverview;


import Container from '../Shared/Container';
import SectionHeader from '../Shared/SectionHeader/SectionHeader';
// import { getSiteStats } from '../../api/auth';
// import { useQuery } from '@tanstack/react-query';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PlatformOverview = () => {
//   const { data: siteStats = {} } = useQuery({
//     queryKey: ['siteStats'],
//     queryFn: async () => await getSiteStats() ,
//   });

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className='my-16' data-aos='zoom-in'>
      <Container>
        <SectionHeader
          heading={'Explore the depths of'}
          headingSpan={'our Platform Overview'}
          headingDescription={`
          Gain insight into the vibrant pulse of our learning ecosystem through concise statistics detailing total user engagement, comprehensive class offerings, and the enthusiastic participation of student enrollments. Experience the dynamic energy of our educational environment firsthand.`}
        />
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex gap-4 flex-col justify-center items-center flex-1'>
            <div className='flex flex-row gap-4'>
              <div className='bg-neutral-100 grid place-content-center text-center min-w-[150px] sm:min-w-[180px] min-h-[100px] sm:min-h-[180px] space-y-4'>
                <h4 className='text-lg sm:text-xl font-bold'>Total User</h4>
                <span className='text-3xl sm:text-5xl font-bold text-[#03b97c]'>
                  {/* {siteStats?.totalUsers} */}
                  44
                </span>
              </div>
              <div className='bg-neutral-100 grid place-content-center text-center min-w-[150px] sm:min-w-[180px] min-h-[100px] sm:min-h-[180px] space-y-4'>
                <h4 className='text-lg sm:text-xl font-bold'>
                  Total Enrollment
                </h4>
                <span className='text-3xl sm:text-5xl font-bold text-[#03b97c]'>
                  {/* {siteStats?.totalEnrollment} */}
                  20
                </span>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <div className='bg-neutral-100 grid place-content-center text-center min-w-[150px] sm:min-w-[180px] min-h-[100px] sm:min-h-[180px] space-y-4'>
                <h4 className='text-lg sm:text-xl font-bold'>Total Classes</h4>
                <span className='text-3xl sm:text-5xl font-bold text-[#03b97c]'>
                  {/* {siteStats?.totalClasses} */}
                  12
                </span>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <img src="https://i.ibb.co/HFfZYDT/dastak-studio-1.png" alt='' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PlatformOverview;
