import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { FaBell ,FaEnvelopeOpenText } from 'react-icons/fa';

function Header(props) {

    const Component = styled.div`
    width: 100%;
    height: 50px;

    .righter{
        display:flex;
        float:right;
        margin: 10px 25px;
    }

    .righter img{
        height: 35px;
        width: 35px;

        border-radius: 50%;    
    }

    .righter p{
        font-size: 13px;
        font-weight: 300;
        margin: 10px 10px;
        padding: 0;
    }

    .icons{
        display:flex;
        margin: 0px 10px;

    }

    .icons svg{
        margin: 12px 6px;
        width: 11px;
        color: #a9b1ce;
    }

    .lefter{
        FLOAT: left;
        background: #3C3B54;
        width: 140px;
        height: -webkit-fill-available;
        padding-top: 21px;
        color: white;
        padding-left: 10px;
        font-weight: bold;
    }
    `;
    

    return (
        <Component>

            <div className="lefter">
                <p>
                    MEDBLOCK
                </p>
            </div>

            <div className="righter">
                <div className="icons">
                    <FaEnvelopeOpenText/>
                    <FaBell/>
                </div>
                <p>Somto Achu</p>
                <img src="data:image/jpeg;base64,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" alt="" />
            </div>

        </Component>
    )
}

Header
    .propTypes = {

}

export default Header


