import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from './App'
import Index from "./components/Index";
import Show from "./components/Show";
import Edit from "./components/Edit";
import { showLoader, indexLoader } from "./loaders";
import { createAction, deleteAction, updateAction } from "./actions";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element={<App/>}>
            <Route path='' element={<Index/>} loader={indexLoader}/>
            <Route path='post/:id' element={<Show/>} loader={showLoader}/>
            <Route path='create' action={createAction}/>
            <Route path='edit/:id' element={<Edit/>} loader={showLoader}/>
            <Route path='update/:id' action={updateAction}/>
            <Route path='delete/:id' action={deleteAction}/>
        </Route>
    </>
));

export default router;