import React from "react"
import Layout from "../components/Layout";
import MenuItem from "../components/MenuItem";
import * as styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.menuItem}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </Layout>
  );
}
