import React from 'react'
import './software.css'
import { DataContext } from '../../../App'


export default function Software() {
    const Data = React.useContext(DataContext)
    const [isOpen, setIsOpen] = React.useState(0)
    const [posx, setPosx] = React.useState(0)
    const [posy, setPosy] = React.useState(0)
    const [message, setMessage] = React.useState('')
    //const [chatshow,setChatshow] = React.useState({})

    const Chatui = () => {
        let chatshow = {}

        React.useEffect(() => {
            setPosition()
            chatshow = document.querySelector('.chat-show')
        })

        function setPosition() {
            let chatui = document.querySelector('.chat-ui')
            chatui.style.top = (posy + 50) + 'px'
            chatui.style.left = (posx + 50) + 'px'
        }
        function renderMessage() {
            console.log("get input: ", message)

            chatshow.append('hello')
            chatshow.append(document.createElement('br'))
        }
        return (
            <div className="chat-ui">

                <div className="chat-box">
                    <div
                        className="chat-head"
                        onClick={()=>{
                            console.log("close")
                            setIsOpen(0)
                        }}

                    >x</div>
                    {
                        /*                    
                        <header className="chat-header">
                        <div></div>
                        <span className="chat-close">x</span>
                        </header> 
                        */
                    }
                    <div className="chat-show">

                    </div>
                    <div className="chat-inputBox">
                        <input
                            className="chat-input"
                            type="text"
                            onKeyDown={(e) => {
                                if (e.keyCode === '13') {
                                    setMessage(e.target.value)
                                    renderMessage()
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="software-container">

            {
                Data.data.map(data => {
                    return (
                                               <div key={data._id} className="software-card">
                            <div className="software-card-head">
                                <div>{data.title}</div>
                                <div id={`chat${data._id}`} className="software-card-head-iconBox">
                                    {/* github */}
                                    <i
                                        className="material-icons"
                                        onMouseMove={(e) => {
                                            e.target.innerText = "folder_open"
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.innerText = "folder"
                                        }}
                                    >folder</i>
                                    {/* message */}
                                    <i
                                        className="material-icons"
                                        onMouseMove={(e) => {
                                            e.target.innerText = "question_answer"
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.innerText = "chat_bubble"
                                        }}
                                        onClick={(e) => {
                                            console.log(`#chat${data._id}`)
                                            const chat = document.querySelector(`#chat${data._id}`)
                                            console.log(chat)
                                            setPosx(chat.offsetLeft)
                                            setPosy(chat.offsetTop)
                                            //console.log(chat.offsetTop)
                                            //console.log(chat.offsetLeft)
                                            setIsOpen(1)
                                        }}
                                    >chat_bubble</i>
                                    {isOpen && <Chatui />
                                    }


                                </div>

                            </div>

                            <div>{data.body}</div>
                            <div>{data.comment}</div>
                        </div>
                    
 

                    )
                })
            }

            {/*
                            <input
                type="button"
                value="click"
                onClick={() => {
                    { console.log(Data.data) }
                }}
            />
            */}


        </div>

    )
}
