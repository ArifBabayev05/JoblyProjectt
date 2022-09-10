import React, { useState } from 'react'
import { ShowOnAdmin, ShowOnUser } from '../../Layouts/HiddenLinks/Router'
import ErrorPage from '../UserPanel/ErrorPage'
import './Admin.css'
import '../../App.css'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/Hero/arrow.png'
import jlogo from '../../Assets/Images/Admin/logo.png'

import './Admin.css'
import Sidebar from './Sidebar/Sidebar'
function Admin() {

    return (
        <div>
            <ShowOnAdmin>
                <div>
                    <div class="container-fluid">
                        <div class="row flex-nowrap">
                            <Sidebar />
                            <div class="col py-3">
                                Content area...
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