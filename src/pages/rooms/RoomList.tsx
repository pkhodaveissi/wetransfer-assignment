import RoomItem from './RoomItem'
import { RoomType } from './useRooms'

type RoomListProps = {
  rooms: RoomType[]
}
function RoomList({ rooms }: RoomListProps) {
  return (
    <div>
      {rooms.map((item) => (
        <RoomItem key={item.name} item={item} />
      ))}
    </div>
  )
}
export default RoomList
