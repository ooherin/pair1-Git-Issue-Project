import { axioseInstance } from "./@core";

const IssueApi = {
	getIssue(owner, repo) {
		return axioseInstance.get(`/repos/${owner}/${repo}/issues`);
	},
};

export default IssueApi;
