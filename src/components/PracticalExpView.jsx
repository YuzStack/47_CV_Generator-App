function PracticalExpView() {
  return (
    <section>
      <h2 className='mb-4 border-b border-[#E6E7EB] pb-2 font-sans text-base font-semibold tracking-widest text-[#6B7280] uppercase'>
        Experience
      </h2>

      <div className='space-y-6'>
        <div>
          <div className='mb-1 flex items-center justify-between'>
            <h3 className='text-lg font-semibold text-[#111827]'>
              TechFlow Inc.
            </h3>
            <span className='font-sans text-sm text-[#646D79]'>
              2020 – Present
            </span>
          </div>
          <div className='mb-2 flex items-center justify-between'>
            <p className='text-md text-[#111827] italic'>Senior UI Designer</p>
            <p className='font-sans text-sm text-[#646D79]'>
              San Francisco, CA
            </p>
          </div>
          <p className='text-sm text-[#4B5563]'>
            Leading the design system initiative and managing a team of 3 junior
            designers. Improved design-to-engineering handoff process reducing
            implementation time by 40%.
          </p>
        </div>

        <div>
          <div className='mb-1 flex items-center justify-between'>
            <h3 className='text-lg font-semibold text-[#111827]'>
              Creative Studio
            </h3>
            <span className='font-sans text-sm text-[#646D79]'>
              2016 – 2020
            </span>
          </div>
          <div className='mb-2 flex items-center justify-between'>
            <p className='text-md text-[#111827] italic'>Visual Designer</p>
            <p className='font-sans text-sm text-[#646D79]'>New York, NY</p>
          </div>
          <p className='text-sm text-[#4B5563]'>
            Collaborated with major retail brands to create digital marketing
            campaigns. Designed responsive web interfaces for e-commerce
            clients.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PracticalExpView;
