'use client';
import {useEffect,useRef} from 'react';
import {ArrowUpRight,ArrowDown} from 'lucide-react';
import BrandLogo from './brand-logo';
import styles from './experience-scene.module.css';

import type {Experience} from './portfolio-content';
const clamp=(n:number)=>Math.max(0,Math.min(1,n));
const mix=(a:number,b:number,p:number)=>a+(b-a)*p;

export default function ExperienceScene({items,lang,onOpen,onAll}:{items:Experience[];lang:'en'|'th';onOpen:(item:Experience)=>void;onAll:()=>void}){
 const root=useRef<HTMLElement>(null);
 const t=(en:string,th:string)=>lang==='en'?en:th;
 useEffect(()=>{
  const el=root.current;if(!el)return;
  const stage=el.querySelector<HTMLElement>('[data-stage]')!;
  const canvas=el.querySelector<HTMLElement>('[data-canvas]')!;
  const cards=[...el.querySelectorAll<HTMLElement>('[data-card]')];
  const desktop=matchMedia('(min-width: 900px) and (min-height: 780px)');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let frame=0;
  function update(){
   frame=0;
   const enabled=desktop.matches&&!reduced.matches;
   el!.dataset.morph=enabled?'on':reduced.matches?'off':'compact';
   if(!enabled){
    if(reduced.matches){el!.style.setProperty('--unfold','1');cards.forEach(c=>c.removeAttribute('style'));canvas.style.removeProperty('height');return;}
    const sceneTop=el!.getBoundingClientRect().top+scrollY;
    const start=Math.max(0,sceneTop-innerHeight+90);
    const p=el!.contains(document.activeElement)?1:clamp((scrollY-start)/Math.max(240,sceneTop-110-start));
    const width=canvas.clientWidth,gap=14,small=(width-4*6)/5;
    const work=width<360?300:270,education=210;
    canvas.style.height=`${4*(work+gap)+education}px`;
    el!.style.setProperty('--unfold',String(p));
    el!.style.setProperty('--heading-reveal',String(clamp((p-.88)/.12)));
    cards.forEach((card,i)=>{
     card.style.left=`${mix(i*(small+6),0,p)}px`;
     card.style.top=`${mix(18-canvas.offsetTop,i*(work+gap),p)}px`;
     card.style.width=`${mix(small,width,p)}px`;
     card.style.height=`${mix(44,i===4?education:work,p)}px`;
     card.style.setProperty('--detail',String(clamp((p-.5)/.4)));
     card.style.setProperty('--logo-x',`${mix((small-42)/2-18,0,p)}px`);
     card.style.setProperty('--logo-width',`${mix(42,i<2?49:82,p)}px`);
    });
    return;
   }
   canvas.style.removeProperty('height');
   const distance=el!.offsetHeight-stage.offsetHeight;
   const sceneTop=el!.getBoundingClientRect().top+window.scrollY;
   // Follow scrolling as soon as the logo row is visible, including before
   // the sticky stage reaches the header. Keep the initial row intact at y=0.
   const start=Math.max(0,sceneTop-window.innerHeight+120);
   const end=sceneTop-100+distance*.85;
   const raw=clamp((window.scrollY-start)/Math.max(1,end-start));
   const focused=el!.contains(document.activeElement);
   const p=focused?1:raw;
   // A linear response avoids a second perceived delay from an ease-in curve.
   const ease=p;
   el!.style.setProperty('--unfold',String(p));
   el!.style.setProperty('--heading-reveal',String(clamp((p-.65)/.25)));
   const width=canvas.clientWidth,height=canvas.clientHeight;
   const gap=16,small=(width-gap*4)/5,half=(width-gap)/2;
   const edu=90,work=(height-edu-gap*2)/2;
   cards.forEach((card,i)=>{
    const education=i===4;
    const x=education?0:(i%2)*(half+gap);
    const y=education?2*(work+gap):Math.floor(i/2)*(work+gap);
    // Start at the very top of the scene, immediately after the hero.
    // These same cards move below the heading as they unfold.
    const startY=12-canvas.offsetTop;
    card.style.left=`${mix(i*(small+gap),x,ease)}px`;
    card.style.top=`${mix(startY,y,ease)}px`;
    card.style.width=`${mix(small,education?width:half,ease)}px`;
    card.style.height=`${mix(76,education?edu:work,ease)}px`;
    card.style.setProperty('--logo-x',`${mix((small-82)/2-20,0,ease)}px`);
    card.style.setProperty('--detail',String(clamp((p-.48)/.42)));
    card.style.setProperty('--lift',`${Math.sin(p*Math.PI)*(i%2?2:-2)}deg`);
   });
  }
  function schedule(){if(!frame)frame=requestAnimationFrame(update);}
  const observer=new ResizeObserver(schedule);observer.observe(stage);
  window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);
  el.addEventListener('focusin',schedule);el.addEventListener('focusout',schedule);
  desktop.addEventListener('change',schedule);reduced.addEventListener('change',schedule);
  update();
  return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);el.removeEventListener('focusin',schedule);el.removeEventListener('focusout',schedule);desktop.removeEventListener('change',schedule);reduced.removeEventListener('change',schedule);};
 },[]);
 return <section ref={root} id="experience" className={styles.scene} aria-label={t('Experience along the way','ประสบการณ์ระหว่างทาง')}>
  <div data-stage className={styles.stage}>
   <div className={styles.logoOverview} aria-label={t('Organizations along the way','องค์กรในเส้นทางที่ผ่านมา')}>{items.map(item=><BrandLogo key={item.name} name={item.name} compact/>)}</div>
   <div className={styles.heading}><div><span className={styles.eyebrow}>01 / {t('EXPERIENCE ALONG THE WAY','ประสบการณ์ระหว่างทาง')}</span><h2>{t('The work behind the names.','งานที่ได้ลงมือทำในแต่ละที่')}</h2><p>{t('The problems I worked on, the decisions I made, and what each team taught me.','โจทย์ที่ได้แก้ การตัดสินใจระหว่างพัฒนา และสิ่งที่ได้เรียนรู้จากแต่ละทีม')}</p></div><button onClick={onAll}>{t('Full timeline','เส้นทางทั้งหมด')}<ArrowUpRight size={16}/></button></div>
   <div data-canvas className={styles.canvas}>
    {items.map((item,i)=><button data-card className={`${styles.card} ${item.kind==='Education'?styles.education:''}`} key={item.name} onClick={()=>onOpen(item)} aria-label={`${lang==='th'?(item.displayNameTh??item.displayName):item.displayName} — ${t(item.role,item.th)}`}>
     <div className={styles.cardTop}><BrandLogo name={item.name} compact/><span className={styles.meta}>{t(item.time,item.timeTh)}<ArrowUpRight size={18}/></span></div>
     <div className={styles.cardBody}><span className={styles.category}>{t(item.kind==='Education'?'THE FOUNDATION':'ON THE TEAM',item.kind==='Education'?'รากฐานการเรียนรู้':'ประสบการณ์ร่วมทีม')}</span><h3>{lang==='th'?(item.displayNameTh??item.displayName):item.displayName}</h3><p className={styles.role}>{t(item.role,item.th)}</p><p className={styles.description}>{t(item.desc,item.descTh)}</p><span className={styles.tags}>{item.tag}</span></div>
     <span className={styles.index}>0{i+1}</span>
    </button>)}
   </div>
   <div className={styles.footer}><span>{t('4 teams · 1 foundation · plenty of learning','4 ทีม · 1 รากฐาน · การเรียนรู้ระหว่างทาง')}</span><span className={styles.scrollHint}>{t('SCROLL TO UNFOLD','เลื่อนเพื่อเปิดเรื่องราว')}<ArrowDown size={14}/></span><span className={styles.openHint}>{t('SELECT A CARD TO READ THE STORY','เลือกการ์ดเพื่ออ่านเรื่องราว')}<ArrowUpRight size={14}/></span><div className={styles.track}><i/></div></div>
  </div>
 </section>;
}
