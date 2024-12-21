import React from "react";
import small_logo from "../asset/icon/Logo .svg";
import { Layout, Row, Col, Typography, Space } from "antd";

const { Footer: AntFooter } = Layout; // Mengganti Footer bawaan dengan Ant Design Footer
const { Title, Paragraph, Link } = Typography;

const Footer = () => {
  return (
    <AntFooter className="footer">
      <Row gutter={[16, 16]} justify="space-between">
        {/* Company Info Section */}
        <Col xs={24} sm={12} md={6}>
          <Space direction="vertical" size="middle">
            <img src={small_logo} alt="Small Logo" />
            <Paragraph>
              We are a family-owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Paragraph>
          </Space>
        </Col>

        {/* Important Links Section */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4}>Important Links</Title>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Menu</Link></li>
            <li><Link href="/">Reservations</Link></li>
            <li><Link href="/">Order Online</Link></li>
            <li><Link href="/">Login</Link></li>
          </ul>
        </Col>

        {/* Contact Section */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4}>Contact</Title>
          <ul>
            <li>
              Address: <br /> 123 Town Street, Chicago
            </li>
            <li>
              Phone: <br /> +00 123 456 789
            </li>
            <li>
              Email: <br /> little@lemon.com
            </li>
          </ul>
        </Col>

        {/* Social Media Links Section */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4}>Social Media Links</Title>
          <ul>
            <li><Link href="/">Facebook</Link></li>
            <li><Link href="/">Instagram</Link></li>
            <li><Link href="/">Twitter</Link></li>
          </ul>
        </Col>
      </Row>
    </AntFooter>
  );
};

export default Footer;
