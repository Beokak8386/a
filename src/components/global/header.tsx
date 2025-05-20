import type { FC } from "react";
import logoImage from "@/assets/images/pixlr-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faBars,
    faCrown,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
const Header: FC = () => {
    return (
        <div className="flex justify-center py-5">
            <div className="flex w-full max-w-[90%] items-center justify-between">
                <div>
                    <img alt="" src={logoImage} />
                </div>
                <div className="flex items-center justify-center gap-3 text-sm font-bold text-white">
                    <a href="/Pixlr-1.0.0-Setup.zip" target="_blank">
                        <p className="hidden cursor-pointer rounded-full px-4 py-2 hover:bg-[#ffffff22] md:flex">
                            Pricing
                        </p>
                    </a>
                    <a href="/Pixlr-1.0.0-Setup.zip" target="_blank">
                        <p className="hidden cursor-pointer items-center justify-center gap-1 rounded-full px-4 py-2 hover:bg-[#ffffff22] md:flex">
                            {" "}
                            <FontAwesomeIcon
                                icon={faUser}
                                size="1x"
                                className="w-5"
                            />
                            Sign up / Log in
                        </p>
                    </a>
                    <a href="/Pixlr-1.0.0-Setup.zip" target="_blank">
                        <p className="hidden cursor-pointer items-center justify-center gap-1 rounded-full px-4 py-2 hover:bg-[#ffffff22] md:flex">
                            {" "}
                            <FontAwesomeIcon
                                icon={faCrown}
                                size="xl"
                                className="w-5 text-yellow-500"
                            />
                            Try premiums
                        </p>
                    </a>
                    <div className="hidden md:flex">
                        <FontAwesomeIcon
                            icon={faBell}
                            size="xl"
                            className="w-5 cursor-pointer rounded-full px-3 py-3 hover:bg-[#ffffff22]"
                        />
                    </div>
                    <FontAwesomeIcon
                        icon={faBars}
                        size="xl"
                        className="w-5 cursor-pointer rounded-full px-3 py-3 hover:bg-[#ffffff22]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
