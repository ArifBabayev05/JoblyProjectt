import React from 'react'
import { ShowOnAdmin, ShowOnUser } from '../Layouts/HiddenLinks/Router'
import ErrorPage from './ErrorPage'

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
                    <ErrorPage/>
                </div>
            </ShowOnUser>
        </div>
    )
}

export default Admin