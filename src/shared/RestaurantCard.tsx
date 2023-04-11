import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Divider, Typography } from '@mui/material';
import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import '../component_styles/restaurantCard.scss';
import StarIcon from '@mui/icons-material/Star';
import DiscountIcon from '@mui/icons-material/Discount';
const RestaurantCard = ({restaurantData}: any) => {
    const data = {
        type: "restaurant",
        data: {
            type: "F",
            id: "237054",
            name: "Cafe Bahar since 1973",
            uuid: "32c2f8bc-b640-473a-a2a5-ce46fec0dd9c",
            city: "3",
            area: "Old Mla Quarters",
            aggregatedDiscountInfo: {
                header: "Flat ₹125 off",
                shortDescriptionList: [
                    {
                        meta: "Flat ₹125 off on orders above ₹249",
                        discountType: "Flat",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        discountType: "Flat",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "yrycuz88yy7lm2qbsdv6",
            cuisines: [
                "Biryani",
                "Chinese",
                "Indian",
                "Kebabs",
                "Tandoor"
            ],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 22,
            minDeliveryTime: 22,
            maxDeliveryTime: 22,
            slaString: "22 MINS",
            lastMileTravel: 2.299999952316284,
            slugs: {
                restaurant: "cafe-bahar-himayath-nagar-himayath-nagar",
                city: "hyderabad"
            },
            cityState: "3",
            address: "Old MLA Quarters, Hyderguda, Basheer Bagh",
            locality: "Old Mla Quarters",
            parentId: 316607,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 2800,
                        message: ""
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: ""
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: ""
                    }
                ],
                totalFees: 2800,
                message: "",
                title: "Delivery Charge",
                amount: "2800",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "2.2 kms",
            hasSurge: false,
            sla: {
                restaurantId: "237054",
                deliveryTime: 22,
                minDeliveryTime: 22,
                maxDeliveryTime: 22,
                lastMileTravel: 2.299999952316284,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.0",
            totalRatings: 10000,
            new: false
        },
        subtype: "basic"
    }
    return (
        // <Container className='restaurant-content'>
        //     <Row className='d-flex justify-content-between'>
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
                                        <Badge bg={(restaurantData?.data?.data.avgRating<4) ? "warning" : "success"} className='pill text-white align-items-center d-flex'>
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
                                <Divider />
                                <Row className='px-3 pt-3'>
                                <DiscountIcon fontSize="small" sx={{ color: '#8A584B' }} className='mr-2' />
                                    <Typography className='offer-text' gutterBottom variant="subtitle2" component="div">
                                        {restaurantData?.data?.data.aggregatedDiscountInfo?.header}
                                    </Typography>
                                </Row>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button className='quick-view-button' size="small" color="primary">
                                Quick View
                            </Button>
                        </CardActions>
                    </Card>
                </Col>
    )
}

export default RestaurantCard