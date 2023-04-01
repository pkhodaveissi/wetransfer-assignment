import type { ReactElement } from 'react'

function MailAlertSkeleton(): ReactElement {
  const items = Array.from(Array(8), (_, idx) => {
    return idx
  })
  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {items.map((item) => (
        <div key={item} className='flex flex-col animate-pulse'>
          <div className='rounded-xl h-[220px] h-[220px] w-full bg-gray-300' />

          <div className='flex justify-between items-start mt-3'>
            <div className='flex flex-col'>
              <div className='inline-flex my-1 h-3 w-20 rounded-3xl bg-gray-400 p-2 text-base' />
              <div className='inline-flex my-1 h-2 w-40 rounded-3xl bg-gray-300 p-2 text-base' />
            </div>
            <button
              disabled
              className='bg-primary rounded text-white text-xs font-bold text-center w-1/5 px-[9px] py-[3px] leading-6 disabled:bg-txt-secondary'
            >
              Book!
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MailAlertSkeleton
