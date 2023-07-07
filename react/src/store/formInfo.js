import { createSlice } from '@reduxjs/toolkit'

export const formInfoSlice = createSlice({
    name: 'formInfo',
    initialState: {
        loginInfo: {},
        registerInfo: {},
        findpwdInfo: {},
    },
    reducers: {
        setLoginInfo: (state, action) => {
            state.loginInfo = {
                ...state.loginInfo,
                ...action.payload
            }
        },
        setRegisterInfo: (state, action) => {
            state.registerInfo = {
                ...state.registerInfo,
                ...action.payload
            }
        },
        setFindpwdInfo: (state, action) => {
            state.findpwdInfo = {
                ...state.findpwdInfo,
                ...action.payload
            }
        },
    }
})
export const { setLoginInfo, setRegisterInfo, setFindpwdInfo } = formInfoSlice.actions

export default formInfoSlice.reducer;