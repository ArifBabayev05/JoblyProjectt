import React from 'react'
import { ShowOnAdmin, ShowOnUser } from '../../Layouts/HiddenLinks/Router'
import ErrorPage from '../UserPanel/ErrorPage'
import './Admin.css'
import '../../App.css'
import './Admin.css'
import Sidebar from './Sidebar/Sidebar'
import Home from './Home/Home'
function Admin() {

    return (
        <div>
            <ShowOnAdmin>
                <div>
                    <div className="container-fluid">
                        <div className="row flex-nowrap">
                            <Sidebar />
                            <div className="col py-3">
                                <Home/>
                            </div>
                        </div>
                    </div>
                </div>
            </ShowOnAdmin>
            <ShowOnUser>
                <div>
                    <ErrorPage />
                </div>
            </ShowOnUser>
        </div>
    );
}

export default Admin