import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Button, Card, Typography, Tag, Row, Col, Flex, Rate,
} from "antd";
import {
  ShoppingCartOutlined, CarOutlined, ThunderboltOutlined, BarChartOutlined,
  SmileOutlined, StarFilled, CalendarOutlined, TagOutlined, TeamOutlined, RightOutlined,
} from "@ant-design/icons";
import logo from "../../imports/logo.png";
import { COLORS, FONTS } from "../theme";

const { Title, Text, Paragraph } = Typography;

const features = [
  { icon: <ShoppingCartOutlined />, title: "Bulk Order", desc: "50 kg+: 10% off", color: COLORS.teal },
  { icon: <CarOutlined />, title: "Live Tracking", desc: "Real-time delivery", color: COLORS.primary },
  { icon: <ThunderboltOutlined />, title: "Smart Order", desc: "AI-optimized", color: COLORS.yellowDark },
  { icon: <BarChartOutlined />, title: "Analytics", desc: "Usage insights", color: COLORS.teal },
];

const stats = [
  { value: "500+", label: "Active Clients", icon: <SmileOutlined style={{ fontSize: 28, color: COLORS.teal }} /> },
  { value: "98%", label: "Satisfaction", icon: <StarFilled style={{ fontSize: 28, color: COLORS.yellowDark }} /> },
  { value: "24/7", label: "Support", icon: <CalendarOutlined style={{ fontSize: 28, color: COLORS.primary }} /> },
];

const testimonials = [
  { name: "Sarah M.", company: "WeWork Berlin", text: "Fresh quality every day. Perfect for our team!", rating: 5 },
  { name: "Michael K.", company: "Spaces Mitte", text: "Reliable service, fair prices.", rating: 5 },
];

