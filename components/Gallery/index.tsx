import React from 'react';
import classes from './Gallery.module.scss';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Image from 'next/image';
export default function Gallery({ images }: any) {
  return (
    <div className={classes.card}>
      <PhotoProvider>
        <div className={classes.body_galery}>
          {images?.map((item: string, index: number) => (
            <PhotoView key={index} src={item}>
              <div className={classes.body_img}>
                <Image src={item} layout={'fill'} alt="" />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
}
