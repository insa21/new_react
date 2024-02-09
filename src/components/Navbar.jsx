function Navbar(props) {
  return (
    <div>
      <div>Nama-Nama Buah</div>
      <ol>
        <li>jeruk</li>
        <li>apel</li>
        <li>salak</li>
        <li>mangga</li>
        <li>durian</li>
        <li>{props.test}</li>
      </ol>
    </div>
  );
}

export default Navbar;
