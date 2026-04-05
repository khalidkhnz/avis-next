'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title, description, manageModal}) {

    return (
        <div onMouseEnter={() => {manageModal(true, index)}} onMouseLeave={() => {manageModal(false, index)}} className={styles.project}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
