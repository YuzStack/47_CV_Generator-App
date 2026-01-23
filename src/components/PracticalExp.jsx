import { Plus, Trash2 } from 'lucide-react';
import Button from './Button';
import Input from './Input';

function PracticalExp({ practicalExp, onEdit, onUpdate }) {
  const handleInputUpdate = function (e) {
    onUpdate({
      isEditing: practicalExp.isEditing,
      experience: practicalExp.experience.map(exp =>
        exp.id === this ? { ...exp, [e.target.name]: e.target.value } : exp,
      ),
    });
  };

  const handleDeleteExp = function () {
    onUpdate({
      isEditing: practicalExp.isEditing,
      experience: practicalExp.experience.filter(exp => exp.id !== this),
    });
  };

  const handleAddExp = function () {
    onUpdate({
      isEditing: practicalExp.isEditing,
      experience: [
        ...practicalExp.experience,
        {
          id: crypto.randomUUID(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          location: '',
          description: '',
        },
      ],
    });
  };

  return (
    <div className='rounded-md border border-gray-200 bg-white'>
      <div className='flex items-center justify-between border-b border-gray-200 p-4 px-6'>
        <h2 className='text-xl font-semibold text-[#111827]'>
          Practical Experience
        </h2>
        <Button
          onClick={onEdit}
          className='cursor-pointer text-[#111827] underline decoration-1 underline-offset-4 hover:text-[#4B5563]'
        >
          {practicalExp.isEditing ? 'Submit' : 'Edit'}
        </Button>
      </div>

      <div className='space-y-6 px-6 py-4'>
        {practicalExp.isEditing ? (
          <>
            {practicalExp.experience.map(exp => (
              <form
                key={exp.id}
                className='relative space-y-4 rounded-sm border border-[#E6E7EB] bg-[#FCFDFD] p-4 pt-6 text-[#111827]'
              >
                <Button
                  onClick={handleDeleteExp.bind(exp.id)}
                  className='absolute top-3 right-3 cursor-pointer text-[#9CA3AF] duration-150 hover:text-[#EE4444]'
                >
                  <Trash2 size={18} />
                </Button>

                <Input
                  value={exp.company}
                  onChange={handleInputUpdate}
                  name='company'
                  id={exp.id}
                  label='Company / Organization'
                  placeholder='Acme Corp'
                />
                <Input
                  value={exp.position}
                  onChange={handleInputUpdate}
                  name='position'
                  id={exp.id}
                  label='Position Title'
                  placeholder='Product Manager'
                />

                <div className='flex flex-col gap-4 sm:flex-row'>
                  <Input
                    value={exp.startDate}
                    onChange={handleInputUpdate}
                    name='startDate'
                    id={exp.id}
                    label='Start Date'
                    placeholder='Jan 2022'
                  />
                  <Input
                    value={exp.endDate}
                    onChange={handleInputUpdate}
                    name='endDate'
                    id={exp.id}
                    label='End Date'
                    placeholder='Present'
                  />
                </div>

                <Input
                  value={exp.location}
                  onChange={handleInputUpdate}
                  name='location'
                  id={exp.id}
                  label='Location'
                  placeholder='San Francisco, CA'
                />

                <label className='flex w-full flex-col'>
                  <span className='mb-1.5 text-xs font-medium tracking-wide uppercase'>
                    Description
                  </span>
                  <textarea
                    value={exp.description}
                    onChange={handleInputUpdate.bind(exp.id)}
                    name='description'
                    className='rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-[#111827]'
                    placeholder='Describe your responsibilities and achievements...'
                    rows={4}
                  ></textarea>
                </label>
              </form>
            ))}

            <Button
              onClick={handleAddExp}
              className='flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-sm border border-dashed border-gray-200 p-2 text-[#111827] duration-150 hover:bg-[#F3F4F6]'
            >
              <Plus size={16} />
              <span className='tracking-wide'>Add Experience</span>
            </Button>
          </>
        ) : (
          <>
            {practicalExp.experience.map(exp => (
              <div
                key={exp.id}
                className='flex flex-col gap-1.5 border-b border-gray-200 pb-4 last:border-0 last:pb-0'
              >
                <div className='flex items-center justify-between'>
                  <h3 className='text-base font-semibold text-[#111827]'>
                    {exp.company}
                  </h3>
                  <span className='text-xs text-[#6B7280]'>
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <p className='text-sm text-[#111827]'>{exp.position}</p>
                <p className='text-xs text-[#6B7280]'>{exp.location}</p>
                <p className='text-sm text-[#4B5563]'>{exp.description}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default PracticalExp;
