import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { FaLongArrowAltRight, FaMapMarkerAlt } from "react-icons/fa";
import styles from "../styles/Owners.module.css";

export default function Sidebar({ currentPage }) {
  return (
    <div>
      <div className={styles.sidebar}>
        {currentPage === "Owners" && (
          <>
            <button>
              <FaLongArrowAltRight />
              &nbsp; FREE ESTIMATE
            </button>
            <button>
              <FaLongArrowAltRight />
              &nbsp; NON-RESIDENT TAXES
            </button>
            <button>
              <FaLongArrowAltRight />
              &nbsp; PLANS
            </button>
            <button>
              <FaLongArrowAltRight />
              &nbsp; OWNERS PORTAL
            </button>
          </>
        )}
        {currentPage === "Tenants" && (
          <>
            <button>
              <FaLongArrowAltRight />
              Tenants1
            </button>
            <button>
              <FaLongArrowAltRight />
              Tenants2
            </button>
          </>
        )}
        {currentPage === "Properties" && (
          <>
            <button>
              <FaLongArrowAltRight />
              Properties1
            </button>
            <button>
              <FaLongArrowAltRight />
              Properties2
            </button>
          </>
        )}
        {currentPage === "New Development" && (
          <>
            <button>
              <FaLongArrowAltRight />
              New Development1
            </button>
            <button>
              <FaLongArrowAltRight />
              New Development2
            </button>
          </>
        )}
        {currentPage === "Plans" && (
          <>
            <button>
              <FaLongArrowAltRight />
              Plans1
            </button>
            <button>
              <FaLongArrowAltRight />
              Plans2
            </button>
          </>
        )}
        {currentPage === "Contact" && (
          <>
            <button>
              <FaLongArrowAltRight />
              Contact1
            </button>
            <button>
              <FaLongArrowAltRight />
              Contact2
            </button>
          </>
        )}
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
    </div>
  );
}
