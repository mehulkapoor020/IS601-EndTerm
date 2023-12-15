"use client"
import { Button } from '@nextui-org/react';
import Link from 'next/link';


type HeroSectionProps = {
  content: string;
  bg_url: string;
  btn: string;
  sub_heading: string;
};

export default function HeroSection({ content, bg_url, btn, sub_heading }: HeroSectionProps) {
  return (
    <div className="h-fit">
      <div className='w-full text-white absolute z-10 h-full flex flex-col justify-center items-center gap-20'>
        <div>
          <p
            className='w-fit text-3xl font-bold text-center leading-tight'
          >
            Text
          </p>
        </div>
        <div className='flex gap-10 justify-center flex-col'>
          <p className='text-lg font-bold'>text</p>
          <Button
            className="text-black font-bold shadow-2xl shadow-amber-700"
            size="lg"
            color="warning"
            as={Link}
            href="http://eepurl.com/iFDbkc"
            variant="solid"
          >
            {btn}
          </Button>
        </div>
      </div>
      <video className='absolute inset-0 object-cover w-full h-screen' autoPlay loop muted>
        <source src={bg_url} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};
