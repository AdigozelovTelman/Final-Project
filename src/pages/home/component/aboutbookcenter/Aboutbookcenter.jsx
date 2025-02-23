import React from 'react'
import Layout from '../../../../components/layout/Layout'
import styles from './Aboutbookcenter.module.scss'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'


const Aboutbookcenter = () => {
    return (
        <>
            <Layout>
                <div className={styles.aboutcontainer}>
                    <h1>Haqqımızda</h1>
                    <p className={styles.subtitle}>Mütaliənizin ən rahat ünvanı!</p>
                    <p>
                        BookCenter.az e-mağazası 2025-ci ildən fəaliyyətdədir. Bu e-mağaza yerli və xarici
                        kitabları ofisinizdən, evinizdən internet üzərindən və telefonla sifarişini təmin edir.
                        E-mağazamızdan alış-veriş etmək çox asandır. Saytda bölmələr, alt bölmələr və mövzular
                        üzrə müxtəlif dillərdə sadələşdirilmiş Kitab Axtarış Sistemi (KAS) fəaliyyət göstərir.
                    </p>
                    <p>
                        Saytda qeydiyyatdan keçdikdən sonra il ərzində 7/24 endirimli məhsullardan e-poçt
                        vasitəsilə dərhal xəbərdar olmaq imkanını əldə edirsiniz.
                    </p>
                    <p>
                        Çətin tapılan, Azərbaycanda olmayan və az nüsxə ilə çap olunan kitabları bizim
                        köməyimizlə rahat şəkildə əldə edə bilərsiniz. Bununla yanaşı bizimlə partnyorluq
                        edən mətbəə və nəşriyyatların çap məhsullarını da çox sərfəli qiymətlərlə əldə
                        etmək imkanı qazanırsınız. BookCenter.az e-mağazası Sizə yalnız orjinal məhsullar
                        təqdim edir.
                    </p>
                    <p className={styles.italic}>
                        Sizlər üçün sevimli müəllif, yazar və şairlərinizlə görüşmək imkanı da yaradırıq.
                        Bunun üçün sosial şəbəkələrdən bizi izləməyiniz kifayətdir.
                    </p>
                    <p className={styles.contact}>
                        e-poçt: <a href="mailto:info@BookCenter.az">info@BookCenter.az</a>
                    </p>
                    <p>
                        <a href="https://www.BookCenter.az" target="_blank" rel="noopener noreferrer">
                            www.BookCenter.az
                        </a>
                    </p>
                    <div className={styles.socialicons}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="icon facebook" />
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                            <FaTelegram className="icon telegram" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="icon instagram" />
                        </a>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Aboutbookcenter