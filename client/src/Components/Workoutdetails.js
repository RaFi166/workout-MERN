const Workoutdetails = (props) => {
  const { title, load, reps, createdAt } = props.workout;
  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {reps}
      </p>
      <p>{createdAt}</p>
    </div>
  );
};

export default Workoutdetails;
