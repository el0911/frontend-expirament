import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

function Header(props) {

    const Component = styled.div`

    max-width: max-content;
    text-align: center;
    height: 50px;
    padding-top: 10px;
    background: white;
    padding-right: 20px;
    height: unset;


        .search{
            display: flex;
            height: 60px; 
        }

        .search input{
            overflow: visible;
            border: 0;
            padding:0 10px;
            height: 35px;
            border-bottom: 1px solid silver;
        }

        .search svg{
            color: silver;
            margin: 12px 4px;         
            min-width: 30px;
        }
    `;


    return (
        <Component>

            <div className="search">
                <FaSearch />
                <input placeholder='Search patient' type="text" />
            </div>

        </Component>
    )
}

Header
    .propTypes = {

}

export default Header


