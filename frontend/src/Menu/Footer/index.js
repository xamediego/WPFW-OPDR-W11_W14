import React from 'react';
import {Icon} from "@iconify/react/dist/iconify";
import styles from './Footer.module.scss';
import {useNavigate} from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate();

    return (
        <footer className={styles.footer}>

            <div className={styles.TopFoot}>
                <div className={styles.LeftFoot}>
                    <div className={styles.LinksContainer}>
                        <div className={styles.LinkDiv}>
                            <label>Het Park</label>
                            <ul className={styles.LinkDiv}>
                                <li><a className={styles.link}>Attracties</a></li>
                                <li><a className={styles.link}>Openingstijden & drukte</a></li>
                                <li><a className={styles.link}>Attracties in onderhoud</a></li>
                            </ul>
                        </div>

                        <div className={styles.LinkDiv}>
                            <label>Over de Efteling</label>
                            <ul className={styles.LinkDiv}>
                                <li><a className={styles.link}>Ons verhaal</a></li>
                                <li><a className={styles.link}>Geschiedenis</a></li>
                                <li><a className={styles.link}>Organisatie</a></li>
                            </ul>
                        </div>

                        <div className={styles.LinkDiv}>
                            <label>Meer Efteling</label>
                            <ul className={styles.LinkDiv}>
                                <li><a onClick={() => navigate('/sneed')} className={styles.link}>Theatershow Sneed</a></li>
                                <li><a className={styles.link}>Efteling Evenementen</a></li>
                                <li><a className={styles.link}>Efteling Kids website</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.RightFoot}>
                        <div className={styles.SocButtonDiv}>
                            <button className={styles.SocButton}><Icon icon="ph:youtube-logo" className={styles.logo}/>
                            </button>
                            <button className={styles.SocButton}><Icon icon="ph:twitter-logo" className={styles.logo}/>
                            </button>
                            <button className={styles.SocButton}><Icon icon="ph:instagram-logo" className={styles.logo}/>
                            </button>
                            <button className={styles.SocButton}><Icon icon="ph:tiktok-logo" className={styles.logo}/>
                            </button>
                            <button className={styles.SocButton}><Icon icon="ph:linkedin-logo" className={styles.logo}/>
                            </button>
                            <button className={styles.SocButton}><Icon icon="ph:facebook-logo" className={styles.logo}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.FooterLowDiv}>
                <div className={styles.LowDivLine}>
                    <hr/>
                </div>
                <div className={styles.DisclaimerDiv}>
                    <a>@ SneedPark 2022</a>
                    <a>Privacy statement</a>
                    <a>Algemene voorwaarden</a>
                    <a>Contact & Klantenservice</a>
                </div>
            </div>
        </footer>
    );
};

