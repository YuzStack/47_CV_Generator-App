function Input({ label, placeholder }) {
  return (
    <>
      <label className='flex w-full flex-col'>
        <span className='mb-1.5 text-xs font-medium tracking-wide uppercase'>
          {label}
        </span>
        <input
          type='text'
          className='h-10 rounded-sm border border-gray-200 bg-white text-sm focus:outline-[#111827] lg:px-3 lg:py-2'
          placeholder={placeholder}
        />
      </label>
    </>
  );
}

export default Input;
