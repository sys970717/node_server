# Solve developing error of nodejs connect mysql
## 
1. nodejs와 mysql 연동시의 에러발생
	1. Mysql Connection Error
***
1.1 Mysql Connection Error
---
mysql 연동을 위해 대부분의 node를 처음 접하는 사람은 아래와 유사한 예시코드를 접할 것이다.
```javascript
const mysql = require('mysql')
var info = {
	host: '127.0.0.1',
    port: '3306',
    user: 'test',
    password: 'test',
    database: 'test'
}
var conn = mysql.createConnection(info)
conn.connect()
```

위 코드를 처음 접하면서 예시코드를 붙여넣거나 직접 따라 작성하는 것이 대부분이다.
하지만 주의할 점은 **Mysql 8.0** 혹은 그 이상에서 저 코드를 그대로 실행하고
> DB USER 추가코드

	CREATE USER 'test'@'localhost' IDENTIFIED BY 'test'

계정을 위와 같이 생성한 경우

	ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client

위와 같은 **에러** 가 발생한다.

해당 에러에 대한 해결 법은 Mysql DB에 DBMS 혹은 Client로 접속하여 해당유저에 대하여 아래와 같은 옵션을 적용하여 User 정보를 수정 후 nodejs mysql 코드를 실행하면 문제없이 기본적인 연동이 완료된다.

	ALTER USER '[계정]'@'localhost' IDENTIFIED WITH mysql_native_password BY '[사용할 비밀번호]';
	flush privileges;

# Mysql commit/rollback
## 
Mysql은 관계형 데이터베이스이기 때문에 RDBMS에서 제공하는 Transaction을 사용할 수 있다. 그리고 Node js mysql 라이브러리에서 Transaction 단위로 commit/rollback 을 제공한다.
> 트랜잭션에 대한 추가적인 정보는 [Transaction](https://ko.wikipedia.org/wiki/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98) 접속 후 확인하세요.
