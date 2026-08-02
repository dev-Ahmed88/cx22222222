import React from 'react';
import { Language } from '../types';

interface GlossaryHeaderBannerProps {
  lang: Language;
}

// Helper to generate seamless interlocking jigsaw puzzle piece paths
function getPuzzlePath(
  x: number,
  y: number,
  w: number = 60,
  h: number = 60,
  top: number = 0,
  right: number = 0,
  bottom: number = 0,
  left: number = 0
): string {
  let d = `M ${x} ${y}`;

  // Top edge
  if (top === 0) {
    d += ` L ${x + w} ${y}`;
  } else {
    const s = top; // 1 = out (up), -1 = in (down)
    d += ` L ${x + w * 0.35} ${y}`;
    d += ` C ${x + w * 0.35} ${y - s * 5}, ${x + w * 0.22} ${y - s * 16}, ${x + w * 0.5} ${y - s * 16}`;
    d += ` C ${x + w * 0.78} ${y - s * 16}, ${x + w * 0.65} ${y - s * 5}, ${x + w * 0.65} ${y}`;
    d += ` L ${x + w} ${y}`;
  }

  // Right edge
  if (right === 0) {
    d += ` L ${x + w} ${y + h}`;
  } else {
    const s = right; // 1 = out (right), -1 = in (left)
    d += ` L ${x + w} ${y + h * 0.35}`;
    d += ` C ${x + w + s * 5} ${y + h * 0.35}, ${x + w + s * 16} ${y + h * 0.22}, ${x + w + s * 16} ${y + h * 0.5}`;
    d += ` C ${x + w + s * 16} ${y + h * 0.78}, ${x + w + s * 5} ${y + h * 0.65}, ${x + w} ${y + h * 0.65}`;
    d += ` L ${x + w} ${y + h}`;
  }

  // Bottom edge
  if (bottom === 0) {
    d += ` L ${x} ${y + h}`;
  } else {
    const s = bottom; // 1 = out (down), -1 = in (up)
    d += ` L ${x + w * 0.65} ${y + h}`;
    d += ` C ${x + w * 0.65} ${y + h + s * 5}, ${x + w * 0.78} ${y + h + s * 16}, ${x + w * 0.5} ${y + h + s * 16}`;
    d += ` C ${x + w * 0.22} ${y + h + s * 16}, ${x + w * 0.35} ${y + h + s * 5}, ${x + w * 0.35} ${y + h}`;
    d += ` L ${x} ${y + h}`;
  }

  // Left edge
  if (left === 0) {
    d += ` L ${x} ${y}`;
  } else {
    const s = left; // 1 = out (left), -1 = in (right)
    d += ` L ${x} ${y + h * 0.65}`;
    d += ` C ${x - s * 5} ${y + h * 0.65}, ${x - s * 16} ${y + h * 0.78}, ${x - s * 16} ${y + h * 0.5}`;
    d += ` C ${x - s * 16} ${y + h * 0.22}, ${x - s * 5} ${y + h * 0.35}, ${x} ${y + h * 0.35}`;
    d += ` L ${x} ${y}`;
  }

  d += ' Z';
  return d;
}

