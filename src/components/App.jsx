import { useRef, useState } from 'react';
import CvEdit from './CvEdit';
import CvPreview from './CvPreview';
import EducationalExp from './EducationalExp';
import EducationalExpView from './EducationalExpView';
import GeneralInfo from './GeneralInfo';
import GeneralInfoView from './GeneralInfoView';
import Nav from './Nav';
import PracticalExp from './PracticalExp';
import PracticalExpView from './PracticalExpView';
import {
  EDUCATIONAL_EXP,
  GENERAL_INFO,
  PRACTICAL_EXP,
} from '../data-templates';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

  const [generalInfo, setGeneralInfo] = useState(GENERAL_INFO);

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

  const [practicalExp, setPracticalExp] = useState(PRACTICAL_EXP);

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

  const [educationalExp, setEducationalExp] = useState(EDUCATIONAL_EXP);

  const handleEducaExpisEditingTogg = function () {
    setEducationalExp(curPractExp => ({
      ...curPractExp,
      isEditing: !curPractExp.isEditing,
    }));
  };

  const handleEducaExpUpdate = function (newData) {
    setEducationalExp({ ...newData });
  };

  // Export to PDF feature ‼️
  const previewRef = useRef();

  const handleDownload = async function () {
    const element = previewRef.current;

    // 1. Capture the element as a canvas (image)
    const canvas = await html2canvas(element, { scale: 2 }); // scale: 2 for high quality
    const imgData = canvas.toDataURL('image/png');

    // 2. Create pdf (a4 size)
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    // 3. Add image to PDF and save
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('my-resume.pdf');
  };

  return (
    <div className='min-h-screen bg-[#F3F4F6] text-[#4B5563]'>
      <Nav onDownload={handleDownload} />
      <main className='mx-auto grid max-w-400 gap-8 p-6 lg:grid-cols-12 lg:p-8'>
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

        <CvPreview previewRef={previewRef}>
          <GeneralInfoView generalInfo={generalInfo} />
          <PracticalExpView practicalExp={practicalExp} />
          <EducationalExpView educationalExp={educationalExp} />
        </CvPreview>
      </main>
    </div>
  );
}

export default App;
