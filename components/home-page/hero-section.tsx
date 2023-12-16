"use client"
import { Button } from '@nextui-org/react';
import Link from 'next/link';


type HeroSectionProps = {
  content: string;
  bg_url: string;
  btn: string;
  sub_heading: string;
};

export default function HeroSection() {
  return (
    <div className="h-fit">
      <div className='w-full text-white absolute z-10 h-full flex flex-col justify-center items-center gap-20'>
        <div>
          <p
            className='w-fit text-3xl sm:text-7xl font-bold text-center leading-tight'
          >
            hi
          </p>
        </div>
        <div className='md:w-fit flex gap-10 md:gap-52 justify-center md:justify-end flex-col md:flex-row'>
          <p className='text-lg md:text-2xl font-bold'>Text</p>
          <Button
            className="text-black font-bold shadow-2xl shadow-amber-700"
            size="lg"
            color="warning"
            as={Link}
            href="http://eepurl.com/iFDbkc"
            variant="solid"
          >
            Button
          </Button>
        </div>
      </div>
      <video className='absolute inset-0 object-cover w-full h-screen' autoPlay loop muted>
        <source src="#" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};
