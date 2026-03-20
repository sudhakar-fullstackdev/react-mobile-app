import React from 'react'
import { useAppContext } from '../../context/AppContext';
import { ACTIONS } from '../../context/appReducer';

const InputScreen = () => {
  const { state, dispatch } = useAppContext();
  const { formData } = state;
  const { name, amount, message } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.NAVIGATE_TO_REVIEW });
  };

  const handleChange = (field, value) => {
    dispatch({ type: ACTIONS.UPDATE_FORMFIELD, payload: { field, value } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input className="form-input" type='text' value={name} placeholder='John Doe' onChange={(e) => handleChange('name', e.target.value)}></input>
        </div>
        <div className="form-group">
          <label className="form-label">Amount</label>
          <input className="form-input" type='number' value={amount} placeholder='Amount i.e, 10' onChange={(e) => handleChange('amount', e.target.value)}></input>
        </div>
        <div className="form-group">
          <label className="form-label">Description</label>
          <input className="form-input" type='text' placeholder='Payment for services' value={message} onChange={(e) => handleChange('message', e.target.value)}></input>
        </div>
        <button type='submit' className="btn-primary">Continue</button>
      </form>
    </div>
  )
}

export default InputScreen
