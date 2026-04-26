
import { useEffect, useRef } from 'react';
import styles from './StatCard.module.css';

import { IoMdPeople, IoMdWallet, IoMdCart, IoMdChatbubbles } from "react-icons/io";

const cardData = [
  { label: "Total clients", value: 6389, bg: "#ff4d17", icon: IoMdPeople },
  { label: "Account balance", value: 46760.89, bg: "#00a86b", isPrice: true, icon: IoMdWallet },
  { label: "New sales", value: 376, bg: "#3b82f6", icon: IoMdCart },
  { label: "Pending contacts", value: 35, bg: "#009bb3", icon: IoMdChatbubbles }
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
  

  const Icon = data.icon;

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
  }, [data.value, data.isPrice]);

  return (
    <div className={styles.card}>
      <div className={styles.iconContainer} style={{ backgroundColor: data.bg }}>
        
        <Icon size={22} color="#fff" />
      </div>
      <div className={styles.textGroup}>
        <p className={styles.label}>{data.label}</p>
        <h2 ref={countRef} className={styles.value}>0</h2>
      </div>
    </div>
  );
}

