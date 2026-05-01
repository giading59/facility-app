import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Button, Card, Typography, Tag, Avatar, Progress,
  Divider, Row, Col, Flex,
} from "antd";
import {
  ArrowLeftOutlined, ClockCircleOutlined,
  CarOutlined, PhoneOutlined, CheckCircleOutlined,
  AimOutlined,
} from "@ant-design/icons";
import { BottomNav } from "../components/BottomNav";
import { COLORS, FONTS } from "../theme";

const { Title, Text } = Typography;

const locations = [
  { id: 1, name: "CoWork Berlin Mitte", address: "Friedrichstraße 123, 10117 Berlin", svgX: 162, svgY: 190, deliveryTime: "08:00 – 10:00", status: "Scheduled", items: "25 kg Salad Mix", district: "Mitte" },
  { id: 2, name: "CoWork Kreuzberg", address: "Oranienstraße 45, 10969 Berlin", svgX: 264, svgY: 318, deliveryTime: "10:30 – 12:00", status: "Next Stop", items: "18 kg Veggie Box", district: "Kreuzberg" },
  { id: 3, name: "CoWork Prenzlauer Berg", address: "Kollwitzstraße 78, 10435 Berlin", svgX: 246, svgY: 86, deliveryTime: "14:00 – 16:00", status: "Queued", items: "30 kg Sides Mix", district: "Prenzlauer Berg" },
];

