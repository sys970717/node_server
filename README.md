# node_server

타입스크립트와 노드 JS, TypeORM 등의 라이브러리를 사용하여 만든 nodeJS 백엔드 API 게시판 서버입니다.

***
> 
## 소스코드 받아가는 방법
> 소스 다운로드 ```git clone https://github.com/sys970717/node_server.git```

> 소스 수정 후 업로드(local git repository) ``` git add [변경파일] ```

> Commit 메시지 ``` git commit -m "[메시지] ``` 
> - 커밋메시지 참고 블로그: https://meetup.toast.com/posts/106

> 실제 repository PUSH ``` git push -u origin develop ```
> - git Flow 방식을 기용한 브랜치 관리를 진행할 예정.

### 설정내용
> 1. board/config/ConstantConfig.ts 파일을 열어 dev에 프로젝트 디렉터리 경로를 입력한다.
> 2. ormconfig.json => 만일 접속하는 계정 및 데이터베이스 이름이 다를 경우 해당 파일 또한 수정한다.
> 3. 

## 소스코드 실행 방법
>
```javascript
 npm install -g ts-loader webpack webpack-cli typescript
 npm install // 명령어로 프로젝트 내에 설정된 라이브러리 설치.
 npm start // 명령어로 프로젝트 시작 가능.
```
> 현재까지는 로컬에서 개인작업을 진행했었기 때문에 mysql 테이블에 대한 정의를 owner 가 가지고 있음. typeorm 옵션을 잘 주면 테이블도 생성할 수 있으니 해당 내용은 참고.

## TODO LIST
> - swagger 문서 작성.
> - front 작업 필요 --> 해당 front 는 이전엔 vue로 작업을 하려 했으나 현재 고민중 ( 2019/12/18... )
> - ~aws ec2 에 반영하여 실제 서비스 화면을 만들어볼 예정.
> - 향후 환율 API 또한 추가해 환율 추이를 볼 수 있는 차트 뷰 반영 예정.

## Inpra 공부
> AWS --> 생활코딩 공부 중 ( https://opentutorials.org/course/2717/11273 )

> Docker
> - https://blog.cosmosfarm.com/archives/248/%EC%9A%B0%EB%B6%84%ED%88%AC-18-04-%EB%8F%84%EC%BB%A4-docker-%EC%84%A4%EC%B9%98-%EB%B0%A9%EB%B2%95/
> - https://nicewoong.github.io/development/2017/10/09/basic-usage-for-docker/
> - https://jistol.github.io/docker/2017/09/01/docker-redis/


