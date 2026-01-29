//Testing file

const {
  getPassingStudents,
  getStudentAverage
} = require('./getPassingStudent')



describe('passingStudents', () => {
  it('returns students with a mark greater than 50', () => {
     expect(getPassingStudents([
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 40 },
  { name: 'Charlie', grade: 70 }
])).toEqual(['Alice', 'Charlie']);
  });
});

describe('StudentsAverage', () => {
  it('returns average student grade', () => {
     expect(getStudentAverage([
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 40 },
  { name: 'Charlie', grade: 70 }
])).toEqual(67);
  });
});