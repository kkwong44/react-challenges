import React from 'react'
import css from './css/Content.module.css'

function PostItemAPI(props) {
    return (
         // Destructuring Props
        props.savedPosts.map(post => {
            const {id, type, user, webformatURL, tags} = post;
            return (
                <div key={id} className={css.SearchItem}>
                    <p>{type}</p>
                    <p>{user}</p>
                    <img src={webformatURL} />
                    <p>Description: {tags}</p>
                </div>
            )
        })
    )
}

export default PostItemAPI