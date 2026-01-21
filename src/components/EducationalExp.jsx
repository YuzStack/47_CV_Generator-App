import { Plus, Trash2 } from 'lucide-react';
import Button from './Button';
import Input from './Input';

function EducationalExp({ educationalExp, onEdit, onUpdate }) {
  const handleInputUpdate = function (e) {
    onUpdate({
      isEditing: educationalExp.isEditing,
      education: educationalExp.education.map(edu =>
        edu.id === this ? { ...edu, [e.target.name]: e.target.value } : edu,
      ),
    });
  };

  const handleDeleteEdu = function () {
    onUpdate({
      isEditing: educationalExp.isEditing,
      education: educationalExp.education.filter(edu => edu.id !== this),
    });
  };

  const handleAddEdu = function () {
    onUpdate({
      isEditing: educationalExp.isEditing,
      education: [
        ...educationalExp.education,
        {
          id: crypto.randomUUID(),
          school: '',
          degree: '',
          startDate: '',
          endDate: '',
          location: '',
        },
      ],
    });
  };

  return (
    <div className='rounded-md border border-gray-200 bg-white'>
      <div className='flex items-center justify-between border-b border-gray-200 p-4 px-6'>
        <h2 className='text-xl font-semibold text-[#111827]'>
          Educational Experience
        </h2>
        <Button
          onClick={onEdit}
          className='cursor-pointer text-[#111827] underline decoration-1 underline-offset-4 hover:text-[#4B5563]'
        >
          {educationalExp.isEditing ? 'Submit' : 'Edit'}
        </Button>
      </div>

      {educationalExp.isEditing ? (
        <div className='space-y-6 px-6 py-4'>
          {educationalExp.education.map(edu => (
            <form
              key={edu.id}
              className='relative min-h-100 space-y-4 rounded-sm border border-[#E6E7EB] bg-[#FCFDFD] p-4 pt-6 text-[#111827]'
            >
              <Button
                onClick={handleDeleteEdu.bind(edu.id)}
                className='absolute top-3 right-3 cursor-pointer text-[#9CA3AF] duration-150 hover:text-[#EE4444]'
              >
                <Trash2 size={18} />
              </Button>

              <Input
                value={edu.school}
                onChange={handleInputUpdate}
                name='school'
                id={edu.id}
                label='School / University'
                placeholder='University of Design'
              />

              <Input
                value={edu.degree}
                onChange={handleInputUpdate}
                name='degree'
                id={edu.id}
                label='Degree / Field of Study'
                placeholder='Bachelor of Arts'
              />

              <div className='flex gap-4'>
                <Input
                  value={edu.startDate}
                  onChange={handleInputUpdate}
                  name='startDate'
                  id={edu.id}
                  label='Start Date'
                  placeholder='Sep 2018'
                />
                <Input
                  value={edu.endDate}
                  onChange={handleInputUpdate}
                  name='endDate'
                  id={edu.id}
                  label='End Date'
                  placeholder='Jun 2022'
                />
              </div>

              <Input
                value={edu.location}
                onChange={handleInputUpdate}
                name='location'
                id={edu.id}
                label='Location'
                placeholder='New York, NY'
              />
            </form>
          ))}

          <Button
            onClick={handleAddEdu}
            className='flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-sm border border-dashed border-gray-200 p-2 text-[#111827] duration-150 hover:bg-[#F3F4F6]'
          >
            <Plus size={16} />
            <span className='tracking-wide'>Add Education</span>
          </Button>
        </div>
      ) : (
        <>
          {educationalExp.education.map(edu => (
            <div key={edu.id} className='flex flex-col gap-2 px-6 py-4'>
              <h3 className='text-base font-medium text-[#111827]'>
                {edu.school}
              </h3>
              <p className='text-sm text-[#4B5563]'>{edu.degree}</p>
              <div className='flex items-center justify-between text-xs text-[#6B7280]'>
                <span>
                  {edu.startDate} – {edu.endDate}
                </span>
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default EducationalExp;
