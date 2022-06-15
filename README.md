## 기술스택
- HTML, CSS, JavaScript

## 결과물
### 반응형으로 웹 페이지 구성
![](https://velog.velcdn.com/images/kjb95/post/a9401254-d7b7-4064-bbbc-1aee1b60ab9e/image.gif)
- 고정 단위인 px 대신 유동 단위인 % 사용
- media 쿼리 사용

### 공지사항
#### Json로 저장된 데이터 불러오기
![](https://velog.velcdn.com/images/kjb95/post/9b0fdc37-1dc0-41df-ab36-6158f3434e84/image.gif)
#### XML로 저장된 데이터 불러오기
![](https://velog.velcdn.com/images/kjb95/post/f55043c0-8b72-4be9-b908-f68b6529085a/image.gif)

- json 혹은 xml로 저장된 데이터를 ajax fetch API를 이용하여 불러오기
- 레이어팝업 형태로 공지사항 띄우기
- 쿠키를 이용하여 오늘하루 보지 않기 기능 구현

### 플레이 리스트 추가/제거
#### 플레이 리스트 추가
> ![](https://velog.velcdn.com/images/kjb95/post/818e903b-569c-4df4-94cd-9121e03e0ffe/image.gif)

#### 플레이 리스트 제거
![](https://velog.velcdn.com/images/kjb95/post/7de20ca1-3966-4f2b-b976-0821c8a84573/image.gif)


- 팝업으로 플레이 리스트 추가 폼 띄우기
- localStorage를 이용하여 플레이리스트에 추가/제거

### 랜덤재생
![](https://velog.velcdn.com/images/kjb95/post/142e2f5f-3776-429e-9e8b-42b38799ba72/image.gif)

- 랜덤재생 버튼을 누르면 순서를 섞고 페이지를 구성
- 랜덤재생 버튼을 다시 누르면 원래 순서로 되돌리고 페이지를 구성
- 각 플레이 리스트를 localStorage에 저장

### 다음 플레이 리스트 진행
![](https://velog.velcdn.com/images/kjb95/post/16a83b9b-3f35-438c-9bb1-1a8033122b15/image.gif)

- 유튜브 API를 이용하여 동영상이 종료되면 다음 플레이 리스트를 자동 재생

## 코드
https://github.com/kjb95/youtube_page