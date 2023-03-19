const Header = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

Header.defaultProps = {
  title: "Products",
};

export default Header;
