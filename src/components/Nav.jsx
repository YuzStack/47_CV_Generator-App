import { Download, FileText } from 'lucide-react';

function Nav() {
  return (
    <nav className='fixed w-full flex bg-white justify-between items-center xl:px-5 xl:py-4'>
      <div className='flex xl:gap-3 items-center'>
        <span className='bg-[#111827] xl:p-1.5 xl:rounded-md text-white'>
          <FileText />
        </span>
        <span className='text-black font-semibold text-lg'>CV Builder</span>
      </div>

      <div className='flex text-xs text-black gap-1.5 duration-150 xl:px-3 font-medium xl:py-2 border border-[#E6E7EB] xl:rounded-sm cursor-pointer hover:bg-[#F3F4F6]'>
        <span>
          <Download size={16} />
        </span>
        <span>Export PDF</span>
      </div>
    </nav>
  );
}

export default Nav;
