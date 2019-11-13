import React, {useState} from 'react';
import {Container, Snackbar} from  '@material-ui/core'
import Header from './Components/Header'
import SendTweet from './Components/SendTweet'

function App() {
  const [toastPop, setToastPop] = useState({
    open: false,
    text: null
  })
  return (
   <Container className="tweets-simulator" maxWidth={false}>
     <Header />
     <SendTweet setToastPop={setToastPop}/>
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
