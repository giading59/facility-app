import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Button, Card, Typography, Tag, Avatar, Badge, Progress,
  Drawer, List, Row, Col, Flex,
} from "antd";
import {
  CarOutlined, EnvironmentOutlined, CalendarOutlined, RiseOutlined,
  ClockCircleOutlined, BellOutlined, ShoppingCartOutlined, RightOutlined,
  LineChartOutlined, CloseOutlined, CheckCircleOutlined, WarningOutlined,
  InfoCircleOutlined, ThunderboltOutlined, ReadOutlined, TeamOutlined,
} from "@ant-design/icons";
import logo from "../../imports/logo.png";
import { BottomNav } from "../components/BottomNav";
import { COLORS, FONTS } from "../theme";

const { Title, Text } = Typography;

const notifications = [
  { id: 1, icon: <CheckCircleOutlined style={{ color: COLORS.greenDark }} />, title: "Delivery confirmed", message: "Your order for tomorrow has been confirmed", time: "10 min ago", color: COLORS.greenDark },
  { id: 2, icon: <InfoCircleOutlined style={{ color: COLORS.teal }} />, title: "New product available", message: "Caesar Salad Mix is now orderable", time: "2h ago", color: COLORS.teal },
  { id: 3, icon: <WarningOutlined style={{ color: COLORS.yellowDark }} />, title: "Discount expiring", message: "15% discount ends in 3 days", time: "Today", color: COLORS.yellowDark },
];

const recentActivity = [
  { action: "Order placed", amount: "73 kg", time: "1 day ago" },
  { action: "Delivery received", amount: "65 kg", time: "2 days ago" },
  { action: "Invoice paid", amount: "€ 825.50", time: "3 days ago" },
];

const stats = [
  { label: "Monthly Usage", value: "145 kg", sub: "+18% vs. last month", icon: <RiseOutlined />, color: COLORS.greenDark, bg: COLORS.green + "22", progress: 72 },
  { label: "Next Delivery", value: "Tomorrow", sub: "08:00 – 10:00", icon: <CarOutlined />, color: COLORS.teal, bg: COLORS.teal + "22", progress: 100 },
  { label: "Open Orders", value: "2", sub: "In progress", icon: <CalendarOutlined />, color: COLORS.yellowDark, bg: COLORS.yellow + "55", progress: 40 },
];

const upcomingDeliveries = [
  { id: 1, location: "CoWork Berlin Mitte", address: "Friedrichstraße 123, 10117 Berlin", time: "Tomorrow, 08:00 – 10:00", items: "25 kg Salad Mix", status: "Scheduled" },
  { id: 2, location: "CoWork Kreuzberg", address: "Oranienstraße 45, 10969 Berlin", time: "Tomorrow, 10:30 – 12:00", items: "18 kg Veggie Box", status: "Scheduled" },
  { id: 3, location: "CoWork Prenzlauer Berg", address: "Kollwitzstraße 78, 10435 Berlin", time: "Tomorrow, 14:00 – 16:00", items: "30 kg Sides Mix", status: "In Progress" },
];

const quickActions = [
  { to: "/delivery-tracking", icon: <EnvironmentOutlined style={{ fontSize: 26, color: COLORS.teal }} />, title: "Route", desc: "3 active locations", bg: COLORS.teal + "18" },
  { to: "/order-schedule", icon: <CalendarOutlined style={{ fontSize: 26, color: COLORS.primary }} />, title: "Schedule", desc: "4 planned deliveries", bg: COLORS.primary + "12" },
  { to: "/smart-order", icon: <ThunderboltOutlined style={{ fontSize: 26, color: COLORS.greenDark }} />, title: "Smart Order", desc: "AI rec: 62 kg", bg: COLORS.green + "30" },
  { to: "/product-catalog", icon: <ReadOutlined style={{ fontSize: 26, color: COLORS.yellowDark }} />, title: "Catalog", desc: "9 products · 2 suppliers", bg: COLORS.yellow + "55" },
  { to: "/supplier-portal", icon: <TeamOutlined style={{ fontSize: 26, color: "#2A7A6B" }} />, title: "Supplier Portal", desc: "Report damage & waste", bg: "rgba(42,122,107,0.10)" },
  { to: "/order-schedule", icon: <LineChartOutlined style={{ fontSize: 26, color: COLORS.error }} />, title: "Analytics", desc: "Usage analysis", bg: "rgba(229,115,115,0.10)" },
];

