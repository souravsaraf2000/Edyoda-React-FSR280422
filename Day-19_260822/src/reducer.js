// const obj = {
//     name: 'Vaibhav',
//     age: '24',
//     data: []
// }

// export const rootReducer = (state = obj, action) => {
//     console.log(action)
//     if(action.type === 'UPDATE_NAME'){
//         return {
//             ...state,
//             name: action.payload
//         }
//     }
//     if(action.type === 'UPDATE_AGE'){
//         return {
//             ...state,
//             age: action.payload
//         }
//     }
//     if(action.type === 'UPDATE_NAME_AND_AGE'){
//         return {
//             ...state,
//             name: action.payload.name,
//             age: action.payload.age
//         }
//     }
//     if(action.type === 'API_DATA'){
//         return {
//             ...state,
//             data: action.payload
//         }
//     }
//     return state
// }

const obj = {
    user: [],
    product: []
}

export const userReducer = (state = obj.user, action) => {
    if(action.type === 'UPDATE_USER_DATA')
        return action.payload
    return state
}

export const productReducer = (state = obj.product, action) => {
    if(action.type === 'UPDATE_PRODUCT_DATA')
        return action.payload
    return state
}