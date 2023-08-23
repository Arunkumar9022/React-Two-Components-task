import React,{lazy,Suspense} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


const Login=lazy(()=>import('../../Components/pages/Login'));

function RouteApp()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Suspense fallback={""}><Login/></Suspense>}/>
        </Routes>
       </BrowserRouter>

    )
}
export default RouteApp;