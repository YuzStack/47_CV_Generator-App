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
          <PracticalExp isEditing={false} />
          <EducationalExp isEditing={false} />
        </CvEdit>

        <CvPreview>
          <GeneralInfoView generalInfo={generalInfo} />
          <PracticalExpView />
          <EducationalExpView />
        </CvPreview>
      </main>
    </div>
  );
}

export default App;
