# 번외글
*** 
### mysql 설치는 자유롭게 자기 환경에 맞춰 다운로드 이후 아래 작업을 진행해주시기 바랍니다.

> MySQL 버전 8.0 부터는 일반적인 유저 생성으로 로그인이 되지 않습니다.

> User 생성시 아래를 따라 하시면 같은 환경으로 작업이 가능하오니 참고하시기 바랍니다.

>create database spring_test;
>
>create user 'test'@'localhost' IDENTIFIED WITH mysql_native_password 'test';
>create user 'test'@'%' IDENTIFIED WITH mysql_native_password 'test';
>
>grant all privileges on spring_test.* to 'test'@'localhost';
>grant all privileges on spring_test.* to 'test'@'%';
>grant all privileges on *.* to 'test'@'localhost';
>grant all privileges on *.* to 'test'@'%';
>
>flush privileges;