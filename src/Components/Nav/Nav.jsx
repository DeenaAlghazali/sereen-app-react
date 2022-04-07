import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about-us">ABOUT US</Link>
      <Link to="/shop">SHOP</Link>
      <Link to="/single-product">SINGLE PRODUCT</Link>
      <Link to="/cart">CART</Link>
      <Link to="/whish-list">WHISH LIST</Link>
      <Link to="/blog">BLOG</Link>
    </>
  );
};

export default Nav;
