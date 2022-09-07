import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/menuitems.module.css'
import { useQuery, gql } from '@apollo/client'

const ITEMS = gql`
    query GetItems {
        items {
            id
            name
            description
            price
            image {
                formats:url
            }
        }
    }
`


export default function MenuItems() {

    const { loading, error, data } = useQuery(ITEMS);

    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error...</p>
    }

    console.log(data)

    return (
        <div className={styles.menuItem}>
            {data.items.map(item => (
                <div key={item.id}>
                    {/* Use gatsby image here: WATCH YOUTUBE VIDEO */}
                    <h2 className={styles.name}>{item.name}</h2>
                    <img className={styles.images} src={"http://localhost:1337" + item.image.formats}></img>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                    <Link to="/thankyou">Add to cart</Link>
                </div>
            ))}
        </div>
    );
}
