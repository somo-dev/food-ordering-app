import React from 'react'
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import '../component_styles/seacrhPage.scss';
import { Image } from 'semantic-ui-react';
import Carousel from 'react-multi-carousel';
import { responsive } from '../assets/data/constants';
import { cusines } from '../assets/data/cuisines';

const SearchRestaurantsScreen = () => {
    const imageStore = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";
    return (
        <>
            <div className='search-page mx-auto'>
                <InputGroup size="lg" className='mb-5'>
                    <Form.Control
                        className='search-input-field'
                        placeholder="Search for restaurnats or food"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                    <InputGroup.Text id="inputGroup-sizing-lg">
                        <SearchIcon className='mx-2' />
                    </InputGroup.Text>
                </InputGroup>
                <div className='ml-1 mb-5 popular-cuisines-text'>
                    Popolar Cuisines
                </div>
                <Row className='d-flex justify-content-center my-2 mb-5'>
                    <Col>
                        <Carousel
                            ssr
                            itemClass="image-item"
                            responsive={responsive}
                            arrows={true}
                            infinite={false}
                            centerMode={true}
                        >
                            {cusines.map(image => {
                                return (
                                    <div key={image.id} className="d-flex align-items-center justify-content-center mx-3 h-100">
                                        <Image
                                            draggable={false}
                                            style={{ maxWidth: '100px', cursor: 'pointer' }}
                                            src={`${imageStore}${image.imageId}`}
                                        />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default SearchRestaurantsScreen;