import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import { store } from './redux/store.js'



import Topicproduct from './components/TopicProduct/Topicproduct'
import Profile from './components/profile/Profile'
import Cart from './components/cart/Cart'
import Login from "./components/login/Login";
import Homepage from "./components/Homepage/Homepage";
import { Provider } from 'react-redux'
import Detailproduct from "./components/detailproduct/Detailproduct";
import Detail from './components/blog/Detail.jsx';
import New from './components/blog/New'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/:slug",
        element: <Topicproduct />,
      },
      {
        path: "/sanpham/:nameproduct",
        element: <Detailproduct />,
      },
      {
        path: "/login",
        element: <Login/>
      },{
        path:"/profile",
        element:<Profile></Profile> 
    },{
        path:"/cart",
        element:<Cart/>
    },
    {
      path: '/blogs',
      element: <New />,
    },
    {
      path: '/blogs/:title',
      element: <Detail />,
    },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
