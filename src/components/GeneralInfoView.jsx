function GeneralInfoView({ generalInfo }) {
  return (
    <header className='space-y-3 border-b-2 border-[#111827] pb-6'>
      <h1 className='text-4xl font-semibold text-[#111827] uppercase'>
        {generalInfo.name}
      </h1>
      <p className='font-sans text-sm text-[#4B5563] uppercase'>
        {generalInfo.profession}
      </p>
      <div className='flex gap-4 font-sans text-sm text-[#6B7280]'>
        <span>{generalInfo.email}</span>
        <span className='text-gray-300'>•</span>
        <span>{generalInfo.phone}</span>
        <span className='text-gray-300'>•</span>
        <span>{generalInfo.location}</span>
      </div>
    </header>
  );
}

export default GeneralInfoView;
