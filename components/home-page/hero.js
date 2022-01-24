import React from 'react';
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {

    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/tom.jpg"
                    alt="shows me"
                    width={300}
                    height={300}/>
            </div>
            <h1>Hi, I'm Thomas</h1>
            <p>I blog ....</p>

        </section>
    );
};

export default Hero;
