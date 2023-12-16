"use client"
import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import parse from 'html-react-parser';

type CTASectionProps = {
  content: string;
  image: string;
  btn: string;
  heading: string;
};

export default function CTASection(
  { content, image, btn, heading }: CTASectionProps
) {

  return (
    <div id='' className="max-w-5xl mx-auto mt-[900px] flex flex-col justify-center items-center my-10 p-10 gap-10 rounded-3xl">
      <Image
        src={image}
        alt=""
        width={463}
        height={353}
      />
      <div className='flex flex-col justify-center items-center gap-12'>
        <p className='font-extrabold text-3xl'>{parse(heading)}</p>
        <p className='text-xl text-center'>{parse(content)}</p>
        <Button
          className="text-white font-bold shadow-2xl bg-black"
          size="lg"
          as={Link}
          href="http://eepurl.com/iFDbkc"
          variant="solid"
        >
          {btn}
        </Button>
      </div>
    </div>
  );
}
