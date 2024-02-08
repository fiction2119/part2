const Course = (props) => {
  const courses = props.courses

  return (
    <div>
      {courses.map((course) => {
        // Calculate the total number of exercises for this course
        const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

        return (
          <div key={course.id}>
            <h1>{course.name}</h1>
            <div>
              {course.parts.map((part) => (
                <p key={part.id}>{part.name} {part.exercises}</p>
              ))}
              <h3>Total of exercises: {totalExercises}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Course