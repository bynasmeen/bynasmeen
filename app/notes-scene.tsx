'use client';
import {useEffect,useRef,type ReactNode} from 'react';
import {ArrowUpRight,PenLine} from 'lucide-react';
import {updateCompactCards} from './compact-scroll';
import styles from './notes-scene.module.css';

const clamp=(n:number)=>Math.max(0,Math.min(1,n));

export default function NotesScene({lang,onAll,children}:{lang:'en'|'th';onAll:()=>void;children:ReactNode}){
 const root=useRef<HTMLElement>(null);
 const t=(en:string,th:string)=>lang==='en'?en:th;
 useEffect(()=>{
  const el=root.current!;
  const cards=[...el.querySelectorAll<HTMLElement>('.post-card')];
  const desktop=matchMedia('(min-width: 900px) and (min-height: 780px)');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let frame=0;
  function update(){
   frame=0;
   const enabled=desktop.matches&&!reduced.matches;
   el.dataset.desk=enabled?'on':reduced.matches?'off':'compact';
   if(!enabled&&!reduced.matches)updateCompactCards(cards);
   const top=el.getBoundingClientRect().top;
   const entry=innerHeight*.82;
   const p=!enabled||el.contains(document.activeElement)?1:clamp((entry-top)/(entry+100));
   el.style.setProperty('--desk-open',String(p));
   el.style.setProperty('--desk-copy',String(clamp((p-.3)/.45)));
  }
  function schedule(){if(!frame)frame=requestAnimationFrame(update);}
  const observer=new ResizeObserver(schedule);observer.observe(el);
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule);
  el.addEventListener('focusin',schedule);el.addEventListener('focusout',schedule);
  desktop.addEventListener('change',schedule);reduced.addEventListener('change',schedule);
  update();
  return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);el.removeEventListener('focusin',schedule);el.removeEventListener('focusout',schedule);desktop.removeEventListener('change',schedule);reduced.removeEventListener('change',schedule);};
 },[]);
 return <section ref={root} className={styles.scene} aria-labelledby="notes-heading">
  <div className={styles.desk}>
   <div className={styles.heading}><div><span className={styles.eyebrow}>02 / {t('THINKING OUT LOUD','บันทึกระหว่างเรียนรู้')}</span><h2 id="notes-heading">{t('Notes from the desk','บันทึกจากโต๊ะทำงาน')}<PenLine aria-hidden="true" size={26}/></h2><p>{t('From things I build to things I figure out.','จากสิ่งที่ลงมือสร้าง สู่เรื่องที่อยากเล่าให้ฟัง')}</p></div><button onClick={onAll}>{t('All notes','บทความทั้งหมด')}<ArrowUpRight size={17}/></button></div>
   <div className={styles.workspace}>
    <div className={styles.guide} aria-hidden="true"><span>IDEAS</span><i/><span>WORTH SHARING</span></div>
    <div className={styles.cards}>{children}</div>
   </div>
   <div className={styles.footer}><span><i/>{t('A work in thought.','ระหว่างคิด ระหว่างเรียนรู้')}</span><span>{t('SELECT A NOTE · STAY CURIOUS','เลือกอ่านสักเรื่อง · แล้วเรียนรู้ไปด้วยกัน')}</span><div className={styles.track}><i/></div></div>
  </div>
 </section>;
}
