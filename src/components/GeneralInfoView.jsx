function GeneralInfoView() {
  return (
    <header className='space-y-3 border-b-2 border-[#111827] pb-6'>
      <h1 className='text-4xl font-semibold text-[#111827] uppercase'>
        Alex Morgan
      </h1>
      <p className='font-sans text-sm text-[#4B5563] uppercase'>
        Senior Product Designer
      </p>
      <div className='flex gap-4 font-sans text-sm text-[#6B7280]'>
        <span>alex.morgan@example.com</span>
        <span className='text-gray-300'>•</span>
        <span>+1 (555) 123-4567</span>
        <span className='text-gray-300'>•</span>
        <span>San Francisco, CA</span>
      </div>
    </header>
  );
}

export default GeneralInfoView;
