-- Categories table<br>
CREATE TABLE category (<br>
    category_id SERIAL PRIMARY KEY,<br>
    category_name VARCHAR(100) NOT NULL,<br>
    description TEXT<br>
);<br>

-- Content table<br>
CREATE TABLE content (<br>
    content_id SERIAL PRIMARY KEY,<br>
    title VARCHAR(200) NOT NULL,<br>
    rating DECIMAL(3,1) CHECK (rating >= 0 AND rating <= 10),<br>
    views_in_millions DECIMAL(10,2),<br>
    release_year INT,<br>
    category_id BIGINT UNSIGNED,<br>
    FOREIGN KEY (category_id) REFERENCES category(category_id)<br>
);<br>

-- Insert categories<br> 
INSERT INTO category (category_name, description) VALUES<br>
('Movies', 'Feature-length films'),<br>
('Series', 'Multi-episode TV shows'),<br>
('Documentaries', 'Non-fiction educational content'),<br>
('Anime', 'Japanese animated content');<br>

-- Insert content<br>
INSERT INTO content (title, rating, views_in_millions, release_year, category_id) VALUES<br>
('Stranger Adventures', 8.7, 142.50, 2023, 2),<br>
('The Cosmic Heist', 7.9, 89.30, 2024, 1),<br>
('Planet Earth: Oceans', 9.2, 201.75, 2023, 3),<br>
('Code Warriors', 8.1, 67.20, 2024, 2),<br>
('Attack on Mars', 9.0, 156.80, 2023, 4),<br>
('The Algorithm', 7.5, 45.60, 2024, 1),<br>
('Wildlife Mysteries', 8.8, 178.90, 2024, 3),<br>
('Cyberpunk Chronicles', 8.4, 123.45, 2023, 4);<br>


QUERY 1: Write a query that displays: content_id, title, and category_name for all shows.<br>
select a.content_id,a.title,b.category_name from content a join category b<br>
on a.category_id = b.category_id;<br>
<img width="662" height="435" alt="Screenshot 2025-12-01 104410" src="https://github.com/user-attachments/assets/184f0019-1e7d-4ac6-8cfc-5033a54422fc" /><br>


QUERY 2: Write a query that shows all content (title, rating, views) sorted by views in descending order (most viewed first).<br>
select title,rating,views_in_millions as views from content order by views_in_millions desc;<br>
<img width="508" height="420" alt="Screenshot 2025-12-01 110239" src="https://github.com/user-attachments/assets/9084c7b5-6a17-46df-8bd1-844a310ed7f9" /><br>


QUERY 3: Write a query that calculates the average rating for each category, showing category_name and average_rating.<br>
select a.category_name, avg(rating) as average_rating from content as b join category as a<br>
on a.category_id=b.category_id<br>
group by a.category_name;<br>
<img width="437" height="311" alt="Screenshot 2025-12-01 110225" src="https://github.com/user-attachments/assets/93e46b23-b826-4d09-886b-2bd8fa099d63" /><br>


QUERY 4: Find all content with a rating above 8.5 AND views greater than 100 million. Display title, rating, views, and category_name.<br>
select a.title,a.rating, a.views_in_millions as views,b.category_name from<br>
category as b join content as a<br>
on a.category_id=b.category_id<br>
where a.views_in_millions>100 and a.rating>8.5;<br>
<img width="707" height="318" alt="Screenshot 2025-12-01 110212" src="https://github.com/user-attachments/assets/58882851-2544-4d65-9b94-513c36959ce5" /><br>


QUERY 5: <br>
1.Run EXPLAIN ANALYZE on your Query 1 to see query execution time<br>
2.Create an index: CREATE INDEX idx_category_id ON content(category_id);<br>
3.Run EXPLAIN ANALYZE again and compare the execution time<br>
4.Write 2-3 sentences explaining: Why did the index improve (or not improve) performance?<br>
EXPLAIN ANALYZE<br>
select <br>
    c.content_id,<br>
    c.title,<br>
    ca.category_name<br>
from content c<br>
join category ca on c.category_id = ca.category_id;<br>
<img width="1574" height="319" alt="Screenshot 2025-12-01 111600" src="https://github.com/user-attachments/assets/88e866e3-4add-4108-9df2-b6905bf8abf6" /><br>

CREATE INDEX idx_category_id ON content(category_id);<br>
EXPLAIN ANALYZE<br>
select <br>
    c.content_id,<br>
    c.title,<br>
    ca.category_name<br>
from content c<br>
join category ca on c.category_id = ca.category_id;<br>
<img width="1630" height="305" alt="Screenshot 2025-12-01 111706" src="https://github.com/user-attachments/assets/c036b997-36ac-45d9-84d9-788dbd89d159" /><br>

The execution time after indexing increases a bit(maybe because of smaller dataset).<br>
So after creating index on category_id, the database was able to perform the JOIN using indexing rather than scanning the full content table row by row.<br>
This should reduce the number of row comparisons, so EXPLAIN ANALYZE should show faster execution. <br>


Q1. Why do we use Foreign Keys?<br>
We use foreign key majorly to join 2 tables, i.e., if we wanted to access category_name of a record<br>
with a particular rating, we would not be able to access it with the available information.<br>
So category_id(foreign key) helps to access ids of that particular rating and then matches it with <br>
category_id in another table to fetch the name.<br>


Q2. Why is ACID important for this database?<br>
A-Atomicity<br>
Any newly added record in a table should be added completely or not at all.<br>
It should not reflect a record partially as it would make no sense then.<br>
C-Consistency<br>
Important for the data to be stored accurately.<br>
If category_id is removed from the databse, it should be removed from both the tables.<br>
I-Isolation<br>
an update created by User A should not interfere with User B's database.<br>
D-Durability<br>
Even after a power breakdown, a saved database should reflect updations made before the cutoff.<br>


Q3. Why would we create an index on category_id?<br>
As category_id is a foreign key here, indexing on it helps fetch results for queries on multiple attributes faster.






