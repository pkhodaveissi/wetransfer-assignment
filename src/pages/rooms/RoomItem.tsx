import { RoomType } from './useRooms'

type RoomItemProps = {
  item: RoomType
}

function RoomItem({ item }: RoomItemProps) {
  return <div>{item.name}</div>
}

export default RoomItem
