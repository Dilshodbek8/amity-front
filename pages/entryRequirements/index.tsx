import classes from './style.module.scss';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import MyTable from '../../components/MyTable';
import MainTitle from '../../components/Maintitle';
export default function News() {
  const links = [
    { href: '/applicationProcess', rel: 'Application Process' },
    { href: '/entryRequirements', rel: 'Entry Requirements' },
    { href: '/fees', rel: 'Fees' },
  ];
  const cols = [
    {
      date: 'May 24-26, 2022 (Tuesday to Thursday)',
      program: 'All Programs',
      mode: 'Written Test and Interview',
      time: 'Exact date and time will be informed on your application portal',
    },
    {
      date: 'July 12-14, 2022 (Tuesday to Thursday)',
      program: 'All Programs',
      mode: 'Written Test and Interview',
      time: 'Exact date and time will be informed on your application portal',
    },
    {
      date: 'Aug 24-25,2022 (Wednesday to Thursday)',
      program: 'All Programs',
      mode: 'Written Test and Interview',
      time: 'Exact date and time will be informed on your application portal',
    },
  ];
  const cols2 = [
    {
      sno: '1.',
      program: 'International Foundation Studies',
      click: {
        text: 'International Foundation Studies Sample Paper',
        link: 'https://amity.uz/wp-content/uploads/2021/02/B.Tech.(CSE)_Sample_Paper.pdf',
      },
    },
    {
      sno: '2.',
      program: 'International Foundation Studies',
      click: {
        text: 'International Foundation Studies Sample Paper',
        link: 'https://amity.uz/wp-content/uploads/2021/02/B.Tech.(CSE)_Sample_Paper.pdf',
      },
    },
    {
      sno: '3.',
      program: 'International Foundation Studies',
      click: {
        text: 'International Foundation Studies Sample Paper',
        link: 'https://amity.uz/wp-content/uploads/2021/02/B.Tech.(CSE)_Sample_Paper.pdf',
      },
    },
  ];
  return (
    <>
      <Header title={'Entry Requirements'} />
      <div className="container">
        <div className={classes.body}>
          <div>
            <MyTable
              rows={['Date', 'Program', 'Mode of Exam', 'Timings']}
              cols={cols}
              fields={['date', 'program', 'mode', 'time']}
            />
            <MainTitle title="Entrance Test Sample Papers" />
            <MyTable
              rows={['SNo.', 'Program', 'Click here to Download']}
              cols={cols2}
              fields={['sno', 'program', 'click']}
            />
          </div>
          <div className={classes.body_links}>
            <Navigation links={links} />
          </div>
        </div>
      </div>
    </>
  );
}
