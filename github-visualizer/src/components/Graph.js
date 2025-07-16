import React, { useEffect, useRef } from "react";
import { Network } from "vis-network";

function Graph({ nodes, edges }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!nodes.length) return;

    const data = {
      nodes: nodes.map((n) => ({
        ...n,
        shape: "box",
        font: { size: 14 },
        color: {
          background: "#e0f7fa",
          border: "#0077b6",
          highlight: {
            background: "#a5d6a7",
            border: "#004d40",
          },
        },
      })),
      edges: edges.map((e) => ({ ...e, arrows: "to" })),
    };

    const options = {
      layout: { improvedLayout: true },
      physics: { enabled: true },
      interaction: {
        zoomView: true,
        dragView: true,
        navigationButtons: true,
        tooltipDelay: 100,
      },
    };

    new Network(containerRef.current, data, options);
  }, [nodes, edges]);

  return (
    <div
      ref={containerRef}
      style={{ height: "70vh", border: "1px solid #ccc", borderRadius: "8px" }}
    />
  );
}

export default Graph;
