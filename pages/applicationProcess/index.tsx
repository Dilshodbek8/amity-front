import classes from './style.module.scss';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
export default function News() {
  const links = [
    { href: '/applicationProcess', rel: 'Application Process' },
    { href: '/entryRequirements', rel: 'Entry Requirements' },
    { href: '/fees', rel: 'Fees' },
  ];
  return (
    <>
      <Header title={'Application Process'} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_card}>
            <p>
              Amity students are able to choose from an abundance of
              conventional and contemporary courses that are taught by lecturers
              who are masters in their field. Guest lecturers who are leading
              professionals in their industry further enhance each course.
            </p>
            <p>
              Every graduate leaves Amity University in Tashkent equipped with a
              wealth of knowledge and practical experience in their field, as
              well as the relevant skills needed to secure a highly successful
              career.
            </p>
            <p>
              Our Admissions Counsellors are here to guide you through the
              application process. They are extremely knowledgeable about the
              program on offer and can arrange for you to meet with faculty
              members to ensure that you make the right choice for your future
              career.
            </p>
            <h1>ADMISSION PROCEDURE</h1>
            <p>
              Click on <a href="">Apply now</a> to create your personal
              application profile, fill the application form and and upload
              scanned version of the following documents mentioned below.
            </p>
            <p className={classes.body__italic}>
              Note: Your personal profile in the Admission system of Amity
              University in Tashkent is the only way to communicate between you
              as an applicant and the University. All important information and
              news regarding your status are sent by and saved in the system.
              Therefore, we strongly advise you to check your personal account
              regularly in the admission system for any important updates.
            </p>
            <h6>International Foundation Studies</h6>
            <ul>
              <li>
                Proof of total 11 or 12 years of Secondary Education
                (Diploma/transcript)
              </li>
              <li>Passport copy</li>
              <li>Photography 3*4</li>
              <li>IELTS Certificate (Optional)</li>
            </ul>
            <h6>For Undergraduate programs:</h6>

            <h6>B.Tech. (CSE)/B.Sc. (IT)</h6>

            <ul>
              <li>
                Proof of total 12 years of Secondary Education
                (Diploma/transcript)
              </li>
              <li>Passport copy</li>
              <li>Photography 3*4</li>
              <li>IELTS 5 or higher (TOEFL 35-45, CEFR B1)</li>
            </ul>

            <h6>B.A. (Hons.)(Economics)/ B.A. (Tourism Admin)/BBA</h6>

            <ul>
              <li>
                Proof of total 12 years of Secondary Education
                (Diploma/transcript)
              </li>
              <li>Passport copy</li>
              <li>Photography 3*4</li>
              <li>IELTS 5 or higher (TOEFL 60-78, CEFR B1)</li>
            </ul>

            <h6>For postgraduate programs:</h6>
            <h6>M.Sc. (IT)</h6>
            <ul>
              <li>
                Undergraduate Degree in Computer Science/Information
                Technology/Electronics/Telecommunications
              </li>
              <li>Passport copy</li>
              <li>Photography 3*4</li>
              <li>IELTS 5 or higher (TOEFL 35-45, CEFR B1)</li>
            </ul>

            <p>
              Once completed, your application and admission tests will be
              assessed by the Admissions Committee and, for successful
              candidates, an offer will be made.
            </p>
            <p>
              Please review your offer letter carefully as it will outline the
              program you have been admitted to, the start date, tuition fees,
              method of payments, refund policy and other important information.
            </p>
            <p>
              The offer letter can be accepted on the payment of a registration
              and tuition fees.
            </p>
          </div>
          <div className={classes.body_links}>
            <Navigation links={links} />
          </div>
        </div>
      </div>
    </>
  );
}
