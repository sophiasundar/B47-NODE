const student = [
    {
        "id": 1,
        "studentName": "oliviya",
        "batchNumber": "B48",
        "mentor_id": 1
    },
    {
        "id": 2,
        "studentName": "zyn",
        "batchNumber": "B47",
        "mentor_id": 2
    },
    {
        "id": 3,
        "studentName": "indira",
        "batchNumber": "B46",
        "mentor_id": 3
        
    },
    {
        "id": 4,
        "studentName": "micheal",
        "batchNumber": "B48",
        "mentor_id": 1
    },
    {
        "id": 5,
        "studentName": "newton",
        "batchNumber": "B47",
        "mentor_id": 2
    },
    {
        "id": 6,
        "studentName": "ella",
        "batchNumber": "B46",
        "mentor_id": 3
    }

]


const mentor = [
    {
        "id": 1,
        "mentorName": "kamala",
        "student_id": [1,4]
    },
    {
        "id": 2,
        "mentorName": "sundar",
        "student_id": [2,5]
    },
    {
        "id": 3,
        "mentorName": "lilly",
        "student_id": [3,6]
    }
]


const assigned = [
    {
        "id": 1,
        "mentor_id": 1,
        "student_id": [1,4]
    },
    {
        "id": 2,
        "mentor_id": 2,
        "student_id": [2,5]
    },
    {
        "id": 3,
        "mentor_id": 3,
        "student_id": [3,6]
    }
]
