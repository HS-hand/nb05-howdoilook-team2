# nb05-howdoilook-team2
https://www.notion.so/NB-5-2-26fa0b8db76380fa81c0e30d66c763f3?source=copy_link

<br>

## 팀원
손훈석 (https://github.com/HS-hand)  
정인성 (개인 Github 링크)  
오창섭 (https://github.com/GhostGN95)  
양승빈 (개인 Github 링크)  
정지원 (개인 Github 링크)  

## 프로젝트 소개
- 프로그래밍 교육 사이트의 백엔드 시스템 구축
- 프로젝트 기간: 2025.09.15 ~ 2025.10.02

## 기술스택
- Backend: Express.js, PrismaORM
- Database: postgreSQL
- 공통 Tool: Git & Github, Discord, Notion

## 팀원별 구현 기능 상세
### 손훈석
(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

- 답글 엔티티
  
### 정인성
(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

### 오창섭
(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

### 정지원
(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

### 양승빈
(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

## 파일구조

```
src
 ┣ 01-app
 ┃ ┗ sever.js
 ┣ 02-middleware
 ┃ ┣ req.validator
 ┃ ┣ ┣ comment
 ┃ ┣ ┣ ┣ create.comment.req.validator.js
 ┃ ┣ ┣ ┣ delete.comment.req.validator.js
 ┃ ┣ ┣ ┗ update.comment.req.validator.js
 ┃ ┣ ┣ curation
 ┃ ┣ ┣ ┣ create.curation.req.validator.js
 ┃ ┣ ┣ ┣ delete.curation.req.validator.js
 ┃ ┣ ┣ ┗ update.curation.req.validator.js
 ┃ ┣ ┗ base.validator.js
 ┃ ┣ res.dto
 ┃ ┣ ┣ comment
 ┃ ┣ ┣ ┣ create.comment.res.dto.js
 ┃ ┣ ┣ ┣ delete.comment.res.dto.js
 ┃ ┣ ┣ ┗ update.comment.res.dto.js
 ┃ ┣ ┣ curation
 ┃ ┣ ┣ ┣ create.curation.res.dto.js
 ┃ ┣ ┣ ┣ delete.curation.res.dto.js
 ┃ ┣ ┣ ┣ view.curation.list.res.dto.js
 ┃ ┣ ┗ ┗ update.curation.res.dto.js
 ┃ ┣ comment.middleware.js
 ┃ ┗ curation.middleware.js
 ┣ 03-controller
 ┃ ┣ base.controlloer.js
 ┃ ┣ comment.controller.js
 ┃ ┗ curation.controller.js
 ┣ 04-domain
 ┃ ┣ entity
 ┃ ┣ ┣ comment.js
 ┃ ┣ ┗ curation.js
 ┃ ┣ service
 ┃ ┣ ┣ comment.service.js
 ┃ ┗ ┗ curation.service.js
 ┣ 05-repo
 ┃ ┣ mapper
 ┃ ┣ ┣ comment.mapper.js
 ┃ ┣ ┣ curation.mapper.js
 ┃ ┣ comment.repo.js
 ┃ ┗ curation.repo.js
 ┣ common
 ┃ ┣ exception.js
 ┃ ┗ struct.js
 ┣ dep-injector.js
 ┗ index.js
http
 ┣ comment-request.http
 ┣ curation-request.http
 ┗ style-request.http
prisma
 ┣ schema.prisma
 ┗ seed.js
.env
.gitignore
package.json
tsconfig.json
README.md
```
## 구현 홈페이지
(개발한 홈페이지에 대한 링크 게시)

## 프로젝트 회고록
(제작한 발표자료 링크 혹은 첨부파일 첨부)

