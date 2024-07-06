import React from 'react'
import styles from '../../styles/Feed.module.css'
import AllPost from './AllPost'

function Feed() {
    return (
        <div className={styles.feed}>
            <div className={styles.feedImg}>
                <img src="https://images.unsplash.com/photo-1719715657832-01345a0a9cd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1719352354062-0a35d9db5773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" alt="" />
                <img src="https://images.unsplash.com/photo-1719715657832-01345a0a9cd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1719715657832-01345a0a9cd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1719715657832-01345a0a9cd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1719715657832-01345a0a9cd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1719715657832-01345a0a9cd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" />


            </div>
            <AllPost />
        </div>
    )
}

export default Feed