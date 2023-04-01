import './base.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// setup react-query
const queryClient = new QueryClient()
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
