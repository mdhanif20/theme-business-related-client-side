import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import BuildWebVideo from '../BuildWebVideo/BuildWebVideo';
import Comment from '../ClientComment/Comment';
import DataAnalysis from '../DataAnalysis/DataAnalysis';
import HostingResource from '../HostingResource/HostingResource';
import Packages from '../Package/Packages';
import Slider from '../Slider/Slider';
import SupportTeam from '../SupportTeam/SupportTeam';
import GetHost from '../GetHost/GetHost';
import FooterReall from '../../Shared/FooterReall/FooterReall';
import Themes from './../../Theme/ThemesArea/Themes';
import Storage from '../StorageArea/Storage';



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Themes></Themes>
            <HostingResource></HostingResource>
            <Storage></Storage>
            <BuildWebVideo></BuildWebVideo>
            <Comment></Comment>
            <DataAnalysis></DataAnalysis>
            <SupportTeam></SupportTeam>
            <Packages></Packages>
            <GetHost></GetHost>
            <FooterReall></FooterReall>
        </div>
    );
};

export default Home;