export const GlossaryHeaderBanner: React.FC<GlossaryHeaderBannerProps> = ({ lang }) => {
  const isRtl = lang === 'ar';

  // Fixed seam maps for seamless 5x6 interlocking wall
  // vSeams[row][col]: vertical seam between cell (row, col) and (row, col+1). 1 = right tab, -1 = left hole
  const vSeams = [
    [1, -1, 1, -1],
    [-1, 1, -1, 1],
    [1, -1, 1, -1],
    [-1, 1, -1, 1],
    [1, -1, 1, -1],
    [-1, 1, -1, 1],
  ];

  // hSeams[row][col]: horizontal seam between cell (row, col) and (row+1, col). 1 = down tab, -1 = up hole
  const hSeams = [
    [1, -1, 1, -1, 1],
    [-1, 1, -1, 1, -1],
    [1, -1, 1, -1, 1],
    [-1, 1, -1, 1, -1],
    [1, -1, 1, -1, 1],
  ];

  // Grid pieces configuration matching user image exactly
  // Row 0-5, Cols 0-4
  const gridCells = [
    // Row 0
    { row: 0, col: 0, fill: 'none' },
    { row: 0, col: 1, fill: 'none' },
    { row: 0, col: 2, fill: 'none' },
    { row: 0, col: 3, fill: '#0B1F3A' }, // Navy
    { row: 0, col: 4, fill: 'none' },

    // Row 1
    { row: 1, col: 0, fill: 'none' },
    { row: 1, col: 1, fill: '#D32027' }, // Red
    { row: 1, col: 2, fill: 'none' },
    { row: 1, col: 3, fill: 'none' },

    // Row 2
    { row: 2, col: 0, fill: 'none' },
    { row: 2, col: 1, fill: 'none' },
    { row: 2, col: 2, fill: '#0B1F3A' }, // Navy
    { row: 2, col: 3, fill: 'none' },

    // Row 3
    { row: 3, col: 0, fill: 'none' },
    { row: 3, col: 1, fill: 'none' },
    { row: 3, col: 2, fill: 'none' },

    // Row 4
    { row: 4, col: 0, fill: '#D32027' }, // Red
    { row: 4, col: 1, fill: 'none' },
    { row: 4, col: 2, fill: '#0B1F3A' }, // Navy

    // Row 5
    { row: 5, col: 0, fill: 'none' },
    { row: 5, col: 1, fill: 'none' },
    { row: 5, col: 2, fill: 'none' },
  ];

  return (
    <div className="-mx-6 sm:-mx-8 lg:-mx-12 my-6 bg-white border-y border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* dir="ltr" ensures Puzzle SVG stays on LEFT and Text stays on RIGHT */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 sm:py-8 lg:py-10 gap-6 min-h-[260px]" dir="ltr">
        
        {/* LEFT SIDE: Exact Jigsaw Puzzle Vector Graphic */}
        <div className="w-full md:w-1/2 lg:w-[55%] flex items-center justify-start overflow-hidden">
          <svg
            viewBox="0 0 520 360"
            className="w-full h-auto max-h-[280px] select-none"
            aria-hidden="true"
          >
            {/* Main Interlocking Wall on the left */}
            <g>
              {gridCells.map((cell) => {
                const { row, col, fill } = cell;
                const cellW = 60;
                const cellH = 60;
                const x = col * cellW;
                const y = row * cellH;

                // Determine edges from seam maps
                const top = row === 0 ? 0 : hSeams[row - 1][col];
                const bottom = row === 5 ? 0 : hSeams[row][col];
                const left = col === 0 ? 0 : vSeams[row][col - 1];
                const right = col === 4 ? 0 : vSeams[row][col];

                const pathData = getPuzzlePath(x, y, cellW, cellH, top, right, bottom, left);

                return (
                  <path
                    key={`wall-${row}-${col}`}
                    d={pathData}
                    fill={fill}
                    stroke="#1D2D42"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                );
              })}
            </g>

            {/* DETACHED FLOATING PIECES (Center area) */}

            {/* 1. Navy Piece top-right floating */}
            <g transform="translate(390, 80) rotate(28)">
              <path
                d={getPuzzlePath(0, 0, 58, 58, 1, -1, 1, 0)}
                fill="#0B1F3A"
                stroke="#0B1F3A"
                strokeWidth="1.2"
              />
            </g>

            {/* 2. Crimson Red Piece center floating */}
            <g transform="translate(330, 165) rotate(-18)">
              <path
                d={getPuzzlePath(0, 0, 58, 58, -1, 1, 0, 1)}
                fill="#D32027"
                stroke="#D32027"
                strokeWidth="1.2"
              />
            </g>

            {/* 3. White Outline Piece middle-right floating */}
            <g transform="translate(425, 205) rotate(14)">
              <path
                d={getPuzzlePath(0, 0, 54, 54, 1, 0, -1, 1)}
                fill="white"
                stroke="#1D2D42"
                strokeWidth="1.5"
              />
            </g>

            {/* 4. Small White Outline Piece lower center floating */}
            <g transform="translate(365, 275) rotate(-32)">
              <path
                d={getPuzzlePath(0, 0, 48, 48, -1, 1, 0, -1)}
                fill="white"
                stroke="#1D2D42"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </div>

        {/* RIGHT SIDE: Exact Arabic Typography strictly matching user image */}
        <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col justify-center items-end text-right space-y-3" dir="rtl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-[#0B1F3A] leading-[1.3]">
            {isRtl ? (
              <>
                كل مفهوم جزء<br />
                من نظام تجربة العميل
              </>
            ) : (
              'Every Concept is Part of the Customer Experience System'
            )}
          </h2>

          {/* Red Accent Line aligned to the right under title */}
          <div className="w-12 h-[4px] bg-[#D32027] my-1" />

          <p className="text-sm sm:text-base font-medium text-[#334155] leading-relaxed">
            {isRtl
              ? 'لتكتمل الصورة يجب أن نفهم العلاقة بين أجزائها'
              : 'To complete the picture, we must understand the relationship between its parts'}
          </p>
        </div>

      </div>
    </div>
  </div>
);
};
