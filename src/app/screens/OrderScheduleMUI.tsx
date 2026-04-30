import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line,
} from "recharts";
import {
  Button, Card, Typography, Tag, Avatar, Select,
  Flex, Divider, Row, Col, Segmented,
} from "antd";
import {
  ArrowLeftOutlined, CarOutlined, RiseOutlined, CalendarOutlined,
  DownloadOutlined, BarChartOutlined, LineChartOutlined, ShoppingCartOutlined,
} from "@ant-design/icons";
import { BottomNav } from "../components/BottomNav";
import { COLORS, FONTS } from "../theme";

const { Title, Text } = Typography;

const allOrders = [
  { id: 1, date: "12 Apr 2026", day: "Sunday", items: "45 kg Salad Mix", location: "3 locations", status: "Confirmed", total: "€ 425.50" },
  { id: 2, date: "14 Apr 2026", day: "Tuesday", items: "60 kg Veggies & Sides", location: "3 locations", status: "Confirmed", total: "€ 580.00" },
  { id: 3, date: "16 Apr 2026", day: "Thursday", items: "38 kg Salad Mix", location: "2 locations", status: "Pending", total: "€ 362.40" },
  { id: 4, date: "19 Apr 2026", day: "Sunday", items: "52 kg Veggie Mix", location: "3 locations", status: "Draft", total: "€ 495.20" },
];

const monthlyData = [
  { month: "Oct", kg: 120, cost: 1250 },
  { month: "Nov", kg: 145, cost: 1520 },
  { month: "Dec", kg: 135, cost: 1410 },
  { month: "Jan", kg: 158, cost: 1650 },
  { month: "Feb", kg: 142, cost: 1480 },
  { month: "Mar", kg: 165, cost: 1725 },
  { month: "Apr", kg: 195, cost: 2040 },
];

const STATUS_COLOR: Record<string, { color: string; tagColor: string }> = {
  Confirmed: { color: COLORS.greenDark, tagColor: "success" },
  Pending: { color: COLORS.yellowDark, tagColor: "gold" },
  Draft: { color: "#9CA3AF", tagColor: "default" },
};

