import React from 'react';
import classes from './newscard.module.scss';
import Newscardsingle from './Newcardsingle';
interface NewscardProps {
  datas: Array<{
    date: string;
    img: string;
    categ: string;
    text: string;
  }>;
}

const Newscard = (props: NewscardProps) => {
  return (
    <div className={classes.wrapCards}>
      {props.datas.map((dat: any, i: number) => (
        <Newscardsingle
          key={i}
          date={dat?.date}
          text={dat?.text}
          categ={dat?.categ}
          img={dat.img}
        />
      ))}
    </div>
  );
};

export default Newscard;
