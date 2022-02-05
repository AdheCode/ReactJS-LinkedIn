import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SharedOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import InputOption from './InputOption';
import './Post.css';
import { forwardRef } from 'react';
import moment from "moment";

const Post = forwardRef(({name, description, message, photoUrl, timestamp}, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <p>{moment(timestamp?.nanoseconds).format('HH:mm')} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"> <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
</svg></p>
                    
                    
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                    <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray' />
                    <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
                    <InputOption Icon={SharedOutlinedIcon} title='Share' color='gray' />
                    <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />

            </div>
        </div>
    )
})

export default Post
