import RoomItem from './RoomItem'
import { RoomType } from '../useRooms'

type RoomListProps = {
  rooms: RoomType[]
}
function RoomList({ rooms }: RoomListProps) {
  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {rooms.map((item) => (
        <RoomItem key={item.name} item={item} />
      ))}
    </div>
  )
}
export default RoomList
