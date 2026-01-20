import { Plus, Trash2 } from 'lucide-react';
import Button from './Button';
import Input from './Input';

function EducationalExp({ isEditing }) {
  return (
    <div className='rounded-md border border-gray-200 bg-white'>
      <div className='flex justify-between border-b border-gray-200 p-4 px-6'>
        <h2 className='text-xl font-semibold text-[#111827]'>
          Educational Experience
        </h2>
        <Button className='cursor-pointer text-[#111827] underline decoration-1 underline-offset-4 hover:text-[#4B5563]'>
          {isEditing ? 'Submit' : 'Edit'}
        </Button>
      </div>

      {isEditing ? (
        <div className='space-y-6 px-6 py-4'>
          <form className='relative min-h-100 space-y-4 rounded-sm border border-[#E6E7EB] bg-[#FCFDFD] text-[#111827] p-4 pt-6'>
            <Button className='absolute top-3 right-3 cursor-pointer text-[#9CA3AF] duration-150 hover:text-[#EE4444]'>
              <Trash2 size={18} />
            </Button>

            <Input
              label='School / University'
              placeholder='University of Design'
            />

            <Input
              label='Degree / Field of Study'
              placeholder='Bachelor of Arts'
            />

            <div className='flex gap-4'>
              <Input label='Start Date' placeholder='Sep 2018' />
              <Input label='End Date' placeholder='Jun 2022' />
            </div>

            <Input label='Location' placeholder='New York, NY' />
          </form>

          <Button className='flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-sm border border-dashed border-gray-200 p-2 text-[#111827] duration-150 hover:bg-[#F3F4F6]'>
            <Plus size={16} />
            <span className='tracking-wide'>Add Education</span>
          </Button>
        </div>
      ) : (
        <div className='flex flex-col gap-2 px-6 py-4'>
          <h3 className='text-base font-medium text-[#111827]'>
            Rhode Island School of Design
          </h3>
          <p className='text-sm text-[#4B5563]'>BFA in Graphic Design</p>
          <div className='text-xs text-[#6B7280] flex justify-between'>
            <span>2012 – 2016</span>
            <span>Providence, RI</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default EducationalExp;
