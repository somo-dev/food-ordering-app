import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Divider, Typography } from '@mui/material';
import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import '../component_styles/restaurantCard.scss';
import StarIcon from '@mui/icons-material/Star';
import DiscountIcon from '@mui/icons-material/Discount';
import { Link } from 'react-router-dom';
const RestaurantCard = ({ restaurantData }: any) => {
    return (
        // <Container className='restaurant-content'>
        //     <Row className='d-flex justify-content-between'>
        <Link to={restaurantData?.data?.data?.uuid} className='d-flex justify-content-center'>
            <Col className='d-flex justify-content-center mb-5' md={6} lg={4} xl={3}>
                <Card sx={{ maxWidth: 276, minWidth: 276 }}>
                    <CardActionArea>
                        <CardMedia
                            className=''
                            component="img"
                            image={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurantData?.data?.data.cloudinaryImageId}`}
                            alt="food item"
                        />
                        <CardContent className=''>
                            <Typography className='restaurant-name' gutterBottom variant="subtitle1" component="div">
                                {restaurantData?.data?.data.name}
                            </Typography>
                            <div className='cusine-test-font'>
                                {restaurantData?.data?.data.cuisines?.map((cuisine: any, index: number) => {
                                    let comma = ',';
                                    if (restaurantData?.data?.data.cuisines?.indexOf(cuisine) === restaurantData?.data?.data.cuisines?.length - 1) {
                                        comma = ''
                                    } else {
                                        comma = ',';

                                    }
                                    return (
                                        <span key={index}>{`${cuisine}${comma} `}</span>
                                    )
                                })}
                            </div>
                            <Row className='py-3 pt-4'>
                                <Col>
                                    {/* <Chip label="3.4" color="warning" size="small" avatar={
                                            <Avatar src=".\src\assets\images\star.png" />
                                        } /> */}
                                    <Badge bg={(restaurantData?.data?.data.avgRating < 4) ? "warning" : "success"} className='pill text-white align-items-center d-flex'>
                                        <span className='rating-star ml-1 mr-1'>★</span> {restaurantData?.data?.data.avgRating}
                                    </Badge>
                                </Col>
                                <Col>
                                    <span className='costForTwo-test-font'>
                                        {restaurantData?.data?.data.slaString}
                                    </span>
                                </Col>
                                <Col xs={5}>
                                    <span className='costForTwo-test-font'>
                                        {restaurantData?.data?.data.costForTwoString}
                                    </span>
                                </Col>
                            </Row>
                            {restaurantData?.data?.data.aggregatedDiscountInfo &&
                                <><Divider />
                                    <Row className='px-3 pt-3'>
                                        <DiscountIcon fontSize="small" sx={{ color: '#8A584B' }} className='mr-2' />
                                        <Typography className='offer-text' gutterBottom variant="subtitle2" component="div">
                                            {restaurantData?.data?.data.aggregatedDiscountInfo?.header}
                                        </Typography>
                                    </Row>
                                </>}
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className='quick-view-button' size="small" color="primary">
                            Quick View
                        </Button>
                    </CardActions>
                </Card>
            </Col>
        </Link>
    )
}

export default RestaurantCard