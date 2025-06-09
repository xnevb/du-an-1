import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import projectData from "../../project_data.json";

const Footer = () => {
  const { copyright } = config.params;
  const { footer } = menu;
  const { contact } = projectData;
  return (
    <footer className="section bg-theme-light pb-0">
      <div className="container">
        {/* footer menu */}
        <div className="row">
          {footer.map((col) => {
            return (
              <div className="mb-12 sm:col-6 lg:col-3" key={col.name}>
                {markdownify(col.name, "h2", "h4")}
                <ul className="mt-6">
                  {col?.menu.map((item) => (
                    <li className="mb-1" key={item.text}>
                      <Link href={item.url} rel="">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* social icons */}
          <div className="md-12 sm:col-6 lg:col-3">
            <Link href="/" aria-label="Văn phòng Gia sư Sinh viên">
              <Image
                src={config.site.logo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt="Văn phòng Gia sư Sinh viên"
              />
            </Link>
            <p className="mt-3 mb-6 text-gray-600">
              Kết nối gia sư sinh viên chất lượng với phụ huynh và học sinh trên toàn quốc.
            </p>
            
            <div className="mb-6">
              <h4 className="text-h5 font-semibold mb-3">Thông tin liên hệ</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2">📍</span>
                  <span>{contact.address}</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📞</span>
                  <span>{contact.phone}</span>
                </li>
               
                <li className="flex items-center">
                  <span className="mr-2">🕒</span>
                  <span>{contact.workingHours}</span>
                </li>
              </ul>
            </div>
            
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>
        {/* copyright */}
        <div className="border-t border-border py-6">
          {markdownify(copyright, "p", "text-sm text-center")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
