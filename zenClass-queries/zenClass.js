// database-design-zen-class.txt

// day 38 mongodb

// data

// mongo open terminal

// show dbs

//  to create dbs => // users // codekata // attendance // topics // tasks // company_drives  // mentors

// show dbs => list all dbs 
// use users => to create & switched to db users
// db => current db 



// 1) Find all the topics and tasks which are thought in the month of October

//   answer: for this aggregation must be used here different collections is used
//  so i used lookup aggregation to match it
    // lookup aggregate => from: The collection to use for lookup in the same database
    // localField: The field in the primary collection that can be used as a unique identifier in the from collection.
    // foreignField: The field in the from collection that can be used as a unique identifier in the primary collection.
    // as: The name of the new field that will contain the matching documents from the from collection.

db.topics.aggregate([
    {
        $lookup: {
               from: "tasks",
               localField: "topic_id",
               foreignField: "topic_id",
               as: "taskDetails"
             }
    },
    {
        $match:{$and:[{$or:[{topic_date:{$gt:new Date("2020-10-01")}},{topic_date:{$lt:new Date("2020-10-30")}}]},
        
          {$or:[{"taskDetails.lastDate":{$gt:new Date("2020-10-01")}},{"taskDetails.lastDate":{$lt:new Date("2020-10-30")}}]}
        ]}
    }
 ]).pretty();


// 2) Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

            db.company_drives.find({
                $and: [
                { driveDate: { $lte: new Date("2020-10-31") } },
                { driveDate: { $gte: new Date("2020-10-15") } },
                ],
            }).pretty();

// 3) Find all the company drives and students who are appeared for the placement.
    
    //answer:   $project aggregation is used for find() method, 
    //  have to give 1 for field to included and _id must be included  


            db.company_drives.aggregate([
                {
                    $lookup: {
                        from:"users",
                        localField:"user_id",
                        foreignField:"user_id",
                        as :"user_Details"
                        }
                },
                {
                    $project:{
                        _id:0,
                        "user_Details.name":1,
                        company_name:1,
                        driveDate:1,
                        "user_Details.email":1,
                        "user_Details.user_id":1
                    }
                }
            ]).pretty();


// 4) Find the number of problems solved by the user in codekata

    // answer:  $project aggregation is used for find() method, 
    //  have to give 1 for field to included and _id must be included  

         

                db.codekata.aggregate([
                    {
                    $lookup: {
                        from: "users",
                        localField: "user_id",
                        foreignField: "user_id",
                        as: "user_Details",
                    },
                    },
                    {
                    $project: {
                        _id: 0,
                        user_id: 1,
                        "user_Details.name": 1,
                        "user_Details.email": 1,
                        numberOfProblemsSolved: 1,
                    },
                    },
                ]).pretty();




// 5) Find all the mentors with who has the mentee's count more than 15

          db.mentors.find({menteeCount:{ $gt:15 }}).pretty();



// 6) Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
    //  answer: only number of users is asked so no need to get all the data of user just
    //  simply match submitted and attendance
            db.tasks.aggregate([
                {
                $lookup: {
                    from: "attendance",
                    localField: "user_id",
                    foreignField: "user_id",
                    as: "attendance",
                },
                },
                {
                $match: {
                    $and: [{ submitted: false }, { "attendance.present": false }],
                },
                },
            ]).pretty();