import React from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'

function AttachmentsCarausal({attachments }) {
    console.log(attachments)
  return (
      <div className='flex gap-3 flex-wrap items-center'>
          <div className='cursor-pointer'><GrPrevious /></div>
          {attachments?.map((attachment) => <img key={attachment._id} src={attachment.url} alt='attachment' className='w-48 h-auto rounded-md cursor-pointer' />)}
          <div className='cursor-pointer'><GrNext /></div>
      </div>
  )
}

export default AttachmentsCarausal