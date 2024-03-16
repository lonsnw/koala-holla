CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (50) NOT NULL,
	"age" INTEGER NOT NULL,
	"color" VARCHAR (50) NOT NULL,
	"transfer" BOOLEAN DEFAULT FALSE NOT NULL,
	"notes" VARCHAR (250) NOT NULL
);

INSERT INTO "koalas"
	("name", "age", "color", "transfer", "notes")
VALUES
	('Scotty', 4, 'Red', 'True', 'Born in Guatemala'), 
	('Jean', 5, 'Green', 'True', 'Allergic to lots of lava'), 
	('Ororo', 7, 'Yellow', 'False', 'Loves listening to Paula (Abdul)'),
	('K''Leaf', 15, 'Purple', 'False', 'Never refuses a treat'), 
	('Charlie', 9, 'Orange', 'True', 'Favorite band is Nirvana'), 
	('Betsy', 4, 'Blue', 'True', 'Has a pet iguana'),
	('Paula', 7, 'Brown', 'True', 'Holds a lifelong grudge against Paula (Abdul)'),
	('Reginald', 14, 'Pink', 'False', 'Prefers Triscuits to crackers');

SELECT * FROM "koalas";