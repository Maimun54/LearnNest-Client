
import Container from '../Shared/Container';


import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BecomeInstructour = () => {
    useEffect(() => {
      AOS.init({
        duration: 3000,
      });
    }, []);

  return (
    <div className='my-6 overflow-x-hidden'>
      <Container>
        <div
          className='md:h-[40vh] flex flex-col md:flex-row items-center gap-6 overflow-hidden'
          data-aos='zoom-in-left'
        >
          <div className='flex-1 flex justify-center items-center'>
            <img className='inline-block' src="https://i.ibb.co/Tr69hqd/out-of-state-teacher-1.webp" alt='' />
          </div>
          <div className='flex-1 space-y-4'>
            <h2 className='text-2xl sm:text-3xl font-bold'>
              Become an instructor
            </h2>
            <p className='text-neutral-500'>
            Unify with instructors worldwide on SkillUP! With a vast community of millions of enthusiastic learners, SkillUP equips you with the resources and knowledge to impart your expertise and passion. Embrace our vibrant community and ignite the spark of learning by teaching what you love today!
            </p>
            <div>
              <Link
                to='/teach-on-skillup'
                className='bg-[#03b97c] active:bg-[#03b97cb2] ring-2 ring-[#03b97cd3] active:ring-[#03b97c] px-4 py-2 text-white font-bold inline-block'
              >
                Start teaching Today
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BecomeInstructour;
