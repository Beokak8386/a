import UploadImage from '@/assets/images/image-editor.svg';
import MagicImage from '@/assets/images/image-generator.svg';

import type { FC } from 'react';

const PhotoEditor: FC = () => {
    return <>
        <section className='flex flex-col  gap-3 justify-center items-center py-20 '>
            <p className='bg-clip-text text-transparent text-6xl md:text-[84px] text-center font-black bg-linear-to-r/shorter from-[#8B3AD8] from-10% to-blue-400 uppercase'>Photo Editor</p>
            <div className='pb-6'>
                <p className='text-center font-semibold text-xl md:text-2xl text-gray-300'>AI Image Generator and AI Video Generator</p>
            </div>
            <div className='flex items-center justify-center gap-[30px] flex-col md:flex-row '>
                <button className='bg-transparent cursor-pointer h-14 border-2 px-10 text-glow rounded-full gap-2 border-[rgba(150,92,201,0.342)] flex justify-center items-center'>
                    <img src={UploadImage} className='w-[24px] h-[24px]' /> Open AI Photo Editor
                </button>
                <button className='bg-transparent cursor-pointer h-14 border-2 px-10 text-glow rounded-full gap-2 border-[rgba(150,92,201,0.342)] flex justify-center items-center'>
                    <img src={MagicImage} className='w-[24px] h-[24px]' />  AI Image Generator
                </button>
            </div>

            <button className='bg-[#8C54BD] cursor-pointer h-12 border-2 mt-5 px-10 text-glow-2 rounded-full gap-2 border-[rgba(150,92,201,0.342)] flex justify-center items-center'>
                START 7 DAY TRIAL
            </button>
        </section>

    </>;
};

export default PhotoEditor;
