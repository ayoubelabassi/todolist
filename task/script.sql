create table task(
id bigint primary key auto_increment,
name text,
finished boolean
)


insert into task(name, finished) values 
('BUY A PC', false),
('BUY A FOOD', false),
('RUN 1KM', false)