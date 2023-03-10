-- this is from my database regarding the table of tasks I meant to complete

CREATE TABLE "TaskList" (
	"id" serial primary key,
	"task" varchar(30) not null,
	"complete task" varchar(1),
	"time completed" integer,
	"notes" varchar(250)
	);
	
	INSERT INTO "TaskList"("task", "complete task", "time completed", "notes")
	VALUES('Sort Desk', 'Y', '1120', 'was not too messy.'), ('Do laundry', 'N',  '1', 'Meant to get it done, but otherthings got in the way'),('Take dog for walk', 'Y', '0910', 'happy doggo')
	
