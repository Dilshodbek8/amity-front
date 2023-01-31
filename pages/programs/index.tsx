import classes from './style.module.scss';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import ProgramBody from '../../components/Programs/ProgramBody';
export default function Programs() {
  const router = useRouter();
  return (
    <>
      <Header
        title={'Programs'}
        btns={[
          { title: 'International Foundation Program', id: '111' },
          { title: 'Undergraduate', id: '222' },
          { title: 'Postgraduate', id: '333' },
        ]}
      />
      <div className="container">
        <ProgramBody />
      </div>
    </>
  );
}
