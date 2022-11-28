import React from 'react';
import {Icon} from '@iconify/react';
import styles from './Header.module.scss';
import pumpkin from '../../Assets/pumpkin-halloween-spooky-scary.svg';
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return (
        <header className={styles.MainHeader}>

            <div className={styles.TitleDiv}>
                <h1 className={styles.EftellingTitle} onClick={() => navigate('/')}>Eftelling</h1>
            </div>
            <div className={styles.ImgDiv}>
                <img src={pumpkin}  alt="pumpkin" width="100px"/>
            </div>
            <div className={styles.ChoicesDiv}>
                <h1 className={styles.choice}>Ontdek het park</h1>
                <h1 className={styles.choice}>Plan je bezoek</h1>
                <h1 className={styles.choice}>Kom overnachten</h1>
                <Icon icon="akar-icons:search" width="50" height="50" className={styles.search}/>
                <button className="PrimaryButton" style={{width: "200px", height: "50px"}}>Login</button>
                <button
                    className="PrimaryButton"
                    style={{width: "200px", height: "50px"}}
                    onClick={() => navigate('/ticket')}>
                    Reserveren</button>
            </div>


        </header>
    );
};

export default Header;
