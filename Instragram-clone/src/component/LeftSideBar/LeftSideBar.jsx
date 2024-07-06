import React from 'react'
import styles from '../../styles/LeftSideBar.module.css'
import { FaThreads } from "react-icons/fa6";
import { IoMenuOutline } from "react-icons/io5";
import { allOptions } from '../../constant/allpost';


function LeftSideBar() {

    return (


        <div className={styles.LeftSideBar}>
            <div className={styles.LeftSideBarTop}>
                <img src="Images/INSTA logo.jpg" alt="" />

                <div className={styles.allOptions}>
                    {
                        allOptions.map((option, i) => (
                            <div key={i} className={styles.oneOptions}>

                                <option.icon style={{
                                    fontSize: "22px",
                                }} />

                                <h1>{option.title}</h1>
                            </div>
                        ))
                    }
                    <div className={styles.oneOptions}>
                        <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="" style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: 40
                        }} />
                        <h1>Profile</h1>
                    </div>
                </div>
            </div>
            <div className={styles.LeftSideBarBottom}>
                <div className={styles.oneOptions}>

                    <FaThreads style={{
                        fontSize: "22px",
                    }} />

                    <h1>Threads</h1>
                </div>
                <div className={styles.oneOptions}>

                    <IoMenuOutline style={{
                        fontSize: "22px",
                    }} />

                    <h1>More</h1>
                </div>
            </div>

        </div>
    )
}

export default LeftSideBar