export default function FacilityDashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{
        background: COLORS.primary, padding: "0 20px",
        height: 64, display: "flex", alignItems: "center", gap: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)", flexShrink: 0,
      }}>
        <img src={logo} alt="Saldino" style={{ width: 36, height: 36, borderRadius: 10, objectFit: "cover" }} />
        <div style={{ flex: 1 }}>
          <div style={{ color: "white", fontWeight: 700, fontSize: 19, fontFamily: FONTS.brand, fontStyle: "italic", lineHeight: 1.2 }}>Saldino</div>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: FONTS.ui }}>Facility Portal</div>
        </div>
        <Badge count={3} color="red">
          <span>
            <Button type="text" icon={<BellOutlined style={{ color: "white", fontSize: 20 }} />} onClick={() => setDrawerOpen(true)} />
          </span>
        </Badge>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: "auto", padding: "24px 16px 88px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Flex vertical gap={28}>

            {/* Welcome */}
            <div>
              <Title level={3} style={{ color: COLORS.primary, margin: 0, fontFamily: FONTS.brand }}>Welcome back!</Title>
              <Text type="secondary" style={{ fontSize: 13 }}>Manage your salad bar orders</Text>
            </div>

            {/* Primary Order CTA */}
            <Link to="/bulk-order" style={{ display: "block" }}>
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <Card
                  style={{ borderRadius: 20, border: "1.5px solid rgba(42,31,91,0.1)", boxShadow: "0 2px 16px rgba(42,31,91,0.07)", cursor: "pointer" }}
                  styles={{ body: { padding: 0 } }}
                >
                  <div style={{ padding: "20px 22px 16px" }}>
                    <Flex align="center" gap={16}>
                      <div style={{ background: COLORS.primary, padding: 14, borderRadius: 16, flexShrink: 0, boxShadow: "0 4px 12px rgba(42,31,91,0.2)" }}>
                        <ShoppingCartOutlined style={{ fontSize: 26, color: "white" }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: 17, color: COLORS.primary, marginBottom: 3 }}>New Order</div>
                        <div style={{ fontSize: 13, color: "#9CA3AF" }}>Bulk delivery for your CoWorking spaces</div>
                      </div>
                      <RightOutlined style={{ fontSize: 16, color: "#9CA3AF" }} />
                    </Flex>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(42,31,91,0.06)", background: "rgba(42,31,91,0.02)", padding: "12px 22px", borderRadius: "0 0 20px 20px", display: "flex" }}>
                    {[{ label: "Main", price: "€12.50/kg" }, { label: "Veggies", price: "€8.90/kg" }, { label: "Sides", price: "€6.50/kg" }].map((item, i) => (
                      <div key={i} style={{ flex: 1, textAlign: "center", position: "relative" }}>
                        {i > 0 && <div style={{ position: "absolute", left: 0, top: "10%", bottom: "10%", width: 1, background: "rgba(42,31,91,0.08)" }} />}
                        <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.primary }}>{item.price}</div>
                        <div style={{ fontSize: 10, color: "#9CA3AF", marginTop: 2 }}>{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: "10px 22px 16px" }}>
                    <Flex gap={6} wrap="wrap">
                      {["50 kg → 10% off", "100 kg → 15% off"].map((lbl) => (
                        <Tag key={lbl} style={{ borderRadius: 8, borderColor: "rgba(42,31,91,0.15)", color: COLORS.primary, background: "transparent", fontSize: 11 }}>{lbl}</Tag>
                      ))}
                    </Flex>
                  </div>
                </Card>
              </motion.div>
            </Link>

            {/* Stats */}
            <Row gutter={[16, 16]}>
              {stats.map((s, i) => (
                <Col xs={24} md={8} key={i}>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }}>
                    <Card style={{ borderRadius: 16 }}>
                      <Flex justify="space-between" align="flex-start" style={{ marginBottom: 12 }}>
                        <div>
                          <Text type="secondary" style={{ fontSize: 12, display: "block", marginBottom: 4 }}>{s.label}</Text>
                          <div style={{ fontSize: 26, fontWeight: 700, color: COLORS.primary, lineHeight: 1.1 }}>{s.value}</div>
                          <Text type="secondary" style={{ fontSize: 11 }}>{s.sub}</Text>
                        </div>
                        <Avatar size={48} style={{ background: s.bg, flexShrink: 0 }}>
                          <span style={{ fontSize: 22, color: s.color }}>{s.icon}</span>
                        </Avatar>
                      </Flex>
                      <Progress percent={s.progress} showInfo={false} strokeColor={s.color} trailColor="rgba(0,0,0,0.06)" style={{ margin: 0 }} />
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>

            {/* Quick Actions */}
            <div>
              <Title level={4} style={{ color: COLORS.primary, marginBottom: 14 }}>Quick Access</Title>
              <Row gutter={[12, 12]}>
                {quickActions.map((a, i) => (
                  <Col xs={12} sm={8} key={i}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.07 }}>
                      <Link to={a.to}>
                        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                          <Card style={{ borderRadius: 16, cursor: "pointer", border: "1px solid rgba(42,31,91,0.08)" }} styles={{ body: { padding: 16 } }}>
                            <Flex vertical gap={8}>
                              <div style={{ background: a.bg, borderRadius: 10, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {a.icon}
                              </div>
                              <div style={{ fontWeight: 600, fontSize: 14, color: COLORS.primary }}>{a.title}</div>
                              <Text type="secondary" style={{ fontSize: 11, lineHeight: 1.3 }}>{a.desc}</Text>
                            </Flex>
                          </Card>
                        </motion.div>
                      </Link>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </div>

            {/* Deliveries + Activity */}
            <Row gutter={[16, 16]}>
              <Col xs={24} lg={16}>
                <Card
                  title={<span style={{ color: COLORS.primary, fontWeight: 600 }}>Upcoming Deliveries</span>}
                  extra={
                    <Link to="/delivery-tracking">
                      <Button type="link" style={{ color: COLORS.teal }} icon={<RightOutlined />} iconPlacement="end" size="small">All</Button>
                    </Link>
                  }
                  style={{ borderRadius: 16 }}
                >
                  <Flex vertical gap={10}>
                    {upcomingDeliveries.map((d, i) => (
                      <motion.div key={d.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }} whileHover={{ scale: 1.01 }}>
                        <Card style={{ borderRadius: 12, border: "1px solid rgba(42,31,91,0.1)", cursor: "pointer" }} styles={{ body: { padding: 14 } }}>
                          <Flex align="center" gap={14}>
                            <Avatar size={44} style={{ background: d.status === "Scheduled" ? COLORS.teal : COLORS.yellowDark, flexShrink: 0 }}>{i + 1}</Avatar>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontWeight: 600, fontSize: 14, color: COLORS.primary }}>{d.location}</div>
                              <Text type="secondary" style={{ fontSize: 11 }}>{d.address}</Text>
                              <Flex gap={6} style={{ marginTop: 6 }} wrap="wrap">
                                <Tag icon={<ClockCircleOutlined />} style={{ borderRadius: 6, fontSize: 11 }}>{d.time}</Tag>
                                <Tag icon={<CarOutlined />} style={{ borderRadius: 6, fontSize: 11 }}>{d.items}</Tag>
                              </Flex>
                            </div>
                          </Flex>
                        </Card>
                      </motion.div>
                    ))}
                  </Flex>
                </Card>
              </Col>

              <Col xs={24} lg={8}>
                <Card title={<span style={{ color: COLORS.primary, fontWeight: 600 }}>Recent Activity</span>} style={{ borderRadius: 16, height: "100%" }}>
                  <Flex vertical gap={8}>
                    {recentActivity.map((a, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }}>
                        <div style={{ padding: "10px 12px", borderRadius: 10, background: "rgba(95,168,184,0.06)" }}>
                          <Flex justify="space-between" align="flex-start">
                            <div>
                              <div style={{ fontWeight: 500, fontSize: 13, color: COLORS.primary }}>{a.action}</div>
                              <Text type="secondary" style={{ fontSize: 11 }}>{a.time}</Text>
                            </div>
                            <Tag style={{ background: COLORS.primary + "14", color: COLORS.primary, border: "none", borderRadius: 8, fontWeight: 600 }}>{a.amount}</Tag>
                          </Flex>
                        </div>
                      </motion.div>
                    ))}
                  </Flex>
                </Card>
              </Col>
            </Row>

          </Flex>
        </div>
      </div>

      {/* Notifications Drawer */}
      <Drawer
        title={<span style={{ color: COLORS.primary, fontWeight: 600 }}>Notifications</span>}
        placement="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={360}
        extra={<Button type="text" icon={<CloseOutlined />} onClick={() => setDrawerOpen(false)} />}
      >
        <List
          dataSource={notifications}
          renderItem={(n, i) => (
            <motion.div key={n.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
              <List.Item style={{ padding: "12px 0", cursor: "pointer" }}>
                <List.Item.Meta
                  avatar={<Avatar size={40} style={{ background: n.color + "20", border: `1px solid ${n.color}40` }} icon={n.icon} />}
                  title={<span style={{ fontWeight: 600, fontSize: 13 }}>{n.title}</span>}
                  description={
                    <Flex vertical gap={2}>
                      <Text type="secondary" style={{ fontSize: 12 }}>{n.message}</Text>
                      <Text type="secondary" style={{ fontSize: 11, fontStyle: "italic" }}>{n.time}</Text>
                    </Flex>
                  }
                />
              </List.Item>
            </motion.div>
          )}
        />
        <Button block style={{ marginTop: 16, borderColor: COLORS.primary, color: COLORS.primary }}>Mark all as read</Button>
      </Drawer>

      <BottomNav />
    </div>
  );
}
