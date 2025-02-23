import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import logo from '../assets/images/WhatsApp_Şəkil_2025-02-03_saat_23.41.36_7e8ea673-removebg-preview.png';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { FaAngleDown } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/authSlice';
import { getBasketThunk } from '../../redux/reducers/basketSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        dispatch(getBasketThunk());
      }, [dispatch]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const fullText = "Növbəti kitabınızı axtarın";
    const [placeholder, setPlaceholder] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholder((prev) => {
                if (!isDeleting && index < fullText.length) {
                    setIndex((prevIndex) => prevIndex + 1);
                    return fullText.slice(0, index + 1);
                } else if (isDeleting && index > 0) {
                    setIndex((prevIndex) => prevIndex - 1);
                    return fullText.slice(0, index - 1);
                } else {
                    setIsDeleting(!isDeleting);
                    return prev;
                }
            });
        }, 170);

        return () => clearInterval(interval);
    }, [index, isDeleting]);

    const basketCount = useSelector((state) => state.basket.basket.length);
    const user = useSelector((state) => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <>
            <div className={styles.headertop}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link to="/"> <img src={logo} alt="logo" /></Link>
                    </div>

                    <div className={styles.input}>
                        <input
                            type="text"
                            placeholder={placeholder}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
                        />
                        <button onClick={handleSearch}><FaSearch /></button>
                    </div>
                    <div className={styles.icons}>
                        {user ? (
                            <button
                                className={styles.logoutButton}
                                onClick={handleLogout}
                            >
                                <FaUser style={{ marginRight: "5px" }} /> Çıxış
                            </button>
                        ) : (
                            <FaUser onClick={() => navigate('/login')} />
                        )}
                        <FaHeart onClick={() => navigate('/wishlist')} />
                        <div className={styles.iconWrapper}>
                            <FaCartShopping onClick={() => navigate('/basket')} />
                            {basketCount > 0 && <span>{basketCount}</span>}
                        </div>

                        <div className={styles.hamburger}>
                            <button onClick={toggleDrawer}><GiHamburgerMenu /></button>
                            <Drawer
                                open={isOpen}
                                onClose={toggleDrawer}
                                direction='right'
                                className='bla bla bla'
                            >
                                <div className={styles.menu}>
                                    <ul>
                                        <li className={styles.dropdown}>
                                            <button>Kitablar<FaAngleDown /></button>
                                            <ul className={styles.submenu}>
                                                <li> <button onClick={() => navigate('/azerbaycan kitablari')}> Azərbaycan</button> </li>
                                                <li> <button onClick={() => navigate('/turk kitablari')}>Türk</button> </li>
                                                <li> <button onClick={() => navigate('/rus kitablari')}>Rus</button> </li>
                                                <li> <button onClick={() => navigate('/ingilis kitablari')}>İngilis</button> </li>
                                            </ul>
                                        </li>
                                        <li> <button onClick={() => navigate('/notebook')}> Dəftərxana</button></li>
                                        <li> <button onClick={() => navigate('/bag')}> Çantalar</button></li>
                                        <li> <button onClick={() => navigate('/giftbook')}> Hədiyyəlik</button></li>
                                        <li> <button onClick={() => navigate('/about')}> Haqqımızda</button></li>
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
                            <li className={styles.dropdown}>
                                <button>Kitablar<FaAngleDown /></button>
                                <ul className={styles.submenu}>
                                    <li> <button onClick={() => navigate('/azerbaycan kitablari')}> Azərbaycan</button> </li>
                                    <li> <button onClick={() => navigate('/turk kitablari')}>Türk</button> </li>
                                    <li> <button onClick={() => navigate('/rus kitablari')}>Rus</button> </li>
                                    <li> <button onClick={() => navigate('/ingilis kitablari')}>İngilis</button> </li>
                                </ul>
                            </li>
                            <li> <button onClick={() => navigate('/notebook')}>Dəftərxana</button></li>
                            <li> <button onClick={() => navigate('/bag')}>Çantalar</button></li>
                            <li> <button onClick={() => navigate('/giftbook')}>Hədiyyəlik</button> </li>
                            <li> <button onClick={() => navigate('/about')}>Haqqımızda</button></li>
                        </ul>
                    </div>
                    <div className={styles.contact}>
                        <p>Əlaqə: +99455 6425446</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
