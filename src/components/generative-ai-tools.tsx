import type { FC } from 'react';
import OneImage from '@/assets/images/ai-image-generator-one.webp'
import TwoImage from '@/assets/images/ai-image-generator-two.webp'
import ThreeImage from '@/assets/images/ai-image-generator-three.webp'
const GenerativeAiTools: FC = () => {
    return <section className='flex flex-col gap-3 justify-center items-center'>
        <div className='flex flex-col min-h-[38vh] gap-3 justify-center items-center'>
            <p className='bg-[#5463bf] text-white text-[14px] tracking-[3px]  pt-1 px-[18px] uppercase'>Limitless Artistry</p>
            <p className='md:text-[42px] text-3xl font-extrabold uppercase text-center'>Generative AI Tools</p>
            <p className='md:text-[14px] text-sm  font-normal text-[#ffffffcc] max-w-[800px] text-center'>Explore Pixlr’s new AI Powered Generative Tools unleashing limitless creative possibilities. Perfect for both beginners and seasoned professionals
                 these tools redefine artistic expression with intuitive AI technology, revolutionizing your creative process.</p>
        </div>
        <div className='flex md:flex-row flex-col gap-10 w-[90%]'>
            <div className='md:w-[40%] '>
                <p className='text-[12px] font-semibold text-[#7286ff] tracking-[4px] uppercase'>Generative AI</p>
                <p className='text-[28px] font-extrabold text-[#ffffffee]'>AI Image Generator magic!</p>
                <p className='text-[#ffffffcc] text-sm font-normal leading-[20px] '>Elevate your creations with the revolutionary Text to Image AI image generator, 
                    revolutionizing the way you convert simple text into visually captivating artwork. Unleash your imagination and craft breathtaking, AI-generated masterpieces that are bound to captivate and inspire your audience.</p>
                <button className='bg-[#5463bf] cursor-pointer h-[44px]  mt-5 px-10 text-glow-2 rounded-full gap-2 text-[14px] font-normal flex justify-center items-center'>
                Test Image Generator
                </button>
            </div>
            <div className='md:w-[60%] '>
                <div className="flex items-center justify-center group ">
                    <img src={OneImage} className=" translate-x-32 z-2 rounded-3xl group-hover:translate-x-16 ease-in-out duration-300 max-w-[188px]  md:max-w-[300px]" />
                    <img src={TwoImage} className=" z-4 h-auto rounded-3xl max-w-[250px] md:max-w-[350px]" />
                    <img src={ThreeImage} className=" -translate-x-32 z-2 rounded-3xl group-hover:-translate-x-16 ease-in-out duration-300 max-w-[190px] md:max-w-[300px]" />
                </div>
            </div>
        </div>
    </section>
};

export default GenerativeAiTools;
