import type { FC } from "react";
import BackImage from "@/assets/images/generative-expand-back.webp";
import FrontImage from "@/assets/images/generative-expand-front.webp";
const GenerativeExpand: FC = () => {
    return (
        <section className="mt-16 flex flex-col items-center justify-center gap-3">
            <div className="flex w-[90%] flex-col gap-10 md:flex-row">
                <div className="md:w-[40%]">
                    <p className="text-[12px] font-semibold tracking-[4px] text-[#7286ff] uppercase">
                        Generative AI
                    </p>
                    <p className="text-[28px] font-extrabold text-[#ffffffee]">
                        See more with AI Generative Expand!
                    </p>
                    <p className="text-sm leading-[20px] font-normal text-[#ffffffcc]">
                        Explore beyond the borders of your canvas with
                        Generative Expand, make your image fit in any aspect
                        without cropping the best parts. Just expand in any
                        direction and the new content will blend seamlessly with
                        the image.
                    </p>
                    <a href="/Pixlr-1.0.0-Setup.zip" target="_blank">
                        <button className="text-glow-2 mt-5 flex h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#5463bf] px-10 text-[14px] font-normal">
                            Start 30 day free trial
                        </button>
                    </a>
                </div>
                <div className="p-10 pt-0 md:w-[60%]">
                    <div className="group relative flex min-h-[400px] items-center justify-center">
                        <div className="relative flex min-h-[600px] w-full items-center justify-center">
                            <img
                                src={BackImage}
                                className="absolute z-2 m-auto w-full scale-70 rounded-3xl duration-300 ease-in-out group-hover:scale-100"
                                alt=""
                            />
                            <img
                                src={FrontImage}
                                className="absolute z-4 h-auto rounded-3xl md:w-[41.6666666%]"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GenerativeExpand;
