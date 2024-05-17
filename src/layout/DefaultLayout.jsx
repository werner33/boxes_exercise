import { Outlet } from "react-router-dom";
import './DefaultLayout.scss'


const DefaultLayout = () => {

    return ( 
        <div className="default-layout">
            <Outlet/>
        </div>
    )
}


export default DefaultLayout;