function PracticalExpView({ practicalExp }) {
  return (
    <section>
      <h2 className='mb-4 border-b border-[#E6E7EB] pb-2 font-sans text-base font-semibold tracking-widest text-[#6B7280] uppercase'>
        Experience
      </h2>

      <div className='space-y-6'>
        {practicalExp.experience.map(exp => (
          <div key={exp.id}>
            <div className='mb-1 flex items-center justify-between'>
              <h3 className='text-lg font-semibold text-[#111827]'>
                {exp.company}
              </h3>
              <span className='font-sans text-sm text-[#646D79]'>
                {exp.startDate} – {exp.endDate}
              </span>
            </div>
            <div className='mb-2 flex items-center justify-between'>
              <p className='text-md text-[#111827] italic'>{exp.position}</p>
              <p className='font-sans text-sm text-[#646D79]'>{exp.location}</p>
            </div>
            <p className='text-sm text-[#4B5563]'>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PracticalExpView;
