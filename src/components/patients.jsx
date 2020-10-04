import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import moment from 'moment'
function Patients({user,date,time}) {

    const Component = styled.tr`
        button{
            width: 80px;
            height: 30px;
            border: 0;
            border-radius: 10px;
            font-size: 10px;
        }
    `;


    return (
        
        <Component>
              
               <td>Somto </td>
                <td>Achu</td>
                <td>{moment(date).format('LL')}</td>
                <td>{time}</td>
                <td>
                    <button>
                        Request
                    </button>
                </td>
             
        </Component>
    )
}

Patients
    .propTypes = {

}

export default Patients


