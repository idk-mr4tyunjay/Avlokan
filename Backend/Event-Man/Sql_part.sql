INSERT INTO COLLEGE_USER (enroll_id, f_name, l_name, email, phone, password, sign_up_date) VALUES
(2100, 'Aarav', 'Patel', 'aarav2100@example.com', '9876543210', 'Patel2100', CURDATE()),
(2101, 'Aaradhya', 'Sharma', 'aaradhya2101@example.com', '9876543211', 'Sharma2101', CURDATE()),
(2102, 'Advait', 'Gupta', 'advait2102@example.com', '9876543212', 'Gupta2102', CURDATE()),
(2103, 'Ahaan', 'Singh', 'ahaan2103@example.com', '9876543213', 'Singh2103', CURDATE()),
(2104, 'Aishani', 'Kumar', 'aishani2104@example.com', '9876543214', 'Kumar2104', CURDATE()),
(2105, 'Aarav', 'Yadav', 'aarav2105@example.com', '9876543215', 'Yadav2105', CURDATE()),
(2106, 'Aaradhya', 'Verma', 'aaradhya2106@example.com', '9876543216', 'Verma2106', CURDATE()),
(2107, 'Advik', 'Rao', 'advik2107@example.com', '9876543217', 'Rao2107', CURDATE()),
(2108, 'Aarav', 'Sharma', 'aarav2108@example.com', '9876543218', 'Sharma2108', CURDATE()),
(2109, 'Aanya', 'Joshi', 'aanya2109@example.com', '9876543219', 'Joshi2109', CURDATE());

INSERT INTO CLUB_DATA (club_id, club_name, created_by, created_date, club_type, current_president, members, events, club_photos) VALUES
(1, 'Amogh Photography', 2100, CURDATE(), 'Photography', 2105, NULL, NULL, NULL),
(2, 'Natraj Dancing', 2101, CURDATE(), 'Dancing', 2106, NULL, NULL, NULL),
(3, 'Kalakriti Arts', 2102, CURDATE(), 'Arts', 2107, NULL, NULL, NULL),
(4, 'Swar Sangam Singing Club', 2103, CURDATE(), 'Singing', 2108, NULL, NULL, NULL),
(5, 'Basketball Blazers', 2104, CURDATE(), 'Basketball', 2109, NULL, NULL, NULL);



INSERT INTO EVENT_DETAILS (event_name, date_created, associated_dates, description, host_club, event_type, contacts) VALUES
('Photography Exhibition', CURDATE(), '2024-05-12 to 2024-05-15', 'Join us for an exquisite display of captivating photographs showcasing the beauty of nature, people, and culture. From stunning landscapes to intimate portraits, this exhibition celebrates the art of photography in all its forms.', 1, 'Exhibition', 'aarav2105@example.com,9876543215'),
('Photography Workshop', CURDATE(), '2024-05-12 to 2024-05-15', 'Calling all photography enthusiasts! Learn the basics of composition, lighting, and post-processing techniques from industry experts. Whether you're a beginner or an experienced photographer, this workshop offers valuable insights to enhance your skills.', 1, 'Workshop', 'aarav2105@example.com,9876543215'),
('Dance Showcase', CURDATE(), '2024-05-12 to 2024-05-15', 'Experience the rhythm and grace of dance at our exclusive showcase event! From classical to contemporary, our talented dancers will mesmerize you with their performances. Join us for an unforgettable evening filled with passion and creativity.', 2, 'Showcase', 'aaradhya2106@example.com,9876543216'),
('Dance Workshop', CURDATE(), '2024-05-12 to 2024-05-15', 'Get ready to groove! Our dance workshop offers a fun and energetic environment to learn new dance styles and techniques. Whether you're a beginner or an experienced dancer, come unleash your creativity and express yourself through dance!', 2, 'Workshop', 'aaradhya2106@example.com,9876543216'),
('Art Exhibition', CURDATE(), '2024-05-12 to 2024-05-15', 'Explore the world of art at our exclusive exhibition! From paintings to sculptures, witness the diverse talents of our artists as they showcase their latest creations. Join us for a celebration of creativity and inspiration.', 3, 'Exhibition', 'advik2107@example.com,9876543217'),
('Art Workshop', CURDATE(), '2024-05-12 to 2024-05-15', 'Unleash your inner artist at our hands-on workshop! Learn various art techniques and create your own masterpiece under the guidance of experienced instructors. Whether you're a novice or a seasoned artist, this workshop is perfect for all skill levels.', 3, 'Workshop', 'advik2107@example.com,9876543217'),
('Singing Competition', CURDATE(), '2024-05-12 to 2024-05-15', 'Are you the next singing sensation? Showcase your talent at our exciting competition! Sing your heart out and compete against other talented vocalists for the chance to win exciting prizes. Join us for an evening filled with music and entertainment.', 4, 'Competition', 'aanya2109@example.com,9876543219'),
('Basketball Tournament', CURDATE(), '2024-05-12 to 2024-05-15', 'Get ready to shoot some hoops at our thrilling basketball tournament! Teams from across the campus will compete in intense matches to claim victory. Whether you're a player or a spectator, come support your favorite teams and enjoy the excitement of the game.', 5, 'Tournament', 'aarav2108@example.com,9876543218');
