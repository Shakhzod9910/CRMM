let course = [
    {"course_name":"Pythot",
    "course_cost":"300",
    "teacher_name":[null]},
    {"course_name":"C++","course_cost":"400","teacher_name":[null]},
    {"course_name":"Java","course_cost":"250","teacher_name":["Halima Ashurova"]},
    {"course_name":"C#","course_cost":"350","teacher_name":[null]},
    {"course_name":"JavaScript","course_cost":"500","teacher_name":["Shomurod Berdiyev","Halima Ashurova","Jasurbek Anvarov"]},
    {"course_name":"Php","course_cost":"150","teacher_name":[null]}
]

let courses =[
    {
        course_name: 'Python',
        course_cost: '1300',
        teacher_name: [null]
    },
    {
        course_name: 'JavaScript',
        course_cost: '1800',
        teacher_name: ['Halima Ashurova']
    },
    {
        course_name: 'C',
        course_cost: '200',
        teacher_name: ['akmal','begmat']
    },
    {
        course_name: 'C++',
        course_cost: '300',
        teacher_name: [null]
    },
    {
        course_name: 'C#',
        course_cost: '100',
        teacher_name: ['shavkat']
    },
    {
        course_name: 'Php',
        course_cost: '200',
        teacher_name: ["Shomurod Berdiyev","Halima Ashurova","Jasurbek Anvarov"]
    },
    {
        course_name: 'React',
        course_cost: '1000',
        teacher_name: ['eshmat','xolmat']
    },
    {
        course_name: 'New',
        course_cost: '400',
        teacher_name: ['begali','sherali']
    },
    {
        course_name: 'Java',
        course_cost: '1300',
        teacher_name: [null]
    }
]


let teachers =[
    {
      teacher_name: 'Alisher Sherov',
      teacher_age: '22',
      course_name: [ null ],
      group_name: [ null ]
    },
    {
      teacher_name: 'Halima Ashurova',
      teacher_age: '27',
      course_name: [ 'JavaScript', 'Php' ],       
      group_name: [ 'Express 9.1', 'Node.js 1.0' ]
    },
    {
      teacher_name: 'Sevara Mamajonova',
      teacher_age: '21',
      course_name: [ null ],
      group_name: [ null ]
    },
    {
      teacher_name: 'Jasurbek Anvarov',
      teacher_age: '24',
      course_name: [ 'JavaScript' ],
      group_name: [ null ]
    },
    {
      teacher_name: 'Shomurod Berdiyev',
      teacher_age: '25',
      course_name: [ 'JavaScript' ],
      group_name: [ 'Java 1.1' ]
    }
  ]


  let groups = [
    {
      group_name: 'Express 9.1',
      teacher_name: 'Halima Ashurova',
      student_name: [ 'Shoira Asadullaeva', 'Eshmurod Hojiev' ]
    },
    {
      group_name: 'Java 1.1',
      teacher_name: 'Shomurod Berdiyev',
      student_name: [ 'Maruf Alisherov', 'Gulimoh Alisherova' ]
    },
    {
      group_name: 'Node.js 1.0',
      teacher_name: 'Halima Ashurova',
      student_name: [
        'Alisher Usmonov',
        'Asal Olimjonova',
        'Sherali Umarov',
        'Mansur Normatov'
      ]
    }
  ]

  let students = [
    {
      student_name: 'Alisher Usmonov',
      group_name: 'Node.js 1.0',
      teacher_name: 'Halima Ashurova'
    },
    {
      student_name: 'Asal Olimjonova',
      group_name: 'Node.js 1.0',
      teacher_name: 'Halima Ashurova'
    },
    {
      student_name: 'Eshmurod Hojiev',
      group_name: 'Express 9.1',
      teacher_name: 'Halima Ashurova'
    },
    {
      student_name: 'Gulimoh Alisherova',
      group_name: 'Java 1.1',
      teacher_name: 'Shomurod Berdiyev'
    },
    {
      student_name: 'Mansur Normatov',
      group_name: 'Node.js 1.0',
      teacher_name: 'Halima Ashurova'
    },
    {
      student_name: 'Maruf Alisherov',
      group_name: 'Java 1.1',
      teacher_name: 'Shomurod Berdiyev'
    },
    {
      student_name: 'Sherali Umarov',
      group_name: 'Node.js 1.0',
      teacher_name: 'Halima Ashurova'
    },
    {
      student_name: 'Shoira Asadullaeva',
      group_name: 'Express 9.1',
      teacher_name: 'Halima Ashurova'
    }
  ]