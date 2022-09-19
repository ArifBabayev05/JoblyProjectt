
import React from 'react'

const VacancyTable = (props) => {
    return (
        <div>

            <table className="table  ">
                
                <tbody>
                    <tr>
                        
                        <td>{props.product.id}</td>
                        <th className="min-w-200px">{props.product.name}</th>
                        <th className="min-w-200px">{props.product.salary}</th>

                        
                    </tr>

                </tbody>
            </table>


        </div>
    )
}

export default VacancyTable