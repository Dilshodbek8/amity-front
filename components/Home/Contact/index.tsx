import classes from './Contact.module.scss';
import MainTitle from '../../Maintitle';
import ContactCard, { CardProps } from '../ContactCard';
import TextInput from '../../TextField';
import MyButton from '../../MyButton';
export default function Contact() {
  const data = [
    {
      icon: 'message.svg',
      title: 'Email us:',
      text: 'admission@amity.uz',
      link: 'mailto: admission@amity.uz',
    },
    {
      icon: 'tel.svg',
      title: 'Call us:',
      text: 'Tel. +998712079006',
      link: 'tel: +998712079006',
    },
    {
      icon: 'location.svg',
      title: 'Address:',
      text: 'Tashkent City, Street Labzak, Building-70, 100028, Uzbekistan',
    },
    {
      icon: 'chat.svg',
      title: 'Join us:',
      text: '@amityTashkent',
      link: '',
    },
  ];
  return (
    <div className={classes.body}>
      <div className="container">
        <MainTitle
          title="Get In Touch"
          minititle="Contact Us"
          subtitle="If you have any questions, please don’t hesitate to contact us."
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
          <div className={classes.cards_right}>
            <div className={classes.cards_right_top}>
              <TextInput fullWidth={true} label={'Your name'} radius={'40'} />
              <TextInput
                fullWidth={true}
                label={'Subject Title'}
                radius={'40'}
              />
            </div>
            <div className={classes.cards_right_bottom}>
              <TextInput
                label={'Your message'}
                multiline
                rows={7}
                radius={'40'}
              />
              <span>
                <input type="checkbox" id="privacy" />{' '}
                <label htmlFor="privacy">
                  Accept Terms & Conditions and Privacy Policy.
                </label>
              </span>
              <MyButton title={'Send Message'} />
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5991.8011524143085!2d69.26010175023194!3d41.33277529013138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf23c3817c486d743!2sAmity%20University%20Tashkent!5e0!3m2!1sru!2s!4v1668331048665!5m2!1sru!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy={'no-referrer-when-downgrade'}
      ></iframe>
    </div>
  );
}
