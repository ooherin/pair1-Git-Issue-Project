<div align="center">
  
  <a href="https://exquisite-khapse-d1a5a8.netlify.app" target="_blank"> 
    
![main](https://github.com/KIT-Frontend-Team1/pair1-Git-Issue-Project/assets/123865139/10a2a6bf-5dc0-4b24-8fcd-e17f05256240)



  </a>
  
</div>

<div align="center">

<h3>

  [angular-cli](https://github.com/angular/angular-cli/) Repository Issue Get 🔎
  
</h3>
  
  <p>작업 기간 : 2023/06/13 ~ 2023/06/17</p>
  <br> <br>
</div>

<h1>📑 프로젝트 소개 및 개요</h1> 

<h3> Github rest api 중 issue api를 사용해서 issue 조회하기 사이트를 구현하였습니다. </h3> 

➡️ **angular**가 운영하는 **angular-cli** 레퍼지토리의 issue를 볼 수 있게 하였으며,

➡️ 화면 크기에 상관없이 ui가 변경되는 **반응형 사이트로 제작**하였습니다.

➡️ **페이지네이션**으로 해당 레퍼지토리의 이슈 목록을 확인할 수 있습니다.

➡️ 또한 **필터 기능**을 통해 이슈를 업데이트순/생성순/댓글순, 10개/20개/50개 씩 정렬하는 옵션을 선택하여 볼 수 있습니다.

➡️ 또한 이슈를 클릭하면 이슈의 내용과 댓글이 담긴 **디테일 페이지**로 이동하도록 만들었습니다.

<br>

<h2>🔗 배포 링크</h2> 

<h3>netlify</h3>

🔗 https://exquisite-khapse-d1a5a8.netlify.app

<h3>vercel</h3>

🔗 https://pair1-git-issue-project-j7st.vercel.app/

<br>

<h2> 🎥 시연 영상 </h2>

<h3>렌딩페이지 추가 (23.6.20)</h3>

https://github.com/ooherin/pair1-Git-Issue-Project/assets/125418818/8328b6ae-4fab-40e3-81e1-cd4c47151869

<h3>페이지네이션</h3>

https://github.com/KIT-Frontend-Team1/pair1-Git-Issue-Project/assets/125418818/1d94148d-c581-4f43-9c55-7dced4a7d743

<h3>인피니티 스크롤 추가(23.6.20)</h3>

https://github.com/ooherin/pair1-Git-Issue-Project/assets/125418818/85331c38-1df7-4241-ae3c-4e6d8828bd92

<h3>반응형 ui</h3>

https://github.com/KIT-Frontend-Team1/pair1-Git-Issue-Project/assets/125418818/d803aa1e-b88f-4cb6-82c1-525e737bc9a2

<h3>필터 기능</h3>

https://github.com/KIT-Frontend-Team1/pair1-Git-Issue-Project/assets/125418818/6714f273-4fb3-41d2-8cd6-8f0dd083055b


<br>

<h2> 📂 폴더 구조 </h2>

```javascript
- apis
  - @core.js
  - issue.js
- components
  - FilterBox.js
  - Header.js
  - Layout.js
  - Loading.js
  - Pagination.js
  - TopButton.js
- pages
  - Comment.js
  - Issue.js
  - IssueDetail.js
  - OneIssue.js
- reducer
  - index.js
  - issue.js
- routes
  - routing.js
- store
  - store.js
- style
  - common.js
  - global.js
  - theme.js

```

<br>

<h2>👭 팀원</h2> 

|Front end|Front end|
| :-: | :-: |
| <img src="https://github.com/KIT-Frontend-Team1/pair1-Git-Issue-Project/assets/123865139/490a8625-edaa-4c1a-afd1-966a661d7a0b" width="150"> | <img src="https://github.com/KIT-Frontend-Team1/pair1-Git-Issue-Project/assets/123865139/f7bb64fc-2d77-4bd0-9825-5823f73d5977" width="150"> |
|[오혜린](https://github.com/ooherin)|[김예슬](https://github.com/yesoryeseul)|

<br>

<h2>⚙️ 사용 기술 스택</h2>

<img src="https://github.com/KIT-Frontend-Team1/pair1-Git-Issue-Project/assets/123865139/5d09996b-c3db-4c8c-ba32-180d19d5241f" width="800"> <br>

<br>

<h2> 🪵 작업 과정 </h2>

<h3>🤔 초기 구상 회의 </h3>

```
1. 초기 세팅 → 레퍼지토리 dev 브랜치 생성하여 프로젝트 파일 생성
	a. husky, eslintrc, prettierrc, jsconfig
	b. 반응형 UI 와이어프레임 생성

2. 역할 분담
	a. api 가져오기 + rtk, axios - 예슬
	b. 반응형 UI - 예슬
	c. 페이지네이션 -  혜린
	d. 상세페이지 제작, 연결 - 예슬
	e. 필터링 (업데이트순, 최신순, 댓글순 / 10개씩, 20개씩, 50개씩) - 혜린
	f. 마크다운 변환 - 예슬

3. 사용 라이브러리
	a. rtk, redux-logger
	b. axios
	c. react-router-dom
	d. styled-components, styled-reset, react-icon, 
	e. husky, prettier, eslint
	f. react-markdown, remark-gfm
```

### 6/13 (화)

- husky, eslintrc, prettierrc, jsconfig 초기 셋팅
- 기본 페이지 ui 생성
- api 작업 ⇒ rtk 사용해 전역변수로 관리

### 6/14 (수)

- 반응형 UI 작업
    - 로딩 페이지 https://loading.io/ 스피너 gif 사용
- 상세페이지 UI 및 연결 작업
- 페이지네이션 진행중

### 6/15 (목)

- 페이지네이션 구현 완료
- 필터 기능 구현
- `npm install react-markdown` 추가

### 6/16 (금)

- 필터 기능 리팩토링
- UI 추가 리팩토링 (label, comment)
- 스프린트 정리, 배포 준비

### 6/17(토)

- 배포 최종 완료(netlify, vercel)

<br/> 

<h2>✔️ 기업과제 요구사항 구현 내용</h2>

➡️ `github open api`와 `rtk`를 활용하여 이슈 페이지(목록, 상세페이지 구현) 데이터를 조회하였습니다. 

➡️ `페이지네이션`은 10개 단위로 보여질 수 있도록 작업하였고, 페이지 포커싱이 되도록 작업하였습니다. 데이터가 200개로 제한되어 있어 200개의 데이터만 페이지로 접근할 수 있으며, 데이터가 있는 페이지만 보이도록 제작하였습니다. 

➡️ `필터 기능`은 업데이트순/생성순/댓글순과 10개/20개/50개 씩 볼 수 있게 구현하였습니다. 쿼리스트링을 사용하여, 해당 url에 필터 정보를 저장하였으며 당연히 뒤로가기 기능도 잘 구현되게 하였습니다. 

➡️ `반응형(PC/Tablet/Mobile)`으로 작업하였습니다. 화면 크기가 줄어도 보는데 불편함이 없게 ui를 만들었습니다. 

➡️ 데이터를 받아올 때 `로딩 페이지`를 띄워주는 기능을 구현하였습니다. rtk로 api의 현재 상태를 받아와 loading일때 loading 페이지를 띄워줍니다.

<br>

<h2>💬 코드 및 깃허브 커밋 컨벤션 </h2>

```
☑️코드 컨벤션

- 문자열을 처리할 때는 쌍따옴표("") 사용
- 문장이 종료될 때 세미콜론(;)
- 함수명, 변수명은 카멜케이스로 작성
- 이벤트 핸들러 함수는 접두어 on-을 붙여 카멜케이스로 작성
- 함수 스타일은 화살표 함수로 통일
- 컴포넌트의 폴더명은 소문자로 시작하는 카멜케이스로 작성
- 컴포넌트의 파일명은 대문자로 시작하는 카멜케이스로 작성
- 컴포넌트 이외의 파일명은 소문자로 시작하는 카멜케이스로 작성
```


```
☑️ 커밋 컨벤션

- feat: 새로운 기능에 대한 커밋
- fix: 버그 수정에 대한 커밋
- chore: 그 외 자잘한 수정에 대한 커밋
- docs: 문서 수정에 대한 커밋
- style: 코드 스타일 혹은 포맷 등에 관한 커밋
- refactor: 코드 리팩토링에 대한 커밋
```

<br>
