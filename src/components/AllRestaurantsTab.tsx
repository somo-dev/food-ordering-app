import React, { useState } from 'react';
import '../assets/data/restaurantData';
import { Container, Row } from 'react-bootstrap';
import RestaurantCard from '../shared/RestaurantCard';
import { Box, Tab, Tabs } from '@mui/material';
import TabPanel from './TabPanel';
import UAParser from "ua-parser-js";
import { cards } from '../assets/data/restaurantData'
import SponsoredMusicPlayer from './SponsoredMusicPlayer';
import FeaturedCarousel from './FeaturedCarousel';

const AllRestaurantsTab = ({ allRestaurantDetails, deviceType }: any) => {
    const [activeTabKey, setActiveTabKey] = useState('allRestaurants');
    const tabChangeHandler = (event: React.SyntheticEvent, eventKey: string) => {
        setActiveTabKey(eventKey);
    };
    const deliveryTimeSortedCards = [...cards]?.sort((a, b) => (a.data.data.deliveryTime > b.data.data.deliveryTime ? 1 : -1));

    return (<>
        <FeaturedCarousel deviceType={deviceType} />
        <Container className='my-4'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={activeTabKey}
                        onChange={tabChangeHandler}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab label="All Restaurants" value="allRestaurants" {...a11yProps("allRestaurants")} />
                        <Tab label="Delivery Time" value="deliveryTime" {...a11yProps("deliveryTime")} />
                        <Tab label="Rating" value="rating" {...a11yProps("rating")} />
                        <Tab label="Cost(Low to High)" value="costLH" {...a11yProps("costLH")} />
                        <Tab label="Cost(High to Low)" value="costHL" {...a11yProps("costHL")} />
                    </Tabs>
                </Box>
                <TabPanel value={activeTabKey} index={'allRestaurants'}>
                    <Container className='restaurant-content'>
                        <Row className='d-flex justify-content-between'>
                            {cards?.slice(0,16).map((restaurantData: any, index: number) => {
                                return (
                                    <RestaurantCard key={index} restaurantData={restaurantData} />
                                )
                            })}
                        </Row>
                    </Container>
                </TabPanel>
                <TabPanel value={activeTabKey} index={'deliveryTime'}>
                    <Container className='restaurant-content'>
                        <Row className='d-flex justify-content-between'>
                            {deliveryTimeSortedCards?.map((restaurantData: any, index: number) => {
                                return (
                                    <RestaurantCard key={index} restaurantData={restaurantData} />
                                )
                            })}
                        </Row>
                    </Container>
                </TabPanel>
                <TabPanel value={activeTabKey} index={'rating'}>
                    <Container className='restaurant-content'>
                        <Row className='d-flex justify-content-between'>
                            {cards?.slice(0,16).sort((a, b) => (a.data.data.avgRating > b.data.data.avgRating ? -1 : 1)).map((restaurantData: any, index: number) => {
                                return (
                                    <RestaurantCard key={index} restaurantData={restaurantData} />
                                )
                            })}
                        </Row>
                    </Container>
                </TabPanel>
                <TabPanel value={activeTabKey} index={'costLH'}>
                    <Container className='restaurant-content'>
                        <Row className='d-flex justify-content-between'>
                            {cards?.slice(0,16).sort((a, b) => (a.data.data.costForTwo > b.data.data.costForTwo ? 1 : -1)).map((restaurantData: any, index: number) => {
                                return (
                                    <RestaurantCard key={index} restaurantData={restaurantData} />
                                )
                            })}
                        </Row>
                    </Container>
                </TabPanel>
                <TabPanel value={activeTabKey} index={'costHL'}>
                    <Container className='restaurant-content'>
                        <Row className='d-flex justify-content-between'>
                            {cards?.slice(0,16).sort((a, b) => (a.data.data.costForTwo > b.data.data.costForTwo ? -1 : 1)).map((restaurantData: any, index: number) => {
                                return (
                                    <RestaurantCard key={index} restaurantData={restaurantData} />
                                )
                            })}
                        </Row>
                    </Container>
                </TabPanel>
            </Box>
            <SponsoredMusicPlayer />
        </Container>
    </>
    );
}
AllRestaurantsTab.getInitialProps = ({ req }: any) => {
    let userAgent;
    if (req) {
        userAgent = req.headers["user-agent"];
    } else {
        userAgent = navigator.userAgent;
    }
    const parser = new UAParser();
    parser.setUA(userAgent);
    const result = parser.getResult();
    const deviceType = (result.device && result.device.type) || "desktop";
    return { deviceType };
};
export default AllRestaurantsTab

function a11yProps(index: string) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
