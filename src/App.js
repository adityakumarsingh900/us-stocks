import { Grommet } from "grommet";
import { BrowserRouter as Router } from "react-router-dom";

import DashboardLayout from "components/DashboardLayout";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
    colors: {
      brand: "#228BE6",
      focus: "#228BE6",
      dullBlack: "#333333",
      gray: "#666666",
      lightGray: "#ccc",
      green: "#4CAF50",
    },
  },
};

function App() {
  return (
    <Router>
      <Grommet theme={theme}>
        <DashboardLayout />
      </Grommet>
    </Router>
  );
}

export default App;
