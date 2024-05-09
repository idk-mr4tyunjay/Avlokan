show databases;
use event_management;
show tables;

INSERT INTO CLUB_DATA (club_name, created_by_user, created_data, club_type, current_president, members, events, club_image) VALUES
('Amogh Photography', 2100, CURDATE(), 'Photography', 2105, 2, 2, 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Natraj Dancing', 2101, CURDATE(), 'Dancing', 2106, 2, 2, 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Kalakriti Arts', 2102, CURDATE(), 'Arts', 2107, 2, 2, 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Swar Sangam Singing Club', 2103, CURDATE(), 'Singing', 2108, 2, 2, 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Basketball Blazers', 2104, CURDATE(), 'Basketball', 2109, 2, 2, 'https://images.unsplash.com/photo-1616003618448-2914895212ba?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
