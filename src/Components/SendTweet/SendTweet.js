import React, {useState} from 'react';
import './SendTweet'
import {Fab} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import moment from 'moment'
import './SendTweet.scss'
import ModalContainer from '../ModalContainer'
import FormSendTweet from '../FormSendTweet'
import {TWEETS_STORAGE} from '../../utils/constant'

export default (props) => {
  const {setToastPop, allTweets} = props
  const [isOpenModal, setIsOpenmodal] = useState(false)


  const openModal = () => setIsOpenmodal(true)
  const closeModal = () => setIsOpenmodal(false)

  const sendTweet = (event, formValue) => {
    event.preventDefault()
    const {name, tweet} = formValue
    let allTweetsArray = []

    if(allTweets){
      allTweetsArray = allTweets
    }

    if(!name || !tweet){
      setToastPop({
        open: true,
        text: 'todos los campos son obligatorios'
      })
      // alert('todos los campos son obligatorios')
    } else {
      formValue.time = moment()
      allTweetsArray.push(formValue)
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify( allTweetsArray));
      // localStorage.setItem('data', JSON.stringify(allTweetsArray))
      setToastPop({
        open: true,
        text: "Tweet guardado en el LocalStorage"
      })
      console.log('tweet guardado en el LS')
      closeModal()
    }
    allTweetsArray = []
  }
  

  return (
    <div className="send-tweet">
      <Fab 
        className="send-tweet__open-modal" 
        color="primary" 
        aria-label="add"
        onClick={openModal}
        >
        <AddIcon />
      </Fab>
      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        < FormSendTweet sendTweet={sendTweet}/>
      </ModalContainer>
    </div>
  )
}  