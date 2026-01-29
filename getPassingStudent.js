//getPassingStudent.js file 

const getPassingStudents = (students) => {
    const check_grade = (student) => {
        if( student.grade >= 50) {
            return true; 
        }
        else return false;
    } 

    const passing_students = students.filter(check_grade);

   return passing_students.map((student)=> student.name)

}


console.log(getPassingStudents([
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 40 },
  { name: 'Charlie', grade: 70 }
]))

module.exports = getPassingStudents