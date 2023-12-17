import Image from 'next/image';
import parse from 'html-react-parser';

export default function AboutUsSection() {
  return (
    <div className="flex w-full justify-center items-center gap-32 mt-20">
      <div className='w-96 flex flex-col gap-10 p-6 lg:p-0'>
        <p
          className='text-center font-bold text-4xl'
        >
          Who are we
        </p>
        <p className='text-left text-lg'>
          We our an Authentic French Bakery. Our aim is to transport customers on a delightful journey to France through our renowned selection of delectable French pastries and culinary delights.
        </p>
      </div>
      <Image
        className='hidden lg:flex object-cover'
        src="/about_us/french.png"
        alt=""
        height={500}
        width={500}
      />
    </div>
  );
};
