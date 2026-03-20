

export const initialState = {
    currentScreen: 'input', //input|review
    formData: {
      name: '',
      amount: 0,
      message: ''
    },
    isSubmitted: false
};

export const ACTIONS = {
   UPDATE_FORMFIELD: 'UPDATE_FORMFIELD',
   NAVIGATE_TO_REVIEW: 'NAVIGATE_TO_REVIEW',
   NAVIGATE_TO_INPUT: 'NAVIGATE_TO_INPUT',
   SUBMIT_FORM: 'SUBMIT_FORM',
   RESET_FORM: 'RESET_FORM'
};

export function appReducer(state, action) {
    switch(action.type) {
        case ACTIONS.UPDATE_FORMFIELD:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.payload.field]: action.payload.value
                }
            }
        case ACTIONS.NAVIGATE_TO_REVIEW: 
         console.log('Review screen');
           return {
            ...state,
            currentScreen: 'review'
           }
        case ACTIONS.NAVIGATE_TO_INPUT: 
           return {
            ...initialState
           }
        case ACTIONS.SUBMIT_FORM: 
           return {
            ...state
           }
        case ACTIONS.RESET_FORM: 
           return {
            ...state
           }
    }
} 