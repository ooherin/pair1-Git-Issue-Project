import { axioseInstance } from "./@core";

const IssueApi = {
	// 전체 issue 가져오기
	getIssue(owner, repo, page = 1, perPage = 10, sort = "updated_at") {
		return axioseInstance.get(
			`/repos/${owner}/${repo}/issues?page=${page}&per_page=${perPage}&sort=${sort}`,
		);
	},

	// // 해당 issue number 값으로 가져오기
	getOneIssue(owner, repo, issueId) {
		return axioseInstance.get(`/repos/${owner}/${repo}/issues/${issueId}`);
	},
	getComment({ owner, repo, issueId }) {
		return axioseInstance.get(
			`/repos/${owner}/${repo}/issues/${issueId}/comments`,
		);
	},
};

export default IssueApi;
