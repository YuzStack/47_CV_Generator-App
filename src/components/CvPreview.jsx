function CvPreview({ children, previewRef }) {
  return (
    <div className='lg:col-span-7'>
      <div className='mb-4'>
        <h3 className='text-md font-semibold text-[#6B7280]'>LIVE PREVIEW</h3>
        <p className='mt-0.5 text-sm'>A4 Format • Updates automatically</p>
      </div>

      <div className='flex max-h-[calc(100vh-12rem)] justify-center overflow-auto rounded-sm border border-[#D4D4D4] bg-[#E5E5E5] p-8'>
        <div className='w-full max-w-[210mm] min-w-[210mm] origin-top scale-90 sm:scale-100'>
          <div
            ref={previewRef}
            className='mx-auto aspect-[1/1.4142] overflow-auto border border-[#E5E7EB] bg-[#FFFFFF] p-[8%] shadow-sm'
          >
            <div className='space-y-8 font-serif'>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvPreview;
