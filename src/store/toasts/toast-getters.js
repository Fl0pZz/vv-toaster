export const toastStackSize = state => state._max_toasts
export const canDisplay = state => (state.free > 0)
export const isInit = state => state.init
