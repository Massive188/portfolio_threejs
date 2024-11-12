const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-3">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="social-icon flex gap-1"> {/* Reduced gap */}
        <a href="https://github.com/Massive188" target="_blank" rel="noopener noreferrer" className="w-1/2 h-1/2">
          <img src="/assets/github.svg" alt="github" className="w-full h-full cursor-pointer" />
        </a>
      </div>
      <div className="social-icon">
        <a
          href="https://www.linkedin.com/in/allendry-roque-diaz-info/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 h-1/2">
          <img src="/assets/icons8-linkedin.svg" alt="linkedin" className="w-full h-full cursor-pointer" />
        </a>
      </div>

      <p className="text-white-500">© 2024 Allendry R. All rights reserved.</p>
    </footer>
  );
};


export default Footer;
