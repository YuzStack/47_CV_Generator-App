import { Plus, Trash2 } from 'lucide-react';
import Button from './Button';
import Input from './Input';

function PracticalExp({ isEditing }) {
  return (
    <div className='rounded-md border border-gray-200 bg-white'>
      <div className='flex justify-between border-b border-gray-200 lg:p-4 lg:px-6'>
        <h2 className='text-xl font-semibold text-[#111827]'>
          Practical Experience
        </h2>
        <Button className='cursor-pointer text-[#111827] underline decoration-1 underline-offset-4 hover:text-[#4B5563]'>
          {isEditing ? 'Submit' : 'Edit'}
        </Button>
      </div>

      <div className='space-y-6 lg:px-6 lg:py-4'>
        {isEditing ? (
          <>
            <form className='relative min-h-100 space-y-4 rounded-sm border border-[#E6E7EB] bg-[#FCFDFD] text-[#111827] lg:p-4 lg:pt-6'>
              <Button className='absolute top-3 right-3 cursor-pointer text-[#9CA3AF] duration-150 hover:text-[#EE4444]'>
                <Trash2 size={18} />
              </Button>

              <Input label='Company / Organization' placeholder='Acme Corp' />
              <Input label='Position Title' placeholder='Product Manager' />

              <div className='flex gap-4'>
                <Input label='Start Date' placeholder='Jan 2022' />
                <Input label='End Date' placeholder='Present' />
              </div>

              <Input label='Location' placeholder='San Francisco, CA' />

              <label className='flex w-full flex-col'>
                <span className='mb-1.5 text-xs font-medium tracking-wide uppercase'>
                  Description
                </span>
                <textarea
                  className='rounded-sm border border-gray-200 bg-white text-sm focus:outline-[#111827] lg:px-3 lg:py-2'
                  placeholder='Describe your responsibilities and achievements...'
                  rows={4}
                ></textarea>
              </label>
            </form>

            <form className='relative min-h-100 space-y-4 rounded-sm border border-[#E6E7EB] bg-[#FCFDFD] text-[#111827] lg:p-4 lg:pt-6'>
              <Button className='absolute top-3 right-3 cursor-pointer text-[#9CA3AF] duration-150 hover:text-[#EE4444]'>
                <Trash2 size={18} />
              </Button>

              <Input label='Company / Organization' placeholder='Acme Corp' />
              <Input label='Position Title' placeholder='Product Manager' />

              <div className='flex gap-4'>
                <Input label='Start Date' placeholder='Jan 2022' />
                <Input label='End Date' placeholder='Present' />
              </div>

              <Input label='Location' placeholder='San Francisco, CA' />

              <label className='flex w-full flex-col'>
                <span className='mb-1.5 text-xs font-medium tracking-wide uppercase'>
                  Description
                </span>
                <textarea
                  className='rounded-sm border border-gray-200 bg-white text-sm focus:outline-[#111827] lg:px-3 lg:py-2'
                  placeholder='Describe your responsibilities and achievements...'
                  rows={4}
                ></textarea>
              </label>
            </form>

            <Button className='flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-sm border border-dashed border-gray-200 p-2 text-[#111827] duration-150 hover:bg-[#F3F4F6]'>
              <Plus size={16} />
              <span className='tracking-wide'>Add Experience</span>
            </Button>
          </>
        ) : (
          <>
            <div className='flex flex-col gap-1.5 border-b border-gray-200 pb-4 last:border-0 last:pb-0'>
              <div className='flex justify-between'>
                <h3 className='text-base font-semibold text-[#111827]'>
                  TechFlow Inc.
                </h3>
                <span className='text-xs text-[#6B7280]'>2020 – Present</span>
              </div>
              <p className='text-sm text-[#111827]'>Senior UI Designer</p>
              <p className='text-xs text-[#6B7280]'>San Francisco, CA</p>
              <p className='text-sm text-[#4B5563]'>
                Leading the design system initiative and managing a team of 3
                junior designers. Improved design-to-engineering handoff process
                reducing implementation time by 40%.
              </p>
            </div>

            <div className='flex flex-col gap-1.5 border-b border-gray-200 pb-4 last:border-0 last:pb-0'>
              <div className='flex justify-between'>
                <h3 className='text-base font-semibold text-[#111827]'>
                  Creative Studio
                </h3>
                <span className='text-xs text-[#6B7280]'>2016 – 2020</span>
              </div>
              <p className='text-sm text-[#111827]'>Visual Designer</p>
              <p className='text-xs text-[#6B7280]'>New York, NY</p>
              <p className='text-sm text-[#4B5563]'>
                Collaborated with major retail brands to create digital
                marketing campaigns. Designed responsive web interfaces for
                e-commerce clients.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PracticalExp;
