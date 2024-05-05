import React from 'react'


const MainContent = ({tweets, loggedInUser, createTweetContent, setCreateTweetContent, addTweet}) => {
    return (
        <main>
                <div className='top-bar'>
                    <h2 className="title">Home</h2>
                </div>

                <div className='create-tweet'>
                    <form onSubmit={addTweet}>
                        <div className="avatar-section">
                            <div className="profile-icon"><img src={loggedInUser.profileImage}/></div>
                        </div>

                        <div className="textarea-section">
                            <textarea
                                className="content"
                                type="text"
                                placeholder="What is happening?!"
                                value={createTweetContent}
                                onChange={(e) => setCreateTweetContent(e.target.value)}
                            ></textarea>
                        </div>

                        <div></div>

                        <div className="actions-section">
                            <div className="actions">
                                <i className="fa-regular fa-image action-icon"></i>
                                <i className="fa-solid fa-list action-icon"></i>
                                <i className="fa-regular fa-face-smile action-icon"></i>
                                <i className="fa-regular fa-calendar action-icon"></i>
                                <i className="fa-solid fa-location-dot action-icon"></i>
                            </div>

                            <button type="submit" disabled={createTweetContent.length < 1} className="tweet-btn">Tweet</button>
                        </div>
                    </form>
                </div>

                <div className="show-more-tweets">
                    <p>Show 35 Tweets</p>
                </div>

                {tweets.map((tweet, index) => {
                    return (
                        <article className='tweet' key={index}>
                            <div className="profile-icon"><img src={tweet.profileImage}/></div>

                            <div className="tweet-content">
                                <h4>{tweet.name} <span>{tweet.handle} · {tweet.date}</span></h4>
                                <p>{tweet.content}</p>

                                {tweet.article &&
                                    <div className="tweet-article">
                                        <img src={tweet.article.image} />
                                        <small>{tweet.article.site}</small>
                                        <h5>{tweet.article.title}</h5>
                                        <p>{tweet.article.content}</p>
                                    </div>
                                }

                                <div className="tweet-actions">
                                    <span>
                                        <i className="fa-regular fa-comment"></i>
                                        <small>{tweet.commentCount}</small>
                                    </span>

                                    <span>
                                        <i className="fa-solid fa-arrows-rotate"></i>
                                        <small>{tweet.retweetCount}</small>
                                    </span>

                                    <span>
                                        <i className="fa-regular fa-heart"></i>
                                        <small>{tweet.heartCount}</small>
                                    </span>

                                    <span>
                                        <i className="fa-solid fa-chart-simple"></i>
                                        <small>{tweet.analyticsCount}</small>
                                    </span>

                                    <span>
                                        <i className="fa-solid fa-upload"></i>
                                    </span>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </main>
    )
}

export default MainContent