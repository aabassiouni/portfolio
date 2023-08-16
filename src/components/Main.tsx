import React from 'react'
import AvailableWidget from './AvailableWidget'
// import GithubIcon from './icons/GithubIcon'
import { ArrowDownIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

function Main() {
    return (
        <div className="flex flex-col w-full h-full bg-[#00181f] p-10 sm:p-32">
            <AvailableWidget />
            <div className="p-1"></div>
            <h1 className="font-mono text-4xl sm:text-7xl text-white">
                Hi! I'm <span className="underline">Ali</span>!
            </h1>
            <div className="p-6"></div>
            <h2 className="font-mono text-xl sm:text-3xl text-white">Fullstack Developer based in NY</h2>
            <div className='p-4'></div>
            <div className='flex space-x-6'>
                <GitHubLogoIcon width={40} height={40} className='text-white'/>
                <LinkedInLogoIcon width={40} height={40} className='text-white' />
            </div>

            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 mb-10 animate-'>
                <ArrowDownIcon width={60} height={60} className=' text-white' />
            </div>
        </div>
    )
}

export default Main
