import React, { useEffect, useState } from 'react'
import AttachmentsCarausal from '../components/AttachmentsCarausal'
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
    // console.log(allUsersInfo)
    return (
        <div>
            <h1 className='text-center font-bold text-5xl py-3 shadow-md shadow-gray-800'>Dashboard</h1>
            <div>
                {
                    allUsersInfo?.length <= 0 ? <div className='w-full h-[80vh] grid place-items-center text-3xl font-thin'>No Data Available</div> :
                        <div className='w-full h-[88vh] p-1'>
                            {
                                allUsersInfo?.map((user) => <div key={user?._id} className='shadow-md shadow-gray-600 p-8 my-5 flex items-center justify-between gap-5 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100'>
                                    <div>
                                        <div className='font-semibold text-5xl mb-5'>{user.name}</div>
                                        <div className='grid gap-1 mt-2'>{user.socialMediaHandles?.map((media,index) => <div key={index}>{media}</div>)}</div>
                                    </div>
                                    <div>
                                        {
                                            user?.attachments?.length <= 0 ? "No Attachments Added" : <AttachmentsCarausal attachments={user?.attachments}/>
                                        }
                                    </div>
                                </div>)
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default Dashboard