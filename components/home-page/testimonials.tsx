// Testimonials.tsx
import React from 'react';
import { Button, Link } from '@nextui-org/react';
import Testimonial from './testimonial';

type TestimonialData = {
    content: string;
    name: string;
    rating: string;
    image: string;
};

type TestimonialsProps = {
    testimonials: Array<TestimonialData>;
};

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
    return (
        <div id='reviews' className="max-w-5xl py-10 m-auto flex flex-col justify-center items-center gap-20">
            <p className='lg:text-4xl font-bold text-3xl'>Foodies Experience</p>
            <div className="lg:flex-nowrap flex gap-24 flex-wrap justify-center">
                {testimonials.map((item, index) => (
                    <Testimonial key={index} {...item} />
                ))}
            </div>
            <Button id="id-reviews-button"
                className="text-black font-bold shadow-2xl shadow-amber-700"
                size="lg"
                as={Link}
                href="/about-us"
                variant="solid"
                color='warning'
            >
                KNOW MORE ABOUT US
            </Button>
        </div>
    );
};

export default Testimonials;
