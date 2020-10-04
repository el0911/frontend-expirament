import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import styled from 'styled-components';

import Patients from '../components/patientsList';
import { getAPIS } from '../utilFunction';

function PatientList(props) {
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

    .text {
        position: absolute;
        left: 0;
        width: 100%;
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

    .header{
        position:relative
    }

    .text textarea{
        margin-top: 43px;
        overflow: auto;
    resize: vertical;
    width: -webkit-fill-available;
    height: 150px;
    border-radius: 10px;
    border: .6px solid silver;
    }
`

    const [p, setP] = React.useState([])
    const load = async () => {
        const { patients } = await getAPIS('patient')
        setP(patients)
    }
    React.useEffect(() => { 
        load()
    }
    , [
      
    ])

    return (



        <Layout title={'Patient List'} >
            <Component>



                <div className="patients">
                    <div className="header">
                        <table >
                            <tr>
                                <th>Name</th>
                                <th>Date of birth</th>
                                <th>contact info</th>
                                <th>Status</th>
                                <th>Last Accessed</th>
                            </tr>
                            {p.map((data) => <Patients data={data} />)}
                        </table>


                    </div>
                </div>

            </Component>
        </Layout>
    )
}

PatientList.propTypes = {

}
//radha_checkout_branch
export default PatientList

