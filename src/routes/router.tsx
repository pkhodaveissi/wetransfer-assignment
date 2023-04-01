import { Navigate, createBrowserRouter } from 'react-router-dom'
import Rooms from '../pages/rooms'

const router = createBrowserRouter([
  {
    path: '',
    element: <Navigate to='/rooms' replace />,
  },
  {
    path: 'rooms',
    element: <Rooms />,
  },
])

export default router
