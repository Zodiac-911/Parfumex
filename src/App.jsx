import "./App.css";
import { ShaderGradient } from "@shadergradient/react";
import { ShaderGradientCanvas } from "@shadergradient/react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar";
import Home from "./pages/home";
import Catigories from "./pages/catigories";
import MaleCategory from "./pages/male-cat";
import FemaleCategory from "./pages/female-cat";
import Pricing from "./pages/pricing";

function App() {
  return (
    <>
      <ShaderGradientCanvas
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -5,
        }}
        lazyLoad={undefined}
        fov={undefined}
        pixelDensity={1}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="on"
          type="waterPlane"
          wireframe={false}
          shader="defaults"
          uTime={0}
          uSpeed={0.1}
          uStrength={1.2}
          uDensity={0.9}
          uFrequency={0}
          uAmplitude={0}
          positionX={0}
          positionY={0.9}
          positionZ={-0.3}
          rotationX={45}
          rotationY={0}
          rotationZ={0}
          color1="#000"
          color2="#000"
          color3="#a23dff"
          reflection={0.28}
          // View (camera) props
          cAzimuthAngle={170}
          cPolarAngle={70}
          cDistance={4.0}
          cameraZoom={1}
          // Effect props
          lightType="3d"
          brightness={0.8}
          envPreset="city"
          grain="off"
          // Tool props
          toggleAxis={false}
          zoomOut={false}
          hoverState=""
          // Optional - if using transition features
          enableTransition={false}
        />
      </ShaderGradientCanvas>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Catigories />} />
        <Route path="/male" element={<MaleCategory />} />
        <Route path="/female" element={<FemaleCategory />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
