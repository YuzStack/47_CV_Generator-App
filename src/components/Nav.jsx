import { Download, FileText } from 'lucide-react';

function Nav() {
  return (
    <nav className='sticky top-0 z-10 flex items-center justify-between bg-white px-3.5 py-2.5 sm:px-5 sm:py-4'>
      <div className='flex items-center gap-2 sm:gap-3'>
        <span className='rounded-md bg-[#111827] p-1 text-white sm:rounded-md sm:p-1.5'>
          <FileText />
        </span>
        <h1 className='text-lg font-semibold text-black'>CV Builder</h1>
      </div>

      <div className='flex cursor-pointer gap-1.5 rounded-sm border border-[#E6E7EB] p-1.5 text-xs font-medium text-black duration-150 hover:bg-[#F3F4F6] sm:rounded-sm sm:px-3 sm:py-2'>
        <span>
          <Download size={16} />
        </span>
        <span>Export PDF</span>
      </div>
    </nav>
  );
}

export default Nav;