export default function FacilityWelcome() {
  return (
    <div style={{ minHeight: "100vh", background: "#FAFBFC", position: "relative", overflow: "hidden" }}>
      {/* Soft gradient blobs */}
      <div style={{
        position: "absolute", top: -120, right: -80, width: 500, height: 500,
        borderRadius: "50%", background: "rgba(95,168,184,0.06)", filter: "blur(80px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 100, left: -100, width: 400, height: 400,
        borderRadius: "50%", background: "rgba(42,31,91,0.04)", filter: "blur(80px)", pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 520, margin: "0 auto", padding: "52px 20px 80px" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <Flex vertical align="center" gap={44}>

            {/* Logo & Name */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.5 }}>
              <Flex vertical align="center" gap={16}>
                <div style={{
                  width: 100, height: 100, borderRadius: 28, overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(42,31,91,0.18)", background: "white",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <img src={logo} alt="Saldino" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <Title style={{
                    fontFamily: FONTS.brand, fontStyle: "italic", color: COLORS.primary,
                    margin: 0, fontSize: 44, letterSpacing: "-0.5px", lineHeight: 1.15,
                  }}>
                    Saldino
                  </Title>
                  <Text style={{ color: "#9CA3AF", fontSize: 13, letterSpacing: 2.5, textTransform: "uppercase", fontFamily: FONTS.ui }}>
                    Facility Manager Portal
                  </Text>
                </div>
              </Flex>
            </motion.div>

            {/* Feature Cards */}
            <Row gutter={[10, 10]} style={{ width: "100%" }}>
              {features.map((f, i) => (
                <Col xs={12} key={i}>
                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.08 }}>
                    <Card
                      hoverable
                      style={{ textAlign: "center", borderRadius: 16, border: "1px solid rgba(42,31,91,0.07)" }}
                      styles={{ body: { padding: "18px 12px" } }}
                    >
                      <div style={{ display: "inline-flex", padding: 10, borderRadius: 12, background: f.color + "18", marginBottom: 8 }}>
                        <span style={{ fontSize: 22, color: f.color }}>{f.icon}</span>
                      </div>
                      <div style={{ fontWeight: 600, fontSize: 13, color: COLORS.primary, marginBottom: 2 }}>{f.title}</div>
                      <Text type="secondary" style={{ fontSize: 12 }}>{f.desc}</Text>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>

            {/* Primary CTAs */}
            <Flex vertical gap={10} style={{ width: "100%" }}>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
                <Link to="/facility-dashboard">
                  <Button
                    type="primary" size="large" block
                    icon={<RightOutlined />} iconPlacement="end"
                    style={{
                      background: COLORS.primary, borderColor: COLORS.primary,
                      height: 52, fontSize: 15, fontWeight: 600, fontFamily: FONTS.ui,
                      boxShadow: "0 4px 16px rgba(42,31,91,0.25)",
                    }}
                  >
                    Open Dashboard
                  </Button>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
                <Link to="/bulk-order">
                  <Button
                    size="large" block icon={<ShoppingCartOutlined />}
                    style={{ height: 50, fontSize: 15, fontWeight: 500, borderColor: "rgba(42,31,91,0.2)", color: COLORS.primary }}
                  >
                    Order Now
                  </Button>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.72 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "4px 0" }}>
                  <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
                  <Text type="secondary" style={{ fontSize: 11, letterSpacing: 1 }}>SUPPLIERS</Text>
                  <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
                </div>
                <Link to="/supplier-portal">
                  <Button
                    size="large" block icon={<TeamOutlined />}
                    style={{ height: 46, fontWeight: 500, borderColor: "rgba(42,122,107,0.35)", color: "#2A7A6B" }}
                  >
                    Supplier Portal
                  </Button>
                </Link>
              </motion.div>
            </Flex>

            {/* Stats */}
            <Row gutter={[12, 12]} style={{ width: "100%" }}>
              {stats.map((s, i) => (
                <Col span={8} key={i}>
                  <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + i * 0.08 }}>
                    <Card
                      style={{ textAlign: "center", borderRadius: 14, border: "1px solid rgba(42,31,91,0.07)", background: "white" }}
                      styles={{ body: { padding: "14px 8px" } }}
                    >
                      {s.icon}
                      <div style={{ fontSize: 20, fontWeight: 700, color: COLORS.primary, margin: "6px 0 2px" }}>{s.value}</div>
                      <Text type="secondary" style={{ fontSize: 10 }}>{s.label}</Text>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>

            {/* Testimonials */}
            <div style={{ width: "100%" }}>
              <Title level={5} style={{ color: COLORS.primary, textAlign: "center", marginBottom: 14 }}>What our clients say</Title>
              <Flex vertical gap={10}>
                {testimonials.map((t, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 + i * 0.1 }}>
                    <Card style={{ borderRadius: 14, border: "1px solid rgba(42,31,91,0.07)" }} styles={{ body: { padding: 18 } }}>
                      <Flex vertical gap={8}>
                        <Rate disabled defaultValue={t.rating} style={{ fontSize: 13, color: COLORS.yellowDark }} />
                        <Paragraph style={{ fontStyle: "italic", color: "#6B7280", margin: 0, fontSize: 13 }}>"{t.text}"</Paragraph>
                        <Flex align="center" gap={8}>
                          <div style={{ width: 1, height: 24, background: "rgba(42,31,91,0.15)", flexShrink: 0 }} />
                          <div>
                            <div style={{ fontWeight: 600, fontSize: 12 }}>{t.name}</div>
                            <Text type="secondary" style={{ fontSize: 11 }}>{t.company}</Text>
                          </div>
                        </Flex>
                      </Flex>
                    </Card>
                  </motion.div>
                ))}
              </Flex>
            </div>

            {/* Bottom info strip */}
            <Card
              style={{ width: "100%", borderRadius: 14, background: "rgba(95,168,184,0.06)", border: "1px solid rgba(95,168,184,0.2)" }}
              styles={{ body: { padding: "14px 18px" } }}
            >
              <Flex justify="center" gap={8} wrap="wrap" style={{ marginBottom: 10 }}>
                {["Daily Delivery", "From 5 kg", "Bulk Discounts"].map((lbl) => (
                  <Tag key={lbl} icon={<TagOutlined />} style={{ background: "white", borderColor: "rgba(95,168,184,0.35)", borderRadius: 8, color: COLORS.primary }}>
                    {lbl}
                  </Tag>
                ))}
              </Flex>
              <Paragraph style={{ textAlign: "center", margin: 0, color: COLORS.primary, fontSize: 13 }}>
                <strong>Fresh organic salads</strong> for your CoWorking spaces in Berlin
              </Paragraph>
            </Card>

          </Flex>
        </motion.div>
      </div>
    </div>
  );
}
