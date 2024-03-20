// import Container from '../Shared/Container';
// import SectionHeader from '../Shared/SectionHeader/SectionHeader';
import { TbPhotoVideo } from 'react-icons/tb';
import { GrGraphQl } from 'react-icons/gr';
import { BsBoxes } from 'react-icons/bs';
import { MdVideoChat } from 'react-icons/md';
import { FaHandsHelping } from 'react-icons/fa';
import { FaRegAddressCard } from 'react-icons/fa6';
import Container from '../../Shared/Container';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';

const liveCourseContent = [
  {
    title: 'Engaging Live Sessions',
    id: 1,
    icon: <TbPhotoVideo/>,
    description:
      'Engage in real-time discussions with instructors and peers, fostering an interactive learning environment for a richer educational experience.',
  },
  {
    title: 'Monitoring and Advancement Tracker',
    id: 2,
    icon: <GrGraphQl/>,
    description:
      'Plan your learning journey systematically and track your progress effortlessly to achieve your educational milestones effectively.',
  },
  {
    title: 'Structured Learning Modules',
    id: 3,
    icon: <BsBoxes/>,
    description:
      'Organize your learning with structured module-based study plans, enhancing comprehension and retention of course materials.',
  },
  {
    title: 'Practical Industry-Centric Sessions',
    id: 4,
    icon: <MdVideoChat/>,
    description:
      'Immerse yourself in industry-specific live courses designed to provide practical skills and knowledge relevant to current market demands.',
  },
  {
    title: 'Career Assistance Services',
    id: 5,
    icon: <FaHandsHelping/>,
    description:
      'Receive dedicated support in securing job placements, with resources and guidance to help you transition smoothly into your desired career path.',
  },
  {
    title: 'Gain Insights from Professionals',
    id: 6,
    icon: <FaRegAddressCard/>,
    description:
      'Benefit from the expertise of seasoned professionals and industry leaders who share real-world insights to enrich your learning experience.',
  },
];

const CourseContent = () => {
  return (
    <div className='py-6' data-aos='zoom-in'>
      <Container>
        <SectionHeader
          heading={'Live Course'}
          headingSpan={'Content'}
          headingDescription={`View what you will get after joining us`}
        />
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {liveCourseContent.map(liveCourse => (
            <div
              className='border-2 border-[#03b97c] rounded-sm p-6 bg-neutral-100'
              data-aos='zoom-in'
              key={liveCourse.id} // Added key prop for optimization
            >
              <div
                className='text-9xl grid place-content-center my-4 cursor-pointer text-gray-700'
                title={liveCourse?.title}
              >
                {liveCourse?.icon}
              </div>
              <div>
                <h2
                  className='text-2xl font-bold line-clamp-1 mb-2'
                  title={liveCourse?.title}
                >
                  {liveCourse?.title}
                </h2>
                <p className='line-clamp-3'>{liveCourse?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CourseContent;
