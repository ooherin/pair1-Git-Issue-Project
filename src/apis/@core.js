/*
1. axios 인스턴스 생성하여 기본 url 설정 및 토큰 가져오기
*/

import axios from "axios";

export const axioseInstance = axios.create({
	baseURL: process.env.REACT_APP_URL,
	headers: {
		Authorization: process.env.REACT_APP_TOKEN,
	},
});
