import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import imageBanner from "../asset/images/restauranfood.jpg";

const Header = () => {
  return (
    <>
      <Helmet>
        {/* Meta Tags */}
        <title>Little Lemon - Mediterranean Restaurant</title>
        <meta
          name="description"
          content="Little Lemon is a family-owned Mediterranean restaurant in Chicago, offering traditional recipes served with a modern twist."
        />
        <meta name="author" content="Little Lemon Team" />
        <meta name="keywords" content="Mediterranean, Restaurant, Food, Chicago, Little Lemon" />

        {/* Open Graph Protocol */}
        <meta property="og:title" content="Little Lemon - Mediterranean Restaurant" />
        <meta
          property="og:description"
          content="Little Lemon is a family-owned Mediterranean restaurant in Chicago, offering traditional recipes served with a modern twist."
        />
        <meta property="og:image" content={imageBanner} />
        <meta property="og:url" content="https://littlelemon.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Little Lemon - Mediterranean Restaurant" />
        <meta
          name="twitter:description"
          content="Little Lemon is a family-owned Mediterranean restaurant in Chicago, offering traditional recipes served with a modern twist."
        />
        <meta name="twitter:image" content={imageBanner} />
      </Helmet>

      <header className="header">
        <section>
          <div className="banner">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              We are a family-owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/booking">
              <button aria-label="On Click">Reserve Table</button>
            </Link>
            <div className="banner-img">
              <img src={imageBanner} alt="Little Lemon Restaurant" />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
