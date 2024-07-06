import React from 'react'
import styles from '../../styles/RightSideBar.module.css'

function RightSideBar() {
    return (
        <div className={styles.RightSideBar}>
            <div className={styles.top}>
                <img src="https://media.istockphoto.com/id/1338289824/photo/close-up-image-of-indian-man-with-buzz-cut-hairstyle-to-disguise-receding-hairline-wearing-t.webp?b=1&s=170667a&w=0&k=20&c=iQtn24U2eDA49T6UZZ0i2QlDj0TWD_2VeYngAo2Jy8U=" alt=""
                    style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%'
                    }} />
                <div className={styles.username}>
                    {/* {username} */}
                    <h2>ayush5599</h2>
                    {/* {user handle id } */}
                    <p>Ayush Bharti</p>
                </div>
                <p>Switch</p>
            </div>
            <br /><br />
            <div className={styles.mid}>
                <div className={styles.suggest}>
                    <h4>Suggested For You</h4>
                </div>
                <p>See All</p>
            </div>

        </div>
    )
}

export default RightSideBar