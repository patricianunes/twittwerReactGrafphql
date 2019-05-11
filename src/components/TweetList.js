import React from 'react'

const TweetList = (props) => {
  if(props.loading) {
    return <div>We're loading...</div>
  }
  return props.tweets.map(tweet => (
    <div className="tweet-list__tweet--container fadeIn" key={`tweet_${tweet.id}`}>
      <h5 className="tweet-list__tweet--author">{tweet.author}</h5>
      <div className="tweet-list__tweet--message">{tweet.message}</div>
    </div>
  ))
}

export default TweetList