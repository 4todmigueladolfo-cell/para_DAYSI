// ====== PERSONALIZA AQUÍ ======
const NOMBRE = "Mi amor";
const DESDE = new Date("2024-02-14T00:00:00"); // fecha en que empezó su historia
const FRASES = ["Te amo infinito ∞","Cruzamos el tiempo","Cada beso es un cosmos","Eres mi universo","Superamos las estrellas","Contigo en todas las dimensiones","Contigo, hasta el fin del infinito.","Mi galaxia favorita eres tú.","Eres la estrella que ilumina mi órbita.","En este y en mil universos más, te elegiría a ti.","Mi lugar favorito en todo el cosmos es a tu lado.","Eres la luz que le da sentido a mi cielo.","Cruzaría cualquier galaxia solo para encontrarte.","Eres el sol de mi sistema solar.","Perderse en tu órbita es mi plan favorito.","Brillas más que cualquier constelación.","Entre millones de estrellas, mis ojos siempre te buscan a ti.","Mi superpoder es quererte cada día más.","Viajaría a la velocidad de la luz solo para darte un abrazo.","Eres la colisión cósmica más bonita de mi vida.","Ni en un millón de años luz me cansaría de ti.","Eres mi lugar seguro en el multiverso.","En ningún universo existe alguien como tú.","Eres mi evento canónico favorito.","Ni con las Gemas del Infinito podría pedir algo mejor que tú.","Contigo, hasta el final de la línea.","Mi superhéroe favorit@.","Mi propia galaxia.","Amor infinito x3000.","Brillo estelar.","Amor de otra dimensión.","Un amor fuera de este planeta.","Mi universo entero.","Destinados a encontrarnos."];
const LINKS = [
 "carta_flores_preview.html",   
  "carta_amorcito.html", 
  "carta_de_perdon.html"      
];
// ==============================
document.getElementById("title").textContent = "Para ti, " + NOMBRE + " 💖";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth/innerHeight, .1, 1000);
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.setSize(innerWidth, innerHeight);
document.body.prepend(renderer.domElement);
const glow = {transparent:true, blending:THREE.AdditiveBlending, depthWrite:false};

// Estrellas
(function(){const n=16000,p=new Float32Array(n*3);for(let i=0;i<n;i++){const r=90+Math.random()*150,a=Math.random()*6.283,b=Math.acos(2*Math.random()-1);p[i*3]=r*Math.sin(b)*Math.cos(a);p[i*3+1]=r*Math.cos(b);p[i*3+2]=r*Math.sin(b)*Math.sin(a);}
const g=new THREE.BufferGeometry();g.setAttribute("position",new THREE.BufferAttribute(p,3));scene.add(new THREE.Points(g,new THREE.PointsMaterial({size:.85,color:0xffffff,...glow})));})();

// Estrellas brillantes con destello
const bright=[];
(function(){const c=document.createElement("canvas");c.width=c.height=128;const x=c.getContext("2d");const g=x.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,"#fff");g.addColorStop(.12,"rgba(255,255,255,.9)");g.addColorStop(.4,"rgba(200,170,255,.25)");g.addColorStop(1,"rgba(0,0,0,0)");x.fillStyle=g;x.fillRect(0,0,128,128);
x.fillStyle="rgba(255,255,255,.85)";x.fillRect(62,4,4,120);x.fillRect(4,62,120,4);
const tex=new THREE.CanvasTexture(c);
for(let i=0;i<70;i++){const r=40+Math.random()*120,a=Math.random()*6.283,b=Math.acos(2*Math.random()-1);const s=new THREE.Sprite(new THREE.SpriteMaterial({map:tex,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));s.position.set(r*Math.sin(b)*Math.cos(a),r*Math.cos(b),r*Math.sin(b)*Math.sin(a));const k=2+Math.random()*5;s.userData={k,ph:Math.random()*6,sp:1+Math.random()*2};s.scale.set(k,k,1);scene.add(s);bright.push(s);}})();

