import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import styled from 'styled-components';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { postAPIS } from '../utilFunction';

function AddPatient(props) {
    const Component = styled.div`
    
`

    const save = async () =>{
        const first_name = document.getElementById('firstname').value
        const last_name = document.getElementById('lastname').value
        const dob = document.getElementById('dob').value
        const address = document.getElementById('address').value

        await postAPIS('patient',{
            first_name,
            last_name,
            dob,
            address
        })

        window.location = '/'
    }

    return (



        <Layout title={'Add  Patient'} >
            <Component>


                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form onSubmit={e=>{
                                e.preventDefault()
                                save()
                            }} >
                                <p className="h4 text-center mb-4">Patient</p>
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                    Patient First Name
        </label>
                                <input type="text" id="firstname" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                Patient Last Name
        </label>
                                <input type="text" id="lastname" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Patient Date of Birth
        </label>
                                <input type="date" id="dob" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                Patient Addres
        </label>
                                <input type="text" id="address" className="form-control" rows="3" />
                                <div className="text-center mt-4">
                                    <MDBBtn color="warning" outline type="submit">
                                        Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>


            </Component>
        </Layout>
    )
}

AddPatient.propTypes = {

}
//radha_checkout_branch
export default AddPatient

