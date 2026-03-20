import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { ACTIONS } from '../../context/appReducer';

const ReviewScreen = () => {
  const { state, dispatch } = useAppContext();
  const { formData } = state;
  const { name, amount, message } = formData;


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.SUBMIT_FORM });
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="review-item">
          <span className="review-label">Name</span>
          <p className="review-value">{name}</p>
        </div>
        <div className="review-item">
          <span className="review-label">Amount</span>
          <p className="review-value">${amount}</p>
        </div>
        <div className="review-item">
          <span className="review-label">Message</span>
          <p className="review-value">{message}</p>
        </div>
        <button type="submit" className="btn-primary">Confirm Transfer</button>
      </form>
    </div>
  )
}

export default ReviewScreen
