import React from 'react'
import LeftSideBar from '../component/LeftSideBar/LeftSideBar'
import Feed from '../component/FEED/Feed'
import RightSideBar from '../component/RightSideBar/RightSideBar'
import '../styles/Homepage.css'

function HomePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* {Left Side bar} */
                <LeftSideBar />
            }
            <div className='homeRight'>
                {/* {FEEd} */
                    <Feed />

                }
                {/* {Right Side Bar} */
                    <RightSideBar />
                }
            </div>

        </div>
    )
}

export default HomePage