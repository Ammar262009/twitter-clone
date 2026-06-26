import React from 'react'
import { House, Search, Bell, Mail, Bookmark, User, CircleEllipsis, Circle } from 'lucide-react'

const MenuLeft = () => {
    const grokIcon = (props) => {
        return <svg width="27" height="27" viewBox="0 0 33 33" fill="none" xmlns="http://w3.org" className="fill-primary max-w-full">
            <path d="M13.2371 21.0407L24.3186 12.8506C24.8619 12.4491 25.6384 12.6057 25.8973 13.2294C27.2597 16.5185 26.651 20.4712 23.9403 23.1851C21.2297 25.8989 17.4581 26.4941 14.0108 25.1386L10.2449 26.8843C15.6463 30.5806 22.2053 29.6665 26.304 25.5601C29.5551 22.3051 30.562 17.8683 29.6205 13.8673L29.629 13.8758C28.2637 7.99809 29.9647 5.64871 33.449 0.844576C33.5314 0.730667 33.6139 0.616757 33.6964 0.5L29.1113 5.09055V5.07631L13.2343 21.0436" fill="currentColor"></path>
            <path d="M10.9503 23.0313C7.07343 19.3235 7.74185 13.5853 11.0498 10.2763C13.4959 7.82722 17.5036 6.82767 21.0021 8.2971L24.7595 6.55998C24.0826 6.07017 23.215 5.54334 22.2195 5.17313C17.7198 3.31926 12.3326 4.24192 8.67479 7.90126C5.15635 11.4239 4.0499 16.8403 5.94992 21.4622C7.36924 24.9165 5.04257 27.3598 2.69884 29.826C1.86829 30.7002 1.0349 31.5745 0.36364 32.5L10.9474 23.0341" fill="currentColor"></path>
        </svg>



    }

    const iconMap = {
        House: House,
        Search: Search,
        Bell: Bell,
        Mail: Mail,
        Bookmark: Bookmark,
        User: User,
        Grok: grokIcon
    }

    const MenuData = [
        { icon: 'House', name: 'Home' },
        { icon: 'Search', name: 'Explore' },
        { icon: 'Bell', name: 'Notification' },
        { icon: 'Grok', name: 'Grok' },
        { icon: 'Mail', name: 'Messages' },
        { icon: 'Bookmark', name: 'Bookmarks' },
        { icon: 'User', name: 'Profile' },
    ]

    return (
        <div className='bg-black text-white w-72 flex flex-col justify-between h-full min-h-screen border-r border-gray-800 px-5 py-4 font-sans'>
            <div className='flex flex-col gap-2 items-start w-full'>
                <div className='p-3 hover:bg-zinc-900 rounded-full transition cursor-pointer duration-200'>
                    <svg width="28" height="28" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                    </svg>
                </div>

                <nav className='w-full flex flex-col mt-2'>
                    {MenuData.map((e, idx) => {
                        const IconComponent = iconMap[e.icon];

                        return (
                            <div key={idx} className='flex gap-5 rounded-full justify-start items-center py-3 px-4 hover:bg-zinc-900 transition cursor-pointer text-xl font-bold duration-200 w-fit'>
                                {IconComponent && <IconComponent size={26} strokeWidth={2.5} />}
                                <span>{e.name}</span>
                            </div>
                        )
                    })}
                </nav>

                <button className='w-full bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white font-bold py-3 px-8 rounded-full mt-4 shadow-md transition duration-200 text-center tracking-wide'>
                    Post
                </button>
            </div>

            <div className='flex items-center justify-between p-3 hover:bg-zinc-900 rounded-full transition cursor-pointer duration-200 w-full mb-2'>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center font-bold text-sm text-zinc-300'>
                        U
                    </div>
                    <div className='flex flex-col text-left leading-tight'>
                        <span className='font-bold text-sm text-zinc-100'>User Name</span>
                        <span className='text-zinc-500 text-sm'>@username</span>
                    </div>
                </div>
                <CircleEllipsis size={18} className='text-zinc-400 mr-1' />
            </div>
        </div>
    )
}

export default MenuLeft
