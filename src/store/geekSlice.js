import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getMembers = createAsyncThunk(
    'geekMembersData/getMembers',
    async () => {
        const resp = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
        return resp.data
    }
)

const contactSlice = createSlice({
    name: 'geekMembersData',
    initialState: {
        loadMsg: 'Init',
        data: []
    },
    reducers: {
        updateData: (state, { payload }) => {
            state.data = state.data.map((item) => item.id === payload.id ? payload : item)
            state.loadMsg = "Updated"
        },
        deleteData: (state, { payload }) => {
            state.data = state.data.filter((item) => payload.indexOf(item.id)===-1)
            state.loadMsg = "Deleted"
        }
    },
    extraReducers: {
        [getMembers.pending]: (state) => {
            state.loadMsg = "Loading"
        },
        [getMembers.fulfilled]: (state, { payload }) => {
            state.loadMsg = "Done"
            state.data = payload
        },
        [getMembers.rejected]: (state) => {
            state.loadMsg = "Error"
        }
    },
})

export const { updateData,deleteData } = contactSlice.actions

export default contactSlice.reducer