// @ts-nocheck
import React, { useState } from 'react';

// BANC DE PLANTILLES INTEGRALS (AVALUEN CD1 A CD5 SEGONS EL DECRET 175/2022)
const BANC_PLANTILLES = {
  infantil: [
    {
      id: 'inf_1',
      title: '🎨 Projecte Global d’Aula amb Suport Digital',
      desc: 'Exploració, creativitat plàstica, interacció i hàbits digitals inicials.',
      criteria: [
        { title: 'CD1. Exploració i cerca guiada', na: "No mostra interès ni interactua amb els continguts visuals/auditius proposats.", as: "Localitza elements multimèdia senzills en la pantalla interactiva amb l'ajuda constant del docent.", an: "Cerca i selecciona continguts visuals o auditius coneguts seguint instruccions orals senzilles.", ae: "Anticipa i cerca autònomament continguts visuals o auditius relacionats amb el projecte d'aula." },
        { title: 'CD2. Expressió i creació inicial', na: "No utilitza eines digitals de dibuix o enregistrament per expressar-se.", as: "Utilitza eines digitals molt senzilles de dibuix o fotogràfiques amb suport del docent.", an: "Crea produccions digitals senzilles (dibuixos, fotos o àudios) per expressar idees o sentiments.", ae: "Elabora i combina diferents formats (imatge, dibuix i veu) de forma molt creativa." },
        { title: 'CD3. Interacció i compartició col·lectiva', na: "No participa en les activitats digitals col·lectives a l'aula.", as: "Participa en les activitats digitals col·lectives a l'aula quan el docent l'acompanya.", an: "Comparteix les seves produccions a la pantalla digital de l'aula respectant el torn dels companys.", ae: "Anima i ajuda els companys/es a compartir les seves produccions en l'entorn col·lectiu." },
        { title: 'CD4. Hàbits, cura del material i benestar', na: "Tracta el material digital sense cura o no respecta els temps d'ús.", as: "Reconeix les normes bàsiques de cura del material i d'ús de pantalles amb recordatoris.", an: "Aplica de manera constant hàbits d'ús saludable i tracta els dispositius amb cura.", ae: "Recorda i vetlla perquè tota la classe cuidi el material i mantingui una postura correcta." },
        { title: 'CD5. Lògica i robòtica bàsica (Bee-Bot)', na: "No segueix les instruccions per moure el robot d'aula.", as: "Prem els botons de direcció del robot seguint les instruccions pas a pas del docent.", an: "Programa seqüències senzilles de desplaçament per portar el robot a un objectiu concret.", ae: "Planifica la ruta del robot abans de tocar els botons i detecta si s'ha equivocat per corregir-ho." }
      ]
    }
  ],

  primaria_1_4: [
    {
      id: 'p1_1',
      title: '📄 Projecte d’Investigació i Presentació Multimèdia',
      desc: 'Cerca de dades, redactat, disseny visual, treball col·laboratiu i seguretat.',
      criteria: [
        { title: 'CD1. Cerques guiades i tractament de dades', na: "No realitza les cerques d'informació o abandona la tasca.", as: "Troba informació en entorns digitals de manera guiada utilitzant paraules clau senzilles.", an: "Aplica estratègies senzilles de cerca (paraules clau) i identifica criteris bàsics de validesa de la font.", ae: "Cerca de manera autònoma en entorns segurs, avaluant la rellevància i la qualitat de la informació trobada." },
        { title: 'CD2. Creació i reelaboració multimèdia', na: "No elabora el document o la presentació digital sol·licitada.", as: "Crea i edita documents o presentacions senzilles aplicant eines bàsiques de format (text i imatge).", an: "Integra diferents formats (text, taules, imatges o àudio) i cita la font dels recursos utilitzats.", ae: "Dissenya una producció multimèdia d'alta qualitat respectant la propietat intel·lectual dels recursos reutilitzats." },
        { title: 'CD3. Comunicació i treball en entorns virtuals', na: "No participa en l'espai virtual ni en la comunicació del grup.", as: "Es comunica a través del correu o entorn virtual utilitzant les funcions bàsiques (missatge, adjunt).", an: "Utilitza les funcions de col·laboració en entorns virtuals respectant les normes de convivència (netiqueta).", ae: "Gestiona tasques col·laboratives en línia i ajuda a organitzar la participació de l'equip." },
        { title: 'CD4. Seguretat, higiene postural i sostenibilitat', na: "No protegeix les meves dades personals ni manté una postura saludable.", as: "Genera contrasenyes simples, tanca sessions i manté una postura saludable amb ajut del docent.", an: "Adopta mesures de seguretat privades, evita riscos ergonòmics i aplica accions d'estalvi energètic.", ae: "Promou l'ús segur, saludable i sostenible de la tecnologia entre els seus companys i companyes." },
        { title: 'CD5. Pensament computacional i resolució de reptes', na: "No planteja cap seqüència lògica per resoldre el problema o activitat.", as: "Programa seqüències simples amb dispositius o robots d'aula per resoldre un repte senzill.", an: "Desenvolupa algorismes amb programació per blocs (estructures repetitives i condicionals).", ae: "Dissenya i implementa solucions tecnològiques creatives resolent de forma autònoma els errors de codi." }
      ]
    }
  ],

  primaria_5_6: [
    {
      id: 'p5_1',
      title: '🌐 Situació d’Aprenentatge Digital Integral (5è i 6è)',
      desc: 'Avaluació completa dels 5 indicadors operatius del Decret 175/2022.',
      criteria: [
        { title: 'CD1. Cerques autònomes i verificació de fonts', na: "No sap trobar informació digital rellevant o no contrasta cap dades.", as: "Utilitza de forma autònoma cercadors genèrics aplicant operadors i opcions de cerca senzilles.", an: "Verifica de manera guiada la validesa (autoria, data, font) i la fiabilitat de la informació trobada.", ae: "Avalua críticament les fonts a la xarxa, contrasta les dades i organitza la informació en carpetes o marcadors." },
        { title: 'CD2. Entorn digital de creació i drets d’autoria', na: "No produeix continguts digitals multimèdia o incompleix els drets d'autor.", as: "Selecciona el format digital adient (text, taula, imatge, àudio, vídeo) per a la tasca escolar.", an: "Crea i edita produccions digitals complexes de forma autònoma aplicant llicències de lliure distribució.", ae: "Gestiona el seu entorn personal d'aprenentatge (PLE) creant continguts multimèdia originals de gran nivell." },
        { title: 'CD3. Col·laboració en xarxa i ciutadania digital', na: "Incorre en comportaments inadequats en l'ús d'eines col·laboratives.", as: "Participa en projectes col·laboratius digitals fent ús de les eines i fòrums de l'EVA del centre.", an: "Realitza productes digitals en equip assignant permisos, editant de forma síncrona i amb netiqueta.", ae: "Publica creacions en xarxes restringides de manera reflexiva, promovent una ciutadania digital activa i cívica." },
        { title: 'CD4. Ciberseguretat, benestar i sostenibilitat', na: "Incorre en riscos digitals, comparteix contrasenyes o no cuida la salut.", as: "Adoptar mesures de seguretat avançades (contrasenyes segures, no cedir dades sensibles).", an: "Preveu riscos emocionals (ciberassetjament, conductes addictives) i aplica criteris ergonòmics i d'estalvi.", ae: "Demostra hàbits integrats d'autogestió digital, protecció de la identitat i ús eficient dels recursos del centre." },
        { title: 'CD5. Programació, robòtica i resolució de problemes', na: "No aplica el pensament computacional per resoldre problemes de la tasca.", as: "Desenvolupa algorismes senzills amb programació per blocs per a reptes matemàtics o científics.", an: "Dissenya i implementa estructures mecatròniques o programació de plaques/robots per resoldre reptes.", ae: "Crea aplicacions o automatismes sostenibles avaluant la reutilització de materials i l'impacte ambiental." }
      ]
    }
  ],

  eso: [
    {
      id: 'eso_1',
      title: '🎓 Avaluació Integral de la Competència Digital (ESO)',
      desc: 'Competència transversal completa al final de l’Educació Bàsica.',
      criteria: [
        { title: 'CD1. Cerques avançades, rigor i fact-checking', na: "No aplica criteris de validesa ni referència les dades utilitzades.", as: "Utilitza cercadors genèrics i específics aplicant estratègies de cerca avançada.", an: "Verifica autònomament la validesa, qualitat i fiabilitat de les fonts arxivant-les per reutilitzar-les.", ae: "Analitza críticament la informació, detecta la desinformació/fake news i cita rigorosament les fonts." },
        { title: 'CD2. Gestió de l’Entorn Personal d’Aprenentatge (PLE)', na: "No configura ni organitza la meva informació o eines digitals.", as: "Selecciona i configura l'eina i el format més adequat en funció de la tasca i necessitats.", an: "Crea i edita produccions digitals avançades aplicant la legislació sobre propietat intel·lectual.", ae: "Gestiona el seu propi PLE de forma permanent per construir nou coneixement i difondre'l." },
        { title: 'CD3. Participació, presència i identitat digital', na: "No actua amb civisme a la xarxa o descuida la seva identitat digital.", as: "Participa i interactua mitjançant eines virtuals per treballar col·laborativament en grup.", an: "Gestiona de manera responsable les meves accions, presència i visibilitat en entorns digitals.", ae: "Exerceix una ciutadania digital activa, cívica i reflexiva defensant els drets digitals i la seguretat de tots." },
        { title: 'CD4. Protecció avançada, ciberdelictes i medi ambient', na: "Exposa els dispositius o comptes a riscos greus de seguretat o addicció.", as: "Garanteix la seguretat dels comptes i dispositius detectant enllaços o programari maliciós.", an: "Preveu conductes addictives/assetjament i fa un ús eficient i sostenible dels dispositius.", ae: "Aplica estratègies d'autoregulació digital, protecció de dades sensibles i minimització de l'empremta ecològica." },
        { title: 'CD5. Programació avançada, robòtica i impacte ètic', na: "No desenvolupa ni analitza solucions tecnològiques davant reptes complexos.", as: "Programa aplicacions o algorismes senzills utilitzant llenguatges de programació adients.", an: "Dissenya i implementa solucions mecatròniques o sistemes programables per resoldre reptes reals.", ae: "Desenvolupa solucions tecnològiques creatives i sostenibles avaluant el seu desenvolupament ètic i social." }
      ]
    }
  ]
};

