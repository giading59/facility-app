import type { ThemeConfig } from "antd";

export const COLORS = {
  primary: "#2A1F5B",
  primaryLight: "#3A2F6B",
  teal: "#5FA8B8",
  tealLight: "#7FC8D8",
  green: "#9DD3A0",
  greenDark: "#6abb6e",
  yellow: "#EDE9A3",
  yellowDark: "#c9b636",
  bg: "#FAFBFC",
  error: "#E57373",
};

export const FONTS = {
  brand: "'Playfair Display', Georgia, serif",
  ui: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
};

export const saladTheme: ThemeConfig = {
  token: {
    colorPrimary: "#2A1F5B",
    colorSuccess: "#6abb6e",
    colorWarning: "#c9b636",
    colorInfo: "#5FA8B8",
    colorError: "#E57373",
    colorBgBase: "#FAFBFC",
    colorBgContainer: "#FFFFFF",
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 6,
    fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
    fontSize: 14,
    boxShadow: "0px 2px 8px rgba(42, 31, 91, 0.08)",
    boxShadowSecondary: "0px 4px 16px rgba(42, 31, 91, 0.12)",
  },
  components: {
    Button: {
      borderRadius: 999,
      controlHeight: 40,
      controlHeightLG: 48,
      defaultBorderColor: "#2A1F5B",
      defaultColor: "#2A1F5B",
    },
    Card: { borderRadius: 16, paddingLG: 24 },
    Tabs: { inkBarColor: "#2A1F5B", itemSelectedColor: "#2A1F5B", itemHoverColor: "#3A2F6B" },
    Tag: { borderRadius: 8 },
    Progress: { defaultColor: "#9DD3A0" },
    Switch: { colorPrimary: "#6abb6e" },
  },
};
