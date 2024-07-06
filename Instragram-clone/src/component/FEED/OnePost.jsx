import React from 'react'
import styles from '../../styles/OnePost.module.css'
import { BsThreeDots } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { TbSend } from "react-icons/tb";

function OnePost(props) {

    const { userAvatar, userHandleId, postTimeStamp, postLocation, postImage, likeCount, commentCount, postCaption } = props
    return (
        <div className={styles.OnePost}>
            {/* {Top} */}
            <div className={styles.top}>
                {/* {avtar} */}
                <img src={userAvatar} alt={userAvatar} />

                <div className={styles.info}>
                    {/* {userhandled && verified icon $$ time } */}
                    <h3>{userHandleId}
                        <MdVerified style={{
                            color: "#1DA1F2", // blue original
                            marginLeft: "5px",
                        }} />
                        <span style={{
                            margin: '0 5px'
                        }}> &middot;</span>
                        <span style={{
                            color: 'gray',
                        }}>{postTimeStamp}</span>
                    </h3>


                    {/* {address/location  } */}
                    <p>{postLocation}</p>
                </div>

                {/* {three dot icon} */}
                <BsThreeDots style={{
                    fontSize: '20px',
                    padding: '8px',
                }} />
            </div>

            {/* {Mid} */}
            <div className={styles.mid}>
                <img src={postImage} alt={postImage} />
                <div className={styles.icons}>
                    <div className={styles.iconleft}>
                        <FaRegHeart style={{ fontSize: '27px' }} />
                        <FiMessageCircle style={{ fontSize: '27px', marginLeft: '10px' }} />
                        <TbSend style={{ fontSize: '27px', marginLeft: '10px' }} />
                    </div>
                    <FaRegBookmark style={{ fontSize: '27px' }} />

                </div>
                {
                    likeCount > 0 ? (
                        <p>{likeCount} Likes</p>
                    ) : (
                        <p>No Likes yet...</p>
                    )
                }
            </div>

            {/* {Bottom} */}
            <div className={styles.bottom}>
                {
                    postCaption && (

                        <h3><span style={{ fontWeight: 'bold', marginRight: '5px' }}>
                            {userHandleId}</span><span>{postCaption}</span></h3>
                    )
                }
                {
                    commentCount > 0 ? (
                        <h2>View all {commentCount} comments</h2>
                    ) : (
                        <h2>No comment yet...</h2>
                    )
                }
                <input type="text" placeholder='Add a comment...' />
            </div>
        </div>
    )
}

export default OnePost