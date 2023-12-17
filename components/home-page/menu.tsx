import { Card, CardBody, CardFooter } from '@nextui-org/react';
import Image from 'next/image';
import MenuItem from './menu-item'
import { MenuProps } from './menu-item';

export default function Menu({ menu }: { menu: Array<MenuProps> }) {
  return (
    <div id='menu' className="py-36 max-w-5xl flex flex-col justify-center items-center gap-7 m-auto">
      <p className='my-20 font-bold text-4xl'>Chef's Special</p>
      <div className="flex gap-10 lg:gap-4 flex-wrap lg:flex-nowrap justify-center p-6 md:p-0">
        {menu.map((item, index) => (
          <MenuItem key={index} menu={item} />
        ))}
      </div>
    </div>
  );
}