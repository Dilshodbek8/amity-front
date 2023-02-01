import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import cn from "./style.module.scss";
import MainTitle from "./../../components/Maintitle";
import { GetFaqs } from "./../../api";
export default function News() {
  let { data: faqs } = GetFaqs({ limit: 100, offset: 0 });
  console.log(faqs?.data?.data);

  return (
    <>
      <Header title={"FAQ"} />
      <div className="container">
        <div className={cn.body}>
          <MainTitle title="Frequently Asked Questions" />
          {faqs?.data?.data?.map((e: any, i: number) => (
            <Accordion key={i}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={`panel1a-content`}
              >
                <Typography>{e.title.uz}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{e.description.uz}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}
