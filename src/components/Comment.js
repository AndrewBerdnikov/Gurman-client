import { observer } from 'mobx-react-lite';
import React from 'react';

import defaultImg from '../images/DefaultAvatar.png';

const Comment = observer((props) => {
    const {user, comment} = props.data;

    return (
        <div className='comment'>
            <img src={(user.img ? process.env.REACT_APP_API_URL + '/' + user.img : defaultImg)} className='comment__img' alt='Аватарка пользователя'></img>
            <div className='comment-text'>
                <p className='comment-text__name'>{user.name}</p>
                <p className='comment-text-comment'>{comment.comment}</p>
            </div>
        </div>
    );
});

export default Comment;