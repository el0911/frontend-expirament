import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { FaBell, FaEnvelopeOpenText } from 'react-icons/fa';

function Details({detailkey,value,component}) {

    const Component = styled.div`
    display: flex;
    margin: 20px 0;

        p{
            font-size: 13px !important;
            padding-top: 8px;
        }
    `;


    return (
        <Component>
            <p>{detailkey}</p>
            
            {component?component:<p>{value}</p>}
        </Component>
    )
}

Details
    .propTypes = {

}

export default Details


