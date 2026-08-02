import React, { useState } from 'react';
import { Language } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveFrameworkProps {
  lang: Language;
}

export const InteractiveFramework: React.FC<InteractiveFrameworkProps> = ({ lang }) => {
  const isRtl = lang === 'ar';

  // 7 framework pieces in order
  const frameworkPieces = [
    {
      id: 'strategy',
      label: { ar: 'الاستراتيجية', en: 'STRATEGY' },
      displayTitle: { ar: 'الاستراتيجية', en: 'Strategy' },
      body: {
        ar: 'الوعد الذي تحدّده القيادة — مُترجَمًا إلى مهام تشغيلية يمكن للفِرق تنفيذها بموثوقية.',
        en: 'The promise set by leadership — translated into operational tasks that teams can execute with reliability.'
      },
      isLightPiece: true, // Top accent piece
    },
    {
      id: 'brand',
      label: { ar: 'العلامة', en: 'BRAND' },
      displayTitle: { ar: 'العلامة التجارية', en: 'Brand' },
      body: {
        ar: 'التوقّع الذي تضعه في السوق — مُنعكسًا في كل لحظة من لحظات للتسليم والاستجابة.',
        en: 'The expectation you set in the market — reflected in every moment of delivery and response.'
      },
      isLightPiece: false,
    },
    {
      id: 'operations',
      label: { ar: 'العمليات', en: 'OPERATIONS' },
      displayTitle: { ar: 'العمليات التشغيلية', en: 'Operations' },
      body: {
        ar: 'الميكانيكا المتكرّرة والعمليات المنظمة التي تجعل وعد العميل موثوقًا لا طموحًا.',
        en: 'The repeatable mechanics and organized processes that make customer promises reliable rather than aspirational.'
      },
      isLightPiece: false,
    },
    {
      id: 'service',
      label: { ar: 'تقديم الخدمة', en: 'SERVICE DELIVERY' },
      displayTitle: { ar: 'تقديم الخدمة', en: 'Service Delivery' },
      body: {
        ar: 'ينفذ الوعد في كل تفاعل مباشر مع العميل وسلوكيات الخط الأمامي عبر كافة القنوات.',
        en: 'Executes the promise in every direct interaction with the customer across all touchpoints.'
      },
      isLightPiece: false,
    },
    {
      id: 'culture',
      label: { ar: 'الثقافة', en: 'CULTURE' },
      displayTitle: { ar: 'الثقافة التنظيمية', en: 'Culture' },
      body: {
        ar: 'المعتقدات المشتركة والسلوكيات اليومية التي تحدّد ما تفعله الفِرق حين لا ينطبق أي نص.',
        en: 'The shared beliefs and daily behaviors that dictate what teams do when no script applies.'
      },
      isLightPiece: true, // Bottom accent piece
    },
    {
      id: 'marketing',
      label: { ar: 'التسويق', en: 'MARKETING' },
      displayTitle: { ar: 'التسويق والتواصل', en: 'Marketing' },
      body: {
        ar: 'السردية التي تكسب الانتباه — دون أن تقطع وعودًا تعجز التجربة الفعلية عن الوفاء بها.',
        en: 'The narrative that captures attention — without making promises experience cannot deliver.'
      },
      isLightPiece: false,
    },
    {
      id: 'technology',
      label: { ar: 'التقنية', en: 'TECHNOLOGY' },
      displayTitle: { ar: 'التقنية والأنظمة', en: 'Technology' },
      body: {
        ar: 'الأنظمة الرقمية والأدوات التي تُزيل الاحتكاك وتُتيح للتجربة الصحيحة أن تتوسّع بمرونة.',
        en: 'The digital systems and tools that remove friction and allow the right experience to scale smoothly.'
      },
      isLightPiece: false,
    },
  ];

  const [activeId, setActiveId] = useState<string>('service');
  const activePiece = frameworkPieces.find((p) => p.id === activeId) || frameworkPieces[3];

  // Geometry calculations for the 7-piece C-shaped interlocking ring puzzle
  const cx = 260;
  const cy = 260;
  const rInner = 100;
  const rOuter = 230;
  const w = rOuter - rInner; // 130
  
  // Angle math for C-shape (spans 315°, leaving 45° mouth opening on the right side from -22.5° to +22.5°)
  // Piece 0: top-right (-67.5° to -22.5°, mid -45°)
  // Piece 1: top (-112.5° to -67.5°, mid -90°) [Light Beige]
  // Piece 2: top-left (-157.5° to -112.5°, mid -135°)
  // Piece 3: middle-left (-202.5° to -157.5°, mid -180°) [Selected/Red]
  // Piece 4: bottom-left (-247.5° to -202.5°, mid -225°)
  // Piece 5: bottom (-292.5° to -247.5°, mid -270°) [Light Beige]
  // Piece 6: bottom-right (-337.5° to -292.5°, mid -315°)

  // Radial boundary points generator for jigsaw tab
  const getRadialBoundaryPoints = (angleDeg: number, dir: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    const ux = Math.cos(rad);
    const uy = Math.sin(rad);
    const nx = -Math.sin(rad) * dir;
    const ny = Math.cos(rad) * dir;

    const pt = (r: number, offset: number) => ({
      x: cx + r * ux + offset * nx,
      y: cy + r * uy + offset * ny,
    });

    const r1 = rInner + w * 0.32;
    const rMid = rInner + w * 0.50;
    const r2 = rInner + w * 0.68;
    const h = 18; // puzzle knob height

    const pStart = pt(rInner, 0);
    const p1 = pt(r1, 0);
    const pK1 = pt(r1 + 2, h * 0.3);
    const pK2 = pt(rMid - 10, h * 1.1);
    const pKMid = pt(rMid, h * 1.15);
    const pK3 = pt(rMid + 10, h * 1.1);
    const pK4 = pt(r2 - 2, h * 0.3);
    const p2 = pt(r2, 0);
    const pEnd = pt(rOuter, 0);

    return { pStart, p1, pK1, pK2, pKMid, pK3, pK4, p2, pEnd };
  };

  // Build SVG path string for piece i
  const buildPiecePath = (i: number) => {
    // Piece angles
    const aEnd = -22.5 - i * 45;       // Clockwise end angle
    const aStart = -67.5 - i * 45;     // Counter-clockwise start angle

    const radStart = (aStart * Math.PI) / 180;
    const radEnd = (aEnd * Math.PI) / 180;

    // Start boundary (at aStart): Joint i if i < 6, or FLAT mouth edge if i === 6
    let bStart: any = null;
    if (i < 6) {
      const dir = i % 2 === 0 ? 1 : -1;
      bStart = getRadialBoundaryPoints(aStart, dir);
    }

    // End boundary (at aEnd): Joint i-1 if i > 0, or FLAT mouth edge if i === 0
    let bEnd: any = null;
    if (i > 0) {
      const dir = (i - 1) % 2 === 0 ? 1 : -1;
      bEnd = getRadialBoundaryPoints(aEnd, dir);
    }

    const startInnerX = cx + rInner * Math.cos(radStart);
    const startInnerY = cy + rInner * Math.sin(radStart);
    const startOuterX = cx + rOuter * Math.cos(radStart);
    const startOuterY = cy + rOuter * Math.sin(radStart);

    const endInnerX = cx + rInner * Math.cos(radEnd);
    const endInnerY = cy + rInner * Math.sin(radEnd);
    const endOuterX = cx + rOuter * Math.cos(radEnd);
    const endOuterY = cy + rOuter * Math.sin(radEnd);

    const pathParts = [];

    // 1. Start at inner radius of aStart
    pathParts.push(`M ${startInnerX.toFixed(2)} ${startInnerY.toFixed(2)}`);

    // 2. Outward along aStart
    if (i === 6) {
      // Flat bottom mouth edge
      pathParts.push(`L ${startOuterX.toFixed(2)} ${startOuterY.toFixed(2)}`);
    } else {
      // Jigsaw curve outward
      pathParts.push(`L ${bStart.p1.x.toFixed(2)} ${bStart.p1.y.toFixed(2)}`);
      pathParts.push(`C ${bStart.pK1.x.toFixed(2)} ${bStart.pK1.y.toFixed(2)}, ${bStart.pK2.x.toFixed(2)} ${bStart.pK2.y.toFixed(2)}, ${bStart.pKMid.x.toFixed(2)} ${bStart.pKMid.y.toFixed(2)}`);
      pathParts.push(`C ${bStart.pK3.x.toFixed(2)} ${bStart.pK3.y.toFixed(2)}, ${bStart.pK4.x.toFixed(2)} ${bStart.pK4.y.toFixed(2)}, ${bStart.p2.x.toFixed(2)} ${bStart.p2.y.toFixed(2)}`);
      pathParts.push(`L ${bStart.pEnd.x.toFixed(2)} ${bStart.pEnd.y.toFixed(2)}`);
    }

    // 3. Outer Arc from aStart to aEnd (clockwise)
    pathParts.push(`A ${rOuter} ${rOuter} 0 0 1 ${endOuterX.toFixed(2)} ${endOuterY.toFixed(2)}`);

    // 4. Inward along aEnd
    if (i === 0) {
      // Flat top mouth edge
      pathParts.push(`L ${endInnerX.toFixed(2)} ${endInnerY.toFixed(2)}`);
    } else {
      // Reverse jigsaw curve inward
      pathParts.push(`L ${bEnd.p2.x.toFixed(2)} ${bEnd.p2.y.toFixed(2)}`);
      pathParts.push(`C ${bEnd.pK4.x.toFixed(2)} ${bEnd.pK4.y.toFixed(2)}, ${bEnd.pK3.x.toFixed(2)} ${bEnd.pK3.y.toFixed(2)}, ${bEnd.pKMid.x.toFixed(2)} ${bEnd.pKMid.y.toFixed(2)}`);
      pathParts.push(`C ${bEnd.pK2.x.toFixed(2)} ${bEnd.pK2.y.toFixed(2)}, ${bEnd.pK1.x.toFixed(2)} ${bEnd.pK1.y.toFixed(2)}, ${bEnd.p1.x.toFixed(2)} ${bEnd.p1.y.toFixed(2)}`);
      pathParts.push(`L ${bEnd.pStart.x.toFixed(2)} ${bEnd.pStart.y.toFixed(2)}`);
    }

    // 5. Inner Arc from aEnd back to aStart (counter-clockwise)
    pathParts.push(`A ${rInner} ${rInner} 0 0 0 ${startInnerX.toFixed(2)} ${startInnerY.toFixed(2)}`);
    pathParts.push('Z');

    return pathParts.join(' ');
  };

  return (
    <section id="services" className="bg-white text-[#102A43] py-20 sm:py-28 border-b border-[#E4E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 text-right rtl:text-right ltr:text-left">
          <p className="text-xs font-mono font-semibold tracking-[0.22em] uppercase text-[#627D98]">
            {isRtl ? '٠٢ — الآلية' : '02 — PROPRIETARY METHODOLOGY'}
          </p>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-[#102A43] leading-[1.3]">
            {isRtl ? 'إطار من الاستراتيجية إلى التجربة™' : 'The Strategy-to-Experience Framework™'}
          </h2>

          <p className="text-base sm:text-lg text-[#102A43]/80 leading-relaxed pt-1">
            {isRtl ? (
              <>سبع قدرات تنظيمية تنشأ وتلتقي في نقطة واحدة — <span className="text-[#C7362E] font-bold">العميل</span>. انقر أو مرّر على أي جزء في الشكل التفاعلي للتعرف على دوره في تقديم التجربة.</>
            ) : (
              'Seven organizational capabilities converge at one point — the customer. Select any piece to see how it contributes to experience delivery.'
            )}
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Interlocking Circular Puzzle Ring (7 cols) */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-square select-none p-2">
              <svg
                viewBox="0 0 520 520"
                className="w-full h-full overflow-visible drop-shadow-md"
              >
                {/* 7 Interlocking Ring Puzzle Pieces */}
                {frameworkPieces.map((piece, i) => {
                  const isActive = piece.id === activeId;
                  const pathD = buildPiecePath(i);

                  // Mid angle & coordinates for radial expansion on hover/selection
                  const midAngleDeg = -45 - i * 45;
                  const midRad = (midAngleDeg * Math.PI) / 180;
                  const popDistance = isActive ? 10 : 0;
                  const popX = Math.cos(midRad) * popDistance;
                  const popY = Math.sin(midRad) * popDistance;

                  // Label placement radius (middle of the ring)
                  const rLabel = rInner + w * 0.50;
                  const lx = cx + rLabel * Math.cos(midRad);
                  const ly = cy + rLabel * Math.sin(midRad);

                  // Alternating color logic: even indices beige (#EAE6E1), odd indices navy (#102A43)
                  const isBeige = i % 2 === 0;

                  let fill = isBeige ? '#EAE6E1' : '#102A43'; // Alternating beige and navy
                  let stroke = isBeige ? '#C3BBAE' : '#0A1C2E';
                  let textColor = isBeige ? '#102A43' : '#FFFFFF';

                  if (isActive) {
                    fill = '#C7362E'; // Active crimson red
                    stroke = '#9E241E';
                    textColor = '#FFFFFF';
                  }

                  return (
                    <motion.g
                      key={piece.id}
                      animate={{ x: popX, y: popY }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                      onClick={() => setActiveId(piece.id)}
                      onMouseEnter={() => setActiveId(piece.id)}
                      className="cursor-pointer group"
                    >
                      {/* Puzzle Segment Shape */}
                      <path
                        d={pathD}
                        fill={fill}
                        stroke={stroke}
                        strokeWidth={isActive ? '2.5' : '1.5'}
                        strokeLinejoin="round"
                        className="transition-colors duration-200"
                      />

                      {/* Text Label on Puzzle Piece */}
                      <g transform={`translate(${lx}, ${ly})`} className="pointer-events-none">
                        <text
                          textAnchor="middle"
                          dy="4"
                          fill={textColor}
                          fontSize="11"
                          fontWeight={isActive ? '800' : '700'}
                          style={{ fontFamily: "'Alexandria', 'Readex Pro', 'IBM Plex Sans Arabic', sans-serif" }}
                          className="tracking-wider select-none uppercase"
                        >
                          {piece.label[lang]}
                        </text>
                      </g>
                    </motion.g>
                  );
                })}

                {/* Central Customer Experience Label inside the C-Shape */}
                <g className="pointer-events-none">
                  <text
                    x={cx - 5}
                    y={cy - 7}
                    textAnchor="middle"
                    fill="#102A43"
                    fontSize="13"
                    fontWeight="800"
                    style={{ fontFamily: "'Alexandria', 'Readex Pro', 'IBM Plex Sans Arabic', sans-serif" }}
                    className="uppercase tracking-wider"
                  >
                    {isRtl ? 'تجربة' : 'CUSTOMER'}
                  </text>

                  <text
                    x={cx - 5}
                    y={cy + 13}
                    textAnchor="middle"
                    fill="#102A43"
                    fontSize="13"
                    fontWeight="800"
                    style={{ fontFamily: "'Alexandria', 'Readex Pro', 'IBM Plex Sans Arabic', sans-serif" }}
                    className="uppercase tracking-wider"
                  >
                    {isRtl ? 'العميل' : 'EXPERIENCE'}
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* Right Side: Information & Capsule Navigation Panel (5 cols) */}
          <div className="lg:col-span-5 lg:border-l lg:rtl:border-l-0 lg:rtl:border-r border-[#D9E2EC] lg:pl-10 lg:rtl:pl-0 lg:rtl:pr-10 space-y-8 text-right rtl:text-right ltr:text-left">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activePiece.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#627D98]">
                  {isRtl ? 'عنصر الإطار' : 'FRAMEWORK COMPONENT'}
                </p>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#102A43]">
                  {activePiece.displayTitle[lang]}
                </h3>

                <p className="text-base sm:text-lg text-[#486581] leading-relaxed pt-1 min-h-[80px]">
                  {activePiece.body[lang]}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Capsules / Filter Pills Grid */}
            <div className="pt-6 border-t border-[#D9E2EC]">
              <div className="flex flex-wrap gap-2.5">
                {frameworkPieces.map((piece) => {
                  const isActive = piece.id === activeId;
                  return (
                    <button
                      key={piece.id}
                      onClick={() => setActiveId(piece.id)}
                      className={`px-4 py-2.5 text-xs font-bold tracking-[0.14em] uppercase transition-all rounded-md border ${
                        isActive
                          ? 'bg-[#C7362E] text-white border-[#C7362E] shadow-xs'
                          : 'bg-white text-[#102A43] border-[#D9E2EC] hover:border-[#C7362E]'
                      }`}
                    >
                      {piece.label[lang]}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

