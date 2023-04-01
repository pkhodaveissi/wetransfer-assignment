import { Navigate, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Main Layout</div>,
        children: [
          { index: true, element: <Navigate to="/rooms" replace /> },
          { path: "rooms", element: <div>rooms </div> },
        ],
      },
])

export default router
