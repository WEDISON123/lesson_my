- sqlsever MySQL 关系型数据库
- mongodb NOSQL 非关系型数据库 储存JSON文件 杂乱无章

- blog
    - 用户表
        登录 鉴权 + role（角色） 分配
        id（自增）   username（varchar 255）   password（varchar 不能明文，hash加密）
        索引？ Primary KEY（`id`） 查询更快

        1.密码不能存明文， jaca/nade mvc 用户表单传过来的 passworde 123456
        md5 单词加密方式 先加密再存到数据库。
            数据库被攻击，解密的的话
            md5（12345） == password
        2. CREATE TABLE `user` {
            field int(11) AUTO_INCREMENT NOT NULL,
                varchar(255)
                longtext
            PRIMARY KEY (`id`), 主键
            UNIQUE KEY `name` (`name`)  除了主键索引，其它索引  取索引名字  唯一
        } ENGINE = 

        web http 默认服务器 80

        select * from user where id = 1; 0(1)

- create database blog; 新建blog 项目对应的数据库
    MySQL   port：3306     启动数据服务
    java/node/go    port:3000   http服务    sql请求

- 文章的列表    select 索引 index   查询更快 查询利用上索引
    primary ksy （`id`）

    文章表  主表
    用户表  附属表

    文章的列表（包含用户的信息）

    - select post.id, post.title, post.content, user.id as userId,user.name as userName  from post LEFT JOIN user ON user.id=post.userId;
    联合查询的一种  JOIN 
    LEFT JOIN   左边的是主表 
    ON  条件  user.id = post.id  