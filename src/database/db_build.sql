BEGIN;

DROP TABLE IF EXISTS images,users;

CREATE TABLE IF NOT EXISTS images (
    img_id SERIAL PRIMARY KEY,
    img_info VARCHAR(255) NOT NULL,
    img_url VARCHAR(255) NOT NULL,
    img_category VARCHAR(255) NOT NULL
);

INSERT INTO images(img_info,img_url,img_category) 
VALUES
('BMW','https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-10%252Fbc7fedf0-f6a8-11e9-b7f9-b7bbe7db72db%26client%3Da1acac3e1b3290917d92%26signature%3D18764e3acf963f4bd97d4d42603ae78df1d021e1&client=amp-blogside-v2&signature=2455442e9256a05034382c94cb1f1219f7918aca','Cars'),
('range rover','data:image/jpeg;base64,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','Cars'),
('mercedes',' https://static.turbosquid.com/Preview/2019/08/21__06_23_33/2020_MercedesBenz_GLS_0000.jpgF981DA6B-930C-4B4E-9D2A-A1987EADAD11Zoom.jpg','Cars'),
('lamborghini','https://www.telegraph.co.uk/content/dam/technology/2020/01/06/TELEMMGLPICT000204208282_trans%2B%2BUHAg7isqCeBNZq_IFiL6kfFbWbaLu52YbXWADC0sYhs.jpeg ','Cars'),
('CAMARO','https://static.tcimg.net/vehicles/oem/4c3a47ee6df5ecb5/2020-Chevrolet-Camaro.jpg ','Cars'),
('audi',' https://media.caradvice.com.au/image/private/q_auto/v1571867111/ez8cynjspgmyqtibgyg3.jpg','Cars'),
('seat',' https://www.seat.co.il/wp-content/uploads/2019/01/leon-cupra-nevada-white.png','Cars'),
('golf gti','https://drivetribe.imgix.net/TWuedmhLRCqwz4HfAK7cqg?w=1400&h=788&fm=webp&auto=compress&lossless=true&fit=crop&crop=faces','Cars'),
('mazda',' https://i0.wp.com/toyotamazda.com/wp-content/uploads/2017/11/2020-Mazda-6-New-Generation-based-on-Shinari-Concept-side-view.jpg?resize=640%2C400&ssl=1','Cars'), 
('Deer','https://data.whicdn.com/images/161813205/original.jpg','Animals'),
('cat','https://data.whicdn.com/images/339884135/original.jpg','Animals'),
('horse','https://data.whicdn.com/images/166261080/original.jpg','Animals'),
('duck','https://data.whicdn.com/images/65662130/original.jpg','Animals'),
('Dove','https://data.whicdn.com/images/203209610/original.jpg','Animals'),
('fox','https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&w=1000&q=80','Animals'),
('banda','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdRGHzqNlqdKVe8xTLFsNflTXuWwVKJEtzG7OctNnHXsh38xIn','Animals'),
('parrot','https://images2.minutemediacdn.com/image/upload/c_crop,h_1657,w_2950,x_0,y_158/f_auto,q_auto,w_1100/v1554746001/shape/mentalfloss/88127-istock-611617612.jpg','Animals'),
('tiger','https://i1.wp.com/www.onfocus.news/wp-content/uploads/2019/03/white-tiger.gif?fit=1280%2C730&ssl=1','Animals'),
<<<<<<< HEAD

<<<<<<< HEAD
('rose','data:image/jpeg;base64,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','flowers');
=======
('rose','https://upload.wikimedia.org/wikipedia/commons/5/51/Small_Red_Rose.JPG','flowers');
>>>>>>> master
=======
('rose','https://upload.wikimedia.org/wikipedia/commons/5/51/Small_Red_Rose.JPG','flowers');
>>>>>>> master
('tulip','https://cf.shopee.com.my/file/5141661d01a1be0c282796d4d63f7440','flowers');
('lavender','https://cdn.shopify.com/s/files/1/0022/4847/4713/products/MG_9602_2d83c59b-1c91-4ee8-83cb-c01ba5ff1a5f_700x.jpg?v=1575027393','flowers');
('juwel','https://www.lubera.co.uk/media/image/thumbnail/2274157_1_720x600.jpg','flowers');
('Anemone','https://upload.wikimedia.org/wikipedia/commons/d/da/Wood_anemone_flowers.jpg','flowers');
('Astrantia','https://upload.wikimedia.org/wikipedia/commons/2/2d/Astrantia_%28Masterwort_Plant%29.jpg','flowers');
('Calla Lily','https://images-na.ssl-images-amazon.com/images/I/41Ni%2Bvl9fxL._AC_.jpg','flowers');
('Cranesbill Geranium','https://upload.wikimedia.org/wikipedia/commons/6/62/Geranium_macrorrhizum_stempel_gespleten.jpg','flowers');
('Wax Plant','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZSld8M7bWNV1ktrcV4tXkG-9Bfb4Hh0fonTByj5Ei_0gaFFpb','flowers');



CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_pass VARCHAR(255) NOT NULL,
    user_img VARCHAR(255) NOT NULL,
    user_status VARCHAR(255) NOT NULL
);

INSERT INTO users(user_name,user_pass,user_img) 
VALUES
('francis','123Francis','https://i.ytimg.com/vi/JlxU9mAPnMg/hqdefault.jpg','Travel to life is like css to html'),
('fatmeeh','123Fatmeeh','https://i.ytimg.com/vi/JlxU9mAPnMg/hqdefault.jpg','HTTP 404: Status not Found'),
('mahmod','123Mahmod','https://i.ytimg.com/vi/JlxU9mAPnMg/hqdefault.jpg','Do not be afraid to step on people. Mario made a career from it');

CREATE TABLE IF NOT EXISTS liked_pic (
    like_id SERIAL PRIMARY KEY,
    img_id VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL
);







COMMIT;
