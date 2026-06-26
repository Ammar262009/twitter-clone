import { CircleEllipsis, Ellipsis, Magnet, Search } from 'lucide-react'
import React from 'react'

const Right = () => {
    const profileData = [
        {
            'name': 'Ammar',
            'handle': 'ammar',
            'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KQS6mIxs_7HhJl--CRGzBYQkY4__GyqJQhPv2ZOzDQ&s',
        },
        {
            'name': 'Rohan',
            'handle': 'rohan43',
            'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KQS6mIxs_7HhJl--CRGzBYQkY4__GyqJQhPv2ZOzDQ&s',
        },
        {
            'name': 'Tiger Shroff',
            'handle': 'tigershroff',
            'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KQS6mIxs_7HhJl--CRGzBYQkY4__GyqJQhPv2ZOzDQ&s',
        },
    ]
    const tagsdata = [
        {
            'title': 'Samsung',
            'posts': '29K',
            'category': 'Technology',
        },
        {
            'title': '#Ammar',
            'posts': '293K',
            'category': '',
        },
        {
            'title': 'Xiaomi',
            'posts': '6,554',
            'category': 'Technology',
        },
        {
            'title': 'Github',
            'posts': '24.8K',
            'category': '',
        },
    ]
    return (
        <div className='bg-black h-full overflow-hidden w-1/3'>
            <div className='flex items-center rounded-4xl w-2/3 py-2 bg-[#202329] px-9 pl-3 mx-2 my-3'>
                <Search className='text-[#484b4e]' size={21} />
                <input className='px-3 text-white' type="text" placeholder='Search' />
            </div>
            <div className='border w-2/3 rounded-xl bg-[#121213] pb-4 mx-3'>
                <h1 className='font-bold text-2xl py-3 px-3 text-white'>What's happening</h1>
                <div className='flex flex-col'>
                    {tagsdata.map((e, idx) => {
                        return <div key={idx} className='flex justify-between rounded-xl py-2 px-3 cursor-pointer hover:bg-[#202022] text-white'>
                            <div className='leading-normal'>
                                <p className='text-gray-700 text-[12px] '>{e.category ? `${e.category} • Trending` : 'Trending'}</p>
                                <p className='font-bold text-medium'>{e.title}</p>
                                <p className='text-gray-700 text-[12px] '>{e.posts} posts</p>
                            </div>
                            <Ellipsis size={20} className='text-zinc-500 mr-1' />
                        </div>
                    })}
                </div>
            </div>

            <div className='border w-2/3 mb-4 rounded-xl mt-3 bg-[#121213] pb-4 mx-3'>
                <h1 className='font-bold text-2xl py-3 px-3 text-white'>Who to Follow</h1>
                <div className='flex flex-col'>
                    {profileData.map((e,idx) => {
                        return <div key={idx} className='flex justify-between items-center rounded-xl py-2 px-3 cursor-pointer hover:bg-[#202022] text-white'>
                            <div className='flex gap-2 items-center justify-between'>
                                <img src={e.img} width={50} height={50} alt="" />
                                <div>
                                    <div className='font-bold text-medium'>{e.name}</div>
                                    <div className='text-gray-600 text-[14px]'>@{e.handle}</div>
                                </div>
                            </div>
                            <span className='bg-white max-h-8 text-black px-5 py-1 rounded-full w-fit'>Follow</span>
                        </div>
                    })}
                    <div className='text-blue-600 underline font-normal text-[16px] px-3 cursor-pointer '>Show More</div>
                </div>
            </div>
        </div>
    )
}
export default Right