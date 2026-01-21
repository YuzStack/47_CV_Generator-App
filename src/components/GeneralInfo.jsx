import Button from './Button';
import Input from './Input';

function GeneralInfo({ generalInfo, onEdit, onUpdate }) {
  const handleInputUpdate = function (e) {
    onUpdate({ ...generalInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className='rounded-md border border-gray-200 bg-white'>
      <div className='flex items-center justify-between border-b border-gray-200 p-4 px-6'>
        <h2 className='text-xl font-semibold text-[#111827]'>
          General Information
        </h2>
        <Button
          onClick={onEdit}
          className='cursor-pointer text-[#111827] underline decoration-1 underline-offset-4 hover:text-[#4B5563]'
        >
          {generalInfo.isEditing ? 'Submit' : 'Edit'}
        </Button>
      </div>

      <div className='flex flex-col gap-2 px-6 py-4'>
        {generalInfo.isEditing ? (
          <form className='space-y-4 text-[#111827]'>
            <Input
              value={generalInfo.name}
              onChange={handleInputUpdate}
              name='name'
              label='Full Name'
              placeholder='e.g. John Doe'
            />
            <Input
              value={generalInfo.profession}
              onChange={handleInputUpdate}
              name='profession'
              label='Professional Title'
              placeholder='e.g. Senior Product Designer'
            />

            <div className='flex gap-4'>
              <Input
                value={generalInfo.email}
                onChange={handleInputUpdate}
                name='email'
                label='Email'
                placeholder='john@example.com'
              />
              <Input
                value={generalInfo.phone}
                onChange={handleInputUpdate}
                name='phone'
                label='Phone'
                placeholder='+1 (555) 000-0000'
              />
            </div>

            <Input
              value={generalInfo.location}
              onChange={handleInputUpdate}
              name='location'
              label='Location'
              placeholder='San Francisco, CA'
            />
          </form>
        ) : (
          <>
            <h3 className='text-lg font-semibold text-[#111827]'>
              {generalInfo.name}
            </h3>
            <p className='text-sm text-[#4B5563]'>{generalInfo.profession}</p>
            <div className='flex gap-4 text-sm text-[#6B7280]'>
              <span>{generalInfo.email}</span>
              <span>{generalInfo.phone}</span>
              <span>{generalInfo.location}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default GeneralInfo;
