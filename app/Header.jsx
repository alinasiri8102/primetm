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
            <a href="#">خدمات</a>
            <a href="#">نمونه کار</a>
            <a href="#">تماس با ما</a>
            <a href="#">درباره ما</a>
          </nav>
        </div>
        <div className="left">
          <a href="#" className="btn btn-sc">
            درخواست مشاوره
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
