# nb05-howdoilook-team2

https://www.notion.so/NB-5-2-26fa0b8db76380fa81c0e30d66c763f3?source=copy_link

<br>

## 팀원

손훈석 (https://github.com/HS-hand)  
정인성 (https://github.com/jung-insung)  
오창섭 (https://github.com/GhostGN95)  
양승빈 (https://github.com/yangseungbin306)  
정지원 (https://github.com/XOXOXO13)

## 프로젝트 소개

- 프로그래밍 교육 사이트의 백엔드 시스템 구축 실습 프로젝트
- 프로젝트 명 : How Do I Look
- 프로젝트 기간: 2025.09.15 ~ 2025.10.02

## 기술스택

- Backend: Express.js, PrismaORM
- Database: postgreSQL
- 공통 Tool: Git & Github, Discord, Notion

## 팀원별 구현 기능 상세

### 손훈석

- comment API 구현
- tag API 구현

### 정인성

(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

### 오창섭

- style API 부분 구현
  - 생성, 상세 조회, 수정, 삭제
- 기능 사진
  - 1. 스타일 생성_기본 화면 
  ![스타일 생성_기본 화면](./README/OH/1.create_1.png)
  - 1. 스타일 생성_빈 값 입력시
  ![스타일 생성_빈 값 입력시](./README/OH/1.create_2.png)
  - 1. 스타일 생성_생성 완료
  ![스타일 생성_생성 완료](./README/OH/1.create_3.png)
  - 2. 스타일 상세 조회
  ![스타일 상세 조회](./README/OH/2.getDetailStyle.png)
  - 3. 스타일 수정_수정 (태그 추가)
  ![스타일 수정_수정 (태그 추가)](./README/OH/3.update_1.png)
  - 3. 스타일 수정_수정 완료
  ![스타일 수정_수정 완료](./README/OH/3.update_2.png)
  - 4. 스타일 삭제_삭제 (비밀번호 입력)
  ![스타일 삭제_삭제 (비밀번호 입력)](./README/OH/4.delete_1.png)
  - 4. 스타일 삭제_삭제 완료
  ![스타일 삭제_삭제 완료](./README/OH/4.delete_2.png)

(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

### 정지원

(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

### 양승빈

(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

## 파일구조

```
src
 ┣ app
 ┃ ┣ router
 ┃ ┣ ┣ base.router.js
 ┃ ┣ ┣ comment.router.js
 ┃ ┣ ┣ curation.router.js
 ┃ ┣ ┣ image.router.js
 ┃ ┣ ┣ style.router.js
 ┃ ┣ ┗ tag.router.js
 ┃ ┗ sever.js
 ┣ controller
 ┃ ┣ req.validator
 ┃ ┣ ┣ comment
 ┃ ┣ ┣ ┣ create.comment.req.validator.js
 ┃ ┣ ┣ ┣ delete.comment.req.validator.js
 ┃ ┣ ┣ ┗ update.comment.req.validator.js
 ┃ ┣ ┣ curation
 ┃ ┣ ┣ ┣ create.curation.req.validator.js
 ┃ ┣ ┣ ┣ delete.curation.req.validator.js
 ┃ ┣ ┣ ┗ update.curation.req.validator.js
 ┃ ┣ ┣ style
 ┃ ┣ ┣ ┣ create.style.req.validator.js
 ┃ ┣ ┣ ┣ delete.style.req.validator.js
 ┃ ┣ ┣ ┣ list.style.req.validator.js
 ┃ ┣ ┣ ┣ ranking.style.req.validator.js
 ┃ ┣ ┣ ┣ upload.image.req.validator.js
 ┃ ┣ ┣ ┗ update.style.req.validator.js
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
 ┃ ┣ ┣ ┗ update.curation.res.dto.js
 ┃ ┣ ┣ style
 ┃ ┣ ┣ ┣ create.style.res.dto.js
 ┃ ┣ ┣ ┣ delete.style.res.dto.js
 ┃ ┣ ┣ ┣ get.style.detail.res.dto.js
 ┃ ┣ ┣ ┣ list.style.res.dto.js
 ┃ ┣ ┣ ┣ ranking,style.res.dto.js
 ┃ ┣ ┣ ┗ update.style.res.dto.js
 ┃ ┣ ┣ tag
 ┃ ┣ ┗ ┗ get.tags.res.dto.js
 ┃ ┣ comment.controller.js
 ┃ ┣ style.controller.js
 ┃ ┣ curation.controller.js
 ┃ ┗ tag.controller.js
 ┣ domain
 ┃ ┣ entity
 ┃ ┣ ┣ comment.js
 ┃ ┣ ┣ style.js
 ┃ ┣ ┗ curation.js
 ┃ ┣ service
 ┃ ┣ ┣ comment.service.js
 ┃ ┣ ┣ style.service.js
 ┃ ┗ ┗ curation.service.js
 ┣ repo
 ┃ ┣ mapper
 ┃ ┣ ┣ comment.mapper.js
 ┃ ┣ ┣ style.mapper.js
 ┃ ┣ ┗ curation.mapper.js
 ┃ ┣ comment.repo.js
 ┃ ┣ style.repo.js
 ┃ ┣ tag.repo.js
 ┃ ┗ curation.repo.js
 ┣ common
 ┃ ┣ libs
 ┃ ┣ ┣ config.manager.js
 ┃ ┣ ┗ file.uploader.js
 ┃ ┣ exception.js
 ┃ ┣ config.keys.js
 ┃ ┗ vulgar.language.js
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
https://nb05-howdoilook-team2-fe.onrender.com

## 프로젝트 회고록

(제작한 발표자료 링크 혹은 첨부파일 첨부)
