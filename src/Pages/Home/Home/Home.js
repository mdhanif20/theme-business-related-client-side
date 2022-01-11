import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import BuildWebVideo from '../BuildWebVideo/BuildWebVideo';
import Comment from '../ClientComment/Comment';
import Footer from '../Footer/Footer';
import GetHost from '../GetHost/GetHost';
import Hostings from '../Hosting/Hostings';
import HostingResource from '../HostingResource/HostingResource';
import OfferArea from '../OfferArea/OfferArea';
import Slider from '../Slider/Slider';
import SupportTeam from '../SupportTeam/SupportTeam';


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
            <SupportTeam></SupportTeam>
            <GetHost></GetHost>
            <Footer></Footer>
        </div>
    );
};

export default Home;