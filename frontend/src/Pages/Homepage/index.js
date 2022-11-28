import React from 'react';
import styles from './Homepage.module.scss';
import InfoDiv from "./InfoDiv";
import Banner from "./Banner";
import Showcase from "./Showcase";


import InfoDiv1Img from '../../Assets/InfoDivImg/1.png'
import InfoDiv2Img from '../../Assets/InfoDivImg/2.png'
import InfoDiv3Img from '../../Assets/InfoDivImg/3.png'
import WeatherForecast from "./WeatherForecast";


const Homepage = () => {
    return (
        <div className={styles.MainBody}>
            <Banner/>

            <div className={styles.MidBody}>
                <InfoDiv Title="Attractiepark"
                         Info="Ontdek een wereld vol Wonderen. Bezoek Nederlands grootste en leukste attractiepark de Efteling"
                         Button="Ontdek de Efteling"
                         ImgUrl={InfoDiv1Img}/>

                <InfoDiv Title="Kom overnachten"
                         Info="Geniet van nog meer momenten samen en beleef horrorachtig overnachten in een van de vele accommodaties"
                         Button="Kom overnachten"
                         ImgUrl={InfoDiv2Img}/>

                <InfoDiv Title="Werken bij de Efteling"
                         Info="Join the mortuary cult now!"
                         Button="Ontdek meer"
                         ImgUrl={InfoDiv3Img}/>
            </div>

            <Showcase/>

            <WeatherForecast />
        </div>
    );
};

export default Homepage;
