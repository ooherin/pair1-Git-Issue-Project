import { axioseInstance } from "./@core";

const IssueApi = {
	getIssue(owner, repo, page, limit) {
		return axioseInstance.get(
			`/repos/${owner}/${repo}/issues?page=${page}&per_page=${limit}`,
		);
	},
};

export default IssueApi;
