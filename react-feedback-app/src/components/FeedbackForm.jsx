import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10 ){
            const newFeedback ={
                text,
                rating,
            }
            handleAdd(newFeedback)
            setText('')
    }
}

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 chars')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>
                How would you rate us?
            </h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className='input-group'>
                <input onChange={handleTextChange} type="text" value={text} placeholder='Write a review' />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm