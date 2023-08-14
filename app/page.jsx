export default function Home() {
  return (
    <main className="index">
      <section className="hero">
        <div className="fix-width flex-v">
          <img src="/img/hero.svg" alt="پرایم تیم" />
        </div>
      </section>

      <section className="services-web">
        <div className="content fix-width flex-h">
          <div className="right">
            <div className="head">
              <h1>خدمات طراحی سایت</h1>
              <div className="line">
                <div className="inner"></div>
              </div>
            </div>
            <div className="description">
              <strong>به بهترین شکل میزبان مخاطبان خود باشید :)</strong>
              <p>
                طراحی سایت یکی از اصولی‌ترین و حیاتی‌ترین عوامل در موفقیت هر کسب و کار آنلاین است. طراحی سایت حرفه‌ای و
                جذاب، کلید موفقیت آنلاین شما. با تیم حرفه‌ای و تجربه‌دار، سایتی زیبا و کاربرپسند را برای کسب و کار شما
                طراحی میکنیم.
              </p>
            </div>
          </div>

          <div className="left">
            <img src="/img/services-vector.svg" alt="خدمات پرایم تیم" />
          </div>
        </div>
      </section>

      {/* <section className="services-all">
        <div className="head">
          <h1>خدمات پرایم تیم</h1>
          <div className="line">
            <div className="inner"></div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
