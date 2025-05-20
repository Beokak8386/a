import type { FC } from "react";
import AfterImage from "@/assets/images/ai-generative-fill-after.webp";
import BeforeImage from "@/assets/images/ai-generative-fill-before.webp";

const GenerativeFill: FC = () => {
    return (
        <section className="mt-12 flex flex-col-reverse items-center justify-center gap-3">
            <div className="flex w-[90%] flex-col-reverse gap-10 md:flex-row">
                <div className="p-10 pt-0 md:w-[60%]">
                    <div className="group relative flex min-h-[400px] items-center justify-center">
                        <div className="relative flex min-h-[400px] min-w-[400px] items-center justify-center">
                            <img
                                className="tranform absolute h-auto max-w-[250px] translate-x-[-25%] translate-y-[-5%] rounded-2xl duration-300 ease-in-out group-hover:translate-x-[-35%] group-hover:translate-y-[-10%] md:max-w-[330px]"
                                src={BeforeImage}
                                alt=""
                            />
                            <img
                                className="tranform absolute h-auto max-w-[250px] translate-x-[25%] translate-y-[5%] rounded-2xl duration-300 ease-in-out group-hover:translate-x-[35%] group-hover:translate-y-[10%] md:max-w-[330px]"
                                src={AfterImage}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="md:w-[40%]">
                    <p className="text-[12px] font-semibold tracking-[4px] text-[#7286ff] uppercase">
                        Generative AI
                    </p>
                    <p className="text-[28px] font-extrabold text-[#ffffffee]">
                        Amazing AI Generative Fill!
                    </p>
                    <p className="text-sm leading-[20px] font-normal text-[#ffffffcc]">
                        From concepting creative ideas to making complex edits
                        and refinements, Generative Fill can help you quickly
                        realize your vision while giving you complete control
                        over every creation.
                    </p>
                    <a href="/Pixlr-1.0.0-Setup.zip" target="_blank">
                        <button className="text-glow-2 mt-5 flex h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#5463bf] px-10 text-[14px] font-normal">
                            Start 30 day free trial
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GenerativeFill;
