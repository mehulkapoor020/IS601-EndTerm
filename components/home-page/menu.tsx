import { Card, CardBody, CardFooter } from '@nextui-org/react';
import Image from 'next/image';
import MenuItem from './menu-item'
import { MenuProps } from './menu-item';

export default function Menu({ menu }: { menu: Array<MenuProps> }) {
  return (
    <div id='menu' className="py-10 max-w-5xl m-auto flex flex-col justify-center items-center gap-7">
      <p className='my-10 font-bold text-4xl'>Chef's Special</p>
      <div className="flex gap-10 lg:gap-4 flex-wrap lg:flex-nowrap justify-center">
        {menu.map((item, index) => (
          <MenuItem key={index} menu={item} />
        ))}
      </div>
    </div>
  );
}