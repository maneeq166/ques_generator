import React from "react";
import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes";
import { Routes, Route } from "react-router-dom";
import AuthenticationPage from "./auth/AuthenticationPage";
import {Layout} from "./layout/Layout";
import ChallengeGenerator from "./challenge/ChallengeGenerator";
import HistoryPanel from "./history/HistoryPanel";

function App() {
  return (
    <ClerkProviderWithRoutes>
      <Routes>
        <Route
          path="/sign-in"
          element={<AuthenticationPage type="sign-in" />}
        />
        <Route
          path="/sign-up"
          element={<AuthenticationPage type="sign-up" />}
        />

        <Route element={<Layout />}>
          <Route path="/" element={<ChallengeGenerator />} />
          <Route path="/history" element={<HistoryPanel />} />
        </Route>
      </Routes>
    </ClerkProviderWithRoutes>
  );
}

export default App;
