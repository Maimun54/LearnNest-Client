

import Container from '../Shared/Container';
import SectionHeader from '../Shared/SectionHeader/SectionHeader';

const CommonQuestion = () => {
  return (
    <div className='py-6' data-aos='zoom-in'>
      <Container>
        <SectionHeader
          heading={'Frequently Asked'}
          headingSpan={'Questions'}
          headingDescription={`Explore Skill UP's FAQs for quick answers to common queries about our diverse online courses.`}
        />
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex justify-between items-center text-lg font-medium text-gray-900 dark:text-gray-200 cursor-pointer">
            What courses does SkillUP offer?
            <span className="transition-transform transform rotate-0">+</span>
          </div>
          <div className="px-4 py-3 text-gray-500 dark:text-gray-400">
            <p>
              SkillUP provides a diverse range of courses to cater to different interests and career paths. Our offerings include courses in web development, programming, finance, accounting, and more. You can explore our course catalog to find the perfect learning path for your aspirations.
            </p>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex justify-between items-center text-lg font-medium text-gray-900 dark:text-gray-200 cursor-pointer">
            How can I enroll in a course on SkillUP?
            <span className="transition-transform transform rotate-0">+</span>
          </div>
          <div className="px-4 py-3 text-gray-500 dark:text-gray-400">
            <p>
              Enrolling in a course at SkillUP is simple! Visit our website, browse through the available courses, and select the one that aligns with your goals. Click on the course to view details, and you'll find an enrollment option there. Follow the prompts to complete the enrollment process and start your learning journey.
            </p>
          </div>
        </div>

        
        
      </Container>
    </div>
  );
};

export default CommonQuestion;
