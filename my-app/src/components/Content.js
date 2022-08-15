import React, { Component } from 'react'
import {savedPosts} from '../posts.json'
import css from './css/Content.module.css'
import PostItem from './PostItem'
import Loader from './Loader'

export default class Content extends Component {
    constructor(props) {
        super(props)

      this.state = {
         isLoaded: false,
         posts: []
      }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts
            })
        }, 2000)
    }


    handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        console.log(name)
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor="searchInput">Search</label>
                        <input
                            type="search"
                            id="searchInput"
                            placeholder="By Author"
                            onChange={(event) => this.handleChange(event)}
                        />
                        <h4>post found: {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    {/* challenge 1 */}
                    {/* {savedPosts.map((post) => {
                        return(
                            <div key={post.title} className={css.SearchItem}>
                                <p>Title: {post.title}</p>
                                <p>Artist: {post.name}</p>
                                <img src={post.image} alt="random" />
                                <p>Description: {post.description}</p>
                            </div>
                        )
                    })} */}

                    {/* Challenge 2 */}
                    {/* <PostItem savedPosts={savedPosts} /> */}

                    {/* Challenge 3 */}
                    {/* {this.state.isLoaded ?
                        <PostItem savedPosts={savedPosts} />
                        :
                        <Loader />
                    } */}

                    {/* Challenge 4 */}
                    {this.state.isLoaded ?
                        <PostItem savedPosts={this.state.posts} />
                        :
                        <Loader />
                    }
                </div>
            </div>        
        )
    }
}
