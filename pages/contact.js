import React from 'react';
import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact me !</title>
                <meta
                    name='description'
                    content='We are excited about your message ...'
                />
            </Head>
            <ContactForm/>
        </>
    );
};

export default Contact;

