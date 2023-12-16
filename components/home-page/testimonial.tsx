// Testimonial.tsx
import React from 'react';
import { Avatar, Card, CardBody, CardHeader, CardFooter, Divider } from '@nextui-org/react';
import parse from 'html-react-parser';

type TestimonialProps = {
    content: string;
    name: string;
    rating: string;
    image: string;
};

const Testimonial: React.FC<TestimonialProps> = ({ content, name, rating, image }) => {
    return (
        <Card className='lg:max-w-[450px] max-w-xs bg-[#FF9C6A] data-[hover]:bg-warning-300' shadow="lg" isHoverable>
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar isBordered color="warning" radius="full" size="lg" src={image} />
                    <div className="flex flex-col items-start justify-center">
                        <h4 className="text-lg font-bold leading-none">{name}</h4>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 text-md py-3">
                <p>{parse(content)}</p>
            </CardBody>
            <Divider />
            <CardFooter className="">
                <div className="flex w-full justify-between font-bold">
                    <p>Rating</p>
                    <p className="">{rating}/5</p>
                </div>
            </CardFooter>
        </Card>
    );
};

export default Testimonial;
