function Input({ label, placeholder, name, value, onChange }) {
  return (
    <>
      <label className='flex w-full flex-col'>
        <span className='mb-1.5 text-xs font-medium tracking-wide uppercase'>
          {label}
        </span>
        <input
          type='text'
          name={name}
          value={value}
          onChange={onChange}
          className='h-10 rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-[#111827]'
          placeholder={placeholder}
        />
      </label>
    </>
  );
}

export default Input;