export default function OrderSchedule() {
  const [selectedMonth, setSelectedMonth] = useState("april");
  const [filterStatus, setFilterStatus] = useState("All");
  const [chartView, setChartView] = useState("Bar");

  const filtered = filterStatus === "All" ? allOrders : allOrders.filter(o => o.status === filterStatus);

  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ background: COLORS.primary, padding: "0 16px", height: 64, display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
        <Link to="/facility-dashboard">
          <Button type="text" icon={<ArrowLeftOutlined style={{ color: "white", fontSize: 18 }} />} />
        </Link>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: "white", fontWeight: 600, fontSize: 17, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Schedule & Analytics</div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 11 }}>Planning & Usage Analysis</div>
        </div>
        <Button
          icon={<DownloadOutlined style={{ color: "white" }} />}
          style={{ background: "transparent", borderColor: "rgba(255,255,255,0.35)", color: "white" }}
        >
          Export
        </Button>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: "auto", padding: "16px 16px 88px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Flex vertical gap={20}>

            {/* Stats Overview */}
            <Row gutter={[16, 16]}>
              {[
                { icon: <CarOutlined />, color: COLORS.greenDark, bg: COLORS.green + "22", label: "Monthly Usage", value: "195 kg", sub: "+18% vs. last month", subColor: COLORS.greenDark },
                { icon: <RiseOutlined />, color: COLORS.teal, bg: COLORS.teal + "22", label: "Monthly Cost", value: "€ 2,040", sub: "Avg. € 10.46/kg", subColor: "#9CA3AF" },
                { icon: <CalendarOutlined />, color: COLORS.primary, bg: COLORS.primary + "15", label: "Upcoming Orders", value: "4", sub: "Next delivery: Tomorrow", subColor: "#9CA3AF" },
              ].map((s, i) => (
                <Col xs={24} md={8} key={i}>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    <Card style={{ borderRadius: 16 }} styles={{ body: { padding: 20 } }}>
                      <Flex align="flex-start" gap={14}>
                        <Avatar size={52} style={{ background: s.bg, flexShrink: 0 }}>
                          <span style={{ fontSize: 24, color: s.color }}>{s.icon}</span>
                        </Avatar>
                        <div>
                          <Text type="secondary" style={{ fontSize: 12, display: "block", marginBottom: 4 }}>{s.label}</Text>
                          <div style={{ fontSize: 26, fontWeight: 700, color: COLORS.primary, marginBottom: 4 }}>{s.value}</div>
                          <Text style={{ fontSize: 12, color: s.subColor }}>{s.sub}</Text>
                        </div>
                      </Flex>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>

            {/* Consumption Chart */}
            <Card
              title={<span style={{ color: COLORS.primary, fontWeight: 600 }}>Usage Trend</span>}
              extra={
                <Segmented
                  value={chartView}
                  onChange={v => setChartView(v as string)}
                  options={[
                    { label: "Bar", value: "Bar", icon: <BarChartOutlined /> },
                    { label: "Line", value: "Line", icon: <LineChartOutlined /> },
                  ]}
                  size="small"
                />
              }
              style={{ borderRadius: 16 }}
            >
              <ResponsiveContainer width="100%" height={300}>
                {chartView === "Bar" ? (
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                    <XAxis dataKey="month" stroke="#9CA3AF" style={{ fontSize: "0.8rem" }} />
                    <YAxis stroke="#9CA3AF" style={{ fontSize: "0.8rem" }} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid rgba(42,31,91,0.1)" }} />
                    <Bar dataKey="kg" fill={COLORS.teal} radius={[10, 10, 0, 0]} />
                  </BarChart>
                ) : (
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                    <XAxis dataKey="month" stroke="#9CA3AF" style={{ fontSize: "0.8rem" }} />
                    <YAxis stroke="#9CA3AF" style={{ fontSize: "0.8rem" }} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid rgba(42,31,91,0.1)" }} />
                    <Line type="monotone" dataKey="kg" stroke={COLORS.teal} strokeWidth={3} dot={{ fill: COLORS.teal, r: 5 }} activeDot={{ r: 7 }} />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </Card>

            {/* Scheduled Orders */}
            <Card
              title={<span style={{ color: COLORS.primary, fontWeight: 600 }}>Scheduled Orders</span>}
              extra={
                <Select
                  size="small"
                  value={selectedMonth}
                  onChange={setSelectedMonth}
                  style={{ width: 130 }}
                  options={[
                    { value: "april", label: "April 2026" },
                    { value: "mai", label: "May 2026" },
                    { value: "juni", label: "June 2026" },
                  ]}
                />
              }
              style={{ borderRadius: 16 }}
            >
              {/* Filter Tags */}
              <Flex gap={8} wrap="wrap" style={{ marginBottom: 16 }}>
                {["All", "Confirmed", "Pending", "Draft"].map(f => (
                  <Tag
                    key={f}
                    onClick={() => setFilterStatus(f)}
                    style={{
                      cursor: "pointer", borderRadius: 8, fontWeight: 500,
                      background: filterStatus === f ? COLORS.primary : "transparent",
                      color: filterStatus === f ? "white" : COLORS.primary,
                      borderColor: COLORS.primary,
                      padding: "2px 12px",
                    }}
                  >
                    {f}
                  </Tag>
                ))}
              </Flex>

              <Flex vertical gap={10}>
                {filtered.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "32px 0", color: "#9CA3AF" }}>
                    No orders with this status
                  </div>
                ) : filtered.map((order, i) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    layout
                  >
                    <motion.div whileHover={{ x: 6 }} transition={{ duration: 0.2 }}>
                      <Card
                        style={{
                          borderRadius: 12, cursor: "pointer",
                          border: "1px solid rgba(42,31,91,0.1)",
                        }}
                        styles={{ body: { padding: 14 } }}
                      >
                        <Flex align="center" gap={14}>
                          {/* Date Box */}
                          <div style={{
                            background: STATUS_COLOR[order.status]?.color || "#9CA3AF",
                            borderRadius: 10, padding: "10px 14px", textAlign: "center",
                            minWidth: 72, flexShrink: 0, color: "white",
                          }}>
                            <div style={{ fontSize: 10, opacity: 0.9, marginBottom: 2 }}>{order.day}</div>
                            <div style={{ fontSize: 16, fontWeight: 700 }}>{order.date.split(" ")[0]} {order.date.split(" ")[1]}</div>
                          </div>
                          {/* Details */}
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 600, fontSize: 14, color: COLORS.primary, marginBottom: 6 }}>{order.items}</div>
                            <Flex gap={6} wrap="wrap">
                              <Tag icon={<CarOutlined />} style={{ fontSize: 11 }}>{order.location}</Tag>
                              <Tag style={{ background: COLORS.green + "30", color: COLORS.greenDark, borderColor: "transparent", fontWeight: 600, fontSize: 11 }}>
                                {order.total}
                              </Tag>
                            </Flex>
                          </div>
                          {/* Status */}
                          <Tag color={STATUS_COLOR[order.status]?.tagColor} style={{ fontWeight: 500, flexShrink: 0 }}>
                            {order.status}
                          </Tag>
                        </Flex>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </Flex>

              <Link to="/bulk-order">
                <Button
                  type="primary"
                  block
                  size="large"
                  icon={<ShoppingCartOutlined />}
                  style={{
                    marginTop: 16, height: 50, fontWeight: 600,
                    background: COLORS.greenDark, borderColor: COLORS.greenDark,
                  }}
                >
                  + New Order
                </Button>
              </Link>
            </Card>

            {/* Price Breakdown */}
            <Card title={<span style={{ color: COLORS.primary, fontWeight: 600 }}>Pricing per kg</span>} style={{ borderRadius: 16 }}>
              <Flex vertical gap={10}>
                {[
                  { label: "Main (Salad)", desc: "Premium mix, organic quality", price: "€ 12.50/kg", borderColor: COLORS.greenDark, bg: COLORS.green + "12" },
                  { label: "Grummes Veggie", desc: "Seasonal veggie mix", price: "€ 8.90/kg", borderColor: COLORS.teal, bg: COLORS.teal + "12" },
                  { label: "Sides", desc: "Pasta, rice, potatoes", price: "€ 6.50/kg", borderColor: COLORS.yellowDark, bg: COLORS.yellow + "55" },
                ].map((cat) => (
                  <Card
                    key={cat.label}
                    style={{ borderRadius: 12, border: `2px solid ${cat.borderColor}`, background: cat.bg }}
                    styles={{ body: { padding: "14px 18px" } }}
                  >
                    <Flex justify="space-between" align="center">
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 15, color: COLORS.primary }}>{cat.label}</div>
                        <Text type="secondary" style={{ fontSize: 12 }}>{cat.desc}</Text>
                      </div>
                      <div style={{ fontSize: 18, fontWeight: 700, color: cat.borderColor }}>{cat.price}</div>
                    </Flex>
                  </Card>
                ))}
              </Flex>
            </Card>

          </Flex>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}