import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import BuildWebVideo from '../BuildWebVideo/BuildWebVideo';
import Comment from '../ClientComment/Comment';
import Hostings from '../Hosting/Hostings';
import HostingResource from '../HostingResource/HostingResource';
import OfferArea from '../OfferArea/OfferArea';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <OfferArea></OfferArea>
            <Hostings></Hostings>
            <HostingResource></HostingResource>
            <BuildWebVideo></BuildWebVideo>
            <Comment></Comment>
        </div>
    );
};

export default Home;