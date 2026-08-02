import React, { useState } from 'react';
import { Language } from '../types';
import { puzzleGridData, PuzzlePieceItem } from '../data/cxPuzzleData';
import { motion } from 'motion/react';
import { Sparkles, RotateCcw } from 'lucide-react';

interface PuzzleMatrixProps {
  lang: Language;
  selectedId?: string;
  onSelectPiece?: (piece: PuzzlePieceItem) => void;
  hoveredId?: string | null;
  setHoveredId?: (id: string | null) => void;
  categoryFilter?: string;
}

// Exact 4x4 Edge configuration matching user's image:
// +1: knob points UP (horizontal) or RIGHT (vertical)
// -1: knob points DOWN (horizontal) or LEFT (vertical)
const HORIZONTAL_EDGES = [
  [+1, -1, -1, +1], // Between Row 0 & Row 1
  [+1, +1, -1, +1], // Between Row 1 & Row 2
  [+1, -1, -1, -1], // Between Row 2 & Row 3
];

const VERTICAL_EDGES = [
  [+1, +1, +1, -1], // Col 0-1 (Row 0, Row 1, Row 2, Row 3)
  [+1, +1, -1, +1], // Col 1-2 (Row 0, Row 1, Row 2, Row 3)
  [+1, +1, -1, -1], // Col 2-3 (Row 0, Row 1, Row 2, Row 3)
];

// Scattered offset calculation for smooth assembly animation
const getScatteredOffset = (row: number, col: number, isCenter?: boolean) => {
  if (isCenter) {
    // Center red piece stays fixed in position
    return { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 };
  }
  // Vector pointing outwards from center (row 1, col 1)
  const dx = col - 1;
  const dy = row - 1;
  const angle = Math.atan2(dy, dx);
  const distance = 160 + (Math.abs(dx) + Math.abs(dy)) * 30;

  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;
  const rotate = (col * 19 - row * 13) % 20;
  return { x, y, rotate, scale: 0.85, opacity: 0 };
};

