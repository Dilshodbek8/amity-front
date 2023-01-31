import classes from './style.module.scss';
import MainTitle from '../../components/Maintitle';
import TextInput from '../../components/TextField';
import MySelect from '../../components/MySelect';
import MyButton from '../../components/MyButton';
export default function Apply() {
  return (
    <div>
      <div className={classes.body}>
        <div className="container">
          <MainTitle
            title="Online Application Form"
            subtitle="Please ensure all details are entered as they appear in your passport ( * ) Mandatory fields"
          />
          <p className={classes.red}>
            If the data entered is incorrect, you will not be allowed to take
            the exam! Если внесенные данные будут не правильными, не будете
            допускаться до экзамена! Agar kiritilgan ma`lumotlar noto`g`ri
            bo`lsa, imtihon topshirishga ruxsat berilmaydi!
          </p>
          <MainTitle title="Applicant Details" />
        </div>
        <form action="">
          <div className="container">
            <div className={classes.body_inputs}>
              <TextInput label="First Name" radius="20" />
              <TextInput label="Middle Name *" radius="20" />
              <TextInput label="Last Name *" radius="20" />
              <MySelect
                label="Gender"
                radius="20"
                options={[
                  {
                    label: 'I am Male',
                    value: 'male',
                  },
                  { label: 'I am Female', value: 'female' },
                ]}
              />
              <TextInput label="Date Of Birth *" radius="20" />
              <MySelect
                label="Nationality"
                radius="20"
                options={[
                  {
                    label: 'Uzbek',
                    value: 'uzbek',
                  },
                  { label: 'Russian', value: 'russian' },
                  { label: 'Ukrainian', value: 'ukraine' },
                ]}
              />
              <TextInput label="Current Address" radius="20" />
              <MySelect
                label="Country"
                radius="20"
                options={[
                  {
                    label: 'Uzbekistan',
                    value: 'uzbek',
                  },
                  { label: 'Russia', value: 'russian' },
                  { label: 'Ukraina', value: 'ukraine' },
                ]}
              />
              <TextInput label="Passport series" radius="20" />
              <TextInput label="Passport Number" radius="20" />
              <TextInput label="Email" radius="20" />
              <TextInput label="Mobile Phone Number*" radius="20" />
              <MySelect
                label="Region"
                radius="20"
                options={[
                  {
                    label: 'Sergeli',
                    value: 'sergeli',
                  },
                  { label: 'Yunsobod', value: 'yunsobod' },
                ]}
              />
            </div>
            <MainTitle title="Parent's Details" />
            <div className={classes.body_inputs}>
              <TextInput label="First Name" radius="20" />
              <TextInput label="Middle Name *" radius="20" />
              <TextInput label="Last Name *" radius="20" />
              <MySelect
                label="Relation"
                radius="20"
                options={[
                  {
                    label: 'Father',
                    value: 'father',
                  },
                  { label: 'Mother', value: 'mother' },
                ]}
              />

              <TextInput label="Mobile Phone Number*" radius="20" />
              <TextInput label="Additional Mobile Phone Number*" radius="20" />
            </div>
            <div className={classes.body_content}>
              <MainTitle title="Programme applying for" />
              <div>
                <p>
                  You have finished 11 years of education &gt;&gt;&gt;&gt;&gt;
                  IFS
                </p>
                <p>
                  You have finished 12 years of education &gt;&gt;&gt;&gt;&gt;
                  Bachelor`s degree programs
                </p>
                <p>
                  You have bachelor`s diploma &gt;&gt;&gt;&gt;&gt; Master`s
                  degree programs
                </p>
              </div>
              <MySelect
                label="Programme*"
                radius="20"
                options={[
                  { label: 'IFS', value: 'ifs' },
                  { label: "Bachelor's degree", value: "Bachelor's degree" },
                  { label: "Master's degree", value: " Master's degree" },
                ]}
              />
              <MainTitle title="Preferred Exam Date" />
              <MySelect
                label="Programme*"
                radius="20"
                options={[
                  { label: '01/03/2023', value: '01/03/2023' },
                  { label: '01/04/2023', value: '01/04/2023' },
                  { label: '01/05/2023', value: ' 01/05/2023' },
                ]}
              />
              <MainTitle title="Do You Have IELTS, TOEFL, or CEFR ?" />
              <div className={classes.body_content_check}>
                <div>
                  <label className={classes.yes} htmlFor="yes_ielts">
                    Yes
                  </label>
                  <input
                    className={classes.yes}
                    type="radio"
                    id="yes_ielts"
                    name="ielts_exists"
                  />
                </div>
                <div>
                  <label className={classes.no} htmlFor="no_ielts">
                    No
                  </label>
                  <input
                    className={classes.no}
                    type="radio"
                    id="no_ielts"
                    name="ielts_exists"
                  />
                </div>
              </div>
              <p className={classes.red}>
                If you do not have any English-language certificates as proof of
                your proficiency in English, you will be eligible to take our
                internal English exam!
              </p>
              <MainTitle title="English Requirements" />
              <h2>Minimum IELTS (5.0 or 5.0+) </h2>
              <h2>Minimum TOEFL (35-40 or 40+) </h2>
              <h2>Minimum CEFR (B1 or B1+) </h2>
              <div className={classes.body_select}>
                <MySelect
                  radius="20"
                  label="certificate"
                  options={[
                    { label: 'IELTS', value: 'ielts' },
                    { label: 'TOEFl', value: 'toefl' },
                    { label: 'CEFR', value: 'cefr' },
                  ]}
                />
                <MySelect
                  radius="20"
                  label="Band Score"
                  options={[
                    { label: '5.5', value: '5.5' },
                    { label: '6', value: '6' },
                    { label: '6.5', value: '6.5' },
                  ]}
                />
              </div>
              <MainTitle title="Are you seeking to transfer from another university?" />
              <div className={classes.body_content_check}>
                <div>
                  <label className={classes.yes} htmlFor="yes_transfer">
                    Yes
                  </label>
                  <input
                    className={classes.yes}
                    type="radio"
                    id="yes_transfer"
                    name="transfer_exists"
                  />
                </div>
                <div>
                  <label className={classes.no} htmlFor="no_transfer">
                    No
                  </label>
                  <input
                    className={classes.no}
                    type="radio"
                    id="no_transfer"
                    name="transfer_exists"
                  />
                </div>
              </div>
              <MainTitle title="Do you need a university sponsored student visa?" />
              <div className={classes.body_content_check}>
                <div>
                  <label className={classes.yes} htmlFor="yes_visa">
                    Yes
                  </label>
                  <input
                    className={classes.yes}
                    type="radio"
                    id="yes_visa"
                    name="visa_exists"
                  />
                </div>
                <div>
                  <label className={classes.no} htmlFor="no_visa">
                    No
                  </label>
                  <input
                    className={classes.no}
                    type="radio"
                    id="no_visa"
                    name="visa_exists"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.declaration}>
            <div className="container">
              <h2>Declaration</h2>
              <input type="checkbox" id="declaration" />

              <label htmlFor="declaration">
                <span> You must select this box to proceed. </span> I confirm
                that all information given in this application is true, complete
                and correct. I understand that my application and any subsequent
                offer may be withdrawn by Amity if the information I have given
                is inaccurate.
              </label>
            </div>
          </div>
          <div className="container">
            <MyButton title="Submit" fullWidth />
          </div>
        </form>
      </div>
    </div>
  );
}
