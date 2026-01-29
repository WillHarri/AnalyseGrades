//Testing file

const {
  getPassingStudents,
  getStudentAverage,
  getHighestAchiever,
  getLowestAchiever,
  AnalyseGrades
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

describe('HighestAchiever',() =>{
  it('returns the student with the highest grade', () => {
    expect(getHighestAchiever([
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 40 },
  { name: 'Charlie', grade: 70 }
])).toEqual({ name: 'Alice', grade: 90 });
  });
});

describe('LowestAchiever',() =>{
  it('returns the student with the lowest grade', () => {
    expect(getLowestAchiever([
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 40 },
  { name: 'Charlie', grade: 70 }
])).toEqual({ name: 'Bob', grade: 40} );
  });
});

describe('AnalyseGrades',() =>{
  it('returns average, returns the student with the highest grade,the student with the lowest grade', () => {
    expect(AnalyseGrades([
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 40 },
  { name: 'Charlie', grade: 70 }
])).toEqual({
  average: 67,
  highest: { name: 'Alice', grade: 90 },
  lowest: { name: 'Bob', grade: 40 },
  passing: ['Alice', 'Charlie']
}
);
  });
});