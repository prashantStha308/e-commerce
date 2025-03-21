const Footer = () => {
    const linkStyle= "hover:text-purple-600 text-gray-800 text-sm font-normal transition-all";
    const headerStyle = "text-purple-600 font-medium text-sm mb-6";

    return (
      <footer className="tracking-wide bg-white dark:bg-gray-950 pt-12 py-4 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
          <div>
            <h4 className={headerStyle}>Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className={linkStyle}>Our Story</a></li>
              <li><a href="#" className={linkStyle}>Newsroom</a></li>
              <li><a href="#" className={linkStyle}>Careers</a></li>
              <li><a href="#" className={linkStyle}>Blog</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className={headerStyle}>Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className={linkStyle}>Web Development</a></li>
              <li><a href="#" className={linkStyle}>Testing Automation</a></li>
              <li><a href="#" className={linkStyle}>AWS Development Services</a></li>
              <li><a href="#" className={linkStyle}>Mobile App Development</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className={headerStyle}>Platforms</h4>
            <ul className="space-y-4">
              <li><a href="#" className={linkStyle}>Hubspot</a></li>
              <li><a href="#" className={linkStyle}>Marketo Integration Services</a></li>
              <li><a href="#" className={linkStyle}>Marketing Glossary</a></li>
              <li><a href="#" className={linkStyle}>UIPath</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className={headerStyle}>Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className={linkStyle}>Accessibility</a></li>
              <li><a href="#" className={linkStyle}>About</a></li>
              <li><a href="#" className={linkStyle}>Contact</a></li>
              <li><a href="#" className={linkStyle}>Learn more</a></li>
            </ul>
          </div>
        </div>
  
        <div className="border-t text-center border-[#6b5f5f] pt-4 mt-8">
          <p className="text-gray-400 text-sm">© The Next Store.</p>
        </div>
      </footer>
    );
  };
  
export default Footer;