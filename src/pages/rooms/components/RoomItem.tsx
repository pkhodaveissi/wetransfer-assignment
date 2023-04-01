import { useState } from 'react'
import { RoomType } from '../useRooms'

type RoomItemProps = {
  item: RoomType
}

function RoomItem({ item }: RoomItemProps) {
  const [isBooking, setIsBooking] = useState(false)
  return (
    <div className='flex flex-col'>
      {isBooking ? (
        <div className='flex flex-col h-[220px] w-full bg-gray-300 items-center justify-center'>
          <div className='mb-2'>
            <label htmlFor='spots'>Spots (1-{item.spots}):</label>
            <input type='number' id='spots' name='spots' min='1' max={item.spots} />
          </div>
          <div className='mb-2'>
            <label htmlFor='spots'>Email:</label>
            <input type='text' id='email' name='email' />
          </div>
          <button
            onClick={() => setIsBooking(!isBooking)}
            className='bg-primary rounded text-white text-xs font-bold text-center w-1/5 px-[9px] py-[3px] leading-6 disabled:bg-txt-secondary'
          >
            Confirm
          </button>
        </div>
      ) : (
        <img
          className='rounded-xl h-[220px] object-cover bg-gray-300'
          height={220}
          src={item.thumbnail}
          alt={item.name}
        />
      )}
      <div className='flex justify-between items-start mt-3'>
        <div>
          <h3 className='font-bold text-lg text-txt-primary'>{item.name}</h3>
          <p className='text-lg text-primary'>{item.spots} spots remaining</p>
        </div>
        <button
          disabled={!item.spots}
          className='bg-primary rounded text-white text-xs font-bold text-center w-1/5 px-[9px] py-[3px] leading-6 disabled:bg-txt-secondary'
          onClick={() => setIsBooking(!isBooking)}
        >
          {isBooking ? 'Cancel' : 'Book!'}
        </button>
      </div>
    </div>
  )
}

export default RoomItem
