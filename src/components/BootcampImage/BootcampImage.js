import React, { useContext } from 'react';
import styles from './BootcampImage.module.css'
import GirlAvatar from '../../assests/image-tanya.jpg';
import BoyAvatar from '../../assests/image-john.jpg';
import LeftArrow from '../../assests/icon-prev.svg';
import RightArrow from '../../assests/icon-next.svg';
import BackgroundPattern from '../../assests/pattern-bg.svg';
import CartContext from '../../store/store';

const BootcampImage = (props) => {

    const ctx = useContext(CartContext);

    const AvatarChangeHandler = () => {
        ctx.boolManipulation();
    }

    return (
        <div className={styles.ImageContainer}>
            <div className={styles.ImagesDivision}>
                <img src={BackgroundPattern} alt="Background pattern" className={styles.BackgroundPattern} />
                {ctx.currentStatus ? <img src={GirlAvatar} alt="writer avatar" className={styles.Avatar} />
                    : <img src={BoyAvatar} alt="writer avatar" className={styles.Avatar} />
                }
            </div>
            <div className={styles.Corousal}>
                <button className={styles.LeftBtn} onClick={AvatarChangeHandler}>
                    <img src={LeftArrow} alt="left slide" />
                </button>
                <button className={styles.RightBtn} onClick={AvatarChangeHandler}>
                    <img src={RightArrow} alt="right slide" />
                </button>
            </div>

        </div>
    );
}

export default BootcampImage;