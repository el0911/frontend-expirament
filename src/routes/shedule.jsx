import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import styled from 'styled-components';

import Shedule from '../components/apointments';

function ShedulePage(props) {
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

    

    return (
        <Layout title={'Appointment  Shedule'} >
            <Component>

                    <Shedule/>
               
            </Component>
        </Layout>
    )
}

ShedulePage.propTypes = {

}
//radha_checkout_branch
export default ShedulePage

