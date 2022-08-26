export const userData = (data) => {
    return {
        type : 'UPDATE_USER_DATA',
        payload: data
    }
}

export const productData = (data) => {
    return {
        type : 'UPDATE_PRODUCT_DATA',
        payload: data
    }
}