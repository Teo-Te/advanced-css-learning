const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bott-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bott-small">
            You're going to fall in love with nautre
          </h3>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
            nesciunt obcaecati labore ex esse. Ad accusantium molestias, atque
            quis fugit harum voluptatibus aliquid quo aliquam. Assumenda
            quisquam voluptatum fuga odio!
          </p>

          <h3 className="heading-tertiary u-margin-bott-small">
            Live you life like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            animi itaque dolorem, commodi ea nemo error ipsum modi.
          </p>

          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src="/natours/img/nat-1-large.jpg"
              alt="Nature 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="/natours/img/nat-2-large.jpg"
              alt="Nature 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="/natours/img/nat-3-large.jpg"
              alt="Nature 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
