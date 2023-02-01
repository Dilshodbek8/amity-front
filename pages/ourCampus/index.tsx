import classes from "./style.module.scss";
import MiniLayout from "../../components/MiniLayout";
import Image from "next/image";
import Gallery from "../../components/Gallery";

const images = [
  "/media/images/campus.jpg",
  "/media/images/campus2.jpg",
  "/media/images/campus3.jpg",
  "/media/images/campus4.jpg",
];
export default function OurCampus() {
  return (
    <div>
      <MiniLayout title={"Our Campus"}>
        <div className={classes.body}>
          <div className={classes.body_img}>
            <Image
              src={"/media/images/campus.jpg"}
              layout="fill"
              alt="campus"
            />
          </div>
          <p>
            We are a multifaceted university in Tashkent, committed to
            delivering world-class education and research. At Amity University
            Tashkent Campus, you’ll gain more than just an outstanding
            education, you’ll be exposed to a world of opportunities and learn
            from faculty who are masters in their field.
          </p>
          <div className={classes.body_video}>
            <iframe
              width="100%"
              height="220"
              src="https://www.youtube.com/embed/sptn39x6U94"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <p>
              The Campus is located in Tashkent and has its hostel next to the
              Campus. As you immerse yourself in this community, you will find
              student resources, services, and a constant stream of fun
              activities and excursions that will make your studies truly
              memorable. Watch the video to learn more about facilities and meet
              our admissions representative to learn more about our degree
              programs and decide what suits best for you.
            </p>
          </div>
        </div>
      </MiniLayout>
      <div className="container">
        <Gallery images={images} />
      </div>
    </div>
  );
}
