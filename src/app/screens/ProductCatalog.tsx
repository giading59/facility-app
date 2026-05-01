import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Button, Card, Typography, Tag, Avatar, Rate,
  Input, Flex, Row, Col, Badge, App,
} from "antd";
import {
  ArrowLeftOutlined, ShoppingCartOutlined, CheckOutlined,
  SearchOutlined, StarFilled, SafetyCertificateOutlined,
  EnvironmentOutlined, TeamOutlined, TagOutlined,
} from "@ant-design/icons";
import { BottomNav } from "../components/BottomNav";
import { COLORS, FONTS } from "../theme";

const { Title, Text } = Typography;

interface Product {
  id: string;
  name: string;
  category: "Main (Salad)" | "Grummes Veggie" | "Sides";
  supplier: "Salat Premium GmbH" | "Grummes Gemüse GmbH";
  pricePerKg: number;
  minOrder: number;
  description: string;
  tags: string[];
  image: string;
  inStock: boolean;
  isOrganic: boolean;
  rating: number;
}

const PRODUCTS: Product[] = [
  { id: "sp-1", name: "Mixed Salad Premium", category: "Main (Salad)", supplier: "Salat Premium GmbH", pricePerKg: 12.50, minOrder: 5, description: "Fresh organic mix of iceberg, frisée, radicchio and rocket. Harvested daily.", tags: ["Organic", "Daily Fresh", "Bestseller"], image: "https://images.unsplash.com/photo-1676300186673-615bcc8d5d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", inStock: true, isOrganic: true, rating: 4.9 },
  { id: "sp-2", name: "Caesar Salad Mix", category: "Main (Salad)", supplier: "Salat Premium GmbH", pricePerKg: 13.90, minOrder: 5, description: "Crisp Romana lettuce with a fresh parmesan note. Ideal for salad bars.", tags: ["Premium", "Romana", "Parmesan"], image: "https://images.unsplash.com/photo-1765894711192-d35787eee3b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", inStock: true, isOrganic: false, rating: 4.8 },
  { id: "sp-3", name: "Spinach & Rocket Bio-Mix", category: "Main (Salad)", supplier: "Salat Premium GmbH", pricePerKg: 14.50, minOrder: 5, description: "Young baby spinach and wild rocket — nutrient-rich and tender.", tags: ["Organic", "Nutrient-rich", "Vegan"], image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", inStock: true, isOrganic: true, rating: 4.7 },
  { id: "gg-1", name: "Green Veggie Mix", category: "Grummes Veggie", supplier: "Grummes Gemüse GmbH", pricePerKg: 8.90, minOrder: 10, description: "Seasonal mix of courgette, broccoli, peas and green beans. Locally sourced.", tags: ["Local", "Seasonal", "Daily Fresh"], image: "https://images.unsplash.com/photo-1753156381986-1fa79eb124bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", inStock: true, isOrganic: false, rating: 4.6 },
  { id: "gg-2", name: "Root Vegetable Assortment", category: "Grummes Veggie", supplier: "Grummes Gemüse GmbH", pricePerKg: 7.50, minOrder: 10, description: "Carrots, beetroot, parsnips and parsley root. Aromatic and nutritious.", tags: ["Seasonal", "Local", "Roasted"], image: "https://images.unsplash.com/photo-1552958837-114170ad6370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", inStock: true, isOrganic: false, rating: 4.5 },
  { id: "gg-3", name: "Cucumber & Colourful Peppers", category: "Grummes Veggie", supplier: "Grummes Gemüse GmbH", pricePerKg: 6.80, minOrder: 8, description: "Crunchy cucumbers and colourful peppers in red, yellow and orange.", tags: ["Crunchy", "Colourful", "Bestseller"], image: "https://images.unsplash.com/photo-1753156381986-1fa79eb124bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", inStock: true, isOrganic: false, rating: 4.4 },
  { id: "bei-1", name: "Pasta Sides Mix", category: "Sides", supplier: "Salat Premium GmbH", pricePerKg: 6.50, minOrder: 5, description: "Penne, fusilli and farfalle — pre-cooked and marinated.", tags: ["Pre-cooked", "Marinated"], image: "https://images.unsplash.com/photo-1723608334799-e6398469cb04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", inStock: true, isOrganic: false, rating: 4.5 },
  { id: "bei-2", name: "Rice & Quinoa Mix", category: "Sides", supplier: "Grummes Gemüse GmbH", pricePerKg: 5.90, minOrder: 5, description: "Protein-rich mix of basmati rice, white quinoa and red lentils.", tags: ["Protein-rich", "Gluten-free", "Vegan"], image: "https://images.unsplash.com/photo-1631880383152-f29099b0fd16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", inStock: true, isOrganic: true, rating: 4.6 },
  { id: "bei-3", name: "Couscous Variety", category: "Sides", supplier: "Grummes Gemüse GmbH", pricePerKg: 5.50, minOrder: 5, description: "Fluffy durum wheat couscous with Mediterranean herbs and lemon zest.", tags: ["Mediterranean", "Quick"], image: "https://images.unsplash.com/photo-1631880383152-f29099b0fd16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", inStock: false, isOrganic: false, rating: 4.3 },
];

const CATEGORIES = ["All", "Main (Salad)", "Grummes Veggie", "Sides"];
const CAT_COLOR: Record<string, string> = {
  "Main (Salad)": COLORS.green,
  "Grummes Veggie": COLORS.teal,
  "Sides": COLORS.yellowDark,
};
const SUPPLIERS = ["Salat Premium GmbH", "Grummes Gemüse GmbH"] as const;
const SUPPLIER_COLOR: Record<string, string> = {
  "Salat Premium GmbH": COLORS.primary,
  "Grummes Gemüse GmbH": "#2A7A6B",
};

export default function ProductCatalog() {
  const { message } = App.useApp();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState<Record<string, boolean>>({});

  const addToCart = (p: Product) => {
    setCart(prev => ({ ...prev, [p.id]: true }));
    message.success(`${p.name} added`);
  };

  const cartCount = Object.values(cart).filter(Boolean).length;

  const filtered = PRODUCTS.filter(p => {
    const q = search.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q));
    const matchCat = category === "All" || p.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ background: COLORS.primary, padding: "0 16px", height: 64, display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
        <Link to="/facility-dashboard">
          <Button type="text" icon={<ArrowLeftOutlined style={{ color: "white", fontSize: 18 }} />} />
        </Link>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: "white", fontWeight: 600, fontSize: 17, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Product Catalog</div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 11 }}>9 products · 2 suppliers</div>
        </div>
        <Link to="/bulk-order">
          <Badge count={cartCount} color="red">
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              style={{ background: COLORS.greenDark, borderColor: COLORS.greenDark }}
            >
              Order
            </Button>
          </Badge>
        </Link>
      </div>

      {/* Search + Filter (sticky) */}
      <div style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "white", padding: "12px 16px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}>
        <Input
          prefix={<SearchOutlined style={{ color: "#9CA3AF" }} />}
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          allowClear
          style={{ borderRadius: 20, marginBottom: 10 }}
        />
        <Flex gap={8} style={{ overflowX: "auto", paddingBottom: 4 }}>
          {CATEGORIES.map(cat => (
            <Tag
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                cursor: "pointer", borderRadius: 16, padding: "3px 14px",
                fontWeight: category === cat ? 600 : 400, flexShrink: 0,
                background: category === cat ? COLORS.primary : (cat !== "All" ? CAT_COLOR[cat] + "20" : "transparent"),
                color: category === cat ? "white" : COLORS.primary,
                borderColor: cat !== "All" ? CAT_COLOR[cat] + "60" : "rgba(42,31,91,0.2)",
              }}
            >
              {cat}
            </Tag>
          ))}
        </Flex>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: "auto", padding: "16px 16px 88px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Flex vertical gap={32}>
            {SUPPLIERS.map(supplier => {
              const products = filtered.filter(p => p.supplier === supplier);
              if (products.length === 0) return null;
              const supplierColor = SUPPLIER_COLOR[supplier];
              return (
                <div key={supplier}>
                  {/* Supplier Header */}
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <Card
                      style={{ borderRadius: 16, marginBottom: 16, background: `linear-gradient(135deg, ${supplierColor} 0%, ${supplierColor}CC 100%)`, border: "none" }}
                      styles={{ body: { padding: "16px 20px" } }}
                    >
                      <Flex align="center" gap={14} justify="space-between">
                        <Flex align="center" gap={12}>
                          <Avatar size={48} style={{ background: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.3)" }}>
                            <TeamOutlined style={{ fontSize: 22, color: "white" }} />
                          </Avatar>
                          <div>
                            <div style={{ color: "white", fontWeight: 700, fontSize: 16 }}>{supplier}</div>
                            {supplier === "Grummes Gemüse GmbH" && (
                              <Flex gap={6} style={{ marginTop: 4 }}>
                                <Tag style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", fontSize: 11, height: 20 }}>
                                  <EnvironmentOutlined /> Regional
                                </Tag>
                              </Flex>
                            )}
                          </div>
                        </Flex>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ color: "white", fontSize: 22, fontWeight: 700 }}>{products.length}</div>
                          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>Products</div>
                        </div>
                      </Flex>
                    </Card>
                  </motion.div>

                  {/* Product Grid */}
                  <Row gutter={[14, 14]}>
                    <AnimatePresence>
                      {products.map((p, i) => (
                        <Col xs={24} sm={12} md={8} key={p.id}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: i * 0.07 }}
                            style={{ height: "100%" }}
                          >
                            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} style={{ height: "100%" }}>
                              <Card
                                style={{
                                  borderRadius: 16, height: "100%",
                                  opacity: p.inStock ? 1 : 0.65,
                                  border: "1px solid rgba(42,31,91,0.08)",
                                  overflow: "hidden",
                                }}
                                styles={{ body: { padding: 0 } }}
                                cover={
                                  <div style={{ position: "relative" }}>
                                    <img src={p.image} alt={p.name} style={{ width: "100%", height: 170, objectFit: "cover" }} />
                                    {/* Overlays */}
                                    <div style={{ position: "absolute", top: 8, left: 8, display: "flex", gap: 4 }}>
                                      {p.isOrganic && (
                                        <Tag style={{ background: COLORS.greenDark, color: "white", border: "none", fontSize: 11, height: 22 }}>Organic</Tag>
                                      )}
                                      {!p.inStock && (
                                        <Tag style={{ background: COLORS.error, color: "white", border: "none", fontSize: 11, height: 22 }}>Out of stock</Tag>
                                      )}
                                    </div>
                                  </div>
                                }
                              >
                                <div style={{ padding: "14px 14px" }}>
                                  <Flex justify="space-between" align="flex-start" style={{ marginBottom: 6 }}>
                                    <div style={{ fontWeight: 600, fontSize: 14, color: COLORS.primary, flex: 1, marginRight: 8, lineHeight: 1.3 }}>{p.name}</div>
                                    <Flex align="center" gap={3}>
                                      <StarFilled style={{ fontSize: 12, color: COLORS.yellowDark }} />
                                      <Text style={{ fontSize: 12, fontWeight: 600 }}>{p.rating}</Text>
                                    </Flex>
                                  </Flex>
                                  <Text type="secondary" style={{ fontSize: 12, lineHeight: 1.4, display: "block", marginBottom: 10 }}>{p.description}</Text>
                                  <Flex gap={4} wrap="wrap" style={{ marginBottom: 12 }}>
                                    {p.tags.slice(0, 3).map(t => (
                                      <Tag key={t} style={{ fontSize: 11, borderRadius: 6, height: 20, padding: "0 6px" }}>{t}</Tag>
                                    ))}
                                  </Flex>
                                  <Flex justify="space-between" align="center">
                                    <div>
                                      <span style={{ color: COLORS.greenDark, fontWeight: 700, fontSize: 18 }}>€{p.pricePerKg.toFixed(2)}</span>
                                      <Text type="secondary" style={{ fontSize: 11 }}> /kg · Min. {p.minOrder} kg</Text>
                                    </div>
                                    <Button
                                      type={cart[p.id] ? "default" : "primary"}
                                      size="small"
                                      disabled={!p.inStock}
                                      icon={cart[p.id] ? <CheckOutlined /> : <ShoppingCartOutlined />}
                                      onClick={() => addToCart(p)}
                                      style={{
                                        borderRadius: 8,
                                        background: cart[p.id] ? "transparent" : COLORS.greenDark,
                                        borderColor: cart[p.id] ? COLORS.greenDark : COLORS.greenDark,
                                        color: cart[p.id] ? COLORS.greenDark : "white",
                                      }}
                                    >
                                      {cart[p.id] ? "Added" : "Add"}
                                    </Button>
                                  </Flex>
                                </div>
                              </Card>
                            </motion.div>
                          </motion.div>
                        </Col>
                      ))}
                    </AnimatePresence>
                  </Row>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "60px 0", color: "#9CA3AF" }}>
                <SearchOutlined style={{ fontSize: 40, marginBottom: 12 }} />
                <div style={{ fontSize: 18 }}>No products found</div>
                <div style={{ fontSize: 14 }}>Try different search terms</div>
              </div>
            )}

            {/* Discount Banner */}
            <Card
              style={{ borderRadius: 16, background: COLORS.yellow + "AA", border: "1px solid rgba(42,31,91,0.12)" }}
              styles={{ body: { padding: "16px 20px" } }}
            >
              <Flex align="center" gap={12} wrap="wrap">
                <TagOutlined style={{ fontSize: 28, color: COLORS.primary }} />
                <Text style={{ color: COLORS.primary, fontWeight: 600, fontSize: 15 }}>Bulk Discounts:</Text>
                {["50 kg → 10% off", "100 kg → 15% off", "75 kg → Free delivery"].map(l => (
                  <Tag key={l} style={{ background: "white", color: COLORS.primary, fontWeight: 600, borderRadius: 8 }}>{l}</Tag>
                ))}
                <Link to="/bulk-order" style={{ marginLeft: "auto" }}>
                  <Button type="primary" style={{ background: COLORS.primary, borderColor: COLORS.primary }}>Order Now</Button>
                </Link>
              </Flex>
            </Card>
          </Flex>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}