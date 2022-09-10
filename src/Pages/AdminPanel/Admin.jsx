import React from 'react'
import { ShowOnAdmin, ShowOnUser } from '../../Layouts/HiddenLinks/Router'
import ErrorPage from '../ErrorPage'
import '../../Assets/Styles/Admin/Admin.css'
function Admin() {
    return (
        <div>

            <ShowOnAdmin>
                <div>
                    Hello Adminss
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