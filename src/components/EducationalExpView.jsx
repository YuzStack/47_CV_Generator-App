function EducationalExpView() {
  return (
    <section>
      <h2 className='mb-4 border-b border-[#E6E7EB] pb-2 font-sans text-base font-semibold tracking-widest text-[#6B7280] uppercase'>
        Education
      </h2>

      <div className='space-y-6'>
        <div>
          <div className='flex items-center justify-between'>
            <h3 className='mb-1 text-lg font-semibold text-[#111827]'>
              Rhode Island School of Design
            </h3>
            <span className='font-sans text-sm text-[#4B5563]'>
              2012 – 2016
            </span>
          </div>

          <div className='flex items-center justify-between'>
            <p className='text-md text-[#111827] italic'>
              BFA in Graphic Design
            </p>
            <span className='font-sans text-sm text-[#6B7280]'>
              Providence, RI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationalExpView;
