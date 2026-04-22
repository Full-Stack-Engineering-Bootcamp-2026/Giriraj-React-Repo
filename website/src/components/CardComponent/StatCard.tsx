// import { useEffect, useRef } from 'react';

// interface StatCardProps {
//   label: string;
//   value: number;
//   icon: string;
//   iconBg: string;
//   prefix?: string;
// }

// const StatCard = ({ label, value, icon, iconBg, prefix = "" }: StatCardProps) => {
//   const countupRef = useRef<HTMLHeadingElement>(null);

//   useEffect(() => {
//     async function initCountUp() {
//       const { CountUp } = await import('countup.js');
//       const countUpAnim = new CountUp(countupRef.current!, value, {
//         startVal: 0,
//         duration: 2,
//         prefix: prefix,
//       });

//       if (!countUpAnim.error) {
//         countUpAnim.start();
//       } else {
//         console.error(countUpAnim.error);
//       }
//     }
//     initCountUp();
//   }, [value, prefix]);

//   return (
//     <div className="stat-card">
//       <div className="icon-container" style={{ backgroundColor: iconBg }}>
//         <i className={`fas ${icon}`}></i>
//       </div>
//       <div className="content">
//         <p className="label">{label}</p>
//         <h2 ref={countupRef} className="value">0</h2>
//       </div>
//     </div>
//   );
// };

// export default StatCard;

import { useEffect, useRef } from 'react';
import styles from './StatCard.module.css';

const cardData = [
  { label: "Total clients", value: 6389, bg: "#ff4d17", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" },
  { label: "Account balance", value: 46760.89, bg: "#00a86b", isPrice: true, icon: "M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" },
  { label: "New sales", value: 376, bg: "#3b82f6", icon: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" },
  { label: "Pending contacts", value: 35, bg: "#009bb3", icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }
];

export default function StatCard() {
  return (
    <div className={styles.outerWrapper}>
      {cardData.map((item, index) => (
        <CardBlock key={index} data={item} />
      ))}
    </div>
  );
}

function CardBlock({ data }: { data: any }) {
  const countRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    async function init() {
      const { CountUp } = await import('countup.js');
      const anim = new CountUp(countRef.current!, data.value, {
        decimalPlaces: data.isPrice ? 2 : 0,
        prefix: data.isPrice ? '$ ' : '',
        duration: 2
      });
      if (!anim.error) anim.start();
    }
    init();
  }, [data.value]);

  return (
    <div className={styles.card}>
      <div className={styles.iconContainer} style={{ backgroundColor: data.bg }}>
        <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d={data.icon} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className={styles.textGroup}>
        <p className={styles.label}>{data.label}</p>
        <h2 ref={countRef} className={styles.value}>0</h2>
      </div>
    </div>
  );
}