export default function App() {
  const [stage, setStage] = useState('primaria_5_6');
  const [selectedTemplate, setSelectedTemplate] = useState(BANC_PLANTILLES.primaria_5_6[0]);
  const [activeTab, setActiveTab] = useState('rubric');
  const [evalScores, setEvalScores] = useState({});

  const handleSelectStage = (newStage) => {
    setStage(newStage);
    setSelectedTemplate(BANC_PLANTILLES[newStage][0]);
    setEvalScores({});
  };

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    setEvalScores({});
  };

  const handleScoreChange = (critTitle, levelKey) => {
    setEvalScores(prev => ({ ...prev, [critTitle]: levelKey }));
  };

  // CÀLCUL DE RESULTATS GLOBAL
  const totalCriteria = selectedTemplate.criteria.length;
  const scoredKeys = Object.values(evalScores);
  const countNA = scoredKeys.filter(k => k === 'NA').length;
  const countAS = scoredKeys.filter(k => k === 'AS').length;
  const countAN = scoredKeys.filter(k => k === 'AN').length;
  const countAE = scoredKeys.filter(k => k === 'AE').length;
  const totalEvaluated = scoredKeys.length;

  let globalGrade = null;
  let gradeColor = '#64748b';
  let gradeBg = '#f1f5f9';
  let gradeDesc = '';

  if (totalEvaluated > 0) {
    if (countNA >= 2 || (countNA > 0 && totalEvaluated === totalCriteria && countAE === 0)) {
      globalGrade = 'No Assolit (NA)';
      gradeColor = '#991b1b';
      gradeBg = '#fef2f2';
      gradeDesc = "L'alumne/a presenta dificultats importants en la majoria dels indicadors de la Competència Digital. Cal reforçar la cerca guiada i el tractament segur de les dades.";
    } else if (countAE >= Math.ceil(totalCriteria / 2) && countNA === 0) {
      globalGrade = 'Assoliment Excel·lent (AE)';
      gradeColor = '#065f46';
      gradeBg = '#ecfdf5';
      gradeDesc = "L'alumne/a mostra un domini extraordinari i autònom de les eines digitals, lidera la col·laboració en xarxa i aplica criteris crítics i d'auto-protecció de gran nivell.";
    } else if ((countAN + countAE) >= Math.ceil(totalCriteria / 2) && countNA === 0) {
      globalGrade = 'Assoliment Notable (AN)';
      gradeColor = '#1e40af';
      gradeBg = '#eff6ff';
      gradeDesc = "Demostra una bona autonomia en la creació multimèdia, cerques de dades i participació responsable en entorns virtuals.";
    } else {
      globalGrade = 'Assoliment Satisfactori (AS)';
      gradeColor = '#92400e';
      gradeBg = '#fffbeb';
      gradeDesc = "Assoleix els mínims establerts per a la competència digital seguint les indicacions pautades pel docent.";
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#1e293b', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '20px 16px' }}>
      
      {/* CAPÇALERA */}
      <header style={{ maxWidth: '1100px', margin: '0 auto 20px auto', backgroundColor: '#ffffff', padding: '20px 24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '12px', textTransform: 'uppercase' }}>
              Decret 175/2022 • Protecció de Dades de l'Alumnat (RGPD)
            </span>
            <h1 style={{ fontSize: '22px', fontWeight: 'bold', margin: '6px 0 0 0', color: '#0f172a' }}>
              🎯 Rúbrica i Avaluador Global de la Competència Digital (CDA)
            </h1>
            <p style={{ fontSize: '13px', color: '#64748b', margin: '2px 0 0 0' }}>
              Generador de rúbriques oficials segur i privat per al docent.
            </p>
          </div>

          <nav style={{ display: 'flex', backgroundColor: '#f1f5f9', padding: '4px', borderRadius: '10px', gap: '4px' }}>
            <button
              onClick={() => setActiveTab('rubric')}
              style={{
                padding: '8px 16px', fontSize: '13px', fontWeight: '600', borderRadius: '6px', border: 'none', cursor: 'pointer',
                backgroundColor: activeTab === 'rubric' ? '#ffffff' : 'transparent',
                color: activeTab === 'rubric' ? '#2563eb' : '#64748b',
                boxShadow: activeTab === 'rubric' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'
              }}
            >
              📋 Rúbrica Oficial (CD1-CD5)
            </button>
            <button
              onClick={() => setActiveTab('evaluator')}
              style={{
                padding: '8px 16px', fontSize: '13px', fontWeight: '600', borderRadius: '6px', border: 'none', cursor: 'pointer',
                backgroundColor: activeTab === 'evaluator' ? '#ffffff' : 'transparent',
                color: activeTab === 'evaluator' ? '#2563eb' : '#64748b',
                boxShadow: activeTab === 'evaluator' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'
              }}
            >
              🏅 Avaluar Alumne/a (Càlcul NA-AE)
            </button>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* PAS 1: SELECCIÓ D'ETAPA */}
        <section style={{ backgroundColor: '#ffffff', padding: '16px 20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 12px 0', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            1. Selecciona l'Etapa Educativa:
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
            {[
              { id: 'infantil', label: '👶 Ed. Infantil (3-6 anys)' },
              { id: 'primaria_1_4', label: '🌱 Primària (1r a 4t)' },
              { id: 'primaria_5_6', label: '🚀 Primària (5è i 6è)' },
              { id: 'eso', label: '🎓 Secundària (ESO)' }
            ].map((stg) => (
              <button
                key={stg.id}
                onClick={() => handleSelectStage(stg.id)}
                style={{
                  padding: '12px 14px', borderRadius: '10px', textAlign: 'center', cursor: 'pointer', fontSize: '13px', fontWeight: '600',
                  border: stage === stg.id ? '2px solid #2563eb' : '1px solid #cbd5e1',
                  backgroundColor: stage === stg.id ? '#eff6ff' : '#ffffff',
                  color: stage === stg.id ? '#1e40af' : '#334155'
                }}
              >
                {stg.label}
              </button>
            ))}
          </div>
        </section>

        {/* CONTINGUT: TAULA O AVALUADOR */}
        {activeTab === 'rubric' ? (
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* AVÍS LEGAL SOBRE PRIVACITAT DE DADES (RGPD / LOPDGDD) */}
            <div style={{ backgroundColor: '#fffbe6', border: '1px solid #ffe58f', borderRadius: '12px', padding: '12px 16px', fontSize: '12px', color: '#873800', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '16px' }}>🔒</span>
              <div>
                <strong>Avís de Privacitat i Protecció de Dades (RGPD / LOPDGDD):</strong> Per complir amb la normativa de seguretat i privacitat dels menors, aquesta aplicació no permet escriure ni emmagatzemar dades personals de l'alumnat a la xarxa. El nom de l'alumne/a s'ha de complimentar a mà o en local una vegada descarregat o imprès el document.
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '17px', color: '#0f172a', fontWeight: 'bold' }}>
                  {selectedTemplate.title}
                </h3>
                <span style={{ fontSize: '12px', color: '#64748b' }}>{selectedTemplate.desc}</span>
              </div>

              {/* CAIXA BLOQUEJADA PER POSAR EL NOM DE L'ALUMNE/A A MÀ */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ border: '2px dashed #cbd5e1', borderRadius: '8px', padding: '10px 16px', backgroundColor: '#f8fafc', width: '220px', height: '42px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}>Nom i Cognoms Alumne/a:</span>
                  <span style={{ fontSize: '11px', color: '#94a3b8', italic: 'true' }}>(Escriure a mà / Després d'imprimir)</span>
                </div>
                
                <button
                  onClick={() => window.print()}
                  style={{ padding: '10px 16px', backgroundColor: '#2563eb', color: '#ffffff', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}
                >
                  🖨️ Imprimir / PDF
                </button>
              </div>
            </div>

            {/* TAULA DE RÚBRICA AMB ELS 5 CRITERIS OFICIALS */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                    <th style={{ padding: '12px', width: '22%', fontWeight: 'bold' }}>Competència (CD1 - CD5)</th>
                    <th style={{ padding: '12px', width: '19.5%', color: '#991b1b', backgroundColor: '#fef2f2', fontWeight: 'bold' }}>No Assolit (NA)</th>
                    <th style={{ padding: '12px', width: '19.5%', color: '#92400e', backgroundColor: '#fffbeb', fontWeight: 'bold' }}>Satisfactori (AS)</th>
                    <th style={{ padding: '12px', width: '19.5%', color: '#1e40af', backgroundColor: '#eff6ff', fontWeight: 'bold' }}>Notable (AN)</th>
                    <th style={{ padding: '12px', width: '19.5%', color: '#065f46', backgroundColor: '#ecfdf5', fontWeight: 'bold' }}>Excel·lent (AE)</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedTemplate.criteria.map((crit, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '12px', verticalAlign: 'top', fontWeight: 'bold', color: '#1e3a8a' }}>
                        {crit.title}
                      </td>
                      <td style={{ padding: '12px', verticalAlign: 'top', color: '#334155', backgroundColor: 'rgba(254, 242, 242, 0.3)' }}>{crit.na}</td>
                      <td style={{ padding: '12px', verticalAlign: 'top', color: '#334155', backgroundColor: 'rgba(255, 251, 235, 0.3)' }}>{crit.as}</td>
                      <td style={{ padding: '12px', verticalAlign: 'top', color: '#334155', backgroundColor: 'rgba(239, 246, 255, 0.3)' }}>{crit.an}</td>
                      <td style={{ padding: '12px', verticalAlign: 'top', color: '#334155', backgroundColor: 'rgba(236, 253, 245, 0.3)' }}>{crit.ae}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* AVALUADOR EN DIRECTE PER AL DOCENT */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                
                {/* ESPAI PER AL NOM EN MODO AVALUADOR (SENSE PERSISTÈNCIA EN SERVIDORS) */}
                <div style={{ flex: 1, minWidth: '240px' }}>
                  <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#475569', display: 'block', marginBottom: '6px' }}>
                    Identificador de l'Alumne/a o Equip (Temporal / Anònim):
                  </label>
                  <input
                    type="text"
                    placeholder="Ex. Alumne 04 / Equip Blau (No utilitzar dades sensibles)"
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' }}
                  />
                  <span style={{ fontSize: '10px', color: '#94a3b8', display: 'block', marginTop: '4px' }}>
                    *Les dades escrites aquí no es guarden a cap base de dades externa.
                  </span>
                </div>

                {/* MARCADOR EN TEMPS REAL */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <div style={{ padding: '8px 14px', borderRadius: '10px', backgroundColor: '#fef2f2', border: '1px solid #fca5a5', textAlign: 'center' }}>
                    <span style={{ fontSize: '11px', color: '#991b1b', fontWeight: 'bold', display: 'block' }}>NA</span>
                    <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#991b1b' }}>{countNA}</span>
                  </div>
                  <div style={{ padding: '8px 14px', borderRadius: '10px', backgroundColor: '#fffbeb', border: '1px solid #fde68a', textAlign: 'center' }}>
                    <span style={{ fontSize: '11px', color: '#92400e', fontWeight: 'bold', display: 'block' }}>AS</span>
                    <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#92400e' }}>{countAS}</span>
                  </div>
                  <div style={{ padding: '8px 14px', borderRadius: '10px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', textAlign: 'center' }}>
                    <span style={{ fontSize: '11px', color: '#1e40af', fontWeight: 'bold', display: 'block' }}>AN</span>
                    <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e40af' }}>{countAN}</span>
                  </div>
                  <div style={{ padding: '8px 14px', borderRadius: '10px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', textAlign: 'center' }}>
                    <span style={{ fontSize: '11px', color: '#065f46', fontWeight: 'bold', display: 'block' }}>AE</span>
                    <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#065f46' }}>{countAE}</span>
                  </div>
                </div>
              </div>

              {/* RESULTAT GLOBAL CALCULAT */}
              {globalGrade && (
                <div style={{ marginTop: '16px', padding: '16px', borderRadius: '12px', backgroundColor: gradeBg, border: `1.5px solid ${gradeColor}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 'bold', color: gradeColor, textTransform: 'uppercase' }}>
                      Qualificació Global de la Competència Digital:
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: 'bold', color: gradeColor, padding: '2px 10px', borderRadius: '8px', backgroundColor: '#ffffff' }}>
                      {globalGrade}
                    </span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#334155', margin: '8px 0 0 0', lineHeight: '1.4' }}>
                    {gradeDesc}
                  </p>
                </div>
              )}
            </div>

            {/* SELECCIÓ DE NIVELLS */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '16px', color: '#0f172a', fontWeight: 'bold' }}>
                Selecciona el nivell assolit en cadascuna de les 5 Competències Digitals:
              </h3>

              {selectedTemplate.criteria.map((crit, idx) => (
                <div key={idx} style={{ padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#1e3a8a', fontWeight: 'bold' }}>
                    {crit.title}
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                    {[
                      { key: 'NA', label: 'No Assolit (NA)', text: crit.na, border: '#fca5a5', bg: '#fef2f2', color: '#991b1b' },
                      { key: 'AS', label: 'Satisfactori (AS)', text: crit.as, border: '#fde68a', bg: '#fffbeb', color: '#92400e' },
                      { key: 'AN', label: 'Notable (AN)', text: crit.an, border: '#bfdbfe', bg: '#eff6ff', color: '#1e40af' },
                      { key: 'AE', label: 'Excel·lent (AE)', text: crit.ae, border: '#a7f3d0', bg: '#ecfdf5', color: '#065f46' }
                    ].map((lvl) => {
                      const isSelected = evalScores[crit.title] === lvl.key;
                      return (
                        <button
                          key={lvl.key}
                          onClick={() => handleScoreChange(crit.title, lvl.key)}
                          style={{
                            padding: '12px', textAlign: 'left', borderRadius: '8px', cursor: 'pointer', fontSize: '11px',
                            border: isSelected ? '2.5px solid #2563eb' : `1px solid ${lvl.border}`,
                            backgroundColor: isSelected ? '#dbeafe' : lvl.bg,
                            color: lvl.color,
                            boxShadow: isSelected ? '0 2px 4px rgba(37,99,235,0.25)' : 'none',
                            transition: 'all 0.15s'
                          }}
                        >
                          <div style={{ fontWeight: 'bold', marginBottom: '4px', fontSize: '12px' }}>
                            {lvl.label} {isSelected && '✓'}
                          </div>
                          <div style={{ opacity: 0.9, lineHeight: '1.3' }}>{lvl.text}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}