import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import logo from '../assets/images/WhatsApp_Şəkil_2025-02-03_saat_23.41.36_7e8ea673-removebg-preview.png'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const fullText = "Növbəti kitabınızı axtarın";
    const [placeholder, setPlaceholder] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (index < fullText.length) {
                    setPlaceholder(fullText.slice(0, index + 1));
                    setIndex(index + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 3000);
                }
            } else {
                if (index > 0) {
                    setPlaceholder(fullText.slice(0, index - 1));
                    setIndex(index - 1);
                } else {
                    setIsDeleting(false);
                }
            }
        }, 150); 

        return () => clearTimeout(timeout);
    }, [index, isDeleting]);

    return (
        <>
            <div className={styles.headertop}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link to="/"> <img src={logo} alt="logo" /></Link>
                    </div>
                     
                    <div className={styles.input}>
                        <input type="text" placeholder={placeholder} />
                        <button><FaSearch />
                        </button>
                    </div>
                    <div className={styles.icons}>
                        <a href="/login"><FaUser />    <span>Daxil ol</span>    </a>
                        <a href="/wishlist"><FaHeart />  <span>Sevimlilərim</span>   </a>
                        <a href="/basket"><FaCartShopping />   <span>Mənim Səbətim</span> </a>
                        <div className={styles.hamburger}>
                            <button onClick={toggleDrawer}><GiHamburgerMenu />
                            </button>
                            <Drawer
                                open={isOpen}
                                onClose={toggleDrawer}
                                direction='right'
                                className='bla bla bla'
                            >
                                <div className={styles.menu}>
                                    <ul>
                                        <li><a href="#">Kitablar</a></li>
                                        <li><a href="#">Dəftərxana</a></li>
                                        <li><a href="#">Çantalar</a></li>
                                        <li><a href="#">Hədiyyəlik</a></li>
                                        <li><a href="#">Haqqımızda</a></li>
                                        <li><a href="#">Onlayn ödəniş</a></li>
                                        <li><a href="#">Əlaqə</a></li>
                                    </ul>
                                </div>
                                <div className={styles.contact}>
                                    <p>Əlaqə: +99455 6425446</p>
                                </div>
                            </Drawer>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.headerbottom}>
                <div className={styles.bottom}>
                    <div className={styles.navbar}>
                        <ul>
                            <li><a href="#"><GiHamburgerMenu /> <span>Menu</span> </a></li>
                            <li><a href="#">Kitablar</a></li>
                            <li><a href="#">Dəftərxana</a></li>
                            <li><a href="#">Çantalar</a></li>
                            <li><a href="#">Hədiyyəlik</a></li>
                            <li><a href="#">Haqqımızda</a></li>
                            <li><a href="#">Onlayn ödəniş</a></li>
                            <li><a href="#">Əlaqə</a></li>
                        </ul>
                    </div>
                    <div className={styles.contact}>
                        <p>Əlaqə: +99455 6425446</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header