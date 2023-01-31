import classes from './style.module.scss';
import MiniLayout from '../../components/MiniLayout';
import Programs from '../../components/Info';
import Image from 'next/image';
export default function AdmissionsProcess() {
  const programs = [
    'Cater to the individual needs of every child (student-centred).',
    'Generate remarkable levels of academic progress.  ',
    'Foster a global mindset, with an awareness and respect for other cultures and ways of thinking. ',
    'Are highly transferable. We work hard to help our pupils and their families to seamlessly transition between countries and different curriculums with as minimal disruption as possible. ',
  ];
  return (
    <>
      <MiniLayout title={'Admissions Process'}>
        <div className={classes.body}>
          <h2>
            Thank you for choosing Amity International school. Choosing the
            right school for your child is one of the most important decisions
            any parent will ever make.
          </h2>
          <h2>
            The admissions team will guide you, as our future parents, through a
            smooth student onboarding process.
          </h2>
          <div className={classes.body_img}>
            <Image
              src={'/media/images/admission.jfif'}
              layout="fill"
              alt="campus"
            />
          </div>
          <Programs title="How to apply" titles={programs} />
        </div>
      </MiniLayout>
    </>
  );
}
