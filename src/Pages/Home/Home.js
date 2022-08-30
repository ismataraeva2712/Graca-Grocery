import React from 'react';

import Banner from './Banner';
import Collections from './Collections';
import Footer from './Footer';
import Newsletter from './Newsletter';
import UpComing from './UpComing';
import Discount from './Discount';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Collections></Collections>
           <Discount></Discount>
           <Newsletter></Newsletter>
           {/* <UpComing></UpComing> */}
           <Footer></Footer>
        </div>
    );
};

export default Home;