import React, { useContext } from 'react';
import styles from './BootcampText.module.css';
import QuotesPattern from '../../assests/pattern-quotes.svg';
import CartContext from '../../store/store';

const BootcampText = (props) => {
    const ctx = useContext(CartContext);

    return (
        <div className={styles.BootcampText}>
            <figure>
                <img src={QuotesPattern} alt="Quotes Pattern" />
                <figcaption></figcaption>
            </figure>
            {ctx.currentStatus ? <blockquote>&#8220; I’ve been interested in coding for a while but never taken the jump, until now.
                I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. &#8221;
            </blockquote> : <blockquote>&#8220; If you want to lay the best foundation possible I'd recommend taking this course. The depth
                the instructor go into is incredible. I now feel so confident about starting up as a professional developer. &#8221;
            </blockquote>}
            <p className={styles.Author} >{ctx.currentStatus ? `Tanya Sinclair` : `John Tarkpor`}<span>{ctx.currentStatus ? `UX Engineer` : `Junior Front-end Developer`}</span></p>
        </div>
    );
}

export default BootcampText;