import { useState } from 'react';
import CvEdit from './CvEdit';
import CvPreview from './CvPreview';
import EducationalExp from './EducationalExp';
import EducationalExpView from './EducationalExpView';
import GeneralInfo from './GeneralInfo';
import GeneralInfoView from './GeneralInfoView';
import Nav from './Nav';
import PracticalExp from './PracticalExp';
import PracticalExpView from './PracticalExpView';
import DATA_TEMPLATE from '../data-template';

function App() {
  // General Information ‼️
  // const [generalInfo, setGeneralInfo] = useState({
  //   name: '',
  //   profession: '',
  //   email: '',
  //   phone: '',
  //   location: '',
  //   isEditing: true,
  // });

  const [generalInfo, setGeneralInfo] = useState(DATA_TEMPLATE.generalInfo);

  const handleGenInfoisEditingTogg = function () {
    setGeneralInfo(curGeneralInfo => ({
      ...curGeneralInfo,
      isEditing: !curGeneralInfo.isEditing,
    }));
  };

  const handleGenInfoUpdate = function (newData) {
    setGeneralInfo({ ...newData });
  };

  // Practical Experience ‼️
  // const [practicalExp, setPracticalExp] = useState({
  //   isEditing: true,
  //   experience: [
  //     {
  //       id: crypto.randomUUID(),
  //       company: '',
  //       position: '',
  //       startDate: '',
  //       endDate: '',
  //       location: '',
  //       description: '',
  //     },
  //   ],
  // });

  const [practicalExp, setPracticalExp] = useState(DATA_TEMPLATE.practicalExp);

  const handlePractExpisEditingTogg = function () {
    setPracticalExp(curPractExp => ({
      ...curPractExp,
      isEditing: !curPractExp.isEditing,
    }));
  };

  const handlePractExpUpdate = function (newData) {
    setPracticalExp({ ...newData });
  };

  // Educational Experience ‼️
  // const [educationalExp, setEducationalExp] = useState({
  //   isEditing: true,
  //   education: [
  //     {
  //       id: crypto.randomUUID(),
  //       school: '',
  //       degree: '',
  //       startDate: '',
  //       endDate: '',
  //       location: '',
  //     },
  //   ],
  // });

  const [educationalExp, setEducationalExp] = useState(
    DATA_TEMPLATE.educationalExp,
  );

  const handleEducaExpisEditingTogg = function () {
    setEducationalExp(curPractExp => ({
      ...curPractExp,
      isEditing: !curPractExp.isEditing,
    }));
  };

  const handleEducaExpUpdate = function (newData) {
    setEducationalExp({ ...newData });
  };

  return (
    <div className='min-h-screen bg-[#F3F4F6] text-[#4B5563]'>
      <Nav />
      <main className='mx-auto grid max-w-400 gap-8 p-8 lg:grid-cols-12'>
        <CvEdit>
          <GeneralInfo
            generalInfo={generalInfo}
            onEdit={handleGenInfoisEditingTogg}
            onUpdate={handleGenInfoUpdate}
          />
          <PracticalExp
            practicalExp={practicalExp}
            onEdit={handlePractExpisEditingTogg}
            onUpdate={handlePractExpUpdate}
          />
          <EducationalExp
            educationalExp={educationalExp}
            onEdit={handleEducaExpisEditingTogg}
            onUpdate={handleEducaExpUpdate}
          />
        </CvEdit>

        <CvPreview>
          <GeneralInfoView generalInfo={generalInfo} />
          <PracticalExpView practicalExp={practicalExp} />
          <EducationalExpView educationalExp={educationalExp} />
        </CvPreview>
      </main>
    </div>
  );
}

export default App;
