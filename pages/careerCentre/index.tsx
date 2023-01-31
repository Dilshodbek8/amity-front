import classes from './style.module.scss';
import Header from '../../components/Header';
import MyTable from '../../components/MyTable';
import MyTab from '../../components/MyTab';
export default function CareerCentre() {
  const cols = [
    { name: 'Frozen yoghurt', count: 159, price: 66.0, year: 24 },
    { name: 'Ice cream sandwich', count: 237, price: 29.0, year: 21 },
    { name: 'Cupcake', count: 159, price: 83.0, year: 31 },
    { name: 'Gingerbread', count: 159, price: 62.0, year: 45 },
  ];

  return (
    <>
      <Header title={'Career Centre'} white />
      <div className="container">
        <div className={classes.body}>
          <MyTab
            titles={['About Career Center', 'MOU', 'Internship', 'Contacts']}
            components={[
              <MyTable
                key={'1'}
                rows={['Name', 'Count', 'Price', 'Date']}
                cols={cols}
                fields={['name', 'count', 'price', 'year']}
              />,
            ]}
          />
        </div>
      </div>
    </>
  );
}
