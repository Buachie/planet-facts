const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> Aaron Buachie
        2021
      </p>
      <a href="https://abuachie.com">abuachie.com</a>
    </footer>
  );
};

export default Footer;
