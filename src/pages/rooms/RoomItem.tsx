import { RoomType } from './useRooms'

type RoomItemProps = {
  item: RoomType
}

function RoomItem({ item }: RoomItemProps) {
  return (
    <div className='flex flex-col'>
      <img
        className='rounded-xl h-[220px] object-cover bg-gray-300'
        height={220}
        src={item.thumbnail}
        alt={item.name}
      />
      <div className='flex justify-between items-start mt-3'>
        <div>
          <h3 className='font-bold text-lg text-txt-primary'>{item.name}</h3>
          <p className='text-lg text-primary'>{item.spots} spots remaining</p>
        </div>
        <button
          disabled={!item.spots}
          className='bg-primary rounded text-white text-xs font-bold text-center w-1/5 px-[9px] py-[3px] leading-6 disabled:bg-txt-secondary'
        >
          Book!
        </button>
      </div>
    </div>
  )
}

export default RoomItem
