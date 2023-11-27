import logo from "../Prayag_Logo.png";
import instagram from "../image/instagram.png";
import twitter from "../image/twitter.png";
import facebook from "../image/facebook.png";
import whatsapp from "../image/whatsapp.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-48 h-24" />
        </div>
        <div className="md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-300">123 Main St, Morbi</p>
          <p className="text-gray-300">Phone: 9727282149</p>
          <p className="text-gray-300">Email: Prayag@example.com</p>
        </div>
        <div className="md:w-1/4">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <img src={instagram} alt="instagram" className="w-12 h-12" />
            <img src={facebook} alt="instagram" className="w-12 h-12" />
            <img src={twitter} alt="instagram" className="w-12 h-12" />
            <img src={whatsapp} alt="instagram" className="w-12 h-12" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
