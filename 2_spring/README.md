## 기술스택
- HTML
- CSS
- JavaScript
- React
- Spring Boot
- MySQL
- JPA
- Docker

## 프로젝트 개선사항
### 1. Spring Boot + JPA 사용
프론트단(localstorage)에서 데이터를 저장하는 방식 대신 스프링부트와 JPA를 이용하여 데이터베이스에 데이터를 저장
### 2. 유튜브 API를 호출해서 얻은 데이터 파싱
데이터베이스에는 원본 데이터를 저장하고, 데이터를 파싱한 후에 프론트 단으로 전달
#### 개선 전
![](https://velog.velcdn.com/images/kjb95/post/859a63b6-339d-4107-86c8-1cd4a8cd8a77/image.png)
#### 개선 후
![](https://velog.velcdn.com/images/kjb95/post/4197b031-d9cd-4945-9dd1-e2b3058e2d02/image.png)
### 3. 도커로 개발 환경 구축
도커 컴포즈, 도커 파일을 이용하여 리액트, 스프링부트, DB(MySQL) 개발 환경 구축

https://user-images.githubusercontent.com/107471786/180921548-ae770889-701f-4dcb-b76b-da30a1a2441a.mov

(컴포즈 업 명령어를 이미 백그라운드로 실행시켜 둔 상태)