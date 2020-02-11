BEGIN;

DROP TABLE IF EXISTS images,users;

CREATE TABLE IF NOT EXISTS images (
    img_id SERIAL PRIMARY KEY,
    img_info VARCHAR(255) NOT NULL,
    img_url VARCHAR(255) NOT NULL,
    img_catagory VARCHAR(255) NOT NULL
);

INSERT INTO images(img_info,img_url,img_catagory) 
VALUES
('BMW','https://i.ytimg.com/vi/JlxU9mAPnMg/hqdefault.jpg','Cars'),
('Dog','https://i.ytimg.com/vi/JlxU9mAPnMg/hqdefault.jpg','Animals'),
('Dog','https://i.ytimg.com/vi/JlxU9mAPnMg/hqdefault.jpg','flowers');


CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_pass VARCHAR(255) NOT NULL,
    user_img VARCHAR(255) NOT NULL
);

INSERT INTO users(user_name,user_pass,user_img) 
VALUES
('francis','123Francis','https://i.ytimg.com/vi/JlxU9mAPnMg/hqdefault.jpg'),
('fatmeeh','123Fatmeeh','https://i.ytimg.com/vi/JlxU9mAPnMg/hqdefault.jpg'),
('mahmod','123Mahmod','https://i.ytimg.com/vi/JlxU9mAPnMg/hqdefault.jpg');

CREATE TABLE IF NOT EXISTS liked_pic (
    like_id SERIAL PRIMARY KEY,
    img_id VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL
);







COMMIT;
