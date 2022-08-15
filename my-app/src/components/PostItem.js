import React from 'react'
import css from './css/Content.module.css'

function PostItem(props) {
    return (
        // props.savedPosts.map(post => {
        //     return (
        //         <div key={post.title} className={css.SearchItem}>
        //             <p>Title: {post.title}</p>
        //             <p>Artist: {post.name}</p>
        //             <img src={post.image} />
        //             <p>Description: {post.description}</p>
        //         </div>
        //     )
        // })

        // Destructuring Props
        props.savedPosts.map(post => {
            const {name, title, description, image} = post;
            return (
                <div key={title} className={css.SearchItem}>
                    <p>Title: {title}</p>
                    <p>Artist: {name}</p>
                    <img src={image} />
                    <p>Description: {description}</p>
                </div>
            )
        })
    )
}

export default PostItem