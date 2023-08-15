export default function Home() {
  return (
    <main className="index">
      <section className="hero">
        <div className="fix-width flex-v">
          <img src="/img/hero.svg" alt="پرایم تیم" />
        </div>
      </section>

      <section className="services-web">
        <div className="fix-width">
          <div className="content flex-h">
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
                  طراحی سایت یکی از اصولی‌ترین و حیاتی‌ترین عوامل در موفقیت هر کسب و کار آنلاین است. طراحی سایت حرفه‌ای
                  و جذاب، کلید موفقیت آنلاین شما. با تیم حرفه‌ای و تجربه‌دار، سایتی زیبا و کاربرپسند را برای کسب و کار
                  شما طراحی میکنیم.
                </p>
              </div>
            </div>

            <div className="left">
              <img src="/img/services.svg" alt="خدمات پرایم تیم" />
            </div>
          </div>
        </div>
      </section>

      <section className="services-all">
        <div className="fix-width">
          <div className="content flex-v">
            <div className="head">
              <h1>خدمات پرایم تیم</h1>
              <div className="line">
                <div className="inner"></div>
              </div>
            </div>
            <div className="description">
              <p>
                طراحی سایت به صورت حرفه ای با متد های روز دنیا از اهمیت بسیاری برخوردار است. بنابراین، طراحی یک وبسایت
                حرفه ای و مناسب نیازمند توجه به متد های مدرن و بروز است. پرایم تیم در این امر با حضور متخصصین مجرب در
                کنار شماست. ما در پرایم تیم با استفاده از زبان ها برنامه نویسی python, php در بک اند و همچنین Html, Css,
                Javascript, React در فرانت اند و همچنین طراحی رابط کاربری با استفاده figma و adobe xd همراه شما خواهیم
                بود.
              </p>
            </div>
            <div className="imgs">
              <img src="/img/service1.svg" alt="خدمات پرایم تیم" />
              <img src="/img/service2.svg" alt="خدمات پرایم تیم" />
              <img src="/img/service3.svg" alt="خدمات پرایم تیم" />{" "}
              <img src="/img/service4.svg" alt="خدمات پرایم تیم" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