// Galaxia
const galaxy = new THREE.Group(); scene.add(galaxy);
(function(){const n=1,p=new Float32Array(n*3),c=new Float32Array(n*3),ci=new THREE.Color("#fff4a8"),co=new THREE.Color("#5a35e8");
for(let i=0;i<n;i++){const r=.9+Math.pow(Math.random(),1.5)*27,arm=i%3,ang=r*.55+arm*2.0944+(Math.random()-.5)*1.3/Math.sqrt(r);
const s=(Math.random()-.5)*r*.22;p[i*3]=Math.cos(ang)*r+s;p[i*3+1]=(Math.random()-.5)*.5*Math.exp(-r*.15);p[i*3+2]=Math.sin(ang)*r+s;
const u=Math.min(r/27,1),col=u<.15?ci.clone().lerp(new THREE.Color("#ffb02e"),u/.15):u<.45?new THREE.Color("#ffb02e").lerp(new THREE.Color("#ff6fc8"),(u-.15)/.3):new THREE.Color("#ff6fc8").lerp(co,(u-.45)/.55);col.multiplyScalar(.65+Math.random()*.6);c[i*3]=col.r;c[i*3+1]=col.g;c[i*3+2]=col.b;}
const g=new THREE.BufferGeometry();g.setAttribute("position",new THREE.BufferAttribute(p,3));g.setAttribute("color",new THREE.BufferAttribute(c,3));
galaxy.add(new THREE.Points(g,new THREE.PointsMaterial({size:.07,vertexColors:true,opacity:.9,...glow})));})();
// Galaxia fluida: las partículas fluyen del centro hacia afuera siguiendo los brazos
(function(){const n=250000,P=new Float32Array(n*3),aU=new Float32Array(n),aA=new Float32Array(n),aR=new Float32Array(n),aS=new Float32Array(n),aY=new Float32Array(n),aB=new Float32Array(n);
for(let i=0;i<n;i++){aU[i]=Math.random();aA[i]=(i%3)*2.0944;aR[i]=Math.random()-.5;aS[i]=(Math.random()-.5)*.22;aY[i]=(Math.random()-.5)*.5;aB[i]=.65+Math.random()*.6;}
const g=new THREE.BufferGeometry();g.setAttribute("position",new THREE.BufferAttribute(P,3));
[["aU",aU],["aA",aA],["aR",aR],["aS",aS],["aY",aY],["aB",aB]].forEach(([k,v])=>g.setAttribute(k,new THREE.BufferAttribute(v,1)));
const vs="attribute float aU;attribute float aA;attribute float aR;attribute float aS;attribute float aY;attribute float aB;uniform float uT;uniform float uPR;varying vec3 vC;varying float vA;"+
"vec3 grad(float u){vec3 a=vec3(1.,.96,.66),b=vec3(1.,.69,.18),c=vec3(1.,.44,.78),d=vec3(.35,.21,.91);if(u<.15)return mix(a,b,u/.15);if(u<.45)return mix(b,c,(u-.15)/.3);return mix(c,d,(u-.45)/.55);}"+
"void main(){float u=fract(aU+uT*.012);float r=.9+pow(u,1.5)*27.;float a=aA+aR*1.3/sqrt(r)+r*.55;float s=aS*r;vec3 p=vec3(cos(a)*r+s,aY*exp(-r*.15),sin(a)*r+s);"+
"vC=grad(min(r/27.,1.))*aB;vA=smoothstep(0.,.04,u)*(1.-smoothstep(.8,1.,u));vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=32.*uPR/-mv.z;gl_Position=projectionMatrix*mv;}";
const fs="varying vec3 vC;varying float vA;void main(){float d=length(gl_PointCoord-vec2(.5));if(d>.5)discard;gl_FragColor=vec4(vC,vA*(1.-d*1.6));}";
window.gMat=new THREE.ShaderMaterial({uniforms:{uT:{value:0},uPR:{value:renderer.getPixelRatio()}},vertexShader:vs,fragmentShader:fs,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false});
const pts=new THREE.Points(g,window.gMat);pts.frustumCulled=false;galaxy.add(pts);})();
// Agujero negro + disco
galaxy.add(new THREE.Mesh(new THREE.SphereGeometry(.9,32,32),new THREE.MeshBasicMaterial({color:0xfff2a0})));
(function(){const c=document.createElement("canvas");c.width=c.height=256;const x=c.getContext("2d");const g=x.createRadialGradient(128,128,0,128,128,128);g.addColorStop(0,"rgba(255,250,200,1)");g.addColorStop(.15,"rgba(255,220,70,.9)");g.addColorStop(.4,"rgba(255,150,30,.4)");g.addColorStop(.7,"rgba(255,90,120,.14)");g.addColorStop(1,"rgba(0,0,0,0)");x.fillStyle=g;x.fillRect(0,0,256,256);
const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));s.scale.set(22,22,1);galaxy.add(s);})();
// Rayos de la supernova
(function(){const c=document.createElement("canvas");c.width=c.height=512;const x=c.getContext("2d");x.translate(256,256);
for(let i=0;i<16;i++){x.save();x.rotate(i*Math.PI/8);const L=i%2?150:250,g=x.createLinearGradient(0,0,L,0);g.addColorStop(0,"rgba(255,235,120,.95)");g.addColorStop(1,"rgba(255,170,40,0)");x.fillStyle=g;x.beginPath();x.moveTo(0,-5);x.lineTo(L,0);x.lineTo(0,5);x.fill();x.restore();}
const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));s.scale.set(26,26,1);})();
const ring = new THREE.Mesh(new THREE.RingGeometry(.8,1.6,64),new THREE.MeshBasicMaterial({color:0xffc247,side:THREE.DoubleSide,opacity:.5,...glow}));
ring.rotation.x = -Math.PI/2 + .25; galaxy.add(ring);

// Corazón de partículas
const heart = new THREE.Points((function(){const n=7000,p=new Float32Array(n*3);
for(let i=0;i<n;i++){const t=Math.random()*6.283,k=Math.random()<.45?1:Math.sqrt(Math.random());
const x=16*Math.pow(Math.sin(t),3),y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);
p[i*3]=x*k*.28;p[i*3+1]=y*k*.28;p[i*3+2]=(Math.random()-.5)*3*(1-k*.5);}
const g=new THREE.BufferGeometry();g.setAttribute("position",new THREE.BufferAttribute(p,3));return g;})(),
new THREE.PointsMaterial({size:.12,color:0xff2fd0,...glow}));
heart.position.y = 9; scene.add(heart);

// Tesseracto (4ª dimensión proyectada)
const V=[];for(let i=0;i<16;i++)V.push([i&1?1:-1,i&2?1:-1,i&4?1:-1,i&8?1:-1]);
const E=[];for(let i=0;i<16;i++)for(let b=0;b<4;b++){const j=i^(1<<b);if(j>i)E.push(i,j);}
const tg=new THREE.BufferGeometry();tg.setAttribute("position",new THREE.BufferAttribute(new Float32Array(E.length*3),3));
const tess=new THREE.LineSegments(tg,new THREE.LineBasicMaterial({color:0x7ff0ff,...glow}));
tess.position.set(0,4,0); scene.add(tess);
const rot=(v,a,i,j)=>{const c=Math.cos(a),s=Math.sin(a),x=v[i]*c-v[j]*s,y=v[i]*s+v[j]*c;v[i]=x;v[j]=y;};
function updTess(t){const pa=tg.attributes.position.array;const pr=V.map(o=>{const v=o.slice();rot(v,t*.5,0,3);rot(v,t*.35,1,3);rot(v,t*.2,2,3);rot(v,t*.15,0,2);const f=2.2/(3-v[3]);return [v[0]*f,v[1]*f,v[2]*f];});
E.forEach((e,k)=>{pa[k*3]=pr[e][0];pa[k*3+1]=pr[e][1];pa[k*3+2]=pr[e][2];});tg.attributes.position.needsUpdate=true;}
let tessOn=true;
document.getElementById("tes").onclick=()=>{tessOn=!tessOn;tess.visible=tessOn;};

