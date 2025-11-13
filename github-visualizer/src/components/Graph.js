// === src/components/Graph.js ===
import React, { useEffect, useRef } from 'react'
import { Network } from 'vis-network'

function Graph({ nodes, edges }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!nodes.length) return

    const data = {
      nodes: [...nodes].reverse().map((n) => ({
        ...n,
        shape: 'box',
        font: {
          size: 14,
          multi: 'md',
          vadjust: 2,
        },
        label: n.label.replace(/(.{30})/g, '$1\n'),
        color: {
          background: '#e0f7fa',
          border: '#350c8cff',
          highlight: {
            background: '#a5d6a7',
            border: '#004d40',
          },
        },
      })),
      edges: [...edges].reverse().map((e) => ({
        from: e.to,
        to: e.from,
        arrows: 'to',
      })),
    }

    const options = {
      layout: {
        hierarchical: {
          enabled: true,
          direction: 'LR',
          sortMethod: 'directed',
          nodeSpacing: 200,
          levelSeparation: 300,
          treeSpacing: 250,
          blockShifting: false,
          edgeMinimization: false,
          parentCentralization: true,
        },
      },
      physics: true,
      interaction: {
        zoomView: true,
        dragView: true,
        dragNodes: true,
        navigationButtons: true,
        tooltipDelay: 100,
      },
    }

    const network = new Network(containerRef.current, data, options)

    network.on('click', function (params) {
      if (params.nodes.length > 0) {
        const nodeId = params.nodes[0]
        const node = nodes.find((n) => n.id === nodeId)
        if (node && node.id && node.repoOwner && node.repoName) {
          const url = `https://github.com/${node.repoOwner}/${node.repoName}/commit/${node.id}`
          window.open(url, '_blank')
        }
      }
    })
  }, [nodes, edges])

  return (
    <div
      ref={containerRef}
      style={{ height: '70vh', border: '1px solid #ccc', borderRadius: '8px' }}
    />
  )
}

export default Graph
