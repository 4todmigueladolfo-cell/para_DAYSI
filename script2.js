// ---------- navegación entre páginas ----------
const pagina1 = document.getElementById('pagina1');
const pagina2 = document.getElementById('pagina2');
document.getElementById('btnSiguiente').addEventListener('click', ()=>{
  pagina1.classList.remove('activa');
  pagina2.classList.add('activa');
});

// ---------- 100 idiomas: "Te quiero" ----------
const idiomas = [
  ["Español","Te quiero"],["Inglés","I love you"],["Francés","Je t'aime"],
  ["Italiano","Ti amo"],["Portugués","Eu te amo"],["Alemán","Ich liebe dich"],
  ["Holandés","Ik hou van je"],["Sueco","Jag älskar dig"],["Noruego","Jeg elsker deg"],
  ["Danés","Jeg elsker dig"],["Finlandés","Minä rakastan sinua"],["Islandés","Ég elska þig"],
  ["Ruso","Ya tebya lyublyu"],["Ucraniano","Ya tebe kokhayu"],["Polaco","Kocham cię"],
  ["Checo","Miluji tě"],["Eslovaco","Ľúbim ťa"],["Húngaro","Szeretlek"],
  ["Rumano","Te iubesc"],["Búlgaro","Obicham te"],["Serbio","Volim te"],
  ["Croata","Volim te"],["Griego","S'agapo"],["Turco","Seni seviyorum"],
  ["Árabe","Ana uhibbuk"],["Hebreo","Ani ohev otach"],["Persa","Doostat daram"],
  ["Hindi","Main tumse pyaar karta hoon"],["Urdu","Mujhe tumse mohabbat hai"],
  ["Bengalí","Ami tomake bhalobashi"],["Punjabi","Main tuhanu pyar karda haan"],
  ["Chino mandarín","Wǒ ài nǐ"],["Cantonés","Ngo ngoi nei"],["Japonés","Aishiteru"],
  ["Coreano","Saranghae"],["Vietnamita","Anh yêu em"],["Tailandés","Chan rak khun"],
  ["Indonesio","Aku cinta kamu"],["Malayo","Aku cintakan kamu"],["Filipino / Tagalo","Mahal kita"],
  ["Suajili","Nakupenda"],["Zulú","Ngiyakuthanda"],["Xhosa","Ndiyakuthanda"],
  ["Afrikáans","Ek is lief vir jou"],["Amárico","Ewedihalehu"],["Hausa","Ina son ki"],
  ["Yoruba","Mo nifẹ rẹ"],["Igbo","Ahụrụ m gị n'anya"],["Somalí","Waan ku jeclahay"],
  ["Malgache","Tiako ianao"],["Georgiano","Me shen mikvarhar"],["Armenio","Yes qez sirumem"],
  ["Azerí","Mən səni sevirəm"],["Kazajo","Men seni suyemin"],["Uzbeko","Men seni sevaman"],
  ["Mongol","Bi chamd hairtai"],["Tibetano","Nga khyed la gawa"],["Nepalí","Ma timilai maya garchu"],
  ["Cingalés","Mama oyata adare"],["Tamil","Nān unnai kātalikirēn"],["Telugu","Nenu ninnu premistunnanu"],
  ["Kannada","Naanu ninnannu preetisuttene"],["Malabar","Njan ninne premikunnu"],
  ["Maratí","Mi tujhyavar prem karto"],["Gujarati","Hu tane pyar karu chu"],
  ["Panyabí (India)","Main tainu pyar karda haan"],["Catalán","T'estimo"],
  ["Gallego","Quérote"],["Vasco / Euskera","Maite zaitut"],["Occitano","T'aimi"],
  ["Bretón","Da garout a ran"],["Galés","Rwy'n dy garu di"],["Irlandés","Tá grá agam duit"],
  ["Escocés gaélico","Tha gaol agam ort"],["Maltés","Inħobbok"],["Esperanto","Mi amas vin"],
  ["Latín","Te amo"],["Yiddish","Ikh hob dikh lib"],["Letón","Es tevi mīlu"],
  ["Lituano","Aš tave myliu"],["Estonio","Ma armastan sind"],["Albanés","Të dua"],
  ["Macedonio","Te sakam"],["Esloveno","Ljubim te"],["Bosnio","Volim te"],
  ["Kurdo","Ez te hez dikim"],["Pastún","Za pa tara meena kawom"],
  ["Cebuano","Gihigugma tika"],["Javanés","Aku tresna karo kowe"],
  ["Criollo haitiano","Mwen renmen ou"],["Samoano","Ou te alofa ia te oe"],
  ["Hawaiano","Aloha wau iā ʻoe"],["Maorí","Kei te aroha ahau ki a koe"],
  ["Fiyiano","Au domoni iko"],["Chichewa","Ndimakukonda"],["Shona","Ndinokuda"],
  ["Sesoto","Kea u rata"],["Wólof","Bëgg naa la"],["Corso","Ti tengu caru"],
  ["Sardo","Ti chelzo bene"],["Frisio","Ik hâld fan dy"],["Luxemburgués","Ech hunn dech gär"],
  ["Guaraní","Rohayhu"],["Quechua","Kuyayki"],["Náhuatl","Ni mitz tlazohtla"],
  ["Criollo cabo verdiano","N ta ama-u"]
];

