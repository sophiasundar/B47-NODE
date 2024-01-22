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
        "user_id": 1,
        "name": "indira",
        "email": "indira@gmail.com",
        "mentor_id": 1
    },
    {
        "user_id": 2,
        "name": "micheal",
        "email": "micheal@gmail.com",
        "mentor_id": 2
    },
    {
        "user_id": 3,
        "name": "rachel",
        "email": "rachel@gmail.com",
        "mentor_id": 3
    },
    {
        "user_id": 4,
        "name": "mohamed",
        "email": "mohamed@gmail.com",
        "mentor_id": 4
    }
])

    // codekata

    db.codekata.insertMany([
        {
            "user_id": 1,
            "numberOfProblemsSolved": "100"
        },
        {
            "user_id": 2,
            "numberOfProblemsSolved": "54"
        },
        {
            "user_id": 3,
            "numberOfProblemsSolved": "86"
        },
        {
            "user_id": 4,
            "numberOfProblemsSolved": "121"
        }
    ])


    // attendance

    db.attendance.insertMany([
        {
            "user_id": 1,
            "topic_id": 1,
            "present": true
        },
        {
            "user_id": 2,
            "topic_id": 2,
            "present": false
        },
        {
            "user_id": 3,
            "topic_id": 3,
            "present": false
        },
        {
            "user_id": 4,
            "topic_id": 4,
            "present": true
        }
    ])
    
        // topics
    
        db.topics.insertMany([
            {
                "topic_id": 1,
                "topic": "HTML",
                "topic_date": new Date("2020-10-16")
            },
            {
                "topic_id": 2,
                "topic": "CSS",
                "topic_date": new Date("2020-10-30")
            },
            {
                "topic_id": 3,
                "topic": "JS",
                "topic_date": new Date("2020-10-26")
            },
            {
                "topic_id": 4,
                "topic": "ReactJS",
                "topic_date": new Date("2020-10-23")
            }
        ])

        // tasks

        db.tasks.insertMany([
            {
                "task_id": 1,
                "task":"html",
                "topic_id": 1,
                "user_id": 1,
                "last_Date": new Date("2020-10-15"),
                "submitted": true
            },
            {
                "task_id": 2,
                "task":"css",
                "topic_id": 2,
                "user_id": 2,
                "last_Date": new Date("2020-10-27"),
                "submitted": false
            },
            {
                "task_id": 3,
                "task":"reactjs",
                "topic_id": 3,
                "user_id": 3,
                "last_Date": new Date("2020-10-21"),
                "submitted": true
            },
            {
                "task_id": 4,
                "task":"nodejs",
                "topic_id": 4,
                "user_id": 4,
                "last_Date": new Date("2020-10-17"),
                "submitted": true
            }
        ])

        // company_drives

        db.company_drives.insertMany([
            {
                "user_id": 1,
                "driveDate": new Date("2020-10-18"),
                "companyName": "Ratna Global Technologies"
            },
            {
                "user_id": 2,
                "driveDate": new Date("2020-10-24"),
                "companyName": "uExcelerate"
               
            },
            {
                "user_id": 3,
                "driveDate": new Date("2020-10-28"),
                "companyName": "Spledflo"
            },
            {
                "user_id": 4,
                "driveDate": new Date("2020-10-30"),
                "companyName": "Buzzli"
            }
        ])

        // mentors

        db.mentors.insertMany([
            {
                "mentor_id": 1,
                "menteeName": "sylvia",
                "menteeEmail": "sylvia@gmail.com",
                "menteeCount": 12,
            },
            {
                "mentor_id": 2,
                "menteeName": "olivia",
                "menteeEmail": "olivia@gmail.com",
                "menteeCount": 20,
            },
            {
                "mentor_id": 3,
                "menteeName": "livia",
                "menteeEmail": "livia@gmail.com",
                "menteeCount": 25,
            },
            {
                "mentor_id": 4,
                "menteeName": "naevia",
                "menteeEmail": "naevia@gmail.com", 
                "menteeCount": 30,
            }
        ])
