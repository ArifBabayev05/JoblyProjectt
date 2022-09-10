import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className="sidebarr col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/admin" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className=" mt-5 fs-5 d-none d-sm-inline">Admin Panel</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="/admin" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 text-white d-none d-sm-inline">Əsas Səhifə</span>
                        </a>
                    </li>

                    <li>
                        <a href="/companyAdmin" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Şirkətlər</span></a>
                    </li>

                    <li>
                        <a href="/vacancyAdmin" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Vakansiyalar</span></a>
                    </li>

                    <li>
                        <a href="/categoryAdmin" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Kateqoriyalar</span> </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar