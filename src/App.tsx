import React from "react";
import Calculate from "./components/Calculate";

const App = () => {
  return (
    <div style={styles.container}>
      <Calculate />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
  },
  column: {
    margin: "0 10px",
  },
  item: {
    padding: "5px 0",
  },
};

export default App;
