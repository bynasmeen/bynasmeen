'use client';
import {ArrowUpRight, ArrowDown, Braces, Compass, FileText} from 'lucide-react';
import styles from './hero.module.css';

type HeroProps = {lang:'en'|'th'; onWork:()=>void; onGallery:()=>void; onResume:()=>void; showLife?:boolean};
export default function Hero({lang,onWork,onGallery,onResume,showLife=true}:HeroProps) {
 const t=(en:string,th:string)=>lang==='en'?en:th;
 return <section className={styles.hero} aria-label={t('Meet Nasmeen','รู้จักนัสมีน')}>
  <div className={styles.orbit} aria-hidden="true"/>
  <div className={styles.marginNote} aria-hidden="true"><span>01 — ∞</span><i>{t('a work in progress','เรียนรู้ไปเรื่อย ๆ')}</i></div>
  <div className={styles.intro}><span className={styles.monogram}>n.</span><span>{t('HELLO, I’M NASMEEN ISLAM','สวัสดีครับ ผม NASMEEN ISLAM')}<small>{t('Software Engineer · Backend Development','Software Engineer · เน้นการพัฒนา Backend')}</small></span></div>
  <h1 className={styles.headline}>
   <span className={styles.line}><span className={styles.titleWords}><span>{t('Code. ','โค้ดที่')}</span><span>{t('Curiosity.','ตั้งใจสร้าง')}</span></span><span className={styles.codeToken} aria-hidden="true"><Braces/><span>hello, world</span><i/></span></span>
   <span className={styles.line}><span className={styles.photoToken}><img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=85" alt={t('Sample photograph of a mountain lake','ภาพตัวอย่างทะเลสาบและภูเขา')}/><small>{t('SAMPLE','ภาพตัวอย่าง')}</small></span><em className={styles.titleWords}><span>{t('Life in ','ชีวิตที่อยาก')}</span><span>{t('between.','ออกไปเจอ')}</span></em><span className={styles.star} aria-hidden="true">✳</span></span>
  </h1>
  <p className={styles.description}>{t('I build backend systems. I collect stories along the way.','ผมสร้างระบบ Backend และเก็บเรื่องราวระหว่างทาง')}<br/>{t('A space for my work, my discoveries, and everything that makes me, me.','พื้นที่ของผลงาน การเดินทาง และสิ่งเล็ก ๆ ที่ประกอบเป็นตัวผม')}</p>
  <div className={styles.actions}>
   <button className={styles.workButton} onClick={onWork}><span className={styles.buttonIcon}><Braces size={21}/></span><span>{t('Explore my work','สำรวจผลงานของผม')}<small>{t('Projects & experience','ผลงานและประสบการณ์')}</small></span><ArrowUpRight size={19}/></button>
   {showLife&&<button className={styles.lifeButton} onClick={onGallery}><span className={styles.buttonIcon}><Compass size={21}/></span><span>{t('Explore my life','สำรวจชีวิตนอกจอ')}<small>{t('Trips & little moments','ทริปและช่วงเวลาเล็ก ๆ')}</small></span><ArrowUpRight size={19}/></button>}
  </div>
  <button className={styles.resume} onClick={onResume}><FileText size={14}/>{t('Just here for my résumé?','อยากดูประวัติแบบย่อ?')}<span>{t('View résumé','ดู résumé')}</span><ArrowUpRight size={13}/></button>
  <div className={styles.scribble} aria-hidden="true"><svg viewBox="0 0 100 65"><path d="M89 6C69 4 76 41 47 41S24 13 40 19 22 63 8 53m0 0 12-1M8 53l4-12"/></svg><span>{t('both are me.','ทั้งสองมุม คือผมเอง')}</span></div>
  <div className={styles.bottom}><span className={styles.status}><i/>{t('OPEN TO BACKEND OPPORTUNITIES','พร้อมร่วมงานด้าน BACKEND')}</span><a href="#experience">{t('KEEP EXPLORING','ยังมีเรื่องราวอีกมาก')}<ArrowDown size={14}/></a><span className={styles.location}>BANGKOK, THAILAND</span></div>
 </section>;
}
