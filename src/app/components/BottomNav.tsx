import { useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import {
  AppstoreOutlined,
  ShoppingCartOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { COLORS } from "../theme";

const NAV_ITEMS = [
  { path: "/facility-dashboard", icon: AppstoreOutlined, label: "Dashboard" },
  { path: "/bulk-order", icon: ShoppingCartOutlined, label: "Order" },
  { path: "/delivery-tracking", icon: EnvironmentOutlined, label: "Tracking" },
  { path: "/order-schedule", icon: CalendarOutlined, label: "Schedule" },
  { path: "/smart-order", icon: ThunderboltOutlined, label: "Smart" },
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 68,
        background: "white",
        borderTop: "1px solid rgba(42,31,91,0.08)",
        display: "flex",
        alignItems: "stretch",
        zIndex: 300,
        boxShadow: "0 -4px 24px rgba(42,31,91,0.10)",
      }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        return (
          <motion.button
            key={item.path}
            onClick={() => navigate(item.path)}
            whileTap={{ scale: 0.88 }}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
              padding: "8px 0 10px",
              position: "relative",
            }}
          >
            {isActive && (
              <motion.div
                layoutId="navPill"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "15%",
                  right: "15%",
                  height: 3,
                  borderRadius: "0 0 4px 4px",
                  background: COLORS.primary,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <motion.div
              animate={{
                backgroundColor: isActive ? "rgba(42,31,91,0.08)" : "rgba(0,0,0,0)",
                scale: isActive ? 1.05 : 1,
              }}
              initial={{ backgroundColor: "rgba(0,0,0,0)", scale: 1 }}
              transition={{ duration: 0.2 }}
              style={{
                borderRadius: 10,
                padding: "5px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon
                style={{
                  fontSize: 20,
                  color: isActive ? COLORS.primary : "#B0B8C8",
                  transition: "color 0.2s",
                }}
              />
            </motion.div>
            <span
              style={{
                fontSize: 10,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? COLORS.primary : "#B0B8C8",
                letterSpacing: 0.2,
                lineHeight: 1,
              }}
            >
              {item.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
