import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import SideBar from './sidebar'
import styled from 'styled-components';

function Layout({title,children}) {
    const Component = styled.div`

        .topbelow{
            display: -webkit-box;
        }
    
        .below{
            display:flex
            width: 100vw;
            background:#F0F0F7;
        }

        .content{
            margin-left: 3%;
            width: calc(100vw - 251px);
            margin-top: 5%;
        }

        .content p{
            font-size: 25px;
            font-weight: 400;
        }
    `
    return (
        <Component>
            <Header />
                <div className='topbelow' >
                    <div className="below">
                        <SideBar />
                        <div className="content">
                            <p className="title">
                                {title}
                            </p>

                            {children}
                        </div>
                    </div>
                </div>
        </Component>
    )
}

Layout.propTypes = {

}

export default Layout

