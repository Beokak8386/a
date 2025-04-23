import type { FC } from 'react';
import logoImage from '@/assets/images/pixlr-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars, faCrown, faUser } from '@fortawesome/free-solid-svg-icons';
const Header: FC = () => {
    return <div className='flex py-5 justify-center'>
        <div className='max-w-[90%] w-full flex justify-between items-center'>
        <div>
            <img src={logoImage} />
        </div>
        <div className='flex gap-3 font-bold text-white text-sm justify-center items-center'>
            <p className='py-2 px-4 hidden rounded-full hover:bg-[#ffffff22] cursor-pointer md:flex'>Pricing</p>
            <p className='hidden md:flex justify-center items-center gap-1 py-2 px-4 rounded-full hover:bg-[#ffffff22] cursor-pointer'>  <FontAwesomeIcon icon={faUser} size='1x' className='w-5'/>Sign up / Log in</p>
            <p className='hidden md:flex justify-center items-center gap-1 py-2 px-4 rounded-full hover:bg-[#ffffff22] cursor-pointer'>   <FontAwesomeIcon icon={faCrown} size='xl' className='w-5  text-yellow-500'/>Try premiums</p>
            <div className='hidden md:flex'>
            <FontAwesomeIcon icon={faBell} size='xl' className=' w-5 py-3 px-3 rounded-full hover:bg-[#ffffff22] cursor-pointer'/>

            </div>
            <FontAwesomeIcon icon={faBars} size='xl' className='w-5 py-3 px-3 rounded-full hover:bg-[#ffffff22] cursor-pointer'/>
        </div>
        </div>
    </div>;
};

export default Header;
