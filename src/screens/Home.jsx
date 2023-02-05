import React from 'react';
import HomeMobile from '../assets/imgs/home/home-dc-mobile.avif';
import HomeDesktop from '../assets/imgs/home/home-dc.avif';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Home = () => {
	const matches = useMediaQuery('(min-width:575px)');

	return (
		<div className='relative before:block md:before:absolute before:inset-0 before:bg-gradient-to-t before:from-[rgba(0,0,0,.7)] before:bg-opacity-40'>
			<img src={matches ? HomeDesktop : HomeMobile} alt='home-img' />
			<div className='max-w-[720px] m-auto lg:max-w-[960px] xl:max-w-[1140px] xxl:max-w-[1320px]'>
				<div className='md:absolute md:bottom-10 max-w-[540px]  m-auto md:text-gray-100'>
					<div className='px-3 py-4 text-center md:text-left md:max-w-[400px]'>
						<p className='text-md font-semibold tracking-wider mb-3'>
							WEEKEND ESCAPE
						</p>
						<h2 className='text-3xl font-extrabold tracking-tighter text-left leading-10 mb-2 scale-y-110'>
							AN ADVENTURE OF MYTHIC PROPORTIONS
						</h2>
						<p className='text-left text-sm py-4 mb-3'>
							<span>Wonder Girl: Homecoming,</span> Yara Flor thought she was
							going to Brazil. She ended up in the Amazons.
						</p>
						<button className='font-semibold text-sm border-[1px] tracking-tighter border-black md:text-black md:bg-gray-200 md:bg-opacity-90  rounded-3xl px-10 py-2 cursor-pointer hover:border-transparent hover:bg-blue-500 hover:text-white transition ease-in-out duration-300'>
							{`${'Learn Why it’s Our Weekend Escape'.toUpperCase()}`}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
