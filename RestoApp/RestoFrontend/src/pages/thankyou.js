import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/thankyou.module.css"

export default function thankyou() {
    return (
        <Layout>
            <h1 className={styles.center}>Thank you for your purchase!</h1>
            <p className={styles.footer}>We hope that you will enjoy the food. See you next time!</p>
        </Layout>
    );
}
