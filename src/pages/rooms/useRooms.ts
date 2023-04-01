import { useQuery, UseQueryResult } from '@tanstack/react-query'
import axios from 'axios'

export type RoomType = {
  name: string
  spots: number
  thumbnail: string
}

type FetchRoomsQueryResult = {
  rooms: RoomType[]
}

function useFetchRooms(): UseQueryResult<FetchRoomsQueryResult> {
  return useQuery(['rooms'], async () => {
    const { data } = await axios.get('https://wetransfer.github.io/rooms.json')
    return data
  })
}

export { useFetchRooms }
