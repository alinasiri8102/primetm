import Slider from "./Slider";
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

      <section className="why">
        <div className="fix-width">
          <div className="content flex-v">
            <div className="head">
              <h1>چرا پرایم تیم؟</h1>
              <div className="line">
                <div className="inner"></div>
              </div>
            </div>
            <div className="description">
              <p>
                طراحی یک وبسایت به یکی از مهم‌ترین عوامل موفقیت یک کسب و کار در دنیای امروز تبدیل شده است. این سایت،
                جایی است که مخاطبان شما با شما در ارتباط هستند و به طور مستقیم با محصولات یا خدمات شما در تماس اند.
                انتخاب یک تیم طراحی حرفه‌ای و با تجربه برای ایجاد سایت شما، یکی از تصمیمات حیاتی است که تاثیر مستقیم بر
                روند کسب و کار شما خواهد داشت. پرایم تیم همواره در تلاش بوده است که با استفاده از جدید ترین متد ها و
                کاربردی ترین امکانات این امر را برای شما فراهم کند.
              </p>
            </div>
            <div className="boxs">
              <div className="box flex-v">
                <img src="/img/why1.svg" alt="" />
                <h3>طراحی حرفه ای</h3>
                <p>
                  طراحی فرآیندی هنری و فنی است که نیاز به دانش در زمینه‌ طراحی، برنامه‌نویسی، تجربه کاربری و بروز بودن
                  با تکنولوژی‌های جدید دارد. ما در پرایم تیم به بهترین نحو اینکار را برای شما انجام میدهیم.
                </p>
              </div>
              <div className="box flex-v">
                <img src="/img/why2.svg" alt="" />
                <h3>کدنویسی بهینه</h3>
                <p>
                  کلید موفقیت در برنامه‌نویسی کد نویسی بهینه است. استفاده از الگوریتم‌های بهینه و ساختارهای مناسب،
                  عملکرد برنامه را بهبود می‌بخشد.و همچنین باعث بهبود عملکرد برنامه و کاهش زمان اجرا می‌شود.
                </p>
              </div>
              <div className="box flex-v">
                <img src="/img/why3.svg" alt="" />
                <h3>برسی دقیق نیاز ها</h3>
                <p>
                  بررسی دقیق نیازهای کارفرما مهم ترین گام در طراحی سایت است. این امر موجب درک دقیق اهداف، مخاطبان و
                  خدمات مورد نیاز و همچنین امکانت مورد نیاز می باشد. لذا اساس موفقیت هر پروژه است.
                </p>
              </div>
              <div className="box flex-v">
                <img src="/img/why4.svg" alt="" />
                <h3>صرفه جویی</h3>
                <p>
                  اگر به دنبال صرفه جویی در وقت و هزینه های اضافی هستید پرایم تیم بهترین گزینه برای طراحی و خدمات سایت
                  میباشد.چرا که نیاز شما را در کمترین زمان و با کیفیت ترین خدمات انجام خواهیم داد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <div className="fix-width">
          <div className="content flex-v">
            <div className="head">
              <h1>نمونه کار ها</h1>
              <div className="line">
                <div className="inner"></div>
              </div>
            </div>

            <div className="slider">
              <Slider />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
