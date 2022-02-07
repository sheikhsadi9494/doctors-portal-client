import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Comments from '../Comments/Comments';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import Services from '../Services/Services';
import BannerServices from '../BannersServices/BannerServices'
import Navigation from '../../Shered/Navigation/Navigation';
import Footer from '../../Shered/Footer/Footer';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div style={{overflow: 'hidden'}}>
            <Navigation></Navigation>
            <Banner></Banner>
            <BannerServices></BannerServices> 
            <Services></Services>
            <DentalCare></DentalCare>
            <AppointmentBanner></AppointmentBanner>
            <Doctors></Doctors>
            <Comments></Comments>
            <Contact></Contact>
            <Footer></Footer> 
        </div>
    );
};

export default Home;