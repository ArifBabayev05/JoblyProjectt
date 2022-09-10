
import React from 'react'

const VacancyTable = (props) => {
    return (
        <div>

            <table class="table  ">
                
                <tbody>
                    <tr>
                        
                        <td>{props.product.id}</td>
                        <th class="min-w-200px">{props.product.name}</th>
                        <th class="min-w-200px">{props.product.salary}</th>

                        
                    </tr>

                </tbody>
            </table>


        </div>
    )
}

export default VacancyTable