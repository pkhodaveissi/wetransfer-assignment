import { useFetchRooms } from './useRooms'
import RoomList from './RoomList'
import RoomsSkeleton from './RoomsSkeleton'

function Rooms() {
  const { data, error, status } = useFetchRooms()

  return (
    <div className='p-[30px]'>
      <section className='mb-10'>
        <h1 className='text-4xl text-txt-primary'>Rooms</h1>
        <p className='text-xl text-txt-secondary w-2/5'>
          Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus
          sodales. Tempus quis et.
        </p>
      </section>
      {/* a nice state machine using an object */}
      {
        {
          success: data?.rooms ? <RoomList rooms={data.rooms} /> : null, // the ternary is there so the RoomList function never runs if we don't have data
          error: <div>{error instanceof Error ? error.message : null}</div>, // another ternary with similar purpose
          loading: <RoomsSkeleton />,
        }[status]
      }
      {/* end: a nice state machine using an object */}
      
    </div>
  )
}

export default Rooms