// Orbitadores: fotos y frases
const orb=[];
function circTex(draw){const c=document.createElement("canvas");c.width=c.height=256;const x=c.getContext("2d");
x.beginPath();x.arc(128,128,120,0,6.283);x.closePath();x.fillStyle="#fff";x.fill();x.save();x.clip();draw(x);x.restore();
x.lineWidth=8;x.strokeStyle="#ff9ad9";x.beginPath();x.arc(128,128,120,0,6.283);x.stroke();return new THREE.CanvasTexture(c);}
const armOrb=[];function addArm(i,tex,size){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:tex,transparent:true,depthWrite:false}));s.scale.set(size,size,1);galaxy.add(s);s.userData.url=LINKS[i%LINKS.length];armOrb.push({s,arm:i%3,u:.1+(i/3)*.8, rn:(Math.random()-.5)*.25,size});}
function addOrb(tex,size,r,y,sp){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:tex,transparent:true,depthWrite:false}));s.scale.set(size,size,1);scene.add(s);orb.push({s,r,y,a:Math.random()*6.283,sp,ph:Math.random()*6});}
["🐻","⭐","🐼"].forEach((e,i)=>addArm(i,circTex(x=>{x.font="150px serif";x.textAlign="center";x.textBaseline="middle";x.fillText(e,128,138);}),2.8));
FRASES.forEach((f,i)=>{const c=document.createElement("canvas");c.width=2048;c.height=128;const x=c.getContext("2d");x.font="bold 64px system-ui,sans-serif";if(x.measureText(f).width>1950)x.font="bold "+Math.floor(64*1950/x.measureText(f).width)+"px system-ui,sans-serif";x.textAlign="center";x.textBaseline="middle";
x.shadowColor="#ff3fb4";x.shadowBlur=22;x.fillStyle="#ffd1f0";x.fillText(f,1024,64);
addOrb(new THREE.CanvasTexture(c),1,23+(i*2.3)%28,-8+((i*7)%9)*2,.025+(i%5)*.008);const o=orb[orb.length-1];o.s.scale.set(22,1.375,1);});

// Frase destacada
(function(){const T3="Te amo tres millones",c=document.createElement("canvas");c.width=2048;c.height=256;const x=c.getContext("2d");x.font="bold 120px system-ui,sans-serif";x.textAlign="center";x.textBaseline="middle";
x.shadowColor="#ffb02e";x.shadowBlur=50;x.fillStyle="#fff3a0";x.fillText(T3,1024,128);x.shadowColor="#ff3fb4";x.shadowBlur=25;x.fillText(T3,1024,128);x.shadowBlur=0;x.fillStyle="#fff";x.fillText(T3,1024,128);
addOrb(new THREE.CanvasTexture(c),1,26,6,.05);const o=orb[orb.length-1];o.s.scale.set(32,4,1);o.pulse=1;})();
document.getElementById("file").onchange=e=>{[...e.target.files].forEach(f=>{const rd=new FileReader();rd.onload=()=>{const im=new Image();im.onload=()=>{
addOrb(circTex(x=>{const m=Math.min(im.width,im.height);x.drawImage(im,(im.width-m)/2,(im.height-m)/2,m,m,0,0,256,256);}),3,5+Math.random()*10,(Math.random()-.3)*4,.1+Math.random()*.12);};im.src=rd.result;};rd.readAsDataURL(f);});};

