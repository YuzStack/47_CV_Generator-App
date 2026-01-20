import CvEdit from './CvEdit';
import CvPreview from './CvPreview';
import EducationalExp from './EducationalExp';
import EducationalExpView from './EducationalExpView';
import GeneralInfo from './GeneralInfo';
import GeneralInfoView from './GeneralInfoView';
import Nav from './Nav';
import PracticalExp from './PracticalExp';
import PracticalExpView from './PracticalExpView';

const App = function () {
  return (
    <div className='min-h-screen bg-[#F3F4F6] text-[#4B5563]'>
      <Nav />
      <main className='mx-auto grid max-w-400 gap-8 p-8 lg:grid-cols-12'>
        <CvEdit>
          <GeneralInfo isEditing={false} />
          <PracticalExp isEditing={false} />
          <EducationalExp isEditing={false} />
        </CvEdit>

        <CvPreview>
          <GeneralInfoView />
          <PracticalExpView />
          <EducationalExpView />
        </CvPreview>
      </main>
    </div>
  );
};

export default App;
