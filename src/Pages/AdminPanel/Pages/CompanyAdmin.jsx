import React from 'react'
// import ErrorPage from '../../UserPanel/ErrorPage'
// import Home from '../Home/Home'
import Sidebar from '../Sidebar/Sidebar'
import { ShowOnAdmin, ShowOnUser } from '../../../Layouts/HiddenLinks/Router'
import Loader from '../../../Components/Jobs/Loader'


const CompanyAdmin = () => {
    return (
        <div>
            <ShowOnAdmin>
                <div>
                    <div class="container-fluid">
                        <div class="row flex-nowrap">
                            <Sidebar />
                            <div class="col py-3">
                                <div class="table-responsive">
                                    <table class="table table-striped gy-7 gs-7">
                                        <thead>
                                            <tr class="fw-semibold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                                                <th class="min-w-200px">Name</th>
                                                <th class="min-w-400px">Position</th>
                                                <th class="min-w-100px">Office</th>
                                                <th class="min-w-200px">Age</th>
                                                <th class="min-w-200px">Start date</th>
                                                <th class="min-w-200px">Salary</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                            </tr>
                                            <tr>
                                                <td>Garrett Winters</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>63</td>
                                                <td>2011/07/25</td>
                                                <td>$170,750</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ShowOnAdmin>
            <ShowOnUser>
                <div>
                    <Loader />
                </div>
            </ShowOnUser>
        </div>
    )
}

export default CompanyAdmin