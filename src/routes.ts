import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import BrandingSystem from "./components/pages/BrandingSystem";
import UIComponentLibrary from "./components/pages/UIComponentLibrary";
import AssetLanguage from "./components/pages/AssetLanguage";
import PerformanceRules from "./components/pages/PerformanceRules";
import AssetPipeline from "./components/pages/AssetPipeline";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: BrandingSystem },
      { path: "ui-library", Component: UIComponentLibrary },
      { path: "asset-language", Component: AssetLanguage },
      { path: "performance", Component: PerformanceRules },
      { path: "pipeline", Component: AssetPipeline },
    ],
  },
], { basename: import.meta.env.BASE_URL });
