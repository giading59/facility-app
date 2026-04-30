import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, Legend,
} from "recharts";
import {
  Button, Card, Typography, Tag, Avatar, Progress,
  Flex, Divider, Row, Col, Switch, Segmented, Alert, Checkbox, App,
} from "antd";
import {
  ArrowLeftOutlined, RobotOutlined, FallOutlined, RiseOutlined,
  ShoppingCartOutlined, ClockCircleOutlined, CheckCircleOutlined,
  ThunderboltOutlined, EditOutlined, BarChartOutlined, LineChartOutlined,
} from "@ant-design/icons";
import { BottomNav } from "../components/BottomNav";
import { COLORS } from "../theme";

const { Title, Text } = Typography;

const WASTE_DATA = [
  { week: "W16", delivered: 73, consumed: 67, leftover: 6, waste: 8.2 },
  { week: "W17", delivered: 68, consumed: 63, leftover: 5, waste: 7.4 },
  { week: "W18", delivered: 75, consumed: 71, leftover: 4, waste: 5.3 },
  { week: "W19", delivered: 80, consumed: 75, leftover: 5, waste: 6.3 },
  { week: "W20", delivered: 85, consumed: 81, leftover: 4, waste: 4.7 },
  { week: "W21", delivered: 78, consumed: 75, leftover: 3, waste: 3.8 },
];

const AUTO_HISTORY = [
  { id: 1, date: "Mon, Apr 28", totalKg: 78, status: "Delivered", cost: "€ 748.60", waste: "3.8%" },
  { id: 2, date: "Thu, Apr 24", totalKg: 85, status: "Delivered", cost: "€ 820.50", waste: "4.7%" },
  { id: 3, date: "Mon, Apr 21", totalKg: 80, status: "Delivered", cost: "€ 770.00", waste: "6.3%" },
  { id: 4, date: "Thu, Apr 17", totalKg: 68, status: "Delivered", cost: "€ 652.00", waste: "7.4%" },
];

interface Rec {
  id: string; product: string; category: string;
  recommendedKg: number; avgKg: number; adj: number;
  confidence: number; reason: string; color: string; selected: boolean;
}

