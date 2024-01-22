     // Design database for Zen class programme
            // users
            // codekata
            // attendance
            // topics
            // tasks
            // company_drives
            // mentors
    
    //  USERS

db.users.insertMany([
    {
        "userId": "1",
        "name": "indira",
        "email": "indira@gmail.com",
        "mentorId": "1"
    },
    {
        "userId": "2",
        "name": "micheal",
        "email": "micheal@gmail.com",
        "mentorId": "2"
    },
    {
        "userId": "3",
        "name": "rachel",
        "email": "rachel@gmail.com",
        "mentorId": "3"
    },
    {
        "userId": "4",
        "name": "mohamed",
        "email": "mohamed@gmail.com",
        "mentorId": "4"
    }
])

    // codekata

    db.codekata.insertMany([
        {
            "userId": "1",
            "numberOfProblemsSolved": "100"
        },
        {
            "userId": "2",
            "numberOfProblemsSolved": "54"
        },
        {
            "userId": "3",
            "numberOfProblemsSolved": "86"
        },
        {
            "userId": "4",
            "numberOfProblemsSolved": "121"
        }
    ])


    // attendance

    db.attendance.insertMany([
        {
            "userId": "1",
            "topicId": "1",
            "present": true
        },
        {
            "userId": "2",
            "topicId": "2",
            "present": false
        },
        {
            "userId": "3",
            "topicId": "3",
            "present": false
        },
        {
            "userId": "4",
            "topicId": "4",
            "present": true
        }
    ])
    
        // topics
    
        db.topics.insertMany([
            {
                "topicId": "1",
                "topic": "HTML",
                "topic_date": new Date("2020-10-16")
            },
            {
                "topicId": "2",
                "topic": "CSS",
                "topic_date": new Date("2020-10-30")
            },
            {
                "topicId": "3",
                "topic": "JS",
                "topic_date": new Date("2020-10-26")
            },
            {
                "topicId": "4",
                "topic": "ReactJS",
                "topic_date": new Date("2020-10-23")
            }
        ])

        // tasks

        db.tasks.insertMany([
            {
                "taskId": "1",
                "task":"html",
                "topicId": "1",
                "userId": "1",
                "lastDate": new Date("2020-10-15"),
                "submitted": true
            },
            {
                "taskId": "2",
                "task":"css",
                "topicId": "2",
                "userId": "2",
                "lastDate": new Date("2020-10-27"),
                "submitted": false
            },
            {
                "taskId": "3",
                "task":"reactjs",
                "topicId": "3",
                "userId": "3",
                "lastDate": new Date("2020-10-21"),
                "submitted": true
            },
            {
                "taskId": "4",
                "task":"nodejs",
                "topicId": "4",
                "userId": "4",
                "lastDate": new Date("2020-10-17"),
                "submitted": true
            }
        ])

        // company_drives

        db.company_drives.insertMany([
            {
                "userId": "1",
                "driveDate": new Date("2020-10-18"),
                "companyName": "Ratna Global Technologies"
            },
            {
                "userId": "2",
                "driveDate": new Date("2020-10-24"),
                "companyName": "uExcelerate"
               
            },
            {
                "userId": "3",
                "driveDate": new Date("2020-10-28"),
                "companyName": "Spledflo"
            },
            {
                "userId": "4",
                "driveDate": new Date("2020-10-30"),
                "companyName": "Buzzli"
            }
        ])

        // mentors

        db.mentors.insertMany([
            {
                "mentorId": "1",
                "mentorName": "sylvia",
                "mentorEmail": "sylvia@gmail.com",
                "menteeCount": 12,
            },
            {
                "mentorId": "2",
                "mentorName": "olivia",
                "mentorEmail": "olivia@gmail.com",
                "menteeCount": 20,
            },
            {
                "userId": "3",
                "name": "livia",
                "email": "livia@gmail.com",
                "mentorId": 25,
            },
            {
                "userId": "4",
                "name": "naevia",
                "email": "naevia@gmail.com", 
                "mentorId": 30,
            }
        ])
