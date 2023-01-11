import './App.scss';
import {Route} from 'react-router-dom';
import CatImagesPage from './Pages/CatImagesPage';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements
} from "react-router-dom";
import Layout from './Components/Layout';

function App() {
    const routes = createBrowserRouter(createRoutesFromElements(
        <Route path={'/'} element={<Layout/>}>
            <Route exact path='/:id/:name' element={<CatImagesPage/>}/>
        </Route>
    ))

  return (
    <div className="App">
        <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
