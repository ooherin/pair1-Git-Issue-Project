import { axioseInstance } from "./@core";

const IssueApi = {
	getIssue(owner, repo, page = 1, limit) {
		console.log("22222", owner, repo, page, limit);
		return axioseInstance.get(
			`/repos/${owner}/${repo}/issues?page=${page}&per_page=${limit}`,
		);
	},
};

export default IssueApi;