// Custom SVG Berlin map
function BerlinMap({ selectedIdx, onSelect }: { selectedIdx: number; onSelect: (i: number) => void }) {
  return (
    <svg
      viewBox="0 0 390 380"
      style={{ width: "100%", height: "100%", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Map background */}
      <rect width="390" height="380" fill="#e8eef4" />

      {/* Water bodies (Spree-like) */}
      <path d="M 60 200 Q 120 195 180 205 Q 240 215 300 200 Q 340 190 390 195" fill="none" stroke="#b8d4e8" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
      <path d="M 0 215 Q 60 208 120 212 Q 180 218 220 210" fill="none" stroke="#b8d4e8" strokeWidth="6" strokeLinecap="round" opacity="0.6" />

      {/* Major roads — horizontal */}
      <line x1="0" y1="155" x2="390" y2="155" stroke="#fff" strokeWidth="5" opacity="0.9" />
      <line x1="0" y1="260" x2="390" y2="260" stroke="#fff" strokeWidth="4" opacity="0.8" />
      <line x1="0" y1="110" x2="390" y2="110" stroke="#fff" strokeWidth="3.5" opacity="0.7" />
      <line x1="0" y1="310" x2="390" y2="310" stroke="#fff" strokeWidth="3" opacity="0.7" />
      <line x1="0" y1="50" x2="390" y2="50" stroke="#fff" strokeWidth="2.5" opacity="0.5" />
      <line x1="0" y1="340" x2="390" y2="340" stroke="#fff" strokeWidth="2.5" opacity="0.5" />

      {/* Major roads — vertical */}
      <line x1="130" y1="0" x2="130" y2="380" stroke="#fff" strokeWidth="5" opacity="0.9" />
      <line x1="260" y1="0" x2="260" y2="380" stroke="#fff" strokeWidth="4" opacity="0.8" />
      <line x1="60" y1="0" x2="60" y2="380" stroke="#fff" strokeWidth="3.5" opacity="0.7" />
      <line x1="330" y1="0" x2="330" y2="380" stroke="#fff" strokeWidth="3" opacity="0.7" />

      {/* Secondary roads */}
      <line x1="0" y1="75" x2="390" y2="75" stroke="#fff" strokeWidth="2" opacity="0.4" />
      <line x1="0" y1="175" x2="390" y2="175" stroke="#fff" strokeWidth="2" opacity="0.4" />
      <line x1="0" y1="225" x2="390" y2="225" stroke="#fff" strokeWidth="2" opacity="0.4" />
      <line x1="0" y1="285" x2="390" y2="285" stroke="#fff" strokeWidth="2" opacity="0.4" />
      <line x1="95" y1="0" x2="95" y2="380" stroke="#fff" strokeWidth="2" opacity="0.4" />
      <line x1="195" y1="0" x2="195" y2="380" stroke="#fff" strokeWidth="2" opacity="0.4" />
      <line x1="295" y1="0" x2="295" y2="380" stroke="#fff" strokeWidth="2" opacity="0.4" />
      <line x1="355" y1="0" x2="355" y2="380" stroke="#fff" strokeWidth="2" opacity="0.4" />

      {/* Diagonal roads */}
      <line x1="0" y1="380" x2="200" y2="100" stroke="#fff" strokeWidth="3" opacity="0.5" />
      <line x1="390" y1="0" x2="150" y2="380" stroke="#fff" strokeWidth="2.5" opacity="0.4" />
      <line x1="0" y1="50" x2="300" y2="380" stroke="#fff" strokeWidth="2" opacity="0.35" />

      {/* Park/green areas */}
      <ellipse cx="80" cy="90" rx="35" ry="25" fill="#c8e6c9" opacity="0.6" />
      <ellipse cx="320" cy="300" rx="28" ry="20" fill="#c8e6c9" opacity="0.5" />
      <ellipse cx="340" cy="130" rx="22" ry="16" fill="#c8e6c9" opacity="0.5" />
      <ellipse cx="50" cy="320" rx="18" ry="14" fill="#c8e6c9" opacity="0.4" />

      {/* District labels */}
      <text x="130" y="145" fontSize="9" fill="#9aacb8" fontWeight="500" textAnchor="middle" opacity="0.8">MITTE</text>
      <text x="255" y="355" fontSize="9" fill="#9aacb8" fontWeight="500" textAnchor="middle" opacity="0.8">KREUZBERG</text>
      <text x="240" y="40" fontSize="9" fill="#9aacb8" fontWeight="500" textAnchor="middle" opacity="0.8">PRENZLAUER BERG</text>
      <text x="60" y="220" fontSize="8" fill="#9aacb8" fontWeight="400" textAnchor="middle" opacity="0.6">CHARLOTTENBURG</text>
      <text x="340" y="230" fontSize="8" fill="#9aacb8" fontWeight="400" textAnchor="middle" opacity="0.6">FRIEDRICHSHAIN</text>

      {/* Route line — dashed animated path */}
      <polyline
        points={`${locations[0].svgX},${locations[0].svgY} ${locations[2].svgX},${locations[2].svgY} ${locations[1].svgX},${locations[1].svgY}`}
        fill="none"
        stroke={COLORS.teal}
        strokeWidth="3.5"
        strokeDasharray="8 5"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Route shadow */}
      <polyline
        points={`${locations[0].svgX},${locations[0].svgY} ${locations[2].svgX},${locations[2].svgY} ${locations[1].svgX},${locations[1].svgY}`}
        fill="none"
        stroke={COLORS.teal}
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.12"
      />

      {/* Location markers */}
      {locations.map((loc, i) => {
        const isSelected = i === selectedIdx;
        return (
          <g key={loc.id} onClick={() => onSelect(i)} style={{ cursor: "pointer" }}>
            {/* Pulse ring for selected */}
            {isSelected && (
              <circle
                cx={loc.svgX}
                cy={loc.svgY}
                r="22"
                fill="none"
                stroke={i === 0 ? COLORS.greenDark : i === 1 ? COLORS.teal : COLORS.primary}
                strokeWidth="2"
                opacity="0.35"
              />
            )}
            {/* Outer shadow circle */}
            <circle
              cx={loc.svgX}
              cy={loc.svgY}
              r={isSelected ? 16 : 13}
              fill={i === 0 ? COLORS.greenDark : i === 1 ? COLORS.teal : COLORS.primary}
              opacity="0.18"
            />
            {/* Main marker */}
            <circle
              cx={loc.svgX}
              cy={loc.svgY}
              r={isSelected ? 12 : 10}
              fill={i === 0 ? COLORS.greenDark : i === 1 ? COLORS.teal : COLORS.primary}
              stroke="white"
              strokeWidth="2.5"
            />
            {/* Number label */}
            <text
              x={loc.svgX}
              y={loc.svgY + 4.5}
              fontSize="10"
              fontWeight="700"
              fill="white"
              textAnchor="middle"
            >
              {i + 1}
            </text>
            {/* Stop name label */}
            {isSelected && (
              <>
                <rect
                  x={loc.svgX - 52}
                  y={loc.svgY - 36}
                  width="104"
                  height="20"
                  rx="5"
                  fill="white"
                  opacity="0.95"
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.12))"
                />
                <text
                  x={loc.svgX}
                  y={loc.svgY - 21}
                  fontSize="9"
                  fontWeight="600"
                  fill={COLORS.primary}
                  textAnchor="middle"
                >
                  {loc.district}
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* Compass */}
      <g transform="translate(358, 20)">
        <circle cx="0" cy="0" r="14" fill="white" opacity="0.9" />
        <text x="0" y="-5" fontSize="8" fontWeight="700" fill={COLORS.primary} textAnchor="middle">N</text>
        <line x1="0" y1="-10" x2="0" y2="10" stroke={COLORS.primary} strokeWidth="1" opacity="0.4" />
        <line x1="-10" y1="0" x2="10" y2="0" stroke={COLORS.primary} strokeWidth="1" opacity="0.4" />
      </g>

      {/* Scale bar */}
      <g transform="translate(14, 358)">
        <rect x="0" y="0" width="50" height="10" rx="3" fill="white" opacity="0.8" />
        <line x1="3" y1="5" x2="47" y2="5" stroke="#9aacb8" strokeWidth="1.5" />
        <line x1="3" y1="3" x2="3" y2="7" stroke="#9aacb8" strokeWidth="1.5" />
        <line x1="47" y1="3" x2="47" y2="7" stroke="#9aacb8" strokeWidth="1.5" />
        <text x="25" y="9" fontSize="6" fill="#9aacb8" textAnchor="middle">2 km</text>
      </g>

      {/* OSM attribution */}
      <rect x="0" y="368" width="390" height="12" fill="rgba(255,255,255,0.6)" />
      <text x="195" y="377" fontSize="6" fill="#9aacb8" textAnchor="middle">© OpenStreetMap contributors</text>
    </svg>
  );
}

export default function DeliveryTracking() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [progress, setProgress] = useState(25);
  const [eta, setEta] = useState(45);

  useEffect(() => {
    const t = setInterval(() => {
      setProgress(p => Math.min(p + 5, 100));
      setEta(e => Math.max(e - 2, 0));
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ background: COLORS.primary, padding: "0 16px", height: 64, display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
        <Link to="/facility-dashboard">
          <Button type="text" icon={<ArrowLeftOutlined style={{ color: "white", fontSize: 18 }} />} />
        </Link>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: "white", fontWeight: 600, fontSize: 17, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Route & Tracking</div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 11 }}>Today, April 30, 2026</div>
        </div>
        <Tag
          icon={<AimOutlined />}
          style={{ background: COLORS.greenDark, color: "white", border: "none", borderRadius: 8, fontWeight: 500 }}
        >
          Active Route
        </Tag>
      </div>

      {/* Map + List Layout */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Map */}
        <div style={{ position: "relative", height: 380, flexShrink: 0, overflow: "hidden" }}>
          <BerlinMap selectedIdx={selectedIdx} onSelect={setSelectedIdx} />

          {/* Map Overlay Card */}
          <Card
            style={{
              position: "absolute", top: 12, left: 12,
              zIndex: 10, borderRadius: 14,
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              width: 210,
            }}
            styles={{ body: { padding: 14 } }}
          >
            <Flex align="center" gap={10} style={{ marginBottom: 10 }}>
              <Avatar size={36} style={{ background: COLORS.teal, flexShrink: 0 }}>
                <CarOutlined style={{ fontSize: 16 }} />
              </Avatar>
              <div>
                <Text type="secondary" style={{ fontSize: 10, display: "block" }}>Today's Deliveries</Text>
                <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.primary }}>3 Locations</div>
              </div>
            </Flex>

            <Flex justify="space-between" style={{ marginBottom: 4 }}>
              <Text type="secondary" style={{ fontSize: 11 }}>Progress</Text>
              <Text style={{ fontSize: 11, fontWeight: 600 }}>{progress}%</Text>
            </Flex>
            <Progress
              percent={progress}
              showInfo={false}
              strokeColor={COLORS.teal}
              trailColor="rgba(95,168,184,0.15)"
              style={{ marginBottom: 10 }}
              size="small"
            />

            <Divider style={{ margin: "6px 0" }} />
            <Row gutter={8}>
              <Col span={12}>
                <Text type="secondary" style={{ fontSize: 10, display: "block" }}>Distance</Text>
                <div style={{ fontWeight: 600, fontSize: 13 }}>8.7 km</div>
              </Col>
              <Col span={12}>
                <Text type="secondary" style={{ fontSize: 10, display: "block" }}>ETA</Text>
                <AnimatePresence mode="wait">
                  <motion.div key={eta} initial={{ opacity: 0, y: -3 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 3 }}>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>~{eta} min</div>
                  </motion.div>
                </AnimatePresence>
              </Col>
            </Row>
          </Card>
        </div>

        {/* Delivery Stops List */}
        <div style={{
          background: "white", borderTop: "1px solid rgba(0,0,0,0.06)",
          padding: "16px 16px 88px", flex: 1, overflow: "auto",
        }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <Title level={5} style={{ color: COLORS.primary, marginBottom: 12 }}>Stops</Title>
            <Flex vertical gap={10}>
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card
                    onClick={() => setSelectedIdx(i)}
                    style={{
                      borderRadius: 12, cursor: "pointer",
                      border: `2px solid ${selectedIdx === i ? COLORS.teal : "rgba(42,31,91,0.1)"}`,
                      background: selectedIdx === i ? "rgba(95,168,184,0.04)" : "white",
                      transition: "all 0.2s",
                    }}
                    styles={{ body: { padding: 14 } }}
                  >
                    <Flex align="flex-start" gap={12}>
                      <Avatar style={{ background: COLORS.teal, flexShrink: 0 }} size={40}>{i + 1}</Avatar>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, fontSize: 14, color: COLORS.primary }}>{loc.name}</div>
                        <Text type="secondary" style={{ fontSize: 11, display: "block", marginBottom: 8 }}>{loc.address}</Text>
                        <Flex gap={6} wrap="wrap">
                          <Tag icon={<ClockCircleOutlined />} style={{ fontSize: 11 }}>{loc.deliveryTime}</Tag>
                          <Tag icon={<CarOutlined />} style={{ fontSize: 11 }}>{loc.items}</Tag>
                        </Flex>
                      </div>
                    </Flex>
                  </Card>
                </motion.div>
              ))}
            </Flex>

            <Divider />

            {/* Driver Card */}
            <Card
              style={{
                borderRadius: 14, marginBottom: 12,
                background: "rgba(95,168,184,0.07)", border: `2px solid ${COLORS.teal}`,
              }}
              styles={{ body: { padding: 16 } }}
            >
              <Flex align="center" gap={12} style={{ marginBottom: 12 }}>
                <Avatar size={52} style={{ background: COLORS.teal, fontSize: 16, fontWeight: 700 }}>MM</Avatar>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: COLORS.primary }}>Max Mueller</div>
                  <Flex align="center" gap={4}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.greenDark }} />
                    <Text type="secondary" style={{ fontSize: 12 }}>On the way</Text>
                  </Flex>
                </div>
              </Flex>
              <Button
                type="primary"
                block
                icon={<PhoneOutlined />}
                style={{ background: COLORS.teal, borderColor: COLORS.teal }}
              >
                Contact Driver
              </Button>
            </Card>

            {/* Delivery Summary */}
            <Card
              style={{ borderRadius: 14, background: "rgba(157,211,160,0.08)", border: `2px solid ${COLORS.greenDark}` }}
              styles={{ body: { padding: 16 } }}
            >
              <div style={{ color: COLORS.greenDark, fontWeight: 600, fontSize: 15, marginBottom: 12 }}>
                Delivery Summary
              </div>
              <Flex vertical gap={8}>
                {[
                  { label: "Total Items", value: "73 kg" },
                  { label: "Locations", value: "3" },
                ].map(row => (
                  <Flex justify="space-between" key={row.label}>
                    <Text type="secondary" style={{ fontSize: 13 }}>{row.label}</Text>
                    <Text style={{ fontWeight: 600, fontSize: 13 }}>{row.value}</Text>
                  </Flex>
                ))}
                <Divider style={{ margin: "4px 0" }} />
                <Flex justify="space-between" align="center">
                  <Text type="secondary" style={{ fontSize: 13 }}>Status</Text>
                  <Tag color="success" icon={<CheckCircleOutlined />} style={{ fontWeight: 600 }}>In Delivery</Tag>
                </Flex>
                <Flex justify="space-between">
                  <Text type="secondary" style={{ fontSize: 13 }}>Vehicle</Text>
                  <Text style={{ fontWeight: 600, fontSize: 13 }}>B-SA 1234</Text>
                </Flex>
              </Flex>
            </Card>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}