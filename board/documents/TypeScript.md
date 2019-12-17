# TypeScript 소개
***
TypeScript 란 기존 Javascript 내에서는 동적 타입(변수 선언시 타입을 미리 정의하지 않음)언어이다.
하지만 Typescript의 등장으로 정적 타입을 지원하게 되면서 컴파일 단계에서 오류를 포착할 수 있다.
또한 개발자의 의도를 명확하게 코드로 기술할 수 있게되고 가독성을 높이고 예측할수 있게 하며 디버깅을 쉽게 할수 있게 됐다.

---
## nodeJS 개발시 Typescript 같이 사용하기.
```bash
npm install typescript --global
```

Node.js에서 Typescript를 사용하기위해 NPM(Node Package Manager)을 사용하여 해당 라이브러리르 설치한다.
## Ndoe js 기존에 사용하던 내용을 typescript 로 바꾸기.

Typescript를 사용하기 위해서 위에서 아래의 작업을 해야한다.
1. 라이브러리 Import 
	- ts-node
	- @types/express
2. 설정파일 작성
	- tsconfig.js
---

## 라이브러리 설치.
- ts-node
>	```javascript
    npm install ts-node
    ```
> ts-node 라는 라이브러리를 설치합니다. 해당 라이브러리는 typescript 를 동적으로 실행할 때마다 메모리상에서 타입스크립트 확장자를 가진 파일에 대해 javacsript 로 transpile 해주는 라이브러리이다.

- @types/express
>	```javascript
	npm install @types/express
	```
> 기존 node에서 사용하던 기본 express 라이브러리는 typescript와 호환이 어려워 새로이 설치하여 typescript 에서 원하는 규칙에 맞게 사용.

- types-installer
> ```javascript
npm install types-installer
```
> @types/[라이브러리] 설치를 자동으로 셋팅해서 사용할 수 있도록 하는 라이브러리

------------ 
##TypeScript MySQL 연동하기
타입스크립트와 MySQL 연동방법 또한 기존 NodeJS 만을 가지고 하던 방법과 차이가 있다. 그 부분에 대해서 알아보자.

- typeorm
>```javascript
npm install typeorm
```
> NodeJS ORM 라이브러리, 기존 Java의 Entity 개념을 도입한 라이브러리 라고 보게되면 쉽게 이해할 수 있을 것 같다. 이외에 ORM 라이브러리는 대표적으로 sequalize 라는 라이브러리도 있다.
> `@Entity`
> 선언된 부분의 아래 부분부터 model 부분이 된다는 의미로 쓰인다.
> 
> `@BaseEntity`
> save 를 쉽게 사용하기 위함입니다. 다른 용도는 확인이 필요하다...
> 
> `@PrimaryGeneratedColumn`
> `Primary key` 를 적용시킨 컬럼 이라고 보시면 되겠습니다. 그리고 추가적으로 auto increase도 자동으로 설정이 됩니다.
> 
>`@Column`
> 컬럼 다른말로 필드라고 합니다. name 에 맞게 데이터가 들어가는 곳.
> 
> `Class`명은 테이블명이 됩니다.
> ( mongoose 에서는 user 로 저장할 시 'users' 로 변환되서 들어가지만 typeorm은 그렇지 않습니다.)
