import React from 'react'
import { ShowOnAdmin, ShowOnUser } from '../../Layouts/HiddenLinks/Router'
import ErrorPage from '../UserPanel/ErrorPage'
import './Admin.css'
import { Link } from 'react-router-dom'
import './Admin.css'
import Sidebar from './components/Sidebar/Sidebar'

function Admin() {
    return (
        <div>

            <ShowOnAdmin>
                <div className='Dashboard'>
                    <div className='AppGlass'>

                    <Sidebar/>
                    </div>

                </div>

            </ShowOnAdmin>


            <ShowOnUser>
                <div>
                    <ErrorPage />
                </div>
            </ShowOnUser>
        </div>
    )
}

export default Admin