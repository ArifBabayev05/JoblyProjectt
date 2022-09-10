import React from 'react'
import { ShowOnAdmin, ShowOnUser } from '../../Layouts/HiddenLinks/Router'
import ErrorPage from '../UserPanel/ErrorPage'
import './Admin.css'
import { Link } from 'react-router-dom'
import './Admin.css'
function Admin() {
    return (
        <div>

            <ShowOnAdmin>
                <div>
                    <div>Sidebar</div>
                    <div className='p-7 text-2x1 font-semibold'>
                    <h1>Home</h1>
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