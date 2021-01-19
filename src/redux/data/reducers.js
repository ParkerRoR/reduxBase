import actions from './actions'

import { initialState } from './initialState'



export default function dataReducer(state = initialState, action) {
    switch(action.type){
        case actions.SET_STATE:
            return { ...state, ...action.payload }

        default:
            return state
        
    }
}