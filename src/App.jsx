import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DigitalHealth from "./pages/DigitalHealth";
import HealthTech from "./pages/HealthTech";
import HealthPrograms from "./pages/HealthPrograms";
import AgileMethods from "./pages/AgileMethods";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/digital-health" element={<DigitalHealth />} />
          <Route path="/services/health-tech" element={<HealthTech />} />
          <Route path="/services/health-programs" element={<HealthPrograms />} />
          <Route path="/services/agile-methods" element={<AgileMethods />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;