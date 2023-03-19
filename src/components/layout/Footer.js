import "../../styles/components/layout/Footer.css";

const Footer = (props) => {
  return (
    <footer className="container--footer">
      <div className="copyright">
        <div>
          <div>
            <strong>Aberturas CH</strong> &copy; |{" "}
            <a href="mailto:ventas@aberturasch.com.ar">
              ventas@aberturasch.com.ar
            </a>
          </div>
        </div>
      </div>

      <div className="social_foo">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src="/img/instagram.png" width="20px" alt="Logo alt" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src="/img/facebook.png" width="20px" alt="Logo alt" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <img src="/img/twitter.png" width="20px" alt="Logo alt" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
