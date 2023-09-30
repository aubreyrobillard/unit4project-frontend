import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from './App'
import Index from "./components/Index";
import Show from "./components/Show";
import Edit from "./components/Edit";
import Create from "./components/Create";
import { showLoader, indexLoader } from "./loaders";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element={<App/>}>
            <Route path='' element={<Index/>} loader={indexLoader}/>
            <Route path='post/:id' element={<Show/>} loader={showLoader}/>
            <Route path='create' element={<Create/>}/>
            <Route path='update/:id' element={<Edit/>} loader={showLoader}/>
            <Route path='delete/:id'/>
        </Route>
    </>
));

export default router;