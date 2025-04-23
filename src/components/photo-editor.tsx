import UploadImage from "@/assets/images/image-editor.svg";
import MagicImage from "@/assets/images/image-generator.svg";

import type { FC } from "react";

const PhotoEditor: FC = () => {
    return (
            <section className="flex flex-col items-center justify-center gap-3 py-20">
                <p className="bg-linear-to-r/shorter from-[#8B3AD8] from-10% to-blue-400 bg-clip-text text-center text-6xl font-black text-transparent uppercase md:text-[84px]">
                    Photo Editor
                </p>
                <div className="pb-6">
                    <p className="text-center text-xl font-semibold text-gray-300 md:text-2xl">
                        AI Image Generator and AI Video Generator
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-[30px] md:flex-row">
                    <button className="text-glow flex h-14 cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[rgba(150,92,201,0.342)] bg-transparent px-10">
                        <img src={UploadImage} className="h-[24px] w-[24px]"  alt=""/>{" "}
                        Open AI Photo Editor
                    </button>
                    <button className="text-glow flex h-14 cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[rgba(150,92,201,0.342)] bg-transparent px-10">
                        <img src={MagicImage} className="h-[24px] w-[24px]"  alt=""/>{" "}
                        AI Image Generator
                    </button>
                </div>

                <button className="text-glow-2 mt-5 flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[rgba(150,92,201,0.342)] bg-[#8C54BD] px-10">
                    START 7 DAY TRIAL
                </button>
            </section>
    );
};

export default PhotoEditor;
