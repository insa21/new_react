const State = ({ getNavbarValue }) => {
  return (
    <div>
      <h1>naruto</h1>
      {/* <h1>sakura</h1> */}
      <h1>{!getNavbarValue ? "Sakura" : getNavbarValue}</h1>
    </div>
  );
};

export default State;
