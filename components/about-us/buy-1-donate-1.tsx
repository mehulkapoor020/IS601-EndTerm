import Image from 'next/image';

export default function Buy1Get1Section() {
  return (
    <div id="id-mission" className="flex flex-wrap w-full justify-center items-center gap-32 my-20">
      <Image
        className='p-6 lg:p-0 object-cover'
        src="/about_us/get_1.png"
        alt=""
        height={430}
        width={360}
      />
      <div id="id-missionText" className='p-6 lg:p-0 w-96 flex flex-col gap-10'>
        <p
          className='text-center font-bold text-4xl'
        >
          Our Mission
        </p>
        <p className='text-left text-lg'>
          Our goal is to address hunger through a buy-1-give-1 model. For every item purchased, we commit to donating a corresponding item to the local food bank, contributing to the fight against hunger.
        </p>
      </div>
    </div>
  );
};
