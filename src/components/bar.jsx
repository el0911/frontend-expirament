import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { FaBell, FaEnvelopeOpenText } from 'react-icons/fa';

function Bar({ title, number }) {

    const Component = styled.div`
    background: white;
    width: -webkit-fill-available;
    padding: 10px;
    margin-right: 20px;
    border-radius:10px;

    p{
        font-size: 10px !important;
    }

    .bar{
        height: 50%;
    }
    `;


    return (
        <Component>

            <div className="bar">
                <p>{title}</p>
            </div>

            <div className="bar">
                <p>{number}</p>
            </div>
        </Component>
    )
}

Bar
    .propTypes = {

}

export default Bar


