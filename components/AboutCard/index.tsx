import React from 'react';
import classes from './AboutCard.module.scss';
import MainTitle from '../Maintitle';
export default function AboutCard() {
  return (
    <div className={classes.card}>
      <div className={classes.card_img}></div>
      <div className={classes.card_text}>
        <MainTitle
          minititle="Campus"
          title={'A campus unlike any other '}
          textposition="left"
          style="whitetitle"
        />
        <p>
          We are a multifaceted university in Tashkent, committed to delivering
          world-class education and research. At Amity University Tashkent
          Campus, you’ll gain more than just an outstanding education, you’ll be
          exposed to a world of opportunities and learn from faculty who are
          masters in their field.
        </p>
        <p>
          The Campus is located in Tashkent and has its hostel next to the
          Campus. As you immerse yourself in this community, you will find
          student resources, services, and a constant stream of fun activities
          and excursions that will make your studies truly memorable. Watch the
          video to learn more about facilities and meet our admissions
          representative to learn more about our degree programs and decide what
          suits best for you.
        </p>
      </div>
    </div>
  );
}
