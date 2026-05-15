'use client';

import React, { useState } from 'react';
import styles from './activity-wheel.module.css';

type Activity = {
  id: string;
  label: string;
  color: string;
};

type ActivityWheelProps = {
  onHover?: (activityId: string | null) => void;
};

const activities: Activity[] = [
  { id: 'solidarity', label: 'Solidarité', color: '#f3c47c' },
  { id: 'cultural', label: 'Activités\nculturelles', color: '#b3e2cd' },
  { id: 'foyer', label: 'Activités\nen foyer', color: '#ea997a' },
  { id: 'language', label: 'Cours de\nlangue', color: '#b3b3e6' },
];

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function getDonutPath(x: number, y: number, radius: number, innerRadius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  const innerStart = polarToCartesian(x, y, innerRadius, endAngle);
  const innerEnd = polarToCartesian(x, y, innerRadius, startAngle);

  return [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    "L", innerEnd.x, innerEnd.y,
    "A", innerRadius, innerRadius, 0, largeArcFlag, 1, innerStart.x, innerStart.y,
    "Z"
  ].join(" ");
}

export function ActivityWheel({ onHover }: ActivityWheelProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
    if (onHover) onHover(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    if (onHover) onHover(null);
  };

  const centerX = 100;
  const centerY = 100;
  const outerRadius = 95;
  const innerRadius = 45;

  // Angles for quadrants
  // Top-Right: 0 to 90
  // Bottom-Right: 90 to 180
  // Bottom-Left: 180 to 270
  // Top-Left: 270 to 360
  const angles = [
    { start: 270, end: 360 }, // Top-Left: Solidarity
    { start: 0, end: 90 },    // Top-Right: Cultural
    { start: 180, end: 270 },  // Bottom-Left: Foyer
    { start: 90, end: 180 },   // Bottom-Right: Language
  ];

  return (
    <div className={styles.wheelContainer}>
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        {activities.map((activity, index) => {
          const { start, end } = angles[index];
          const path = getDonutPath(centerX, centerY, outerRadius, innerRadius, start, end);
          
          // Calculate text position (middle of the arc)
          const midAngle = (start + end) / 2;
          const textPos = polarToCartesian(centerX, centerY, (outerRadius + innerRadius) / 2, midAngle);

          return (
            <g 
              key={activity.id}
              className={styles.segment}
              onMouseEnter={() => handleMouseEnter(activity.id)}
              onMouseLeave={handleMouseLeave}
              style={{ opacity: hoveredId && hoveredId !== activity.id ? 0.6 : 1 }}
            >
              <path 
                d={path} 
                fill={activity.color} 
                stroke="white" 
                strokeWidth="2"
              />
              <text x={textPos.x} y={textPos.y} className={styles.segmentLabel}>
                {activity.label.split('\n').map((line, i) => (
                  <tspan key={i} x={textPos.x} dy={i === 0 ? 0 : '1.2em'}>{line}</tspan>
                ))}
              </text>
            </g>
          );
        })}
        {/* Center Circle */}
        <circle cx={centerX} cy={centerY} r={innerRadius - 2} className={styles.centerCircle} />
        <text x={centerX} y={centerY} className={styles.centerText}>
          <tspan x={centerX} dy="-0.2em">Nos</tspan>
          <tspan x={centerX} dy="1.2em">activités</tspan>
        </text>
      </svg>
    </div>
  );
}
