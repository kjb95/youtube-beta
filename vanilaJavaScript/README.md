## 기술스택
- HTML, CSS, JavaScript

## 결과물
### 반응형으로 웹 페이지 구성
https://user-images.githubusercontent.com/107471786/173803353-45ac07b7-22b1-4eec-b869-61b6f147e0e0.mov
- 고정 단위인 px 대신 유동 단위인 % 사용
- media 쿼리 사용

### 공지사항
#### Json로 저장된 데이터 불러오기
https://user-images.githubusercontent.com/107471786/173803372-55f24d65-fba5-44a1-ae81-c39d6112a72f.mov
#### XML로 저장된 데이터 불러오기
https://user-images.githubusercontent.com/107471786/173803412-5d949153-0301-4b20-a8e3-d294f5edaa9a.mov
- json 혹은 xml로 저장된 데이터를 ajax fetch API를 이용하여 불러오기
- 레이어팝업 형태로 공지사항 띄우기
- 쿠키를 이용하여 오늘하루 보지 않기 기능 구현

### 플레이 리스트 추가/제거
#### 플레이 리스트 추가
https://user-images.githubusercontent.com/107471786/173803477-3b4367f4-5908-4493-a19b-f941133a8d08.mov
#### 플레이 리스트 제거
https://user-images.githubusercontent.com/107471786/173803491-153809da-c480-43b5-abaa-de1b006e44bf.mov
- 팝업으로 플레이 리스트 추가 폼 띄우기
- localStorage를 이용하여 플레이리스트에 추가/제거

### 랜덤재생
https://user-images.githubusercontent.com/107471786/173803544-751b4aae-cd40-4878-a3c7-cf7cb9297940.mov
- 랜덤재생 버튼을 누르면 순서를 섞고 페이지를 구성
- 랜덤재생 버튼을 다시 누르면 원래 순서로 되돌리고 페이지를 구성
- 각 플레이 리스트를 localStorage에 저장

### 다음 플레이 리스트 진행
https://user-images.githubusercontent.com/107471786/173803586-6d7f7069-4ce0-40ed-8ef3-e722010dff7e.mov
- 유튜브 API를 이용하여 동영상이 종료되면 다음 플레이 리스트를 자동 재생

## 코드
https://github.com/kjb95/youtube_page