// Tiempo (4ª dimensión: el tiempo)
let ts=1;document.getElementById("spd").onclick=function(){ts=ts===1?5:1;this.textContent="⏱ Tiempo x"+ts;};
const clock=document.getElementById("clock");
function tick(){const d=Date.now()-DESDE.getTime(),s=Math.floor(d/1000);
clock.textContent="Llevamos amándonos "+Math.floor(s/86400)+" días "+String(Math.floor(s%86400/3600)).padStart(2,"0")+":"+String(Math.floor(s%3600/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");}

// Cámara: arrastrar, pellizcar, rueda
let th=0,ph=1.25,rad=52;const ptrs=new Map();let pd=0;
renderer.domElement.addEventListener("pointerdown",e=>{ptrs.set(e.pointerId,e);});
addEventListener("pointerup",e=>ptrs.delete(e.pointerId));
addEventListener("pointermove",e=>{if(!ptrs.has(e.pointerId))return;const o=ptrs.get(e.pointerId);
if(ptrs.size===1){th-=(e.clientX-o.clientX)*.006;ph=Math.min(2.4,Math.max(.3,ph-(e.clientY-o.clientY)*.006));}
ptrs.set(e.pointerId,e);if(ptrs.size===2){const [a,b]=[...ptrs.values()],d=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);if(pd)rad=Math.min(90,Math.max(8,rad-(d-pd)*.05));pd=d;}else pd=0;});
addEventListener("wheel",e=>{rad=Math.min(90,Math.max(8,rad+e.deltaY*.02));});
addEventListener("resize",()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});

const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
let down = null;
const cv = renderer.domElement;
const pick = e => {
  mouse.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
  ray.setFromCamera(mouse, camera);
  return ray.intersectObjects(armOrb.map(o => o.s))[0];
};
cv.addEventListener("pointerdown", e => { down = { x: e.clientX, y: e.clientY }; });
cv.addEventListener("pointerup", e => {
  if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 6) return;
  const hit = pick(e);
  if (hit && hit.object.userData.url) window.open(hit.object.userData.url, "_blank");
});
cv.addEventListener("pointermove", e => { cv.style.cursor = pick(e) ? "pointer" : "default"; });

const clk=new THREE.Clock();let T=0;
(function loop(){requestAnimationFrame(loop);const dt=clk.getDelta()*ts;T+=dt;if(!ptrs.size)th+=dt*.05;
camera.position.set(rad*Math.sin(ph)*Math.sin(th),rad*Math.cos(ph),rad*Math.sin(ph)*Math.cos(th));camera.lookAt(0,3,0);
galaxy.rotation.x=.3;galaxy.rotation.y=T*.06;window.gMat.uniforms.uT.value=T;armOrb.forEach(o=>{const u=(o.u+T*.012)%1,r=.9+Math.pow(u,1.5)*27,a=o.arm*2.0944+o.rn+r*.55,k=Math.min(1,u*6,(1-u)*6)*o.size;o.s.position.set(Math.cos(a)*r,1+Math.sin(T*2+o.u*9)*.3,Math.sin(a)*r);o.s.scale.set(k,k,1);});if(window.sunRays){window.sunRays.material.rotation=T*.12;const q=26+Math.sin(T*2)*1.5;window.sunRays.scale.set(q,q,1);}bright.forEach(s=>{const d=s.userData,m=.6+.4*Math.sin(T*d.sp+d.ph);s.scale.set(d.k*m,d.k*m,1);});ring.rotation.z=T*.5;
const pu=1+Math.sin(T*3)*.05;heart.scale.set(pu,pu,pu);heart.rotation.y=T*.4;
if(tessOn)updTess(T);
orb.forEach(o=>{o.a+=o.sp*dt;o.s.position.set(Math.cos(o.a)*o.r,o.y+Math.sin(T+o.ph)*.4,Math.sin(o.a)*o.r);if(o.pulse){const q=1+Math.sin(T*2.5)*.08;o.s.scale.set(32*q,4*q,1);}});
tick();renderer.render(scene,camera);})();