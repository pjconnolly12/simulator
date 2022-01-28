CREATE TABLE calendar( 
  entry_date DATE,
  restrictions VARCHAR(255),
  matches VARCHAR(255)[],
  day_of_month SMALLINT,
  day_of_week VARCHAR(255)
  );

CREATE TABLE teams(
  team_id SERIAL PRIMARY KEY,
  players VARCHAR(255),
  player1_email varchar(255),
  player2_email varchar(255)
)

CREATE TABLE standings(
  team_name VARCHAR(255),
  round1 SMALLINT,
  round2 SMALLINT,
  round3 SMALLINT,
  round4 SMALLINT,
  average SMALLINT,
  handicap SMALLINT,
  photo VARCHAR(255)
);

INSERT INTO standings (team_name, round1, round2, round3, round4, average, handicap, photo) VALUES ('Pat & Beavis', 46, 0, 0, 0, 46, 0.3, 'insertPhoto.jpg');
INSERT INTO standings (team_name, round1, round2, round3, round4, average, handicap, photo) VALUES ('Seth & Souhail', 0, 0, 0, 0, 0, 5.6, 'seth-souhail.jpg' );
INSERT INTO standings (team_name, round1, round2, round3, round4, average, handicap, photo) VALUES ('Sean & Alex', 0, 0, 0, 0, 0, 7.3, 'sean-alex.jpg');
INSERT INTO standings (team_name, round1, round2, round3, round4, average, handicap, photo) VALUES ('Ben & Joe', 39, 0, 0, 0, 39, 6.7, 'joe-ben.jpg');
INSERT INTO standings (team_name, round1, round2, round3, round4, average, handicap, photo) VALUES ('Drew & Lyndsie', 36, 0, 0, 0, 36, 8.2, 'drewLynds.jpg');
INSERT INTO standings (team_name, round1, round2, round3, round4, average, handicap, photo) VALUES ('Eric & Rourke', 45, 0, 0, 0, 45, 3.9, 'ericJay.jpg');
INSERT INTO standings (team_name, round1, round2, round3, round4, average, handicap, photo) VALUES ('JayD & Brandon', 41, 0, 0, 0, 41, 8.3, 'insertPhoto.jpg');
INSERT INTO standings (team_name, round1, round2, round3, round4, average, handicap, photo) VALUES ('JL3 & Ryan', 41, 0, 0, 0, 41, 11.1, 'ryanDad.jpg');
INSERT INTO standings (team_name, round1, round2, round3, round4, average, handicap, photo) VALUES ('Dustin & Geo', 40, 0, 0, 0, 40, 7.1, 'dustin-geo.jpg');

UPDATE standings SET photo = 'insertPhoto.jpg' WHERE team_name = 'JayD & Brandon';
UPDATE standings SET photo = 'seth-souhail.jpg' WHERE team_name = 'Seth & Souhail';
UPDATE standings SET photo = 'joe-ben.jpg' WHERE team_name = 'Ben & Joe';
UPDATE standings SET photo = 'drewLynds.jpg' WHERE team_name = 'Drew & Lyndsie';
UPDATE standings SET photo = 'ericJay.jpg' WHERE team_name = 'Eric & Rourke';
UPDATE standings SET photo = 'ryanDad.jpg' WHERE team_name = 'JL3 & Ryan';
UPDATE standings SET photo = 'dustin-geo.jpg' WHERE team_name = 'Dustin & Geo';


-- january
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-01', '', '{}', 1, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-02', '', '{}', 2, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-03', '', '{}', 3, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-04', '', '{}', 4, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-05', 'N/A @ 6PM', '{}', 5, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-06', '', '{}', 6, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-07', '', '{}', 7, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-08', '', '{}', 8, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-09', '', '{}', 9, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-10', '', '{}', 10, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-11', '', '{}', 11, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-12', 'N/A @ 6PM', '{}', 12, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-13', '', '{}', 13, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-14', '', '{}', 14, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-15', '', '{}', 15, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-16', '', '{}', 16, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-17', '', '{}', 17, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-18', '', '{}', 18, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-19', 'N/A @ 6PM', '{}', 19, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-20', '', '{}', 20, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-21', '', '{}', 21, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-22', '', '{}', 22, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-23', '', '{}', 23, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-24', '', '{}', 24, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-25', '', '{}', 25, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-26', 'N/A @ 6PM', '{}', 26, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-27', '', '{}', 27, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-28', '', '{}', 28, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-29', '', '{}', 29, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-30', '', '{}', 30, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-31', '', '{}', 31, 'Monday');

