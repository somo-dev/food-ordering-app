import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='bg-dark text-center text-white'>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/soumya-pal/' target='_blank' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://github.com/somo-dev' target='_blank' role='button'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright: &nbsp;
                <a className='text-white' href='https://mdbootstrap.com/'>
                    ZOOP | Only for Educational and showcase purpose | Not for commercial use
                </a>
            </div>
        </MDBFooter>
    );
}