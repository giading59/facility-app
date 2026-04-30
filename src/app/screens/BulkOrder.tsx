import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Button, Card, Typography, Tag, Alert, Select, Row, Col,
  Flex, App, DatePicker,
} from "antd";
import {
  ArrowLeftOutlined, ShoppingCartOutlined, DeleteOutlined,
  PlusOutlined, MinusOutlined, PlusSquareOutlined, ThunderboltOutlined,
} from "@ant-design/icons";
import { BottomNav } from "../components/BottomNav";
import { COLORS } from "../theme";

const { Title, Text } = Typography;

interface OrderItem {
  id: string;
  name: string;
  category: string;
  pricePerKg: number;
  kg: number;
  image: string;
  minOrder: number;
}

const INITIAL_ITEMS: OrderItem[] = [
  { id: "1", name: "Mixed Salad Premium", category: "Main (Salad)", pricePerKg: 12.50, kg: 10, image: "https://images.unsplash.com/photo-1647268902830-298d9b6471ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", minOrder: 5 },
  { id: "2", name: "Green Veggie Mix", category: "Grummes Veggie", pricePerKg: 8.90, kg: 15, image: "https://images.unsplash.com/photo-1605034298551-baacf17591d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", minOrder: 10 },
  { id: "3", name: "Pasta Sides", category: "Sides", pricePerKg: 6.50, kg: 8, image: "https://images.unsplash.com/photo-1723608334799-e6398469cb04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", minOrder: 5 },
];

const AVAILABLE_PRODUCTS = [
  { id: "4", name: "Caesar Salad Mix", category: "Main (Salad)", pricePerKg: 13.90, image: "https://images.unsplash.com/photo-1765894711192-d35787eee3b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", minOrder: 5 },
  { id: "5", name: "Root Vegetable Assortment", category: "Grummes Veggie", pricePerKg: 7.50, image: "https://images.unsplash.com/photo-1552958837-114170ad6370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", minOrder: 10 },
  { id: "6", name: "Rice & Quinoa Mix", category: "Sides", pricePerKg: 5.90, image: "https://images.unsplash.com/photo-1631880383152-f29099b0fd16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", minOrder: 5 },
];