export default function SmartOrder() {
  const { message } = App.useApp();
  const [autoEnabled, setAutoEnabled] = useState(true);
  const [frequency, setFrequency] = useState("Mon + Thu");
  const [chartView, setChartView] = useState("Waste");
  const [approved, setApproved] = useState(false);
  const [recs, setRecs] = useState<Rec[]>([
    { id: "1", product: "Mixed Salad Premium", category: "Main (Salad)", recommendedKg: 22, avgKg: 24, adj: -2, confidence: 94, reason: "High Mon/Thu usage. Leftover adj.: -2 kg", color: COLORS.green, selected: true },
    { id: "2", product: "Green Veggie Mix", category: "Grummes Veggie", recommendedKg: 16, avgKg: 17, adj: -1, confidence: 88, reason: "Stable, slight reduction from leftovers", color: COLORS.teal, selected: true },
    { id: "3", product: "Pasta Sides", category: "Sides", recommendedKg: 10, avgKg: 10, adj: 0, confidence: 91, reason: "Even usage, no adjustment needed", color: COLORS.yellowDark, selected: true },
    { id: "4", product: "Root Vegetable Assortment", category: "Grummes Veggie", recommendedKg: 8, avgKg: 7, adj: +1, confidence: 79, reason: "Growing demand in Mitte — slightly raised", color: COLORS.teal, selected: false },
    { id: "5", product: "Rice & Quinoa Mix", category: "Sides", recommendedKg: 6, avgKg: 6, adj: 0, confidence: 85, reason: "Steady usage — no change", color: COLORS.yellowDark, selected: true },
  ]);

  const toggle = (id: string) => setRecs(prev => prev.map(r => r.id === id ? { ...r, selected: !r.selected } : r));
  const selected = recs.filter(r => r.selected);
  const totalKg = selected.reduce((s, r) => s + r.recommendedKg, 0);
  const priceMap: Record<string, number> = { "Main (Salad)": 12.5, "Grummes Veggie": 8.9, "Sides": 6.5 };
  const subtotal = selected.reduce((s, r) => s + r.recommendedKg * priceMap[r.category], 0);
  const discount = totalKg >= 100 ? 0.15 : totalKg >= 50 ? 0.1 : 0;
  const finalCost = subtotal * (1 - discount);
  const avgConf = selected.length > 0 ? Math.round(selected.reduce((s, r) => s + r.confidence, 0) / selected.length) : 0;
  const wasteImprovement = ((WASTE_DATA[0].waste - WASTE_DATA[WASTE_DATA.length - 1].waste) / WASTE_DATA[0].waste * 100).toFixed(0);

  const handleApprove = () => {
    setApproved(true);
    message.success(`Order approved! ${totalKg} kg · €${finalCost.toFixed(2)}`);
  };

  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ background: COLORS.primary, padding: "0 16px", height: 64, display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
        <Link to="/facility-dashboard">
          <Button type="text" icon={<ArrowLeftOutlined style={{ color: "white", fontSize: 18 }} />} />
        </Link>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Flex align="center" gap={8}>
            <div style={{ color: "white", fontWeight: 600, fontSize: 17 }}>Smart Order</div>
            <Tag style={{ background: "rgba(157,211,160,0.3)", border: "none", color: "white", fontSize: 11, height: 20 }}>
              <RobotOutlined /> AI-Powered
            </Tag>
          </Flex>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 11 }}>Auto order optimization</div>
        </div>
        <Tag style={{ background: autoEnabled ? COLORS.greenDark : "rgba(255,255,255,0.2)", border: "none", color: "white", fontWeight: 600, padding: "4px 12px" }}>
          <ThunderboltOutlined /> {autoEnabled ? "Active" : "Inactive"}
        </Tag>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: "auto", padding: "16px 16px 88px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Flex vertical gap={20}>

            {/* Auto-Order Toggle Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card
                style={{
                  borderRadius: 18,
                  background: autoEnabled ? `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryLight} 100%)` : "white",
                  border: "none", transition: "all 0.4s",
                }}
                styles={{ body: { padding: 24 } }}
              >
                <Flex align="center" justify="space-between" gap={16} style={{ marginBottom: autoEnabled ? 16 : 0 }}>
                  <Flex align="center" gap={14}>
                    <Avatar size={52} style={{ background: autoEnabled ? "rgba(157,211,160,0.2)" : "rgba(42,31,91,0.08)" }}>
                      <RobotOutlined style={{ fontSize: 26, color: autoEnabled ? COLORS.green : COLORS.primary }} />
                    </Avatar>
                    <div>
                      <div style={{ color: autoEnabled ? "white" : COLORS.primary, fontWeight: 700, fontSize: 17 }}>Auto Order</div>
                      <div style={{ color: autoEnabled ? "rgba(255,255,255,0.65)" : "#9CA3AF", fontSize: 13 }}>2× per week · AI-optimized quantities</div>
                    </div>
                  </Flex>
                  <Switch checked={autoEnabled} onChange={setAutoEnabled} style={{ flexShrink: 0 }} />
                </Flex>
                {autoEnabled && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Divider style={{ borderColor: "rgba(255,255,255,0.15)", margin: "0 0 16px" }} />
                    <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, marginBottom: 10 }}>Frequency:</div>
                    <Segmented
                      value={frequency} onChange={v => setFrequency(v as string)}
                      options={["Mon + Thu", "Tue + Fri", "Mon + Wed"]}
                      style={{ background: "rgba(255,255,255,0.12)" }}
                    />
                    <Row gutter={24} style={{ marginTop: 16 }}>
                      {[
                        { label: "Next Auto-Order", val: "Mon, May 5", color: "white" },
                        { label: "AI Confidence", val: `${avgConf}%`, color: COLORS.green },
                        { label: "Total", val: `${totalKg} kg`, color: "white" },
                      ].map(s => (
                        <Col key={s.label}>
                          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11 }}>{s.label}</div>
                          <div style={{ color: s.color, fontWeight: 700, fontSize: 16 }}>{s.val}</div>
                        </Col>
                      ))}
                    </Row>
                  </motion.div>
                )}
              </Card>
            </motion.div>

            {/* KPI Cards */}
            <Row gutter={[14, 14]}>
              {[
                { label: "Food Waste", val: `${WASTE_DATA[WASTE_DATA.length - 1].waste}%`, sub: `↓ ${wasteImprovement}% less than 6 weeks ago`, icon: <FallOutlined />, color: COLORS.greenDark, bg: COLORS.green + "20" },
                { label: "Avg. Accuracy", val: "92%", sub: "Last 8 orders", icon: <RobotOutlined />, color: COLORS.teal, bg: COLORS.teal + "20" },
                { label: "Monthly Savings", val: "€ 124", sub: "vs. manual over-ordering", icon: <RiseOutlined />, color: COLORS.primary, bg: COLORS.primary + "14" },
              ].map((k, i) => (
                <Col xs={24} sm={8} key={i}>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }}>
                    <Card style={{ borderRadius: 16, background: k.bg, border: "1px solid rgba(42,31,91,0.08)" }} styles={{ body: { padding: 18 } }}>
                      <Flex gap={12} align="flex-start">
                        <Avatar size={44} style={{ background: k.color + "25", flexShrink: 0 }}>
                          <span style={{ color: k.color, fontSize: 20 }}>{k.icon}</span>
                        </Avatar>
                        <div>
                          <Text type="secondary" style={{ fontSize: 11, display: "block" }}>{k.label}</Text>
                          <div style={{ color: k.color, fontWeight: 700, fontSize: 24, margin: "2px 0" }}>{k.val}</div>
                          <Text type="secondary" style={{ fontSize: 11 }}>{k.sub}</Text>
                        </div>
                      </Flex>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>

            {/* AI Recommendations */}
            <Card
              title={<Flex align="center" gap={8}><RobotOutlined style={{ color: COLORS.primary }} /><span style={{ color: COLORS.primary }}>Next Order Recommendation</span></Flex>}
              extra={<Tag icon={<ClockCircleOutlined />} color="blue" style={{ fontWeight: 500 }}>Mon, May 5, 2026</Tag>}
              style={{ borderRadius: 16 }}
            >
              <Text type="secondary" style={{ fontSize: 12, display: "block", marginBottom: 16 }}>Based on avg. usage + leftover reports (last 4 weeks)</Text>
              <Flex vertical gap={10}>
                {recs.map((rec, i) => (
                  <motion.div key={rec.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
                    <div style={{
                      padding: 14, borderRadius: 12,
                      border: `2px solid ${rec.selected ? rec.color + "50" : "rgba(42,31,91,0.08)"}`,
                      background: rec.selected ? rec.color + "08" : "rgba(0,0,0,0.01)", transition: "all 0.2s",
                    }}>
                      <Flex align="flex-start" gap={10}>
                        <Checkbox checked={rec.selected} onChange={() => toggle(rec.id)} style={{ marginTop: 2 }} />
                        <div style={{ flex: 1 }}>
                          <Flex justify="space-between" align="flex-start">
                            <div style={{ fontWeight: 600, fontSize: 14, color: COLORS.primary }}>{rec.product}</div>
                            <div style={{ textAlign: "right" }}>
                              <div style={{ color: COLORS.greenDark, fontWeight: 700, fontSize: 20 }}>{rec.recommendedKg} kg</div>
                              <Flex align="center" gap={4} justify="flex-end">
                                {rec.adj < 0 ? <FallOutlined style={{ fontSize: 12, color: COLORS.greenDark }} /> : rec.adj > 0 ? <RiseOutlined style={{ fontSize: 12, color: COLORS.yellowDark }} /> : null}
                                <Text type="secondary" style={{ fontSize: 11 }}>Ø {rec.avgKg} kg{rec.adj !== 0 ? ` (${rec.adj > 0 ? "+" : ""}${rec.adj} kg)` : ""}</Text>
                              </Flex>
                            </div>
                          </Flex>
                          <Flex justify="space-between" align="center" style={{ marginTop: 8 }}>
                            <Text type="secondary" style={{ fontSize: 11 }}>{rec.reason}</Text>
                            <Flex align="center" gap={4}>
                              <Text type="secondary" style={{ fontSize: 11 }}>AI</Text>
                              <div style={{ width: 52, height: 5, background: "rgba(0,0,0,0.08)", borderRadius: 3, overflow: "hidden" }}>
                                <div style={{ width: `${rec.confidence}%`, height: "100%", borderRadius: 3, background: rec.confidence >= 90 ? COLORS.greenDark : rec.confidence >= 80 ? COLORS.yellowDark : COLORS.error }} />
                              </div>
                              <Text style={{ fontSize: 11, fontWeight: 600, color: rec.confidence >= 90 ? COLORS.greenDark : rec.confidence >= 80 ? COLORS.yellowDark : COLORS.error }}>{rec.confidence}%</Text>
                            </Flex>
                          </Flex>
                        </div>
                      </Flex>
                    </div>
                  </motion.div>
                ))}
              </Flex>

              <Divider style={{ margin: "16px 0" }} />

              <Card style={{ borderRadius: 12, background: COLORS.green + "10", border: `2px solid ${COLORS.greenDark}`, marginBottom: 14 }} styles={{ body: { padding: 14 } }}>
                <Row gutter={16} align="middle">
                  <Col span={8}>
                    <Text type="secondary" style={{ fontSize: 11 }}>Weight</Text>
                    <div style={{ fontSize: 24, fontWeight: 700, color: COLORS.primary }}>{totalKg} kg</div>
                  </Col>
                  <Col span={8}>
                    <Text type="secondary" style={{ fontSize: 11 }}>{discount > 0 ? "Total" : "Cost"}</Text>
                    <div style={{ fontSize: discount > 0 ? 14 : 18, fontWeight: 600, color: "#9CA3AF", textDecoration: discount > 0 ? "line-through" : "none" }}>€{subtotal.toFixed(2)}</div>
                    {discount > 0 && <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.greenDark }}>€{finalCost.toFixed(2)}</div>}
                  </Col>
                  <Col span={8}>
                    {discount > 0 ? (
                      <Tag color="success" style={{ fontWeight: 700, fontSize: 14 }}>{(discount * 100).toFixed(0)}% off</Tag>
                    ) : totalKg < 50 ? (
                      <div>
                        <Progress percent={(totalKg / 50) * 100} showInfo={false} strokeColor={COLORS.teal} size="small" style={{ marginBottom: 4 }} />
                        <Text type="secondary" style={{ fontSize: 11 }}>{50 - totalKg} kg to 10% off</Text>
                      </div>
                    ) : null}
                  </Col>
                </Row>
              </Card>

              {!approved ? (
                <Flex gap={10}>
                  <Link to="/bulk-order" style={{ flex: 1 }}>
                    <Button block icon={<EditOutlined />} style={{ height: 46, borderColor: COLORS.primary, color: COLORS.primary }}>Edit</Button>
                  </Link>
                  <Button
                    type="primary" icon={<CheckCircleOutlined />} onClick={handleApprove}
                    disabled={selected.length === 0}
                    style={{ flex: 2, height: 46, fontWeight: 600, background: COLORS.greenDark, borderColor: COLORS.greenDark }}
                  >
                    Approve
                  </Button>
                </Flex>
              ) : (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                  <Alert
                    type="success" icon={<CheckCircleOutlined />}
                    message={<strong>Order approved!</strong>}
                    description="Auto-order for Mon, May 5 was triggered."
                    showIcon style={{ borderRadius: 10 }}
                    action={<Link to="/delivery-tracking"><Button size="small" type="link" style={{ color: COLORS.greenDark }}>Tracking</Button></Link>}
                  />
                </motion.div>
              )}
            </Card>

            {/* Waste Chart */}
            <Card
              title={<Flex align="center" gap={8}><FallOutlined style={{ color: COLORS.greenDark }} /><span style={{ color: COLORS.primary }}>Waste Optimization</span></Flex>}
              extra={
                <Segmented
                  value={chartView} onChange={v => setChartView(v as string)} size="small"
                  options={[{ label: "Waste", value: "Waste", icon: <LineChartOutlined /> }, { label: "Volume", value: "Volume", icon: <BarChartOutlined /> }]}
                />
              }
              style={{ borderRadius: 16 }}
            >
              <Text type="secondary" style={{ fontSize: 12, display: "block", marginBottom: 14 }}>Waste rate declining with AI recommendations and leftover reports</Text>
              <ResponsiveContainer width="100%" height={260}>
                {chartView === "Waste" ? (
                  <AreaChart data={WASTE_DATA}>
                    <defs>
                      <linearGradient id="wasteGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={COLORS.green} stopOpacity={0.3} />
                        <stop offset="95%" stopColor={COLORS.green} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                    <XAxis dataKey="week" stroke="#9CA3AF" style={{ fontSize: "0.75rem" }} />
                    <YAxis stroke="#9CA3AF" style={{ fontSize: "0.75rem" }} unit="%" />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid rgba(42,31,91,0.1)" }} formatter={(v: number) => [`${v}%`, "Waste rate"]} />
                    <Area type="monotone" dataKey="waste" stroke={COLORS.greenDark} strokeWidth={3} fill="url(#wasteGrad)" dot={{ fill: COLORS.greenDark, r: 5 }} activeDot={{ r: 7 }} />
                  </AreaChart>
                ) : (
                  <BarChart data={WASTE_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                    <XAxis dataKey="week" stroke="#9CA3AF" style={{ fontSize: "0.75rem" }} />
                    <YAxis stroke="#9CA3AF" style={{ fontSize: "0.75rem" }} unit=" kg" />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid rgba(42,31,91,0.1)" }} />
                    <Legend />
                    <Bar dataKey="consumed" name="Consumed" fill={COLORS.green} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="leftover" name="Leftover" fill={COLORS.error} radius={[4, 4, 0, 0]} />
                  </BarChart>
                )}
              </ResponsiveContainer>
              {chartView === "Waste" && (
                <Alert type="success" style={{ marginTop: 12, borderRadius: 10 }}
                  message={<>Waste rate dropped from {WASTE_DATA[0].waste}% to {WASTE_DATA[WASTE_DATA.length - 1].waste}% — <strong>{wasteImprovement}%</strong> reduction in 6 weeks.</>}
                />
              )}
            </Card>

            {/* Auto-Order History */}
            <Card title={<span style={{ color: COLORS.primary }}>Auto-Order History</span>} extra={<Tag>Last 4 orders</Tag>} style={{ borderRadius: 16 }}>
              <Flex vertical gap={8}>
                {AUTO_HISTORY.map((o, i) => (
                  <motion.div key={o.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                    <Card style={{ borderRadius: 12, border: "1px solid rgba(42,31,91,0.1)", cursor: "pointer" }} styles={{ body: { padding: 12 } }}>
                      <Row gutter={12} align="middle">
                        <Col span={7}>
                          <Flex align="center" gap={6}>
                            <ThunderboltOutlined style={{ color: COLORS.greenDark, fontSize: 16 }} />
                            <div>
                              <Text type="secondary" style={{ fontSize: 10 }}>Auto</Text>
                              <div style={{ fontWeight: 600, fontSize: 13 }}>{o.date}</div>
                            </div>
                          </Flex>
                        </Col>
                        <Col span={5}>
                          <Text type="secondary" style={{ fontSize: 10, display: "block" }}>Qty</Text>
                          <div style={{ fontWeight: 600, fontSize: 13 }}>{o.totalKg} kg</div>
                        </Col>
                        <Col span={6}>
                          <Text type="secondary" style={{ fontSize: 10, display: "block" }}>Cost</Text>
                          <div style={{ fontWeight: 600, fontSize: 13, color: COLORS.greenDark }}>{o.cost}</div>
                        </Col>
                        <Col span={6} style={{ textAlign: "right" }}>
                          <Tag color="success" style={{ fontWeight: 600, fontSize: 11 }}>♻ {o.waste}</Tag>
                        </Col>
                      </Row>
                    </Card>
                  </motion.div>
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
