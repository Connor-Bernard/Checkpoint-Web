import React from 'react';

export default function PopOut() {
    return (
        <div className='overflow-hidden w-[1110px] h-[425px] relative mx-auto my-0'>
            <div className='w-[1110px] h-[425px] bg-gradient-to-r from-[#FF9898] to-[#8054FF] bg-cover bg-no-repeat rounded-[40px] absolute top-0 left-0' />
            <div className='w-[554px] h-[369px] bg-[url(https://cdn.builder.io/api/v1/image/assets/0a7524ba7fb14db381bea79b3ad860c0/154e310cc2380c51edcfff18336c0d737384a4c87c4a74aac3dbd1741a5d5fdc?apiKey=0a7524ba7fb14db381bea79b3ad860c0&)] bg-cover bg-no-repeat absolute top-[37px] left-[556px] overflow-hidden z-[6]' />
            <span className="flex w-[141px] h-[32px] justify-center items-start text-lg font-normal leading-[32px] text-[#fff] absolute top-[100px] left-[97px] text-center whitespace-nowrap z-[3]">
                Love our Tool?
            </span>
            <span className="flex w-[499px] h-[130px] justify-start items-start text-[48px] font-semibold leading-[65px] text-[#fff] absolute top-[143px] left-[97px] text-left z-[2]">
                Create your First Checkpoint Today
            </span>
            <button className='flex w-[247px] h-[44px] pt-[12px] pr-[28px] pb-[12px] pl-[28px] gap-[10px] items-start flex-nowrap bg-[#000] rounded-[5px] border-none absolute top-[309px] left-[97px] z-[4] pointer outline-none'>
                <span className="h-[20px] shrink-0 basis-auto text-[14px] font-normal leading-[20px] text-[#fff] relative text-left whitespace-nowrap z-[5]">
                    Check it out on PrairieLearn
                </span>
            </button>
        </div>
    );
}
