import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        getuser: (state) => {

            state.value = { name: 'name', last: 'last' }
        },
        decrement: (state) => {
            state.value -= { namename: '', last: '' }
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer