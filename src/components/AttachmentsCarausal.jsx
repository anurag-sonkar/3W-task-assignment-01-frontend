import React, { useState } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'

function AttachmentsCarausal({attachments }) {
    const [currentIndex, setCurrentIndex] = useState(0); // For tracking the first visible image
    const visibleAttachments = attachments.slice(currentIndex, currentIndex + 4); // Show only 4 attachments

    console.log(attachments)

  return (
      <div className='flex gap-3 flex-wrap items-center'>
          {currentIndex > 0 && (
              <div className="cursor-pointer" onClick={() => setCurrentIndex(currentIndex - 1)}>
                  <GrPrevious />
              </div>
          )}
          {/* <GrPrevious onClick={() => setCurrentIndex(currentIndex - 1)} /> */}
          <div className="flex gap-2 flex-wrap w-[58vw] justify-center transition-transform duration-3000 ease-in-out">
              {visibleAttachments.map((attachment) => (
                  <img
                      key={attachment._id}
                      src={attachment.url}
                      alt="attachment"
                      className="w-full max-w-44 max-h-36 rounded-md cursor-pointer object-contain"
                  />
              ))}
          </div>
          {currentIndex + 4 < attachments.length && (
              <div className="cursor-pointer" onClick={() => setCurrentIndex(currentIndex + 1)}>
                  <GrNext />
              </div>
          )}
          {/* <GrNext onClick={() => setCurrentIndex(currentIndex + 1)} /> */}
      </div>
  )
}

export default AttachmentsCarausal