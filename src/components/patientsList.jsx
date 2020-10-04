import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import moment from 'moment'

function Patients(props) {

    const Component = styled.tr`
        button{
            width: 80px;
            height: 30px;
            border: 0;
            border-radius: 10px;
            font-size: 10px;
        
        }
    `;

    const [show, setShow] = React.useState(false)

    const { first_name, last_name, address, dob, lastAccess } = props.data


    return (

        <Component >



            <td onClick={e => {
                setShow(!show)
            }} >  {`${first_name} ${last_name}`}</td>
            <td>{moment(dob).format('MMMM Do YYYY')}</td>

            <td>{address}</td>

            <td>
                <a href={require("./record.pdf")} download="myFile" >
                    <button>
                        View Record
                        </button>
                </a>
            </td>

            <td>{moment(lastAccess).format('MMMM Do YYYY')}</td>


            {show && <div className="text">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button onClick={e => {
                setShow(!show)
            }} >
                    Done  and save
                </button>
            </div>}


        </Component>


    )
}

Patients
    .propTypes = {

}

export default Patients


