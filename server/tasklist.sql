-- this is from my database regarding the table of tasks I meant to complete
CREATE TABLE "TaskList" (
	"id" serial primary key,
	"task" varchar(30) not null,
	"complete" boolean,
	"notes" varchar(250)
	);
	
	INSERT INTO "TaskList"("task", "complete", "notes")
	VALUES('Sort Desk', true, 'was not too messy'), ('Do laundry', false, 'Meant to get it done, but otherthings got in the way'),('Take dog for walk', true, 'happy doggo')