export const PuzzleMatrix: React.FC<PuzzleMatrixProps> = ({
  lang,
  selectedId,
  onSelectPiece,
  hoveredId,
  setHoveredId,
  categoryFilter,
}) => {
  const isRtl = lang === 'ar';
  const [internalHoveredId, setInternalHoveredId] = useState<string | null>(null);
  const activeHoveredId = hoveredId !== undefined ? hoveredId : internalHoveredId;
  const activeSetHoveredId = setHoveredId || setInternalHoveredId;
  const activeCategoryFilter = categoryFilter || 'all';
  const activeSelectedId = selectedId || 'cx-core';
  const handleSelect = onSelectPiece || (() => {});

  const [animKey, setAnimKey] = useState(0);
  const [isAssembling, setIsAssembling] = useState(false);

  // Dimensions for SVG canvas
  const canvasSize = 600;
  const tileSize = canvasSize / 4; // 150px per piece

  const triggerReassembly = () => {
    setIsAssembling(true);
    setAnimKey((prev) => prev + 1);
    setTimeout(() => setIsAssembling(false), 1400);
  };

  // Helper function to build a single puzzle piece SVG path with classical rounded knobs
  const buildPiecePath = (r: number, c: number) => {
    const xTL = c * tileSize;
    const yTL = r * tileSize;
    const xTR = (c + 1) * tileSize;
    const yTR = r * tileSize;
    const xBR = (c + 1) * tileSize;
    const yBR = (r + 1) * tileSize;
    const xBL = c * tileSize;
    const yBL = (r + 1) * tileSize;

    // Helper to generate edge command with rounded jigsaw knob/socket
    const generateEdge = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      dir: number
    ) => {
      if (dir === 0) return `L ${x2.toFixed(2)} ${y2.toFixed(2)}`;

      const dx = x2 - x1;
      const dy = y2 - y1;
      const len = Math.sqrt(dx * dx + dy * dy);
      const ux = dx / len;
      const uy = dy / len;
      const nx = -uy * dir;
      const ny = ux * dir;

      const pt = (t: number, s: number) => {
        const px = x1 + ux * len * t + nx * len * s;
        const py = y1 + uy * len * t + ny * len * s;
        return `${px.toFixed(2)} ${py.toFixed(2)}`;
      };

      const h = 0.18; // knob height ratio relative to edge length

      return (
        `L ${pt(0.38, 0)} ` +
        `C ${pt(0.385, -0.02 * h)} ${pt(0.365, 0.50 * h)} ${pt(0.42, 0.90 * h)} ` +
        `C ${pt(0.46, 1.18 * h)} ${pt(0.54, 1.18 * h)} ${pt(0.58, 0.90 * h)} ` +
        `C ${pt(0.635, 0.50 * h)} ${pt(0.615, -0.02 * h)} ${pt(0.62, 0)} ` +
        `L ${pt(1.0, 0)}`
      );
    };

    // 1. Top Edge (P_TL to P_TR)
    const topDir = r === 0 ? 0 : HORIZONTAL_EDGES[r - 1][c];
    const topPath = generateEdge(xTL, yTL, xTR, yTR, topDir);

    // 2. Right Edge (P_TR to P_BR)
    const rightDir = c === 3 ? 0 : VERTICAL_EDGES[c][r];
    const rightPath = generateEdge(xTR, yTR, xBR, yBR, rightDir);

    // 3. Bottom Edge (P_BR to P_BL)
    const bottomDir = r === 3 ? 0 : -HORIZONTAL_EDGES[r][c];
    const bottomPath = generateEdge(xBR, yBR, xBL, yBL, bottomDir);

    // 4. Left Edge (P_BL to P_TL)
    const leftDir = c === 0 ? 0 : -VERTICAL_EDGES[c - 1][r];
    const leftPath = generateEdge(xBL, yBL, xTL, yTL, leftDir);

    return `M ${xTL} ${yTL} ${topPath} ${rightPath} ${bottomPath} ${leftPath} Z`;
  };

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto select-none p-2 bg-[#F8FAFC] rounded-2xl border border-[#D9E2EC] shadow-xs">
      
      <svg
        key={animKey}
        viewBox={`0 0 ${canvasSize} ${canvasSize}`}
        className="w-full h-full overflow-visible drop-shadow-sm"
        aria-label="4x4 Interlocking Customer Experience Puzzle Matrix"
      >
        <defs>
          {/* Outer stroke shadow */}
          <filter id="puzzleOutlineShadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#102A43" floodOpacity="0.08" />
          </filter>
        </defs>

        {puzzleGridData.map((item, index) => {
          const isSelected = item.id === activeSelectedId;
          const isHovered = item.id === activeHoveredId;
          const isCenter = item.isCenter;
          const pathD = buildPiecePath(item.row, item.col);

          // Center coordinate of piece for placing text
          const centerX = (item.col + 0.5) * tileSize;
          const centerY = (item.row + 0.5) * tileSize;

          // Category filter dimming logic
          const isFilteredOut =
            activeCategoryFilter !== 'all' &&
            item.category !== activeCategoryFilter &&
            !(activeCategoryFilter === 'core' && isCenter);

          // Color & style determination matching reference screenshot exactly
          let fill = '#FFFFFF'; // Pure white
          let stroke = '#102A43'; // Navy stroke
          let strokeWidth = '1.25';
          let textColor = '#102A43';

          if (isCenter) {
            fill = '#C7362E'; // Rich crimson red
            stroke = '#102A43';
            strokeWidth = '1.25';
            textColor = '#FFFFFF';
          } else if (isSelected) {
            fill = '#102A43';
            stroke = '#C7362E';
            strokeWidth = '1.5';
            textColor = '#FFFFFF';
          } else if (isHovered) {
            fill = '#F0F4F8';
            stroke = '#C7362E';
            strokeWidth = '1.5';
          }

          // Assembly animation calculation per piece
          const scattered = getScatteredOffset(item.row, item.col, isCenter);
          const distFromCenter = Math.abs(item.row - 1) + Math.abs(item.col - 1);
          const staggerDelay = isCenter 
            ? 0 
            : 0.10 + distFromCenter * 0.08 + (index % 3) * 0.02;

          return (
            <motion.g
              key={`${item.id}-${animKey}`}
              initial={{
                x: scattered.x,
                y: scattered.y,
                rotate: scattered.rotate,
                scale: scattered.scale,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                opacity: isFilteredOut ? 0.25 : 1,
              }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: staggerDelay,
                ease: [0.16, 1, 0.3, 1],
                type: 'spring',
                stiffness: 85,
                damping: 15,
              }}
              whileHover={{
                scale: isCenter ? 1.02 : 1.02,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(item)}
              onMouseEnter={() => activeSetHoveredId(item.id)}
              onMouseLeave={() => activeSetHoveredId(null)}
              className="cursor-pointer group"
              style={{
                transformOrigin: `${centerX}px ${centerY}px`,
              }}
            >
              {/* Piece Path Shape */}
              <path
                d={pathD}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
                className="transition-colors duration-150"
              />

              {/* Text Label inside the puzzle piece — strictly horizontal */}
              <g transform={`translate(${centerX}, ${centerY})`} className="pointer-events-none">
                {isCenter ? (
                  <>
                    <text
                      textAnchor="middle"
                      y="-11"
                      fill="#FFFFFF"
                      fontSize="22"
                      fontWeight="800"
                      style={{ fontFamily: "'Alexandria', 'Readex Pro', 'IBM Plex Sans Arabic', sans-serif" }}
                    >
                      {isRtl ? 'تجربة' : 'Customer'}
                    </text>
                    <text
                      textAnchor="middle"
                      y="18"
                      fill="#FFFFFF"
                      fontSize="22"
                      fontWeight="800"
                      style={{ fontFamily: "'Alexandria', 'Readex Pro', 'IBM Plex Sans Arabic', sans-serif" }}
                    >
                      {isRtl ? 'العميل' : 'Experience'}
                    </text>
                  </>
                ) : (
                  <text
                    textAnchor="middle"
                    y="7"
                    fill={textColor}
                    fontSize={item.title[lang].length > 9 ? '17' : '19'}
                    fontWeight="700"
                    style={{ fontFamily: "'Alexandria', 'Readex Pro', 'IBM Plex Sans Arabic', sans-serif" }}
                    className="tracking-tight transition-colors"
                  >
                    {item.title[lang]}
                  </text>
                )}
              </g>

              {/* Selected subtle ring */}
              {isSelected && !isCenter && (
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={tileSize * 0.38}
                  fill="none"
                  stroke="#C7362E"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-spin-slow opacity-70 pointer-events-none"
                />
              )}
            </motion.g>
          );
        })}
      </svg>

      {/* Quick Helper Badge & Re-assemble Trigger */}
      <div className="mt-4 flex items-center justify-between px-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#D9E2EC] text-[#486581] text-xs font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C7362E]" />
          <span>{isRtl ? 'انقر على أي قطعة للاستكشاف' : 'Click any piece to explore'}</span>
        </span>

        <button
          onClick={triggerReassembly}
          disabled={isAssembling}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#102A43] hover:bg-[#C7362E] text-white text-xs font-bold transition-all shadow-xs active:scale-95 disabled:opacity-50"
          title={isRtl ? 'إعادة عرض حركة تجميع البازل' : 'Replay assembly animation'}
        >
          <RotateCcw className={`w-3.5 h-3.5 ${isAssembling ? 'animate-spin' : ''}`} />
          <span>{isRtl ? 'إعادة تجميع البازل ✨' : 'Re-assemble ✨'}</span>
        </button>
      </div>

    </div>
  );
};
