# 번외글
*** 
### mysql 설치는 자유롭게 자기 환경에 맞춰 다운로드 이후 아래 작업을 진행해주시기 바랍니다.

> MySQL 버전 8.0 부터는 추가적인 옵션이 있습니다.
 >> 해당내용은 추후 업데이트 하도록 하겠습니다.

> User 생성시 아래를 따라 하시면 같은 환경으로 작업이 가능하오니 참고하시기 바랍니다.

>create database spring_test;
>
>create user 'test'@'localhost' identified by 'test';
>create user 'test'@'%' identified by 'test';
>
>grant all privileges on spring_test.* to 'test'@'localhost';
>grant all privileges on spring_test.* to 'test'@'%';
>grant all privileges on *.* to 'test'@'localhost';
>grant all privileges on *.* to 'test'@'%';
>
>flush privileges;