import classes from './style.module.scss';
import MiniLayout from '../../components/MiniLayout';
import MyTab from '../../components/MyTab';
import Image from 'next/image';
export default function Alumni() {
  return (
    <MiniLayout title={'Alumni'}>
      <MyTab
        titles={['2022', '2021']}
        components={[
          <div key={'1'} className={classes.body}>
            <div className={classes.body_img}>
              <Image
                src={'/media/images/campus.jfif'}
                layout="fill"
                alt="campus"
              />
            </div>
            <p>
              Our Dubai campus is more than just a space to learn, it is an
              innovative, iconic, vibrant, sustainable, and forward-looking
              global higher education institution, that has been designed to
              attract the best and brightest students and faculty, nurture
              talent, and promote collaboration, creativity and research.
            </p>
            <p>
              The complex project includes interconnecting free-flowing spaces
              that promote collaboration, creativity, research and innovation.
              The University programmes include – schools for business,
              engineering, arts, humanities, applied sciences, arts, law,
              architecture, interior design, media and hospitality. The
              University provides an environment complete with an academic
              building, hostel (residential) facilities and state-of-the-art
              amenities including an Olympic size athletic track and sports
              field. Concept designer Canon Design’s iconic design is responsive
              to local culture, context and ecology, and provides an environment
              for students to learn and grow. Incorporating intelligent control
              systems, green building regulations and energy cost and
              time-saving techniques, the Amity University campus is a campus
              unlike any other.
            </p>
          </div>,
          <div key={'2'} className={classes.body}>
            <h2>2021</h2>
            <div className={classes.body_img}>
              <Image
                src={'/media/images/campus.jfif'}
                layout="fill"
                alt="campus"
              />
            </div>
            <p>
              Our Dubai campus is more than just a space to learn, it is an
              innovative, iconic, vibrant, sustainable, and forward-looking
              global higher education institution, that has been designed to
              attract the best and brightest students and faculty, nurture
              talent, and promote collaboration, creativity and research.
            </p>
            <p>
              The complex project includes interconnecting free-flowing spaces
              that promote collaboration, creativity, research and innovation.
              The University programmes include – schools for business,
              engineering, arts, humanities, applied sciences, arts, law,
              architecture, interior design, media and hospitality. The
              University provides an environment complete with an academic
              building, hostel (residential) facilities and state-of-the-art
              amenities including an Olympic size athletic track and sports
              field. Concept designer Canon Design’s iconic design is responsive
              to local culture, context and ecology, and provides an environment
              for students to learn and grow. Incorporating intelligent control
              systems, green building regulations and energy cost and
              time-saving techniques, the Amity University campus is a campus
              unlike any other.
            </p>
          </div>,
        ]}
      />
    </MiniLayout>
  );
}
