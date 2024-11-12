import { useRouter } from "next/router";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { FaLongArrowAltRight, FaMapMarkerAlt } from "react-icons/fa";
import styles from "../styles/Owners.module.css";

export default function SideBar({}) {
  const router = useRouter();

  const getSidebarMenu = () => {
    if (router.pathname.startsWith("/owners")) {
      return [
        { text: "FAQ", path: "/owners/faq" },
        { text: "Free Estimate", path: "/owners/free-estimate" },
        { text: "Plans", path: "/owners/owners-plans" },
        { text: "Owners Portal", path: "/owners/owners-portal" },
      ];
    } else if (router.pathname.startsWith("/tenants")) {
      return [
        { text: "Search Property", path: "/tenants/search-property" },
        { text: "Plans", path: "/tenants/tenants-plans" },
        { text: "Move-in", path: "/tenants/move-in" },
        { text: "Benefits", path: "/tenants/benefits" },
        { text: "Tenant Portal", path: "/tenants/tenant-portal" },
      ];
    } else if (router.pathname.startsWith("/properties")) {
      return [
        { text: "Search Property", path: "/properties/search-property" },
        { text: "Plans", path: "/properties/properties-plans" },
        { text: "Move-in", path: "/properties/move-in" },
        { text: "Benefits", path: "/properties/benefits" },
        { text: "Tenant Portal", path: "/properties/tenant-portal" },
      ];
    } else if (router.pathname.startsWith("/new-development")) {
      return [
        {
          text: "Guarantee Program",
          path: "/new-development/guarantee-program",
        },
        {
          text: "PDI & Tarion Repair",
          path: "/new-development/pdi-and-tarion-repair",
        },
      ];
    } else if (router.pathname.startsWith("/contact")) {
      return [
        { text: "Contact", path: "/contact/contact" },
        { text: "Guarantee Program", path: "/contact/guarantee-program" },
        { text: "PDI & Tarion Repair", path: "/contact/pdi-and-tarion-repair" },
        { text: "Move-in", path: "/contact/move-in" },
        { text: "Benefits", path: "/contact/benefits" },
        { text: "Tenant Portal", path: "/contact/tenant-portal" },
      ];
    } else {
      return [{ text: "Home", path: "/" }];
    }
  };

  const handleNavigation = (path) => {
    router.push(path, undefined, { scroll: false }); // 페이지 이동 시 scroll을 비활성화
  };

  return (
    <>
      <div className={styles.sidebar}>
        {getSidebarMenu().map((button, index) => (
          <Link key={index} href={button.path}>
            <button key={index} onClick={() => handleNavigation(button.path)}>
              <FaLongArrowAltRight />
              &nbsp; {button.text}
            </button>
            {/* <button>
              <FaLongArrowAltRight />
              &nbsp; {button.text}
            </button> */}
          </Link>
        ))}
      </div>

      <div className={styles.contactInfo}>
        <div>
          <IoIosCall />
          <p>
            Local: 123-456-7890 <br />
            Toll Free: 1-123-456-7890
          </p>
        </div>
        <div>
          <FiMail />
          <p>DK@dk.ca</p>
        </div>
        <div>
          <FaMapMarkerAlt />
          <p>123 Yonge St, Toronto Ontario, M1M 1M1</p>
        </div>
      </div>
    </>
  );
}
