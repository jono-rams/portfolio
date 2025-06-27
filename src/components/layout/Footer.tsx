const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface text-text-secondary py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Jonathan Rampersad. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;