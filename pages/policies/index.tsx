import classes from './style.module.scss';
import MiniLayout from '../../components/MiniLayout';
import MainTitle from '../../components/Maintitle';
export default function Policies() {
  return (
    <MiniLayout title={'School Policies & Documents'}>
      <div className={classes.body}>
        <h2>
          Amity International School operates a number of policies and
          regulations to guarantee the safety and wellbeing of its pupils, staff
          and wider community.
        </h2>
        <p>
          Our policies also help us pursue our mission and goals and ensure we
          provide the best possible care to all children.
        </p>
        <MainTitle textposition="left" title={'Our Policies'} />
        <p>
          Our key policies and documents are available for you to view below.
        </p>
        <p>
          Should you have any questions regarding any of our policies, please
          email info@amityabudhabi.ae.
        </p>
        <ul>
          <li>
            <a href="">Safeguarding and Child Protection Policy</a>
          </li>
          <li>
            <a href="">Cyber Safety Policy</a>
          </li>
          <li>
            <a href="">Uniform Policy</a>
          </li>
          <li>
            <a href="">Anti-bullying Policy</a>
          </li>
          <li>
            <a href="">Healthy Eating Guidelines</a>
          </li>
          <li>
            <a href="">Tuition Fees Policy</a>
          </li>
          <li>
            <a href="">Admissions Policy</a>
          </li>
          <li>
            <a href="">Complaints Policy</a>
          </li>
          <li>
            <a href="">Students Behaviour and Expulsion Policy</a>
          </li>
          <li>
            <a href="">Absence and Attendance Policy</a>
          </li>
          <li>
            <a href="">Family Referral Programme Terms & Conditions</a>
          </li>
          <li>
            <a href="">Parent Handbook</a>
          </li>
        </ul>
        <MainTitle textposition="left" title={'Useful Forms'} />
        <ul>
          <li>
            <a href="">Early Pickup Form</a>
          </li>
          <li>
            <a href="">Planned Absence Request</a>
          </li>
        </ul>
      </div>
    </MiniLayout>
  );
}
