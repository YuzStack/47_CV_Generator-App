import CvEdit from './CvEdit';
import CvPreview from './CvPreview';
import GeneralInfo from './GeneralInfo';
import Nav from './Nav';

const App = function () {
  return (
    <div className='min-h-screen bg-[#F3F4F6] text-[#4B5563]'>
      <Nav />
      <main className='mx-auto grid max-w-400 gap-8 lg:grid-cols-12 lg:p-8'>
        <CvEdit>
          <GeneralInfo />
        </CvEdit>

        <CvPreview></CvPreview>
      </main>
    </div>
  );
};

export default App;