-- february
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-01', '', '{}', 1, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-02', 'N/A @ 6PM', '{}', 2, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-03', '', '{}', 3, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-04', '', '{}', 4, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-05', '', '{}', 5, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-06', '', '{}', 6, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-07', '', '{}', 7, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-08', '', '{}', 8, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-09', 'N/A @ 6PM', '{}', 9, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-10', '', '{}', 10, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-11', '', '{}', 11, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-12', '', '{}', 12, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-13', '', '{}', 13, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-14', '', '{}', 14, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-15', '', '{}', 15, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-16', 'N/A @ 2PM', '{}', 16, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-17', 'N/A', '{}', 17, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-18', 'N/A', '{}', 18, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-19', 'N/A', '{}', 19, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-20', 'N/A', '{}', 20, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-21', 'N/A', '{}', 21, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-22', '', '{}', 22, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-23', 'N/A @ 6PM', '{}', 23, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-24', '', '{}', 24, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-25', '', '{}', 25, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-26', '', '{}', 26, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-27', '', '{}', 27, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-28', '', '{}', 28, 'Monday');

-- march
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-01', '', '{}', 1, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-02', 'N/A @ 6PM', '{}', 2, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-03', '', '{}', 3, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-04', '', '{}', 4, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-05', '', '{}', 5, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-06', '', '{}', 6, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-07', '', '{}', 7, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-08', '', '{}', 8, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-09', 'N/A @ 6PM', '{}', 9, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-10', '', '{}', 10, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-11', '', '{}', 11, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-12', '', '{}', 12, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-13', '', '{}', 13, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-14', '', '{}', 14, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-15', '', '{}', 15, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-16', 'N/A @ 6PM', '{}', 16, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-17', '', '{}', 17, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-18', '', '{}', 18, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-19', '', '{}', 19, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-20', '', '{}', 20, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-21', '', '{}', 21, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-22', '', '{}', 22, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-23', 'N/A @ 6PM', '{}', 23, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-24', '', '{}', 24, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-25', '', '{}', 25, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-26', '', '{}', 26, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-27', '', '{}', 27, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-28', '', '{}', 28,'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-29', '', '{}', 29, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-30', 'N/A @ 6PM', '{}', 30, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-31', '', '{}', 31, 'Thursday');


UPDATE calendar SET matches = array_append(matches, 'Geo & Dustin @ 5pm') WHERE entry_date = '2022-01-04'

INSERT INTO teams (players, player1_email, player2_email) VALUES('Pat & Beav', 'pjconnolly12@gmail.com', 'jpcawley5@gmail.com');
INSERT INTO teams (players, player1_email, player2_email) VALUES('Geo & Dustin', 'george.delano9@gmail.com', 'dramey808@gmail.com');
INSERT INTO teams (players, player1_email, player2_email) VALUES('Ben & Joe', 'bscheadesign@gmail.com', 'janichols86@gmail.com');
INSERT INTO teams (players, player1_email, player2_email) VALUES('Lyndsie & Drew', 'lrabenius@gmail.com', 'ajmcspiritt@gmail.com');
INSERT INTO teams (players, player1_email, player2_email) VALUES('Sean & Alex', 'sean.leblanc.1987@gmail.com', 'ajjohnston7@gmail.com');
INSERT INTO teams (players, player1_email, player2_email) VALUES('Seth & Souhail', 'desjardinsseth@yahoo.com', 'ssemmar@yahoo.com');
INSERT INTO teams (players, player1_email, player2_email) VALUES('JL3 & Ryan', 'j_connolly@comcast.net', 'rmconnolly27@gmail.com');
INSERT INTO teams (players, player1_email, player2_email) VALUES('Eric & JayR', 'owens.eric1985@gmail.com', 'jasonwrourke@gmail.com');
INSERT INTO teams (players, player1_email, player2_email) VALUES('Brendon & JayD', 'brendon@gbent.net', 'jayd1055@yahoo.com');

UPDATE calendar SET matches = '{}' WHERE entry_date = '2022-01-20'

UPDATE calendar SET restrictions = '' WHERE entry_date = '2022-01-12';
UPDATE calendar SET restrictions = '' WHERE entry_date = '2022-01-19';
UPDATE calendar SET restrictions = '' WHERE entry_date = '2022-01-26';
UPDATE calendar SET restrictions = '' WHERE entry_date = '2022-02-02';
UPDATE calendar SET restrictions = '' WHERE entry_date = '2022-02-09';

UPDATE teams SET players = 'Brendon & JayD' WHERE player2_email = 'jayd1055@yahoo.com';
UPDATE teams SET player1_email = 'Brendon@gbent.net' WHERE player2_email = 'jayd1055@yahoo.com';

-- Update standings - update round, score, and team name
UPDATE standings SET round1 = 43 WHERE team_name = '';
UPDATE standings SET photo = 'insertPhoto.jpg' WHERE team_name = 'Pat & Beavis';