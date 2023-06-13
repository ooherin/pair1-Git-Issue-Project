import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IssueApi from "apis/issue";

const initialState = {
	issues: [],
	getIssueState: {
		loading: false,
		done: false,
		err: null,
	},
};

export const issueSlice = createSlice({
	name: "issue",
	initialState,
	extraReducers: builder => {
		builder.addCase(getIssue.pending, state => {
			state.getIssueState.loading = true;
			state.getIssueState.done = false;
			state.getIssueState.err = null;
		});
		builder.addCase(getIssue.fulfilled, (state, action) => {
			state.issues = action.payload;
			state.getIssueState.loading = false;
			state.getIssueState.done = true;
			state.getIssueState.err = null;
		});
		builder.addCase(getIssue.rejected, (state, action) => {
			state.getIssueState.loading = false;
			state.getIssueState.done = true;
			state.getIssueState.err = action.payload;
		});
	},
});

export const getIssue = createAsyncThunk(
	"issue/getIssue",
	async ({ owner, repo }) => {
		const res = await IssueApi.getIssue(owner, repo);
		console.log("res값: ", res);
		return res.data;
	},
);
