export const isEmpty = state => ((state._old_id ? state._old_id : 0) === state._id)
export const getNewId = state => state._id
export const getOldId = state => state._old_id
export const lastUpdated = state => state.updated
