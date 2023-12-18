"use client"
import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import parse from 'html-react-parser';
import { useAnalyticsEventTracker } from '../../lib/gtagHelper';

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
    <div id='' className="max-w-5xl mx-auto mt-[900px] lg:mt-[1000px] flex flex-col lg:flex-row justify-center items-center lg:bg-[#FF9C6A] my-10 p-10 gap-10 rounded-3xl">
      <Image id="id-bakers-image"
        src={image}
        alt=""
        width={463}
        height={353}
      />
      <div className='flex flex-col justify-center items-center gap-12'>
        <p id="id-bakers-heading" className='font-extrabold text-3xl'>{parse(heading)}</p>
        <p id="id-bakers-Subtext" className='text-xl text-center'>{parse(content)}</p>
        <Button id="id-bakers-Button"
          className="text-white font-bold shadow-2xl lg:shadow-amber-700 bg-black"
          size="lg"
          as={Link}
          href="http://eepurl.com/iFDbkc"
          variant="solid"
          onClick={() => useAnalyticsEventTracker('landing-page', 'CTA clicked', 'landing-page')}
        >
          {btn}
        </Button>
      </div>
    </div>
  );
}
