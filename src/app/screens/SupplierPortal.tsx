import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Button, Card, Typography, Tag, Avatar, Progress,
  Flex, Divider, Row, Col, Tabs, Alert, Modal,
  Form, Select, Input, InputNumber, App, List, Badge,
} from "antd";
import {
  ArrowLeftOutlined, AlertOutlined, ScissorOutlined, HistoryOutlined,
  CheckCircleOutlined, WarningOutlined, CarOutlined, SendOutlined,
  FallOutlined, PlusOutlined, MinusOutlined, CameraOutlined, CloseOutlined,
} from "@ant-design/icons";
import { COLORS, FONTS } from "../theme";

const { Title, Text } = Typography;

interface LeftoverEntry {
  id: string;
  product: string;
  category: string;
  deliveredKg: number;
  leftoverKg: number;
  location: string;
  color: string;
}

interface DamageReport {
  id: number;
  date: string;
  product: string;
  damageType: string;
  quantity: string;
  location: string;
  status: "Eingereicht" | "In Bearbeitung" | "Erledigt";
}

const SUPPLIER_GREEN = "#2A7A6B";

export default function SupplierPortal() {
  const { message } = App.useApp();
  const [activeTab, setActiveTab] = useState("leftovers");
  const [damageModalOpen, setDamageModalOpen] = useState(false);
  const [form] = Form.useForm();

  const [leftovers, setLeftovers] = useState<LeftoverEntry[]>([
    { id: "1", product: "Mixed Salad Premium", category: "Main (Salad)", deliveredKg: 25, leftoverKg: 3, location: "CoWork Mitte", color: COLORS.green },
    { id: "2", product: "Green Veggie Mix", category: "Grummes Veggie", deliveredKg: 18, leftoverKg: 2, location: "CoWork Kreuzberg", color: COLORS.teal },
    { id: "3", product: "Pasta Sides", category: "Sides", deliveredKg: 12, leftoverKg: 4, location: "CoWork Prenzlauer Berg", color: COLORS.yellowDark },
    { id: "4", product: "Root Vegetable Assortment", category: "Grummes Veggie", deliveredKg: 8, leftoverKg: 0, location: "CoWork Mitte", color: COLORS.teal },
  ]);

  const [damageReports, setDamageReports] = useState<DamageReport[]>([
    { id: 1, date: "Apr 28, 2026", product: "Mixed Salad Premium", damageType: "Damaged packaging", quantity: "5 kg", location: "CoWork Mitte", status: "Erledigt" },
    { id: 2, date: "Apr 25, 2026", product: "Green Veggie Mix", damageType: "Temperature damage", quantity: "3 kg", location: "CoWork Kreuzberg", status: "In Bearbeitung" },
    { id: 3, date: "Apr 22, 2026", product: "Pasta Sides", damageType: "Moisture damage", quantity: "2 kg", location: "CoWork Prenzlauer Berg", status: "Erledigt" },
  ]);

  const totalDelivered = leftovers.reduce((s, e) => s + e.deliveredKg, 0);
  const totalLeftover = leftovers.reduce((s, e) => s + e.leftoverKg, 0);
  const wasteRate = totalDelivered > 0 ? (totalLeftover / totalDelivered) * 100 : 0;

  const updateLeftover = (id: string, delta: number) => {
    setLeftovers(prev => prev.map(e => e.id === id ? { ...e, leftoverKg: Math.max(0, Math.min(e.deliveredKg, e.leftoverKg + delta)) } : e));
  };

  const submitLeftovers = () => {
    message.success("Leftovers reported! Order recommendation will be adjusted.");
  };

  const submitDamage = () => {
    form.validateFields().then(values => {
      const newReport: DamageReport = {
        id: Date.now(),
        date: "Apr 30, 2026",
        product: values.product,
        damageType: values.damageType,
        quantity: `${values.quantity} kg`,
        location: values.location,
        status: "Eingereicht",
      };
      setDamageReports(prev => [newReport, ...prev]);
      form.resetFields();
      setDamageModalOpen(false);
      message.success("Damage report submitted! Our team will follow up.");
    });
  };

  const statusColor: Record<string, string> = {
    Erledigt: "success",
    "In Bearbeitung": "warning",
    Eingereicht: "processing",
  };

  const historyItems = [
    { date: "Apr 29", type: "Leftovers", desc: "4.5 kg leftovers reported — 3 locations", color: "green" },
    { date: "Apr 27", type: "Damage", desc: "Temperature damage — Kreuzberg, 3 kg", color: "red" },
    { date: "Apr 26", type: "Leftovers", desc: "2.0 kg leftovers reported — Mitte", color: "green" },
    { date: "Apr 24", type: "Leftovers", desc: "6.5 kg leftovers reported — 3 locations", color: "gold" },
    { date: "Apr 22", type: "Damage", desc: "Moisture damage — Prenzlauer Berg, 2 kg", color: "red" },
  ];

  const tabItems = [
    {
      key: "leftovers",
      label: (
        <Flex align="center" gap={6}>
          <ScissorOutlined />
          <span>Report Leftovers</span>
        </Flex>
      ),
      children: (
        <Flex vertical gap={16}>
          {/* Waste Rate Card */}
          <Card
            style={{
              borderRadius: 14,
              border: `2px solid ${wasteRate > 15 ? COLORS.error : COLORS.greenDark}`,
              background: wasteRate > 15 ? "rgba(229,115,115,0.06)" : "rgba(106,187,110,0.06)",
            }}
            styles={{ body: { padding: 16 } }}
          >
            <Flex justify="space-between" align="center" style={{ marginBottom: 10 }}>
              <Flex align="center" gap={10}>
                <FallOutlined style={{ fontSize: 22, color: wasteRate > 15 ? COLORS.error : COLORS.greenDark }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>Waste rate today</div>
                  <Text type="secondary" style={{ fontSize: 12 }}>Target: under 10%</Text>
                </div>
              </Flex>
              <Tag color={wasteRate > 15 ? "error" : "success"} style={{ fontWeight: 700, fontSize: 14, padding: "2px 12px" }}>
                {wasteRate.toFixed(1)}%
              </Tag>
            </Flex>
            <Progress
              percent={Math.min(wasteRate * 5, 100)}
              showInfo={false}
              strokeColor={wasteRate > 15 ? COLORS.error : COLORS.greenDark}
              trailColor="rgba(0,0,0,0.06)"
            />
          </Card>

          {/* Leftover Items */}
          {leftovers.map((e, i) => {
            const pct = e.deliveredKg > 0 ? (e.leftoverKg / e.deliveredKg) * 100 : 0;
            return (
              <motion.div key={e.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                <Card style={{ borderRadius: 14 }} styles={{ body: { padding: 16 } }}>
                  <Flex justify="space-between" align="flex-start" style={{ marginBottom: 10 }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: COLORS.primary }}>{e.product}</div>
                      <Flex gap={6} style={{ marginTop: 4 }}>
                        <Tag style={{ fontSize: 11, background: e.color + "25", borderColor: "transparent" }}>{e.category}</Tag>
                        <Tag variant="outlined" style={{ fontSize: 11 }}>{e.location}</Tag>
                      </Flex>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Text type="secondary" style={{ fontSize: 11 }}>Delivered</Text>
                      <div style={{ fontWeight: 700, fontSize: 16, color: COLORS.primary }}>{e.deliveredKg} kg</div>
                    </div>
                  </Flex>

                  <Flex justify="space-between" style={{ marginBottom: 6 }}>
                    <Text type="secondary" style={{ fontSize: 12 }}>Leftovers</Text>
                    <Text style={{ fontSize: 12, fontWeight: 600, color: pct > 15 ? COLORS.error : COLORS.greenDark }}>
                      {pct.toFixed(0)}% remaining
                    </Text>
                  </Flex>
                  <Progress
                    percent={pct}
                    showInfo={false}
                    strokeColor={pct > 15 ? COLORS.error : COLORS.greenDark}
                    trailColor="rgba(0,0,0,0.06)"
                    style={{ marginBottom: 12 }}
                  />

                  <Flex justify="space-between" align="center">
                    <Text type="secondary" style={{ fontSize: 13 }}>Leftover amount:</Text>
                    <Flex align="center" gap={10} style={{ background: "#F5F5F5", borderRadius: 20, padding: "4px 10px", border: "1.5px solid rgba(42,31,91,0.1)" }}>
                      <Button
                        type="text" size="small" icon={<MinusOutlined />}
                        onClick={() => updateLeftover(e.id, -0.5)}
                        style={{ color: COLORS.error }}
                      />
                      <Text style={{ minWidth: 64, textAlign: "center", fontWeight: 600, color: pct > 15 ? COLORS.error : COLORS.primary }}>
                        {e.leftoverKg} kg
                      </Text>
                      <Button
                        type="text" size="small" icon={<PlusOutlined />}
                        onClick={() => updateLeftover(e.id, 0.5)}
                        style={{ color: COLORS.greenDark }}
                      />
                    </Flex>
                  </Flex>
                </Card>
              </motion.div>
            );
          })}

          <Alert
            type="info"
            showIcon
            message="Reported leftovers automatically feed into the AI order recommendation and reduce future quantities."
            style={{ borderRadius: 10 }}
          />

          <Button
            type="primary" block size="large"
            icon={<SendOutlined />}
            onClick={submitLeftovers}
            style={{ background: SUPPLIER_GREEN, borderColor: SUPPLIER_GREEN, height: 52, fontWeight: 600 }}
          >
            Confirm & Send Leftovers
          </Button>
        </Flex>
      ),
    },
    {
      key: "damage",
      label: (
        <Flex align="center" gap={6}>
          <Badge count={1} color="red" size="small">
            <AlertOutlined />
          </Badge>
          <span>Damage</span>
        </Flex>
      ),
      children: (
        <Flex vertical gap={14}>
          <Flex justify="space-between" align="center">
            <div>
              <Title level={5} style={{ color: COLORS.primary, margin: 0 }}>Transport Damage</Title>
              <Text type="secondary" style={{ fontSize: 12 }}>Report damaged products or containers</Text>
            </div>
            <Button
              danger icon={<AlertOutlined />}
              onClick={() => setDamageModalOpen(true)}
            >
              New Report
            </Button>
          </Flex>

          <Alert type="warning" showIcon message="1 open damage report is being reviewed. Our quality team is on it." style={{ borderRadius: 10 }} />

          {damageReports.map((r, i) => (
            <motion.div key={r.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <Card
                style={{
                  borderRadius: 14,
                  border: `2px solid ${r.status === "In Bearbeitung" ? COLORS.yellowDark : r.status === "Eingereicht" ? COLORS.teal : "rgba(42,31,91,0.1)"}`,
                }}
                styles={{ body: { padding: 16 } }}
              >
                <Flex justify="space-between" align="flex-start" style={{ marginBottom: 10 }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: COLORS.primary }}>{r.product}</div>
                    <Tag icon={<WarningOutlined />} color="error" style={{ marginTop: 4, fontSize: 11 }}>{r.damageType}</Tag>
                  </div>
                  <Tag color={statusColor[r.status] as any} style={{ fontWeight: 500 }}>{r.status}</Tag>
                </Flex>
                <Divider style={{ margin: "8px 0" }} />
                <Row gutter={16}>
                  {[{ label: "Quantity", val: r.quantity }, { label: "Location", val: r.location }, { label: "Date", val: r.date }].map(col => (
                    <Col span={8} key={col.label}>
                      <Text type="secondary" style={{ fontSize: 11, display: "block" }}>{col.label}</Text>
                      <Text style={{ fontWeight: 600, fontSize: 12 }}>{col.val}</Text>
                    </Col>
                  ))}
                </Row>
              </Card>
            </motion.div>
          ))}
        </Flex>
      ),
    },
    {
      key: "history",
      label: (
        <Flex align="center" gap={6}>
          <HistoryOutlined />
          <span>History</span>
        </Flex>
      ),
      children: (
        <Flex vertical gap={16}>
          {/* Summary */}
          <Row gutter={[12, 12]}>
            {[
              { label: "Avg. Waste Rate", value: "8.4%", color: COLORS.greenDark },
              { label: "Damage Reports", value: "3", color: COLORS.error },
              { label: "Total Deliveries", value: "24", color: COLORS.teal },
            ].map((s, i) => (
              <Col span={8} key={i}>
                <Card style={{ textAlign: "center", borderRadius: 12 }} styles={{ body: { padding: 14 } }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: s.color }}>{s.value}</div>
                  <Text type="secondary" style={{ fontSize: 11 }}>{s.label}</Text>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Timeline */}
          <List
            dataSource={historyItems}
            renderItem={(item, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}>
                <List.Item style={{ padding: "8px 0", border: "none" }}>
                  <Flex align="center" gap={10} style={{ width: "100%" }}>
                    <Text type="secondary" style={{ minWidth: 56, fontSize: 12, textAlign: "right" }}>{item.date}</Text>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", flexShrink: 0, background: item.color === "green" ? COLORS.greenDark : item.color === "red" ? COLORS.error : COLORS.yellowDark }} />
                    <Card style={{ flex: 1, borderRadius: 10 }} styles={{ body: { padding: "8px 14px" } }}>
                      <Flex justify="space-between" align="center">
                        <Text style={{ fontSize: 13 }}>{item.desc}</Text>
                        <Tag color={item.color} style={{ fontSize: 11, flexShrink: 0 }}>{item.type}</Tag>
                      </Flex>
                    </Card>
                  </Flex>
                </List.Item>
              </motion.div>
            )}
          />
        </Flex>
      ),
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#F0F7F5", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #2A7A6B 0%, #1A5A4B 100%)", padding: "0 16px", height: 64, display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
        <Link to="/facility-dashboard">
          <Button type="text" icon={<ArrowLeftOutlined style={{ color: "white", fontSize: 18 }} />} />
        </Link>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: "white", fontWeight: 600, fontSize: 17, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Supplier Portal</div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 11 }}>Grummes Gemüse GmbH</div>
        </div>
        <Avatar style={{ background: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.4)", color: "white", fontWeight: 700 }}>
          GG
        </Avatar>
      </div>

      {/* Stats Banner */}
      <div style={{ background: "#1A5A4B", padding: "10px 16px 14px" }}>
        <Row gutter={0}>
          {[
            { val: `${totalDelivered} kg`, label: "Delivered today", color: "white" },
            { val: `${totalLeftover} kg`, label: "Leftovers reported", color: COLORS.green },
            { val: `${wasteRate.toFixed(1)}%`, label: "Waste rate", color: wasteRate > 15 ? "#E57373" : COLORS.green },
          ].map((s, i) => (
            <Col span={8} key={i} style={{ textAlign: "center" }}>
              <div style={{ color: s.color, fontSize: 22, fontWeight: 700 }}>{s.val}</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 11 }}>{s.label}</div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Tabs */}
      <div style={{ flex: 1, overflow: "auto" }}>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={tabItems.map(t => ({ ...t, children: <div style={{ padding: "16px", maxWidth: 800, margin: "0 auto" }}>{t.children}</div> }))}
          style={{ background: "white" }}
          tabBarStyle={{ margin: 0, padding: "0 16px", background: "white", borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          tabBarGutter={16}
        />
      </div>

      {/* Damage Report Modal */}
      <Modal
        open={damageModalOpen}
        onCancel={() => setDamageModalOpen(false)}
        title={<span style={{ color: COLORS.primary }}>Report Transport Damage</span>}
        footer={
          <Flex gap={10}>
            <Button onClick={() => setDamageModalOpen(false)} style={{ flex: 1 }}>Cancel</Button>
            <Button danger type="primary" icon={<SendOutlined />} onClick={submitDamage} style={{ flex: 2 }}>
              Submit Report
            </Button>
          </Flex>
        }
        styles={{ body: { paddingTop: 16 } }}
      >
        <Form form={form} layout="vertical" requiredMark={false}>
          <Alert type="error" message="Report damages as quickly as possible after discovery." style={{ marginBottom: 16, borderRadius: 8 }} />
          <Form.Item name="location" label="Location" rules={[{ required: true, message: "Please select a location" }]}>
            <Select placeholder="Select location" options={[
              { value: "CoWork Mitte", label: "CoWork Berlin Mitte" },
              { value: "CoWork Kreuzberg", label: "CoWork Kreuzberg" },
              { value: "CoWork Prenzlauer Berg", label: "CoWork Prenzlauer Berg" },
            ]} />
          </Form.Item>
          <Form.Item name="product" label="Affected Product" rules={[{ required: true }]}>
            <Select placeholder="Select product" options={[
              { value: "Mixed Salad Premium", label: "Mixed Salad Premium" },
              { value: "Green Veggie Mix", label: "Green Veggie Mix" },
              { value: "Pasta Sides", label: "Pasta Sides" },
              { value: "Root Vegetable Assortment", label: "Root Vegetable Assortment" },
            ]} />
          </Form.Item>
          <Form.Item name="damageType" label="Damage Type" rules={[{ required: true }]}>
            <Select placeholder="Type of damage" options={[
              { value: "Damaged packaging", label: "Damaged packaging" },
              { value: "Temperature damage", label: "Temperature damage (cold chain)" },
              { value: "Moisture damage", label: "Moisture damage" },
              { value: "Physical damage", label: "Physical damage" },
              { value: "Mould", label: "Mould / Spoilage" },
            ]} />
          </Form.Item>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item name="quantity" label="Quantity (kg)">
                <InputNumber min={0.5} step={0.5} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="description" label="Description (optional)">
            <Input.TextArea rows={3} placeholder="Details about the damage..." />
          </Form.Item>
          <Button type="dashed" block icon={<CameraOutlined />} style={{ height: 46 }}>
            Add Photos
          </Button>
        </Form>
      </Modal>
    </div>
  );
}