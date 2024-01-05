import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  Login,
  Register,
  About,
  Products,
  Cart,
  Checkout,
  Orders,
  Error,
  Landing,
  SingleProduct,
} from './pages'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          path: 'landing',
          element: <Landing />,
        },
        {
          index: true,
          path: 'landing/:id',
          element: <SingleProduct />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'products',
          element: <Products />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'checkout',
          element: <Checkout />,
        },
        {
          path: 'orders',
          element: <Orders />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