// ---------- lógica de respuesta y máquina de escribir ----------
const grupoBotones = document.getElementById('grupoBotones');
const respuestaTexto = document.getElementById('respuestaTexto');
const maquina = document.getElementById('maquina');
const idiomaNombre = document.getElementById('idiomaNombre');
const fraseEscrita = document.getElementById('fraseEscrita');
const contador = document.getElementById('contador');

function iniciarSecuencia(mensajeInicial){
  grupoBotones.classList.add('oculto');
  respuestaTexto.textContent = mensajeInicial;
  respuestaTexto.classList.remove('oculto');

  setTimeout(()=>{
    maquina.classList.remove('oculto');
    contador.classList.remove('oculto');
    escribirIdiomas(0);
  }, 900);
}

function escribirIdiomas(indice){
  const [nombre, frase] = idiomas[indice % idiomas.length];
  idiomaNombre.textContent = nombre;
  contador.textContent = (indice % idiomas.length) + 1 + ' / ' + idiomas.length;
  fraseEscrita.textContent = '';

  let i = 0;
  function escribirLetra(){
    if(i <= frase.length){
      fraseEscrita.textContent = frase.slice(0, i);
      i++;
      setTimeout(escribirLetra, 45);
    } else {
      setTimeout(()=>borrarLetra(frase.length), 900);
    }
  }
  function borrarLetra(len){
    if(len >= 0){
      fraseEscrita.textContent = frase.slice(0, len);
      len--;
      setTimeout(()=>borrarLetra(len), 22);
    } else {
      setTimeout(()=> escribirIdiomas(indice+1), 250);
    }
  }
  escribirLetra();
}

document.getElementById('btnSi').addEventListener('click', ()=>{
  iniciarSecuencia('No importa, yo te lo diré…');
});
document.getElementById('btnNo').addEventListener('click', ()=>{
  iniciarSecuencia('Entonces yo lo haré…');
});

// ---------- PORTADA (pantalla inicial nueva) ----------
(function(){
  const decoFlotante = document.getElementById('decoFlotante');
  const corazones = ['💜','💗','💕'];
  const totalCorazones = 8;
  const totalDestellos = 10;

  for(let i=0;i<totalCorazones;i++){
    const c = document.createElement('span');
    c.className = 'corazon';
    c.textContent = corazones[Math.floor(Math.random()*corazones.length)];
    c.style.left = Math.random()*90+'%';
    c.style.top = Math.random()*70+'%';
    c.style.animationDelay = (Math.random()*5)+'s';
    c.style.animationDuration = (5+Math.random()*3)+'s';
    decoFlotante.appendChild(c);
  }
  for(let i=0;i<totalDestellos;i++){
    const d = document.createElement('span');
    d.className = 'destello';
    d.textContent = '✦';
    d.style.left = Math.random()*95+'%';
    d.style.top = Math.random()*85+'%';
    d.style.animationDelay = (Math.random()*3)+'s';
    decoFlotante.appendChild(d);
  }

  const portada = document.getElementById('portada');
  const btnLeerCarta = document.getElementById('btnLeerCarta');
  btnLeerCarta.addEventListener('click', ()=>{
    portada.classList.add('oculto');
  });
})();
