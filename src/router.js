import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from './App'
import Index from "./components/Index";
import Show from "./components/Show";
import Edit from "./components/Edit";
import Create from "./components/Create";
import { showLoader, indexLoader } from "./loaders";
import { createAction, deleteAction, updateAction } from "./actions";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element={<App/>}>
            <Route path='' element={<Index/>} loader={indexLoader}/>
            <Route path='post/:id' element={<Show/>} loader={showLoader}/>
            <Route path='create' element={<Create/>} action={createAction}/>
            <Route path='update/:id' element={<Edit/>} loader={showLoader} action={updateAction}/>
            <Route path='delete/:id' action={deleteAction}/>
        </Route>
    </>
));

export default router;