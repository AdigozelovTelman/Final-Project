import React from 'react'
import styles from "./Footer.module.scss"
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import visa from '../assets/images/card_visa.png'
import master from '../assets/images/card_master.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className={styles.containerFooter}>
                <div className={styles.footermenu}>
                    
                    <div className={styles.mobile}>
                        <h3>Şirkət</h3>
                        <a href="#">Haqqımızda </a>
                        <a href="#">Əlaqə</a>
                        <a href="#">Vakansiyalar</a>
                        <a href="#">Sayt Xəritəsi</a>
                    </div>
                    <div className={styles.hardware}>
                        <h3>Müştəri Xidməti</h3>
                        <a href="#">Dəyişdirilmə və qaytarılma</a>
                        <a href="#">Ödəniş və çatdırılma
                        </a>
                        <a href="#">Sifarişiniz haqqında
                        </a>
                        <a href="#">Seçilmişlər</a>
                    </div>
                    <div className={styles.izle}>
                        <h3>Sosial media hesablarımız</h3>
                        <div className={styles.icon}>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>
                <div className={styles.contact}>
                    <h3>Əlaqə</h3>
                    <div className={styles.boxes}>
                        <a href="#"><IoIosCall />
                        </a> <span>+994 55 6425446</span>
                    </div>
                    <div className={styles.boxes}>
                        <a href="#"><IoMdMail />
                        </a> <span>telmanra-sp202@code.edu.az</span>
                    </div>
                    <div className={styles.xerite}>
                        <a href="#">Xəritədə bax</a>
                    </div>

                </div>
                </div>


            </div >
            <div className={styles.bookcenter}>
                <div className={styles.center}>
                    <p>© 2025 BOOKCENTER - Bütün hüquqlar qorunur  </p>
                </div>
                <div className={styles.visa}>
                    <img src={visa} alt="visacart" />
                    <img src={master} alt="master cart" />
                </div>
            </div>
        </>
    )
}

export default Footer