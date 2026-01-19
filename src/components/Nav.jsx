import { Download, FileText } from 'lucide-react';

function Nav() {
  return (
    <nav className='sticky top-0 flex items-center justify-between bg-white xl:px-5 xl:py-4'>
      <div className='flex items-center xl:gap-3'>
        <span className='bg-[#111827] text-white xl:rounded-md xl:p-1.5'>
          <FileText />
        </span>
        <h1 className='text-lg font-semibold text-black'>CV Builder</h1>
      </div>

      <div className='flex cursor-pointer gap-1.5 border border-[#E6E7EB] text-xs font-medium text-black duration-150 hover:bg-[#F3F4F6] xl:rounded-sm xl:px-3 xl:py-2'>
        <span>
          <Download size={16} />
        </span>
        <span>Export PDF</span>
      </div>
    </nav>
  );
}

export default Nav;
