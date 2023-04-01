import RoomList from './RoomList'
import { useFetchRooms } from './useRooms'

function Rooms() {
  const { data, error, status } = useFetchRooms()

  return (
    <div className='p-[30px]'>
      <section className='mb-10'>
        <h1 className='text-4xl text-txt-primary'>Rooms</h1>
        <h5 className='text-xl text-txt-secondary w-2/5'>
          Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus
          sodales. Tempus quis et.
        </h5>
      </section>
      {
        {
          success: data?.rooms ? <RoomList rooms={data.rooms} /> : null, // the ternary is there so the RoomList function never runs if we don't have data
          error: <div>{error instanceof Error ? error.message : null}</div>,
          loading: <div>loading</div>,
        }[status]
      }
    </div>
  )
}

export default Rooms
