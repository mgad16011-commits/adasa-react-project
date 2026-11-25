
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import  postsData from'./data/posts.json'
import Blog from './Components/Blog/Blog';
import GeneralArticles from './Components/GeneralArticles/GeneralArticles';
import Light from './Components/LightArticles/Light';
import Portrait from './Components/Portrait/Portrait';
import Natural from './Components/Natural/Natural';
import Tech from './Components/Tech/Tech';
import Tools from './Components/Tools/Tools';
import ArticleDetails from './Components/ArticleDetails/ArticleDetails';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';

function App() {
  const router = createBrowserRouter([
    {
  element: <Layout />,
  children: [
    { index: true, element: <Home /> },
    {path:"about" , element:<About/>},

    {
      path: "blog",
      element: <Blog />,
      children: [
        { index: true, element: <GeneralArticles /> },
        { path: "lightArticles", element: <Light /> },
        { path: "portrait", element: <Portrait /> },
        { path: "naturalAreas", element: <Natural /> },
        { path: "tech", element: <Tech /> },
        { path: "tools", element: <Tools /> },
      ],
    },

    { path: "blog/:slug", element: <ArticleDetails /> },

    { path: "*", element: <NotFound /> },
  ],
}
  ]);

  return (



<>

 <RouterProvider router={router}></RouterProvider>

</>










  )
}
export default App
