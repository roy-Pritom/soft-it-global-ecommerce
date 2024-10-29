"use client";
import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <AntFooter
      className="pt-8"
      style={{ backgroundColor: "#001529", color: "#fff" }}
    >
      <div className="container mx-auto">
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
          <div>
            <Image
              src={"/Logo/manio-logo.png"}
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className=" w-full flex justify-center items-center">
            <div>
              <Space size="large" className=" text-sm pb-4">
                <Link href={"/shop"}>Shopping</Link>
                <Link href={"/shop"}>MAN</Link>
                <Link href={"/shop"}>Woman</Link>
                <Link href={"/shop"}>Product</Link>
              </Space>
              <Space size="large">
                <Image src="/nagad.svg" alt="Nagad" width={50} height={30} />
                <Image src="/bkash.svg" alt="bKash" width={50} height={30} />
                <Image src="/upay.svg" alt="Visa" width={50} height={30} />
                <Image src="/visaCard.svg" alt="Visa" width={50} height={30} />
              </Space>
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <div>
              <h1 className=" text-center text-base pb-4">Following Manio</h1>
              <Space className=" space-x-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookOutlined
                    style={{ fontSize: "24px", color: "#fff" }}
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramOutlined
                    style={{ fontSize: "24px", color: "#fff" }}
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterOutlined
                    style={{ fontSize: "24px", color: "#fff" }}
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinOutlined
                    style={{ fontSize: "24px", color: "#fff" }}
                  />
                </a>
              </Space>
            </div>
          </div>
        </div>
        <Row justify="center" style={{ marginTop: 40 }}>
          <Col>
            <Text style={{ color: "#d9d9d9" }}>
              © {currentYear} MANIO. All Rights Reserved.
            </Text>
          </Col>
          <Col>
            <h1 className=" hidden md:block px-12"> | </h1>
          </Col>
          <Col>
            <Text className="text-sm uppercase text-gray-200">
              Developed By -{" "}
              <a
                className="text-[#009975] hover:text-[#007a5e] underline"
                href="https://www.wevloper.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                WEVLOPER
              </a>
            </Text>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

export default Footer;
