import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Image } from 'semantic-ui-react';
import { imageStore } from '../assets/data/constants';

const SearchSuggestions = ({ suggestions }: any) => {
    return (
        <Col className='mb-5' xs={12} md={6} lg={6} xl={6}>
            <div className='d-flex'>
                <Image
                className='mr-4'
                    draggable={false}
                    style={{ width: '150px', height: '130px', cursor: 'pointer', borderRadius: '5px' }}
                    src={`${imageStore}${suggestions.cloudinaryId}`}
                />
                <div>
                    <p className='suggestions-cuisines-text'>{suggestions.text}</p>
                    <p className='suggestions-cuisines-type'>{suggestions.type}</p>
                </div>
            </div>
        </Col>
    )
}

export default SearchSuggestions