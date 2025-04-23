import type { FC } from "react";
import AfterImage from "@/assets/images/ai-generative-fill-after.webp";
import BeforeImage from "@/assets/images/ai-generative-fill-before.webp";


const GenerativeFill: FC = () => {
    return (
        <section className="mt-12 flex flex-col-reverse items-center justify-center gap-3 ">
            <div className="flex w-[90%] md:flex-row flex-col-reverse gap-10">
                <div className="md:w-[60%] p-10 pt-0">
                    <div className="group relative flex min-h-[400px] items-center justify-center">
                        <div className="relative min-h-[400px] min-w-[400px] flex items-center justify-center">
                            <img className="absolute rounded-2xl tranform translate-x-[-25%] translate-y-[-5%] group-hover:translate-y-[-10%] group-hover:translate-x-[-35%] max-w-[250px] md:max-w-[330px] h-auto duration-300 ease-in-out"
                                    src={BeforeImage}
                                />
                            <img className=" absolute rounded-2xl tranform translate-x-[25%] translate-y-[5%] max-w-[250px] md:max-w-[330px] group-hover:translate-y-[10%] group-hover:translate-x-[35%]  h-auto duration-300 ease-in-out"
                                src={AfterImage}
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
                    From concepting creative ideas to making complex edits and refinements, Generative Fill can help you quickly realize your vision while giving you complete control over every creation.
                    </p>
                    <button className="text-glow-2 mt-5 flex h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#5463bf] px-10 text-[14px] font-normal">
                        Test Generative Fill
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GenerativeFill;
