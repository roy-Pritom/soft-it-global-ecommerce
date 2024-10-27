"use client";
import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const { Footer: AntFooter } = Layout;
const { Text, Title } = Typography;

const Footer = () => {
  return (
    <AntFooter
      className="pt-8"
      style={{ backgroundColor: "#001529", color: "#fff" }}
    >
      <div className="container mx-auto">
        <Row justify="center" gutter={50}>
          <Col xs={24} sm={12} md={8}>
            <Title level={4} style={{ color: "#fff" }}>
              E-Shop
            </Title>
            <Text style={{ color: "#d9d9d9" }}>
              Your one-stop solution for all your shopping needs. We provide the
              best quality products with fast delivery.
            </Text>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Title level={4} style={{ color: "#fff" }}>
              Quick Links
            </Title>
            <Space direction="vertical">
              <Text style={{ color: "#d9d9d9" }}>About Us</Text>
              <Text style={{ color: "#d9d9d9" }}>Contact Us</Text>
              <Text style={{ color: "#d9d9d9" }}>Privacy Policy</Text>
              <Text style={{ color: "#d9d9d9" }}>Terms of Service</Text>
            </Space>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Title level={4} style={{ color: "#fff" }}>
              Follow Us
            </Title>
            <Space>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookOutlined style={{ fontSize: "24px", color: "#fff" }} />
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
                <TwitterOutlined style={{ fontSize: "24px", color: "#fff" }} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined style={{ fontSize: "24px", color: "#fff" }} />
              </a>
            </Space>
          </Col>

          <Col xs={24} style={{ textAlign: "center", marginTop: 20 }}>
            <Title level={4} style={{ color: "#fff" }}>
              Payment Methods
            </Title>
            <Space size="large">
              <Image src="/nagad.svg" alt="Nagad" width={50} height={30} />
              <Image src="/bkash.svg" alt="bKash" width={50} height={30} />
              <Image src="/upay.svg" alt="Visa" width={50} height={30} />
              <Image src="/visaCard.svg" alt="Visa" width={50} height={30} />
            </Space>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: 40 }}>
          <Col>
            <Text style={{ color: "#d9d9d9" }}>
              © 2024 E-Shop. All Rights Reserved.
            </Text>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

export default Footer;
