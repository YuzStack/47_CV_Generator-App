function EducationalExpView({ educationalExp }) {
  return (
    <section>
      <h2 className='mb-4 border-b border-[#E6E7EB] pb-2 font-sans text-base font-semibold tracking-widest text-[#6B7280] uppercase'>
        Education
      </h2>

      <div className='space-y-6'>
        {educationalExp.education.map(edu => (
          <div key={edu.id}>
            <div className='flex items-center justify-between'>
              <h3 className='mb-1 text-lg font-semibold text-[#111827]'>
                {edu.school}
              </h3>
              <span className='font-sans text-sm text-[#4B5563]'>
                {edu.startDate} – {edu.endDate}
              </span>
            </div>

            <div className='flex items-center justify-between'>
              <p className='text-md text-[#111827] italic'>{edu.degree}</p>
              <span className='font-sans text-sm text-[#6B7280]'>
                {edu.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationalExpView;
