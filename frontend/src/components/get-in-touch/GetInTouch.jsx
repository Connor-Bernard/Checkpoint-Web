import React from 'react';
import InputField from './InputField';
import TextArea from './TextArea';
import Button from './Button';

export default function GetInTouch() {
    return (
        <section className='flex flex-col rounded-none'>
            <div className="flex flex-col items-start px-16 pt-72 pb-20 w-full bg-black max-md:px-5 max-md:pt-24 max-md:max-w-full">
                <div className="w-full max-w-[1083px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/0a7524ba7fb14db381bea79b3ad860c0/ee8473bac2c38243506f214f206bf2453058a2ada4932007fddc9f9e45c894cc?apiKey=0a7524ba7fb14db381bea79b3ad860c0&"
                                alt="Get in touch illustration"
                                className="object-contain w-full aspect-square max-md:mt-10 max-md:max-w-full"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col items-start w-full text-sm leading-none text-neutral-400 max-md:mt-10 max-md:max-w-full">
                                <h2 className="text-5xl font-semibold leading-loose text-center text-white max-md:text-4xl">
                                    Get In Touch
                                </h2>
                                <p className="self-stretch text-lg leading-7 text-neutral-400 max-md:max-w-full">
                                    A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                                </p>
                                <form className="w-full mt-12 max-md:mt-10">
                                    <InputField
                                        type="email"
                                        placeholder="Your Email"
                                        className="mb-5"
                                    />
                                    <InputField
                                        type="text"
                                        placeholder="Name"
                                        className="mb-5"
                                    />
                                    <TextArea
                                        placeholder="Message"
                                        className="mb-5"
                                    />
                                    <Button>Get in Touch</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
