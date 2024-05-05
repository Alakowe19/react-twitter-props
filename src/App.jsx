import React from 'react'
import { useState } from 'react'
import  LeftPanel from './LeftPanel'
import MainContent from './MainContent'
import RightPanel from './RightPanel'

// The initial tweet objects that should be displayed
import initialTweets from './assets/data/tweets.js'

// The user that we're pretending is signed in
import user from './assets/data/user.js'

// You may need to move these when creating new components
import imgElon from './assets/images/elon.jpg'
import imgZuck from './assets/images/zuck.jpg'




function App() {
    const [loggedInUser] = useState(user)
    const [tweets, setTweets] = useState(initialTweets)
    const [createTweetContent, setCreateTweetContent] = useState('')

    const addTweet = (e) => {
        e.preventDefault()
        setTweets([
            {
                ...loggedInUser,
                date: '1m',
                content: createTweetContent,
                commentCount: 0,
                retweetCount: 0,
                heartCount: 0,
                analyticsCount: 0
            },
            ...tweets
        ])
    }

    return (
        <div className='container'>
                <LeftPanel loggedInUser ={loggedInUser} />
                <MainContent
                tweets={tweets}
                loggedInUser={loggedInUser}
                createTweetContent={createTweetContent}
                setCreateTweetContent={setCreateTweetContent}
                addTweet={addTweet}
            />
            <RightPanel imgElon={imgElon} imgZuck={imgZuck} />

        </div>
    )
}

export default App
