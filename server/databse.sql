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

-- january
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-01', '', '{}', 1, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-02', '', '{}', 2, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-03', '', '{}', 3, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-04', '', '{}', 4, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-05', '', '{}', 5, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-06', 'N/A @ 6PM', '{}', 6, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-07', '', '{}', 7, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-08', '', '{}', 8, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-09', '', '{}', 9, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-10', '', '{}', 10, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-11', '', '{}', 11, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-12', '', '{}', 12, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-13', 'N/A @ 6PM', '{}', 13, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-14', 'N/A', '{}', 14, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-15', 'N/A', '{}', 15, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-16', 'N/A', '{}', 16, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-17', 'N/A', '{}', 17, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-18', 'N/A', '{}', 18, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-19', '', '{}', 19, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-20', 'N/A @ 6PM', '{}', 20, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-21', '', '{}', 21, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-22', '', '{}', 22, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-23', '', '{}', 23, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-24', '', '{}', 24, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-25', '', '{}', 25, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-26', '', '{}', 26, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-27', 'N/A @ 6PM', '{}', 27, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-28', '', '{}', 28, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-29', '', '{}', 29, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-30', '', '{}', 30, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-01-31', '', '{}', 31, 'Sunday');

-- february
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-01', '', '{}', 1, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-02', '', '{}', 2, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-03', 'N/A @ 6PM', '{}', 3, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-04', '', '{}', 4, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-05', '', '{}', 5, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-06', '', '{}', 6, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-07', '', '{}', 7, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-08', '', '{}', 8, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-09', '', '{}', 9, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-10', 'N/A @ 6PM', '{}', 10, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-11', '', '{}', 11, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-12', '', '{}', 12, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-13', '', '{}', 13, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-14', '', '{}', 14, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-15', '', '{}', 15, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-16', '', '{}', 16, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-17', 'N/A @ 6PM', '{}', 17, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-18', '', '{}', 18, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-19', '', '{}', 19, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-20', '', '{}', 20, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-21', '', '{}', 21, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-22', '', '{}', 22, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-23', '', '{}', 23, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-24', 'N/A @ 6PM', '{}', 24, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-25', '', '{}', 25, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-26', '', '{}', 26, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-27', '', '{}', 27, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-02-28', '', '{}', 28, 'Sunday');

-- march
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-01', '', '{}', 1, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-02', '', '{}', 2, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-03', 'N/A @ 6PM', '{}', 3, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-04', '', '{}', 4, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-05', '', '{}', 5, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-06', '', '{}', 6, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-07', '', '{}', 7, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-08', '', '{}', 8, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-09', '', '{}', 9, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-10', 'N/A @ 6PM', '{}', 10, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-11', '', '{}', 11, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-12', '', '{}', 12, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-13', '', '{}', 13, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-14', '', '{}', 14, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-15', '', '{}', 15, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-16', '', '{}', 16, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-17', 'N/A @ 6PM', '{}', 17, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-18', '', '{}', 18, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-19', '', '{}', 19, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-20', '', '{}', 20, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-21', '', '{}', 21, 'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-22', '', '{}', 22, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-23', '', '{}', 23, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-24', 'N/A @ 6PM', '{}', 24, 'Wednesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-25', '', '{}', 25, 'Thursday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-26', '', '{}', 26, 'Friday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-27', '', '{}', 27, 'Saturday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-28', '', '{}', 28,'Sunday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-29', '', '{}', 29, 'Monday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-30', '', '{}', 30, 'Tuesday');
INSERT INTO calendar (entry_date, restrictions, matches, day_of_month, day_of_week) VALUES ('2022-03-31', 'N/A @ 6PM', '{}', 31, 'Wednesday');


UPDATE calendar SET matches = array_append(matches, 'Geo & Dustin @ 5pm') WHERE entry_date = '2022-01-04'

INSERT INTO teams (players, player1_email, player2_email) VALUES('Pat & Beav', 'pjconnolly12@gmail.com', 'jpcawley5@gmail.com');
INSERT INTO teams (players, player1_email, player2_email) VALUES('Geo & Dustin', 'geod9@gmail.com', 'dramey10@gmail.com');