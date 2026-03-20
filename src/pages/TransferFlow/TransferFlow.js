import React from 'react'
import { useAppContext } from '../../context/AppContext';
import { ACTIONS } from '../../context/appReducer';
import InputScreen from '../InputScreen/InputScreen';
import ReviewScreen from '../ReviewScreen/ReviewScreen';



const TransferFlow = () => {
   const { state, dispatch } = useAppContext();
   const { currentScreen } = state;

   const renderCurrentScreen = () => {
      switch (currentScreen) {
         case 'input':
            return <InputScreen></InputScreen>;
         case 'review':
            return <ReviewScreen></ReviewScreen>;
         default:
            return <InputScreen></InputScreen>
      }
   };

   const goback = () => {
      console.log('Handle back button ...');
      dispatch({ type: ACTIONS.NAVIGATE_TO_INPUT });
   };

   return (
      <div className="app-container">
         <div className="navbar">
            <div className="nav-left">
               {currentScreen === 'review' && (
                  <button className="back-btn" onClick={goback}>← Back</button>
               )}
            </div>
            <div className="nav-title">{currentScreen === 'input' ? 'Transfer' : 'Review'}</div>
            <div className="nav-right"></div>
         </div>
         {renderCurrentScreen()}
      </div>
   )
}

export default TransferFlow;