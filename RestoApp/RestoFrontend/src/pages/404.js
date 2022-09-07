import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/404.module.css'

export default function PageNotFound() {
    return (
        <Layout>
            <div className={styles.footer}>
                <h1>Page Not Found...</h1>
                <p>The page you are requesting does not exist...</p>
            </div>
        </Layout>
    );
}
