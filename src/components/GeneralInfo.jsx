import Button from './Button';
import Input from './Input';

function GeneralInfo({ isEditing }) {
  return (
    <div className='rounded-md border border-gray-200 bg-white'>
      <div className='flex items-center justify-between border-b border-gray-200 p-4 px-6'>
        <h2 className='text-xl font-semibold text-[#111827]'>
          General Information
        </h2>
        <Button className='cursor-pointer text-[#111827] underline decoration-1 underline-offset-4 hover:text-[#4B5563]'>
          {isEditing ? 'Submit' : 'Edit'}
        </Button>
      </div>

      <div className='flex flex-col gap-2 px-6 py-4'>
        {isEditing ? (
          <form className='space-y-4 text-[#111827]'>
            <Input label='Full Name' placeholder='e.g. John Doe' />
            <Input
              label='Professional Title'
              placeholder='e.g. Senior Product Designer'
            />

            <div className='flex gap-4'>
              <Input label='Email' placeholder='john@example.com' />
              <Input label='Phone' placeholder='+1 (555) 000-0000' />
            </div>

            <Input label='Location' placeholder='San Francisco, CA' />
          </form>
        ) : (
          <>
            <h3 className='text-lg font-semibold text-[#111827]'>
              Alex Morgan
            </h3>
            <p className='text-sm text-[#4B5563]'>Senior Product Designer</p>
            <div className='flex gap-4 text-sm text-[#6B7280]'>
              <span>alex.morgan@example.com</span>
              <span>+1 (555) 123-4567</span>
              <span>San Francisco, CA</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default GeneralInfo;
