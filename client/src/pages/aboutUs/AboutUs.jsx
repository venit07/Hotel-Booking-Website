import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="mainAbout">
        <div className="img">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/574/214/351/life-resort-hotel-resort-hotel-wallpaper-preview.jpg"
            alt=""
          />
          <p>About GoodLuck</p>
        </div>
        <div className="container">
          <p className="headding">See The World For Less</p>
          <p>
            GoodLuck is an online travel platform that brings high-value and
            rewarding travel experiences to people all over the world through
            the GoodLuck app and GoodLuck website. Our mission is to empower
            everyone to be a traveler by offering affordable deals on hotels,
            flights, activities, and more, with an GoodLuck booking experience
            that is hassle-free from start to finish. Since the GoodLuck company
            was founded in 2005, we’ve made searching and booking travel as easy
            and stress-free as it should be. GoodLuck is now considered one of
            Asia’s leading travel-tech companies with millions of registered
            customers supported by a truly diverse team of more than 6,600
            people in 31 markets and GoodLuck customer service available 24/7.
          </p>
          <p className="headding">Visitor Numbers</p>
          <p>
            In accordance with the obligations of GoodLuck Company Pte Limited
            ("GoodLuck") under the EU’s Digital Services Act, we estimate that
            the average monthly recipients* of the GoodLuck service in the
            European Union from 1 August 2022 up to and including 31 January
            2023, is well below 45 million.{" "}
          </p>
          <p>
            This is only an estimate and is based on the data available to
            GoodLuck at this time, and the limited guidance in the Digital
            Services Act (“DSA”). This estimate is required to be published
            under the DSA and should not be used for any other purpose. The
            methodologies used to estimate average monthly recipients as defined
            in the DSA require significant judgement and design inputs, are
            subject to data and other limitations, and inherently are subject to
            statistical variances and uncertainties. This estimate may be
            revised upwards or downwards as GoodLuck refines its approach and in
            response to the publication of methodology by the European
            Commission.  As required by the DSA, we expect to publish a new
            estimate later in 2023.
          </p>
          <p>
            {" "}
              Please refer to the Booking Holdings Inc. Investor Relations
            website for metrics we consider relevant to GoodLuck’s business.
          </p>
          <p>
            {" "}
            * ‘recipient of service’ is defined under the DSA to mean “any
            natural or legal person who uses an intermediary service, in
            particular for the purposes of seeking information and making it
            accessible”. This requires counting users to whom information was
            displayed by the GoodLuck service, even if that user did not make a
            transaction.
          </p>
        </div>
        <div className="NumberContainer">
          <p className="numHead">GoodLuck in Numbers</p>
          <div className="boxs">
            <div className="boxAbout">
              <div className="num">2020</div>
              <span className="line"></span>
              <div className="innerText">Year founded</div>
            </div>
            <div className="boxAbout">
              <div className="num">31+</div>
              <span className="line"></span>
              <div className="innerText">Markets with GoodLuck offices</div>
            </div>
            <div className="boxAbout">
              <div className="num">3.6M</div>
              <span className="line"></span>
              <div className="innerText">Hotels and Homes worldwide</div>
            </div>
            <div className="boxAbout">
              <div className="num">50+</div>
              <span className="line"></span>
              <div className="innerText">
                country/territories with accommodation
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="picSection">
        <div className="part1">
          <div className="picText">
            <div className="picText1">A bit more</div>
            <div className="picText2"> about us…</div>
          </div>
          <div className="picBox">
            <div className="part1_picBox1">
              <div className="legit">Is GoodLuck legit?</div>
              <div className="part1_picBox1_head">
                <div>We've been doing what</div>
                <div>We do since 2020</div>
              </div>
              <div className="readmore">Read More</div>
            </div>
            <div className="part1_picBox1_ADV">
              <div className="logoDiv">
                <div className="part1_picBox1_ADV_logo">GoodLuck</div>
                <div className="dot">.....</div>
              </div>
              <div className="hLine"></div>
              <div className="bookingDiv">
                <div className="booking">BOOKING</div>
                <div className="holdings">HOLDINGS</div>
              </div>
            </div>
          </div>
          <div className="picBox2">
            <div className="part1_picBox1">
              <div className="legit">Where is Good Luck based?</div>
              <div className="part1_picBox1_head">
                <div>We’re truly global,</div>
                <div>based in 31 markets</div>
                <div>around the world</div>
              </div>
              <div className="readmore">Read More</div>
            </div>
            <img
              src="https://www.agoda.com/wp-content/uploads/2022/03/truly-global-2x.png"
              alt=""
            />
          </div>
          <div className="part1_picBox3">
            <div className="part1_picBox1">
              <div className="legit">Who are the Agodans?</div>
              <div className="part1_picBox1_head">
                <div>Meet our talented team</div>
              </div>
              <div className="readmore">Read More</div>
            </div>
            <img
              src="https://www.agoda.com/wp-content/uploads/2022/03/meet-agodans-2x.png"
              alt=""
            />
          </div>
          <div className="part1_picBox4">
            <div className="part1_picBox1">
              <div className="legit">Can I have an Agoda career?</div>
              <div className="part1_picBox1_head">
                <div>Discover how to join our</div>
                <div>team</div>
              </div>
              <div className="readmore">Read More</div>
            </div>
            <img
              src="https://www.agoda.com/wp-content/uploads/2022/03/Join-team-2x.png"
              alt=""
            />
          </div>
        </div>
        <div className="part2">
          <div className="picBox">
            <div className="part1_picBox1">
              <div className="legit">What exactly does Agoda offer?</div>
              <div className="part1_picBox1_head">
                <div>Hotels, villas, flights, and</div>
                <div>more—at affordable</div>
                <div>prices</div>
              </div>
              <div className="readmore">Read More</div>
            </div>
            <img
              src="https://www.agoda.com/wp-content/uploads/2022/03/beach-house2-2x.png"
              alt=""
            />
          </div>
          <div className="part2_picBox2">
            <div className="part1_picBox1">
              <div className="legit">Who are the Agoda founders?</div>
              <div className="part1_picBox1_head">
                <div>Created for travelers, by</div>
                <div>travelers</div>
              </div>
              <div className="readmore">Read More</div>
            </div>
            <img
              src="https://www.agoda.com/wp-content/uploads/2023/06/traveler-card-1-4.png"
              alt=""
            />
          </div>
          <div className="picBox">
            <div className="part1_picBox1">
              <div className="legit">
                What does ‘GoodLuck’ mean? And what is an Agoji?
              </div>
              <div className="part1_picBox1_head">
                <div>Learn about tour</div>
                <div>branding</div>
              </div>
              <div className="readmore">Read More</div>
              <div className="circle"></div>
              <div className="colorLogo">GoodLuck</div>
              <div className="colorDot">
                <div className="redDot colorDiv"></div>
                <div className="yellowDot colorDiv"></div>
                <div className="greenDot colorDiv"></div>
                <div className="purpleDot colorDiv"></div>
                <div className="blueDot colorDiv"></div>
              </div>
            </div>
          </div>
          <div className="picBox4">
            <div className="part1_picBox1">
              <div className="legit">
                Does Agoda support the environment and local communities?
              </div>
              <div className="part1_picBox1_head">
                <div>CSR and Sustainability</div>
                <div>travelers</div>
              </div>
              <div className="readmore">Read More</div>
            </div>
            <img
              src="https://www.agoda.com/wp-content/uploads/2022/03/crs-2x.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="foot">
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
