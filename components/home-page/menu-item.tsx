import { Card, CardBody, CardFooter } from '@nextui-org/react';
import Image from 'next/image';

export type MenuProps = {
  image: string;
  name: string;
  price: string;
};

export default function MenuItem({ menu }: { menu: MenuProps }) {
  return (
    <Card className='max-w-sm bg-warning-500 lg:max-w-xl data-[hover]:bg-warning-300' shadow="lg" isHoverable>
      <CardBody className="">
        <Image
          alt="name"
          className="w-full object-cover"
          src={menu.image}
          width={365}
          height={342}
        />
      </CardBody>
      <CardFooter id="id-menuNamePrice" className="justify-between md:text-lg">
        <b>{menu.name}</b>
        <p className="text-default-500">{menu.price}</p>
      </CardFooter>
    </Card>
  );
}
