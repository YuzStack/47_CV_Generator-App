const GENERAL_INFO = {
  name: 'Yusuf Oyinlola',
  profession: 'Frontend Developer',
  email: 'yuzstackinnovation@gmail.com',
  phone: '+234 706 315 3269',
  location: 'Ilorin, KW',
  isEditing: true,
};

const PRACTICAL_EXP = {
  isEditing: true,
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Softrays IT',
      position: 'Frontend Developer Intern',
      startDate: 'Mar 2025',
      endDate: 'Sep 2025',
      location: 'Ilorin, KW',
      description:
        'Accelerated from foundational web development to building complex React applications. Mastered the "Core Three" (HTML, CSS, JavaScript) and implemented modern workflows with Tailwind CSS and Git to deliver responsive, high-performance user interfaces.',
    },
    {
      id: crypto.randomUUID(),
      company: 'MediSync Solutions',
      position: 'Frontend Developer (Contract/Project)',
      startDate: 'Oct 2025',
      endDate: 'Nov 2025',
      location: 'Ilorin, KW',
      description:
        'Architected a patient-facing dashboard from scratch, utilizing React and Tailwind CSS to enable real-time appointment scheduling and medical record visualization. Implemented complex form validation and state management logic that improved data entry accuracy and reduced user navigation friction by 30%.',
    },
  ],
};

const EDUCATIONAL_EXP = {
  isEditing: true,
  education: [
    {
      id: crypto.randomUUID(),
      school: 'Kwara State University',
      degree: 'Computer Engineering',
      startDate: 'Jan 2021',
      endDate: 'Present',
      location: 'Malete, KW',
    },
  ],
};

export { GENERAL_INFO, PRACTICAL_EXP, EDUCATIONAL_EXP };
