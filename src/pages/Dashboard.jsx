import React, { useEffect, useState } from 'react'
import AttachmentsCarausal from '../components/AttachmentsCarausal'
import { IoClose } from 'react-icons/io5'
// using tailwind here
function Dashboard() {
    const [allUsersInfo, setAllUsersInfo] = useState([])
    const fetchAllUsers = async () => {
        const response = await fetch('http://localhost:8000/user/getallusers')
        const result = await response.json()
        setAllUsersInfo(result)

    }
    useEffect(
        () => {
            fetchAllUsers()
        }, []
    )

    // select image
    const [selectedImage, setSelectedImage] = useState(null)
    console.log(selectedImage)

    // console.log(allUsersInfo)
    return (
        <div>
            <h1 className='text-center font-bold text-5xl py-3 shadow-md shadow-gray-800'>Dashboard</h1>
            <div>
                {
                    allUsersInfo?.length <= 0 ? <div className='w-full h-[80vh] grid place-items-center text-3xl font-thin'>No Data Available</div> :
                        <div className='w-full p-1 relative'>
                            {
                                allUsersInfo?.map((user) => <div key={user?._id} className='shadow-md shadow-gray-600 p-8 my-5 flex items-center justify-between gap-5 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100 overflow-hidden'>
                                    <label htmlFor='target-link' className=''>
                                        <div className='font-semibold text-5xl mb-5'>{user.name}</div>
                                        <div className='grid gap-1 mt-2'>{user.socialMediaHandles?.map((media, index) => <a key={index} className='bg-black text-gray-50 hover:bg-gray-200 hover:text-black cursor-pointer rounded-sm p-1' href={media} id='target-link' target='_blank'>{media}</a>)}</div>
                                    </label>
                                    <div>
                                        {
                                            user?.attachments?.length <= 0 ? "No Attachments Added" : <AttachmentsCarausal attachments={user?.attachments} setSelectedImage={setSelectedImage} />
                                        }
                                    </div>
                                    <div className='absolute top-0 right-0 vertical-text '>View All</div>

                                </div>)
                            }
                        </div>

                }
                <div>
                    {
                        selectedImage && <div className='fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center z-50'>
                            <div className='relative w-full h-full max-w-6xl max-h-[90vh]'>
                                <span className='absolute top-0 right-0 cursor-pointer' onClick={() => setSelectedImage(null)}>
                                    <IoClose size={30} color='crimson' />
                                </span>
                                <img src={selectedImage} className='w-full h-full object-contain' />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard