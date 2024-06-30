import React from 'react'
import styles from '../../styles/LeftSideBar.module.css'

import { IoMdHome } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { ImCompass2 } from "react-icons/im";
import { BiMoviePlay } from "react-icons/bi";
import { RiMessengerFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";






function LeftSideBar() {
    const allOptions = [
        { icon: IoMdHome, title: 'Home' },
        { icon: IoSearchOutline, title: 'Search' },
        { icon: ImCompass2, title: 'Explore' },
        { icon: BiMoviePlay, title: 'Reels' },
        { icon: RiMessengerFill, title: 'Messages' },
        { icon: FaRegHeart, title: 'Notifications' },
        { icon: FaRegSquarePlus, title: 'Create' },
        // { icon: IoMdHome, title: 'Profile' }
    ]
    return (
        <div className={styles.LeftSideBar}>
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
    )
}

export default LeftSideBar