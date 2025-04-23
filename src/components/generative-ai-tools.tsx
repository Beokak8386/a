import type { FC } from "react";
import OneImage from "@/assets/images/ai-image-generator-one.webp";
import TwoImage from "@/assets/images/ai-image-generator-two.webp";
import ThreeImage from "@/assets/images/ai-image-generator-three.webp";
const GenerativeAiTools: FC = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-3">
            <div className="flex min-h-[38vh] flex-col items-center justify-center gap-3">
                <p className="bg-[#5463bf] px-[18px] pt-1 text-[14px] tracking-[3px] text-white uppercase">
                    Limitless Artistry
                </p>
                <p className="text-center text-3xl font-extrabold uppercase md:text-[42px]">
                    Generative AI Tools
                </p>
                <p className="max-w-[800px] text-center text-sm font-normal text-[#ffffffcc] md:text-[14px]">
                    Explore Pixlr’s new AI Powered Generative Tools unleashing
                    limitless creative possibilities. Perfect for both beginners
                    and seasoned professionals these tools redefine artistic
                    expression with intuitive AI technology, revolutionizing
                    your creative process.
                </p>
            </div>
            <div className="flex w-[90%] flex-col gap-10 md:flex-row">
                <div className="md:w-[40%]">
                    <p className="text-[12px] font-semibold tracking-[4px] text-[#7286ff] uppercase">
                        Generative AI
                    </p>
                    <p className="text-[28px] font-extrabold text-[#ffffffee]">
                        AI Image Generator magic!
                    </p>
                    <p className="text-sm leading-[20px] font-normal text-[#ffffffcc]">
                        Elevate your creations with the revolutionary Text to
                        Image AI image generator, revolutionizing the way you
                        convert simple text into visually captivating artwork.
                        Unleash your imagination and craft breathtaking,
                        AI-generated masterpieces that are bound to captivate
                        and inspire your audience.
                    </p>
                    <button className="text-glow-2 mt-5 flex h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#5463bf] px-10 text-[14px] font-normal">
                        Test Image Generator
                    </button>
                </div>
                <div className="md:w-[60%]">
                    <div className="group flex items-center justify-center">
                        <img
                            src={OneImage}
                            className="z-2 max-w-[188px] translate-x-32 rounded-3xl duration-300 ease-in-out group-hover:translate-x-16 md:max-w-[300px]"
                             alt=""
                        />
                        <img
                            src={TwoImage}
                            className="z-4 h-auto max-w-[250px] rounded-3xl md:max-w-[350px]"
                             alt=""
                        />
                        <img
                            src={ThreeImage}
                            className="z-2 max-w-[190px] -translate-x-32 rounded-3xl duration-300 ease-in-out group-hover:-translate-x-16 md:max-w-[300px]"
                             alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GenerativeAiTools;
