import React from 'react'
import { ShowOnAdmin, ShowOnUser } from '../Layouts/HiddenLinks/Router'

function Admin() {
  return (
<div>
    <ShowOnAdmin>
        <div>Hello Adminss</div>
    </ShowOnAdmin>
    <ShowOnUser>H iUsers</ShowOnUser>
    </div>
  )
}

export default Admin