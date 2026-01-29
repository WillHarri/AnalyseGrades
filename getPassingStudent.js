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

const getStudentAverage = (students) => {
        const grades = students.map((student)=> student.grade)  
        console.log(grades)
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {
            sum += grades[i];
}

console.log(sum);

        const grade_average = sum / grades.length
        return Math.ceil(grade_average)
    }


console.log(getPassingStudents([
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 40 },
  { name: 'Charlie', grade: 70 }
]))

console.log(getStudentAverage([
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 40 },
  { name: 'Charlie', grade: 70 }
]))

module.exports = {
  getPassingStudents,
  getStudentAverage
}