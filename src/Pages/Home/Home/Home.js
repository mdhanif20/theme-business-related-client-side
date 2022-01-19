import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import BuildWebVideo from '../BuildWebVideo/BuildWebVideo';
import Comment from '../ClientComment/Comment';
import DataAnalysis from '../DataAnalysis/DataAnalysis';
import Footer from '../Footer/Footer';
import GetHost from '../GetHost/GetHost';
import Hostings from '../Hosting/Hostings';
import HostingResource from '../HostingResource/HostingResource';
import OfferArea from '../OfferArea/OfferArea';
import Options from '../OptionSelection/Options';
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
            <Options></Options>
            <BuildWebVideo></BuildWebVideo>
            <Comment></Comment>
            <DataAnalysis></DataAnalysis>
            <SupportTeam></SupportTeam>
            <GetHost></GetHost>
            <Footer></Footer>
        </div>
    );
};

export default Home;