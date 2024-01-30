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
import { ErrorElement } from './components'
import { loader as landingLoader } from './pages/Landing'
import { loader as singlePageLoader } from './pages/SingleProduct'
import { loader as productLoader } from './pages/Products'
import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
import { store } from './store'
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
          loader: landingLoader,
          errorElement: <ErrorElement />,
        },
        {
          path: 'products/:id',
          loader: singlePageLoader,
          element: <SingleProduct />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'products',
          loader: productLoader,
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
      action: loginAction(store),
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />,
      action: registerAction,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
