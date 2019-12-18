# node_server

 타입스크립트와 노드 JS, TypeORM 등의 라이브러리를 사용하여 만든 nodeJS 백엔드 서버입니다.
--- 

> 
## 소스코드 받아가는 방법
> 소스 다운로드 ```git clone https://github.com/sys970717/node_server.git```

> 변경 후 업로드(local git repository) ``` git add [변경파일] ```

> Commit 메시지 ``` git commit -m "[메시지] ``` 

> - 커밋메시지 참고 블로그: https://meetup.toast.com/posts/106

> 실제 repository PUSH ``` git push -u origin develop ```

> - git Flow 방식을 기용한 브랜치 관리를 진행할 예정.

## 소스코드 실행 방법

> 
```javascript
 npm start // 명령어로 프로젝트 시작 가능.
```
> 현재까지는 로컬에서 개인작업을 진행했었기 때문에 mysql 테이블에 대한 정의를 owner 가 가지고 있음. typeorm 옵션을 잘 주면 테이블도 생성할 수 있으니 해당 내용은 참고.

## TODO LIST
> - swagger 문서 작성.
> - front 작업 필요 --> 해당 front 는 이전엔 vue로 작업을 하려 했으나 현재 고민중 ( 2019/12/18... )
> - aws ec2 에 반영하여 실제 서비스 화면을 만들어볼 예정.
> - 향후 환율 API 또한 추가해 환율 추이를 볼 수 있는 차트 뷰 반영 예정.
