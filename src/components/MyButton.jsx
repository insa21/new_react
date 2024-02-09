const MyButton = (props) => {
  return (
    <div>
      <button onClick={() => props.clicked()}>Klik Gw</button>
    </div>
  );
};

export default MyButton;
