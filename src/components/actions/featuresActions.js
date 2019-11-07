export const ADD_FEATURE = 'ADD_FEATURE'
export const addFeature = (item) => ({type: ADD_FEATURE, payload: item}) //item is feature id

export const UPDATE_TOTAL = 'UPDATE_TOTAL'
export const updateTotal = () => ({type: UPDATE_TOTAL})

export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const removeFeature = () => ({type: REMOVE_FEATURE})
