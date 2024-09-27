import React from 'react'
import { FiMail } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { FaLongArrowAltRight, FaMapMarkerAlt } from "react-icons/fa";
import { Col } from 'react-bootstrap';
import styles from '../styles/Owners.module.css';
import Link from 'next/link';

export default function SideBar() {
    return (
        <Col lg='3' xl={3}>
            <div className={styles.sidebar}>
                <button>
                    <FaLongArrowAltRight />
                    &nbsp; Search Property
                </button>
                <button>
                    <FaLongArrowAltRight />
                    &nbsp; Plans
                </button>
                <button>
                    <Link href='owners-plans'>
                        <FaLongArrowAltRight />
                        &nbsp; Move-in
                    </Link>
                </button>
                <button>
                    <FaLongArrowAltRight />
                    &nbsp; Benefits
                </button>
                <button>
                    <FaLongArrowAltRight />
                    &nbsp; Tenant Portal
                </button>
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
                    <p>
                        DK@dk.ca
                    </p>
                </div>
                <div>
                    <FaMapMarkerAlt />
                    <p>
                        123 Yonge St, Toronto
                        Ontario, M1M 1M1
                    </p>
                </div>
            </div>
        </Col>
    )
}