export default function BulkOrder() {
  const { message } = App.useApp();
  const [items, setItems] = useState<OrderItem[]>(INITIAL_ITEMS);
  const [showCatalog, setShowCatalog] = useState(false);

  const updateKg = (id: string, delta: number) => {
    setItems(prev => prev.map(it => it.id === id ? { ...it, kg: Math.max(it.minOrder, it.kg + delta) } : it));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(it => it.id !== id));
  };

  const addProduct = (p: typeof AVAILABLE_PRODUCTS[0]) => {
    if (items.find(it => it.id === p.id)) { message.warning("Already in order"); return; }
    setItems(prev => [...prev, { ...p, kg: p.minOrder }]);
    setShowCatalog(false);
    message.success(`${p.name} added`);
  };

  const totalKg = items.reduce((s, it) => s + it.kg, 0);
  const subtotal = items.reduce((s, it) => s + it.kg * it.pricePerKg, 0);
  const discount = totalKg >= 100 ? 0.15 : totalKg >= 50 ? 0.1 : 0;
  const discountAmt = subtotal * discount;
  const totalPrice = subtotal - discountAmt;
  const freeDelivery = totalKg >= 75;

  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ background: COLORS.primary, padding: "0 16px", height: 64, display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
        <Link to="/facility-dashboard">
          <Button type="text" icon={<ArrowLeftOutlined style={{ color: "white", fontSize: 18 }} />} />
        </Link>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: "white", fontWeight: 600, fontSize: 17 }}>New Order</div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 11 }}>{items.length} item{items.length !== 1 ? "s" : ""}</div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 10, padding: "6px 14px", textAlign: "center" }}>
          <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 10 }}>Total</div>
          <div style={{ color: "white", fontWeight: 700, fontSize: 16 }}>{totalKg} kg</div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div style={{ flex: 1, overflow: "auto", padding: "16px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Flex vertical gap={16}>

            {/* Smart Order Banner */}
            <Link to="/smart-order">
              <Card
                style={{ background: "linear-gradient(135deg, #2A1F5B 0%, #3A2F6B 100%)", borderRadius: 14, border: "none", cursor: "pointer" }}
                styles={{ body: { padding: "14px 18px" } }}
              >
                <Flex align="center" gap={12}>
                  <ThunderboltOutlined style={{ fontSize: 24, color: COLORS.green }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "white", fontWeight: 600, fontSize: 14 }}>AI Recommendation</div>
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 12 }}>62 kg optimized from usage & leftovers</div>
                  </div>
                  <Tag style={{ background: COLORS.green, color: COLORS.primary, border: "none", fontWeight: 700, borderRadius: 8 }}>View</Tag>
                </Flex>
              </Card>
            </Link>

            {/* Bulk Discount Info */}
            <Card style={{ background: COLORS.yellow + "88", borderRadius: 14, border: "1px solid rgba(42,31,91,0.12)" }} styles={{ body: { padding: "14px 18px" } }}>
              <Flex align="center" gap={12} wrap="wrap">
                <ShoppingCartOutlined style={{ fontSize: 22, color: COLORS.primary }} />
                <Text style={{ color: COLORS.primary, fontWeight: 600 }}>Bulk Benefits:</Text>
                {["50 kg → 10% off", "100 kg → 15% off", "75 kg → Free delivery"].map(l => (
                  <Tag key={l} style={{ background: "white", color: COLORS.primary, fontWeight: 600, borderRadius: 8, border: "1px solid rgba(42,31,91,0.2)" }}>{l}</Tag>
                ))}
              </Flex>
            </Card>

            {/* Order Items */}
            <Title level={5} style={{ color: COLORS.primary, margin: 0 }}>Your Items</Title>
            <Flex vertical gap={12}>
              {items.map((item, i) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                  <Card style={{ borderRadius: 16 }} styles={{ body: { padding: 16 } }}>
                    <Flex gap={14} align="flex-start">
                      <img src={item.image} alt={item.name} style={{ width: 90, height: 90, objectFit: "cover", borderRadius: 10, flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <Flex justify="space-between" align="flex-start" style={{ marginBottom: 6 }}>
                          <div style={{ fontWeight: 600, fontSize: 15, color: COLORS.primary }}>{item.name}</div>
                          <Button type="text" danger icon={<DeleteOutlined />} size="small" onClick={() => removeItem(item.id)} />
                        </Flex>
                        <Flex align="center" gap={4} style={{ marginBottom: 10 }}>
                          <span style={{ color: COLORS.greenDark, fontWeight: 700, fontSize: 15 }}>{item.pricePerKg.toFixed(2)} €</span>
                          <Text type="secondary" style={{ fontSize: 12 }}>/kg · Min. {item.minOrder} kg</Text>
                        </Flex>
                        <Flex justify="space-between" align="center">
                          <Flex align="center" gap={8} style={{ background: "#F5F5F5", borderRadius: 20, padding: "4px 10px", border: "1.5px solid rgba(42,31,91,0.12)" }}>
                            <Button type="text" size="small" icon={<MinusOutlined />} onClick={() => updateKg(item.id, -5)} style={{ color: COLORS.teal, padding: "0 4px" }} />
                            <Text style={{ minWidth: 64, textAlign: "center", fontWeight: 600 }}>{item.kg} kg</Text>
                            <Button type="text" size="small" icon={<PlusOutlined />} onClick={() => updateKg(item.id, 5)} style={{ color: COLORS.greenDark, padding: "0 4px" }} />
                          </Flex>
                          <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: 11, color: "#9CA3AF" }}>Item total</div>
                            <div style={{ fontWeight: 700, fontSize: 17, color: COLORS.primary }}>{(item.kg * item.pricePerKg).toFixed(2)} €</div>
                          </div>
                        </Flex>
                      </div>
                    </Flex>
                  </Card>
                </motion.div>
              ))}
            </Flex>

            {/* Add Products */}
            <Button
              type="dashed" block size="large" icon={<PlusSquareOutlined />}
              onClick={() => setShowCatalog(!showCatalog)}
              style={{ height: 52, borderColor: showCatalog ? COLORS.greenDark : undefined, color: showCatalog ? COLORS.greenDark : undefined }}
            >
              {showCatalog ? "Close catalog" : "Add more items"}
            </Button>

            {showCatalog && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                <Row gutter={[12, 12]}>
                  {AVAILABLE_PRODUCTS.map(p => (
                    <Col xs={24} sm={8} key={p.id}>
                      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                        <Card
                          hoverable style={{ borderRadius: 14, cursor: "pointer" }} styles={{ body: { padding: 0 } }}
                          onClick={() => addProduct(p)}
                          cover={<img src={p.image} alt={p.name} style={{ height: 140, objectFit: "cover", borderRadius: "14px 14px 0 0" }} />}
                        >
                          <div style={{ padding: "12px 14px" }}>
                            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{p.name}</div>
                            <div style={{ color: COLORS.greenDark, fontWeight: 700, fontSize: 16 }}>{p.pricePerKg.toFixed(2)} €/kg</div>
                            <Text type="secondary" style={{ fontSize: 11 }}>Min. {p.minOrder} kg</Text>
                          </div>
                        </Card>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            )}

            {/* Delivery Info */}
            <Card title={<span style={{ color: COLORS.primary, fontWeight: 600 }}>Delivery Details</span>} style={{ borderRadius: 16 }}>
              <Flex vertical gap={12}>
                <Select
                  size="large" style={{ width: "100%" }} defaultValue="mitte"
                  options={[
                    { value: "mitte", label: "CoWork Berlin Mitte — Friedrichstraße 123" },
                    { value: "kreuzberg", label: "CoWork Kreuzberg — Oranienstraße 45" },
                    { value: "prenzlberg", label: "CoWork Prenzlauer Berg — Kollwitzstraße 78" },
                  ]}
                />
                <Row gutter={[12, 12]}>
                  <Col xs={24} sm={12}>
                    <DatePicker size="large" style={{ width: "100%" }} placeholder="Delivery date" />
                  </Col>
                  <Col xs={24} sm={12}>
                    <Select
                      size="large" style={{ width: "100%" }} defaultValue="08-10"
                      options={[
                        { value: "08-10", label: "08:00 – 10:00" },
                        { value: "10-12", label: "10:00 – 12:00" },
                        { value: "14-16", label: "14:00 – 16:00" },
                      ]}
                    />
                  </Col>
                </Row>
              </Flex>
            </Card>

            <div style={{ height: 200 }} />
          </Flex>
        </div>
      </div>

      {/* Sticky Bottom Summary */}
      <div style={{ position: "sticky", bottom: 68, background: "white", borderTop: "1px solid rgba(42,31,91,0.1)", padding: "16px", boxShadow: "0 -4px 16px rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Flex vertical gap={10}>
            {discount > 0 && (
              <Alert type="success" message={<span><strong>{(discount * 100).toFixed(0)}% discount</strong> applied! You save {discountAmt.toFixed(2)} €</span>} showIcon style={{ borderRadius: 10 }} />
            )}
            {freeDelivery && (
              <Alert type="info" message={<span><strong>Free delivery</strong> included (from 75 kg)</span>} showIcon style={{ borderRadius: 10 }} />
            )}
            <Row gutter={8} align="middle">
              <Col span={8}>
                <div style={{ fontSize: 11, color: "#9CA3AF" }}>Weight</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: COLORS.primary }}>{totalKg} kg</div>
              </Col>
              <Col span={8}>
                <div style={{ fontSize: 11, color: "#9CA3AF" }}>Subtotal</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#9CA3AF", textDecoration: discount > 0 ? "line-through" : "none" }}>{subtotal.toFixed(2)} €</div>
              </Col>
              <Col span={8} style={{ textAlign: "right" }}>
                <div style={{ fontSize: 11, color: "#9CA3AF" }}>Price</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: COLORS.greenDark }}>{totalPrice.toFixed(2)} €</div>
              </Col>
            </Row>
            <Link to="/delivery-tracking">
              <Button
                type="primary" block size="large" icon={<ShoppingCartOutlined />}
                style={{ background: COLORS.greenDark, borderColor: COLORS.greenDark, height: 52, fontSize: 16, fontWeight: 600, boxShadow: "0 4px 14px rgba(106,187,110,0.3)" }}
              >
                Place Order
              </Button>
            </Link>
          </Flex>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
