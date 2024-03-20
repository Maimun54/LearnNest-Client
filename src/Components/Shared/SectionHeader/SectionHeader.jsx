
const SectionHeader = ({ heading, headingDescription, headingSpan }) => {
    return (
      <div className='max-w-3xl mx-auto text-center mb-4'>
        <h2 className='text-3xl mb-3 font-bold'>
          {heading}
          {!!headingSpan && (
            <span className='text-blue-500'>{headingSpan}</span>
          )}
        </h2>
        <p className='text-lg text-gray-700'>{headingDescription}</p>
      </div>
    );
  };
  
  export default SectionHeader;
  
  