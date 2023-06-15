import { axioseInstance } from "./@core";

const IssueApi = {
	// 전체 issue 가져오기
	getIssue(owner, repo, page, limit) {
		return axioseInstance.get(
			`/repos/${owner}/${repo}/issues?page=${page}&per_page=${limit}`,
		);
	},

	// // 해당 issue number 값으로 가져오기
	getOneIssue(owner, repo, issueId) {
		return axioseInstance.get(`/repos/${owner}/${repo}/issues/${issueId}`);
	},
};

export default IssueApi;
