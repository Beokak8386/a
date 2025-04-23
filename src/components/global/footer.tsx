import ImageLogo from "@/assets/images/pixlr-logo.svg";
import type { FC } from "react";
const Footer: FC = () => {
    return (
        <div className="flex items-center justify-center py-5">
            <div className="flex w-[90%] items-center justify-between">
                <img src={ImageLogo} alt="" className="h-[20px]" />
                <p className="text-[13px] text-[#999]">
                    Pixlr Pte Ltd © 2025.
                </p>
            </div>
        </div>
    );
};

export default Footer;
