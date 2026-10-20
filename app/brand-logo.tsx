const brands: Record<string, {src:string; className:string}> = {
  Makefunnel: {src:'/brands/makefunnel.jpg', className:'makefunnel'},
  Bitkub: {src:'/brands/bitkub.png', className:'bitkub'},
  'Stock Exchange of Thailand': {src:'/brands/set.png', className:'set'},
  'AIMET.Tech': {src:'/brands/aimet.svg', className:'aimet'},
  'Chulalongkorn University': {src:'/brands/chula.svg', className:'chula'},
};

export default function BrandLogo({name, compact=false}: {name:string; compact?:boolean}) {
  const brand = brands[name];
  if (!brand) return <span>{name}</span>;
  return <span data-brand={name} className={`brand-logo brand-${brand.className} ${compact?'brand-compact':''}`}>
    <img src={brand.src} alt={`${name==='Makefunnel'?'MakeFunnel':name} logo`} width={128} height={64}/>
    {!compact && (name === 'Bitkub' || name === 'Makefunnel') && <strong>{name==='Makefunnel'?'MakeFunnel':name}</strong>}
  </span>;
}
