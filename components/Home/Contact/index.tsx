import classes from "./Contact.module.scss";
import MainTitle from "../../Maintitle";
import ContactCard, { CardProps } from "../ContactCard";
import TextInput from "../../TextField";
import MyButton from "../../MyButton";
import { useTranslation } from "next-i18next";
import { PostMessage } from "./../../../api";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
  const { t } = useTranslation();
  const post = PostMessage();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      title: "",
      message: "",
      status: "pending",
    },
  });

  const onSubmit = (data: any) => {
    post.mutate(
      //@ts-ignore
      { ...data },
      {
        onSuccess() {
          toast.success("Succefully send");
          reset({ name: "", phone: "", message: "", title: "" });
        },
      }
    );
  };
  const data = [
    {
      icon: "message.svg",
      title: "Email us:",
      text: "admission@amity.uz",
      link: "mailto: admission@amity.uz",
    },
    {
      icon: "tel.svg",
      title: "Call us:",
      text: "Tel. +998712079006",
      link: "tel: +998712079006",
    },
    {
      icon: "location.svg",
      title: "Address:",
      text: "Tashkent City, Street Labzak, Building-70, 100028, Uzbekistan",
      link: "https://goo.gl/maps/es5eMqDFqt9UDCcT6",
    },
    {
      icon: "chat.svg",
      title: "Join us:",
      text: "@amityTashkent",
      link: "https://t.me/AmityUniversityTashkent",
    },
  ];
  return (
    <div className={classes.body}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container">
        <MainTitle
          title={t("Get In Touch")}
          minititle={t("Contact Us")}
          subtitle={t(
            "If you have any questions, please don’t hesitate to contact us."
          )}
        />
        <div className={classes.cards}>
          <div className={classes.cards_left}>
            {data.map((d: CardProps, i: number) => (
              <ContactCard
                key={i}
                icon={d?.icon}
                text={d?.text}
                title={d?.title}
                link={d?.link}
              />
            ))}
          </div>
          <div>
            <form
              className={classes.cards_right}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={classes.cards_right_top}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      fullWidth={true}
                      label={"Your name"}
                      radius={"40"}
                    />
                  )}
                />
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      fullWidth={true}
                      label={t("Subject Title")}
                      radius={"40"}
                    />
                  )}
                />
              </div>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    fullWidth={true}
                    label={t("Phone Number")}
                    radius={"40"}
                  />
                )}
              />
              <div className={classes.cards_right_bottom}>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      label={t("Your message")}
                      multiline
                      rows={7}
                      radius={"40"}
                    />
                  )}
                />
                {/* <span>
                  <input type="checkbox" id="privacy" />
                  <label htmlFor="privacy">
                    {t("Accept Terms & Conditions and Privacy Policy.")}
                  </label>
                </span> */}
                <MyButton type="submit" title={"Send Message"} />
              </div>
            </form>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5991.8011524143085!2d69.26010175023194!3d41.33277529013138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf23c3817c486d743!2sAmity%20University%20Tashkent!5e0!3m2!1sru!2s!4v1668331048665!5m2!1sru!2s"
        title="location map"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy={"no-referrer-when-downgrade"}
      ></iframe>
    </div>
  );
}
