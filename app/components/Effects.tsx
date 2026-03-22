"use client";
import { useEffect, useRef } from "react";

export default function Effects() {
  const lightRef = useRef<HTMLCanvasElement>(null);
  const wormRef = useRef<HTMLCanvasElement>(null);
  const shockRef = useRef<HTMLCanvasElement>(null);
  const repelRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // LIGHTNING
    const lc = lightRef.current!;
    lc.width = window.innerWidth;
    lc.height = window.innerHeight;
    const lctx = lc.getContext("2d")!;

    function drawBolt(x1:number,y1:number,x2:number,y2:number,depth:number,segs:{p:number[][]}[]) {
      if(depth<=0) return;
      const mx=(x1+x2)/2+(Math.random()-.5)*80;
      const my=(y1+y2)/2+(Math.random()-.5)*40;
      segs.push({p:[[x1,y1],[mx,my]]});
      segs.push({p:[[mx,my],[x2,y2]]});
      if(depth>1){drawBolt(x1,y1,mx,my,depth-1,segs);drawBolt(mx,my,x2,y2,depth-1,segs);}
    }

    function strike(tx:number,ty:number) {
      const segs:{p:number[][]}[] = [];
      drawBolt(Math.random()*lc.width,0,tx,ty,4,segs);
      segs.forEach(s=>{
        lctx.beginPath();lctx.moveTo(s.p[0][0],s.p[0][1]);lctx.lineTo(s.p[1][0],s.p[1][1]);
        lctx.strokeStyle="rgba(168,85,247,0.9)";lctx.lineWidth=1.5;
        lctx.shadowColor="#a855f7";lctx.shadowBlur=20;lctx.stroke();
      });
      setTimeout(()=>lctx.clearRect(0,0,lc.width,lc.height),120);
    }

    const lightInterval = setInterval(()=>{
      strike(Math.random()*lc.width, Math.random()*lc.height*0.7);
    },3000);

    window.addEventListener("mousemove",(e)=>{
      if(Math.random()>0.97) strike(e.clientX,e.clientY);
    });

    // WORMHOLE
    const wc = wormRef.current!;
    wc.width = window.innerWidth;
    wc.height = window.innerHeight;
    const wctx = wc.getContext("2d")!;
    let wt = 0;
    function animWorm() {
      wctx.fillStyle="rgba(5,5,5,0.12)";
      wctx.fillRect(0,0,wc.width,wc.height);
      const cx=wc.width*0.8, cy=wc.height*0.2;
      for(let i=0;i<80;i++) {
        const angle=(i/80)*Math.PI*2+wt*0.03;
        const r=8+i*0.8+Math.sin(wt*0.05+i*0.2)*5;
        const x=cx+Math.cos(angle)*r*(1-i/120);
        const y=cy+Math.sin(angle)*r*0.5*(1-i/120);
        wctx.beginPath();
        wctx.arc(x,y,1.5-i*0.015,0,Math.PI*2);
        wctx.fillStyle=`hsla(${270+i*2},80%,60%,${(1-i/80)*0.6})`;
        wctx.fill();
      }
      wt++;
      requestAnimationFrame(animWorm);
    }
    animWorm();

    // SHOCKWAVE on click
    const sc = shockRef.current!;
    sc.width = window.innerWidth;
    sc.height = window.innerHeight;
    const sctx = sc.getContext("2d")!;
    let waves:{x:number;y:number;r:number;alpha:number}[] = [];

    function animShock() {
      sctx.clearRect(0,0,sc.width,sc.height);
      waves = waves.filter(w=>w.alpha>0.01);
      waves.forEach(w=>{
        w.r+=5;w.alpha*=0.92;
        sctx.beginPath();sctx.arc(w.x,w.y,w.r,0,Math.PI*2);
        sctx.strokeStyle=`rgba(168,85,247,${w.alpha})`;
        sctx.lineWidth=2;sctx.shadowColor="#a855f7";sctx.shadowBlur=25;
        sctx.stroke();
        sctx.beginPath();sctx.arc(w.x,w.y,w.r*0.6,0,Math.PI*2);
        sctx.strokeStyle=`rgba(99,102,241,${w.alpha*0.5})`;
        sctx.lineWidth=1;sctx.stroke();
      });
      requestAnimationFrame(animShock);
    }
    animShock();

    window.addEventListener("click",(e)=>{
      for(let i=0;i<4;i++) waves.push({x:e.clientX,y:e.clientY,r:i*12,alpha:1-i*0.2});
    });

    // REPEL PARTICLES
    const rc = repelRef.current!;
    rc.width = window.innerWidth;
    rc.height = window.innerHeight;
    const rctx = rc.getContext("2d")!;
    const particles = Array.from({length:80},()=>({
      x:Math.random()*rc.width, y:Math.random()*rc.height,
      ox:0, oy:0, vx:0, vy:0, r:Math.random()*2+0.5
    }));
    particles.forEach(p=>{p.ox=p.x;p.oy=p.y;});
    let mx=-999, my=-999;
    window.addEventListener("mousemove",(e)=>{mx=e.clientX;my=e.clientY;});

    function animRepel() {
      rctx.clearRect(0,0,rc.width,rc.height);
      particles.forEach(p=>{
        const dx=p.x-mx, dy=p.y-my;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<100){
          const force=(100-dist)/100;
          p.vx+=(dx/dist)*force*4;
          p.vy+=(dy/dist)*force*4;
        }
        p.vx+=(p.ox-p.x)*0.04;
        p.vy+=(p.oy-p.y)*0.04;
        p.vx*=0.82;p.vy*=0.82;
        p.x+=p.vx;p.y+=p.vy;
        rctx.beginPath();
        rctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        rctx.fillStyle="rgba(168,85,247,0.5)";
        rctx.fill();
      });
      requestAnimationFrame(animRepel);
    }
    animRepel();

    const resize = () => {
      lc.width=wc.width=sc.width=rc.width=window.innerWidth;
      lc.height=wc.height=sc.height=rc.height=window.innerHeight;
    };
    window.addEventListener("resize",resize);
    return () => {
      clearInterval(lightInterval);
      window.removeEventListener("resize",resize);
    };
  },[]);

  return (
    <>
      <canvas ref={wormRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1]" />
      <canvas ref={repelRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[2]" />
      <canvas ref={shockRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[3]" />
      <canvas ref={lightRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[4]" />
      <div className="fixed top-0 left-0 w-full pointer-events-none z-[5]">
        <div
          style={{
            height:"2px",
            background:"linear-gradient(90deg,transparent,#a855f7,#7c3aed,#a855f7,transparent)",
            boxShadow:"0 0 20px #a855f7, 0 0 40px #7c3aed",
            animation:"scan 4s linear infinite",
          }}
        />
      </div>
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </>
  );
}
