import { useRouter } from "next/router";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { FaLongArrowAltRight, FaMapMarkerAlt } from "react-icons/fa";
import styles from "../styles/Owners.module.css";

export default function Sidebar({}) {
  const router = useRouter();

  const getSidebarMenu = () => {
    switch (router.pathname) {
      case "/owners/faq-owners":
        return [
          { text: "FAQ", path: "/faq-owners/faq" },
          { text: "Free Estimate", path: "/faq-owners/free-estimate" },
          { text: "Plans", path: "/faq-owners/plans" },
          { text: "Owners Portal", path: "/faq-owners/owners-portal" },
        ];
      case "/tenants":
        return [
          { text: "1", path: "/tenants/1" },
          { text: "2", path: "/tenants/2" },
          { text: "3", path: "/tenants/3" },
        ];
      case "/properties":
        return [
          { text: "1", path: "/tenants/1" },
          { text: "2", path: "/tenants/2" },
          { text: "3", path: "/tenants/3" },
        ];
      case "/new-development":
        return [
          { text: "1", path: "/tenants/1" },
          { text: "2", path: "/tenants/2" },
          { text: "3", path: "/tenants/3" },
        ];
      case "/contact":
        return [
          { text: "1", path: "/tenants/1" },
          { text: "2", path: "/tenants/2" },
          { text: "3", path: "/tenants/3" },
        ];
      default:
        return [
          { text: "1", path: "/tenants/1" },
          { text: "2", path: "/tenants/2" },
          { text: "3", path: "/tenants/3" },
        ];
    }
  };

  return (
    <>
      <div className={styles.sidebar}>
        {getSidebarMenu().map((button, index) => (
          <Link key={index} href={button.path}>
            <button>
              <FaLongArrowAltRight />
              &nbsp; {button.text}
            </button>
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
