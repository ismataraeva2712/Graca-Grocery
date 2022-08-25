import React from 'react';
import Banner from './Banner';
import Collections from './Collections';
import Footer from './Footer';
import UpComing from './UpComing';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Collections></Collections>
           {/* <UpComing></UpComing> */}
           <Footer></Footer>
        </div>
    );
};

export default Home;