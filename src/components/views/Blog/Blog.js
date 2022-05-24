import React from 'react'
import './blog.css'

import { DataContext } from '../../../App.js'

export default function Blog() {
    const { blog } = React.useContext(DataContext)


    return (
        <div className="blog-container">
            <div className="card-container">
                {
                    blog.map((item) => {
                        console.log(item)
                        return (
                            <div key={blog._id} className="card">
                                <div className="card-title">
                                    {item.title}
                                </div>
                                <div className="card-content">
                                    {item.content}
                                </div>
                                <div className="card-footer">
                                    <div className="card-footer-box">
                                        <div><i class="material-icons greyy">thumb_up</i>0</div>
                                        <div><i class="material-icons">screen_share</i>0</div>
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
