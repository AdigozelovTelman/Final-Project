import React, { useEffect, useState } from 'react'
import styles from './Newbook.module.scss'

const images = [
    require('../../../../components/assets/images/novella-site-degish.jpg'),
    require('../../../../components/assets/images/novella-site-degish-Copy12.jpg'),
];


const Newbook = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleChangeBackground = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };



    return (
        <>
            <div className={styles.container}>
                <div className={styles.background} style={{ backgroundImage: `url(${images[currentImage]})` }} onClick={handleChangeBackground} >
                </div>
            </div>
        </>
    )
}

export default Newbook