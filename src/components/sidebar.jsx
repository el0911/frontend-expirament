import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { FaChartBar, FaPersonBooth, FaCalendar } from 'react-icons/fa';
import { useHistory } from 'react-router';

function ListItem({ name, path, Icon }) {
    const history = useHistory()
    return <li>
        <div className='listitem'  onClick={e=>{
            history.push(path)
        }} >
            <Icon />
            <p>
                {name}
            </p>
        </div>
    </li>
}

function SideBar(props) {
    const Component = styled.div`
        
        background: #3C3B54;
        width: 140px;
        color: white;
        padding-left: 10px;
        font-weight: bold;
        height: calc(100vh - 50px);

        ul{
            list-style:none;
            padding: 0;
        }

        .listitem p{
            margin: 0 10px;
        }

        .listitem li{
                margin-top: 20px;
        }

        .listitem{
            display:flex;
            margin:  15px 0;
            font-weight: 200;
            font-size: 12px;
        }

    `;
    return (
        <Component>
            <div className="lefter">
                <ul>
                    <ListItem name='Dashboard' path="dashboard" Icon={FaChartBar} />
                    <ListItem name='Patient List' path="patientlist" Icon={FaPersonBooth} />
                    <ListItem name='Appointment Sheduler' path="shedule" Icon={FaCalendar} />
                    <ListItem name='Add a patient' path="addpatient" Icon={FaCalendar} />
                </ul>
            </div>
        </Component>
    )
}

SideBar.propTypes = {

}

export default SideBar

