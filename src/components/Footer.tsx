const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> Aaron Buachie
          2021
        </p>
        <a href="https://abuachie.com">abuachie.com</a>
      </div>
    </footer>
  );
};

export default Footer;
