import { useNavigate } from "react-router-dom";
const First = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome to our page!</h1>
      <button onClick={() => navigate("/about")}>Pindah Halaman</button>
    </>
  );
};

export default First;
