import { createBrowserRouter } from "react-router";
import FacilityWelcome from "./screens/FacilityWelcome";
import FacilityDashboard from "./screens/FacilityDashboard";
import BulkOrder from "./screens/BulkOrder";
import DeliveryTracking from "./screens/DeliveryTrackingMUI";
import OrderSchedule from "./screens/OrderScheduleMUI";
import SupplierPortal from "./screens/SupplierPortal";
import ProductCatalog from "./screens/ProductCatalog";
import SmartOrder from "./screens/SmartOrder";

export const router = createBrowserRouter([
  { path: "/", Component: FacilityWelcome },
  { path: "/facility-dashboard", Component: FacilityDashboard },
  { path: "/bulk-order", Component: BulkOrder },
  { path: "/delivery-tracking", Component: DeliveryTracking },
  { path: "/order-schedule", Component: OrderSchedule },
  { path: "/supplier-portal", Component: SupplierPortal },
  { path: "/product-catalog", Component: ProductCatalog },
  { path: "/smart-order", Component: SmartOrder },
]);
