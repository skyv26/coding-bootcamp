import React from 'react';
import styles from './TestimonialSection.module.css';
import BottomPattern from '../../../assests/pattern-curve.svg';


const TestimonialSection = (props) => {
    return (
        <section className={styles.TestimonialSection}>
            {props.children}
            <img src={BottomPattern} alt="Bottom pattern" className={styles.BottomPattern} />
        </section>
    );
}

export default TestimonialSection;