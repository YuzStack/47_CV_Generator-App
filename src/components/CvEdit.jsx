function CvEdit({ children }) {
  return (
    <div className='space-y-6 lg:col-span-5'>
      <div className='mb-4'>
        <h2 className='text-md font-semibold text-[#6B7280]'>EDITOR</h2>
        <p className='mt-0.5 text-sm'>Update your information below.</p>
      </div>

      {children}
    </div>
  );
}

export default CvEdit;
