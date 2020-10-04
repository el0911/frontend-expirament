import React from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import styled from 'styled-components';
import { useHistory } from 'react-router';
const Form = styled.div`
	.form {
		margin: auto;
		margin-top: 10vh;
	}

	input {
		margin: auto !important;
		margin-top: 3rem !important;
	}
`;

const FormPage = ({history}) => {
	const formData = {};
    const URL = ''
	const handleInput = (key, data) => {
		formData[key] = data;
    };
    
    const handleSubmit = async ()=>{
         
        if (formData.password) {
			history.push('/')
        }
        else{
            alert('passwords dont exist')
        }
         
	}
	

	return (
		<Form>
			<MDBContainer>
				<MDBRow>
					<MDBCol size="12" sm="6" lg="4" className="form">
						<form onSubmit={ e=>{
                            e.preventDefault()
                            handleSubmit()
                        } } >
							<p className="h5 text-center mb-4">Sign In</p>
							<div className="grey-text">
							 
								<MDBInput
									onInput={(e) => {
										handleInput('email', e.target.value);
									}}
									label="Your email"
									icon="envelope"
                                    group
                                    required
									type="email"
									validate
									error="wrong"
									success="right"
								/>

								<MDBInput
									onInput={(e) => {
										handleInput('password', e.target.value);
									}}
									label="Your password"
									icon="lock"
                                    group
                                    required
									type="password"
									validate
								/>

							 
							</div>
							<div className="text-center">
								<MDBBtn type='submit' color="primary">Login</MDBBtn>
							</div>
						</form>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</Form>
	);
};

export default FormPage;
