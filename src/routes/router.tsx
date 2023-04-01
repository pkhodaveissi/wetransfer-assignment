import { Navigate, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '',
    element: <Navigate to='/rooms' replace />,
  },
  {
    path: 'rooms',
    element: <div>rooms</div>,
  },
])

export default router
