import type { FC } from 'react';
import ImageLogo from "@/assets/images/pixlr-logo.svg"
const Footer: FC = () => {
    return <div className='flex justify-center items-center py-5'>
        <div className='w-[90%] flex justify-between items-center'>
            <img src={ImageLogo} className='h-[20px]' />
            <p className='text-[13px] text-[#999] '>Pixlr Pte Ltd © 2025.</p>
        </div>
    </div>;
};

export default Footer;
