const Header = () => {
  return (
    <header className="fix-width">
      <div className="box flex-h">
        <div className="right flex-h">
          <div className="logo">
            <a href="/">
              <h1>پرایم تیم</h1>
            </a>
          </div>
          <nav className="nav flex-h">
            <a href="#services-web">طراحی سایت</a>
            <a href="#services-all">خدمات</a>
            <a href="#portfolio">نمونه کار</a>
          </nav>
        </div>
        <div className="left">
          <a href="#contact" className="btn btn-sc">
            تماس با ما
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
