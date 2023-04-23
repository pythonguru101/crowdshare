import React from "react";
import { motion } from "framer-motion";

const styles = {
  bubbleC: { height: 50, width: 50, backgroundColor: "blue",borderRadius:30 },
  bubble: { height: 50, width: 50, backgroundColor: "red",borderRadius:30  },
};
const SphereGroup = () => {
  
  return (
    <div
      style={{
        height: 500,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}
        title="CrowdShare"
        style={styles.bubbleC}
        dragConstraints={{
          top: -500,
          left: -500,
          right: 500,
          bottom: 500,
        }}
        drag
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="CrowdShare"
        style={styles.bubble}
        drag
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="CrowdShare"
        style={styles.bubble}
        drag
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="CrowdShare"
        style={styles.bubble}
        drag
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="CrowdShare"
        style={styles.bubble}
        drag
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="CrowdShare"
        style={styles.bubble}
        drag
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="CrowdShare"
        style={styles.bubble}
        drag
      />
    </div>
  );
};

export default SphereGroup;
