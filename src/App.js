import React, {useState, useEffect} from 'react';
import {Container, Snackbar} from  '@material-ui/core'
import Header from './Components/Header'
import SendTweet from './Components/SendTweet'
import {TWEETS_STORAGE} from './utils/constant'
import ListTweets from './Components/ListTweets'

function App() {
  const [toastPop, setToastPop] = useState({
    open: false,
    text: null
  })

  const [allTweets, setAllTweets] = useState([])
  const [reloadTweet, setReloadTweet] = useState(false)

  useEffect( ()=> {
    const allTweetsStorage = JSON.parse(localStorage.getItem(TWEETS_STORAGE))
    setAllTweets(allTweetsStorage)
    setReloadTweet(false)
  }, [reloadTweet])

  const deleteTweet = (index) => {
    allTweets.splice(index, 1)
    setAllTweets(allTweets)
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets))
    setReloadTweet(true)
  }

  return (
   <Container className="tweets-simulator" maxWidth={false}>
     <Header />
     <SendTweet setToastPop={setToastPop} allTweets={allTweets}/>
     <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} /> 
     <Snackbar 
       anchorOrigin={{
          vertical: "top",
          horizontal: "right" 
       }}
       open={toastPop.open}
       autoHideDuration={1000}
       message={
       <span id="message-id">{toastPop.text}</span>
       }
     />
   </Container>
  );
}

export default App;
