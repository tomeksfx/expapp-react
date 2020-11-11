import { createStore } from 'redux';


const incrementCount = ( { incrementBy = 1 } = {} ) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = ({} = {}) => ({
    type: 'RESET',
    
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

//Reducers

const countReducer = (state = { count: 0 }, action ) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default: 
                return state;
    }
};

const store = createStore(countReducer)

store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

// store.dispatch({
//     type: 'RESET'
// })

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// })

// store.dispatch({
//     type: 'DECREMENT'
// })

// store.dispatch({
//     type: 'SET',
//     count: 101
// })

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(resetCount())

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 101}))
