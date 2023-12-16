import { Card, CardBody, CardFooter } from '@nextui-org/react';
import Image from 'next/image';

export type MenuProps = {
  image: string;
  name: string;
  price: string;
};

export default function MenuItem({ menu }: { menu: MenuProps }) {
  return (
    <Card className='max-w-sm lg:max-w-xl bg-warning-500 data-[hover]:bg-warning-300' shadow="lg" isHoverable>
      <CardBody className="">
        <Image
          alt="name"
          className="w-full object-cover"
          src={menu.image}
          width={365}
          height={342}
        />
      </CardBody>
      <CardFooter className="md:text-lg justify-between">
        <b>{menu.name}</b>
        <p className="text-default-500">{menu.price}</p>
      </CardFooter>
    </Card>
  );
}
