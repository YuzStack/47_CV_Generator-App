function CvPreview({ children }) {
  return (
    <div className='lg:col-span-7'>
      <div className='mb-4'>
        <h2 className='text-md font-semibold text-[#6B7280]'>LIVE PREVIEW</h2>
        <p className='mt-0.5 text-sm'>A4 Format • Updates automatically</p>
      </div>

      {children}
    </div>
  );
}

export default CvPreview;
