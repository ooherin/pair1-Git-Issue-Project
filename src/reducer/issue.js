import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IssueApi from "apis/issue";
const initialState = {
	issues: [],
	oneIssue: [],
	getIssueState: {
		loading: false,
		done: false,
		err: null,
	},
	getOneIssueState: {
		loading: false,
		done: false,
		err: null,
	},
};

export const issueSlice = createSlice({
	name: "issue",
	initialState,
	extraReducers: builder => {
		// issue 게시물 모두 가져오기
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

		// // 해당 issue 가져오기
		builder.addCase(getOneIssue.pending, state => {
			state.getOneIssueState.loading = true;
			state.getOneIssueState.done = false;
			state.getOneIssueState.err = null;
		});
		builder.addCase(getOneIssue.fulfilled, (state, action) => {
			state.oneIssue = action.payload;
			state.getOneIssueState.loading = false;
			state.getOneIssueState.done = true;
			state.getOneIssueState.err = null;
		});
		builder.addCase(getOneIssue.rejected, (state, action) => {
			state.getOneIssueState.loading = false;
			state.getOneIssueState.done = true;
			state.getOneIssueState.err = action.payload;
		});
	},
});

export const getIssue = createAsyncThunk(
	"issue/getIssue",
	async ({ owner, repo, page, limit, filter }) => {
		const res = await IssueApi.getIssue(owner, repo, page, limit, filter);
		console.log("res값: ", res);
		return res.data;
	},
);

export const getOneIssue = createAsyncThunk(
	"issue/getOneIssue",
	async ({ owner, repo, issueId }) => {
		const res = await IssueApi.getOneIssue(owner, repo, issueId);
		console.log(res.data);
		return res.data;
	},
);
