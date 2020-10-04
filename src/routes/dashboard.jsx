import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import styled from 'styled-components';
import Bar from '../components/bar';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import Patients from '../components/patients';
import { getAPIS } from '../utilFunction';

function Dashboard(props) {
    const Component = styled.div`
    .bars{
        display:flex;
    }

    .graph{
        background: white;
        margin: 50px 0px;
        padding: 40px 10px;
    }

    .patients{
        background: white;
        padding: 18px;
    }

    table{
        width: -webkit-fill-available;
        border-collapse:separate;
        border-spacing:10px 30px;      
    }

    

    th{
        font-size: 17px;
        font-weight: unset;
        color: #544d4d;
    }

    tr{
        text-align: center;
        padding: 16px;
        font-size: 10px;
        color: #492828;
        width: -webkit-fill-available;
        margin: 10px;
    }
`

    const data = [
        {
            name: 'Jan', uv: 40, pv: 24, amt: 2400,
        },
        {
            name: 'Feb', uv: 30, pv: 98, amt: 2210,
        },
        {
            name: 'March', uv: 20, pv: 90, amt: 2290,
        },
        {
            name: 'April', uv: 27, pv: 39, amt: 2000,
        },
        {
            name: 'May ', uv: 18, pv: 40, amt: 2181,
        },
        {
            name: 'Jne', uv: 23, pv: 38, amt: 2500,
        },
        {
            name: 'July', uv: 34, pv: 40, amt: 2100,
        }, {
            name: 'August', uv: 23, pv: 30, amt: 2500,
        },
    ];


    const [p, setP] = React.useState([])
    const load = async () => {
        const  patients = await getAPIS('apointment')
        setP(patients)
    }
    React.useEffect(() => { 
        load()
    }
    , [
      
    ])
    return (
        <Layout title={'Overview'} >
            <Component>

                <div className="bars">
                    <Bar title='Total Number Of Patients' number='20' />
                    <Bar title='Total number of Appointments' number={p.length} />
                    <Bar title="Total number of records granted access" number={12} />
                </div>

                <div className='graph'>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <AreaChart
                                data={data}
                                margin={{
                                    top: 10, right: 30, left: 0, bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="patients">
                    <div className="header">
                        <p>Apointment lists</p>
                        <table >
                            
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Appointment Date</th>
                                <th>Time</th>
                                <th>State</th>
                            </tr>
                            {p.map(({user,date,time}) => {
                                    
                           return <Patients user ={user} date={date}  time ={time}/>
                            })}       
                        </table>

                     
                    </div>
                </div>

            </Component>
        </Layout>
    )
}

Dashboard.propTypes = {

}
//radha_checkout_branch
export default Dashboard

