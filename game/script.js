const missions = [
  {
    id: "fundamentos",
    title: "Fundamentos IFRS",
    description:
      "Comienza tu aventura entendiendo el marco conceptual, los estados financieros y los principios clave de representación fiel.",
    scenarios: [
      {
        title: "Marco Conceptual",
        description:
          "Tu compañía debe decidir si reconocer un contrato de venta que todavía no ha sido firmado por el cliente. ¿Qué principio IFRS aplica?",
        options: [
          {
            label: "Reconocimiento basado en compromisos futuros probables",
            feedback:
              "Incorrecto. La probabilidad por sí sola no garantiza el reconocimiento.",
            correct: false,
          },
          {
            label: "Representación fiel y sustancia sobre forma",
            feedback:
              "Correcto. El acuerdo debe reflejar la realidad económica y no solo una intención.",
            correct: true,
          },
          {
            label: "Prudencia excesiva",
            feedback:
              "La prudencia no debe sesgar la información. Debes basarte en evidencia verificable.",
            correct: false,
          },
        ],
        explanation:
          "El Marco Conceptual IFRS enfatiza la representación fiel y la sustancia sobre la forma para asegurar que los estados financieros reflejen la realidad económica.",
        xp: 30,
      },
      {
        title: "Presentación de estados",
        description:
          "Debes definir qué información mínima incluir en el estado de resultados de una subsidiaria. ¿Qué norma específica debes consultar?",
        options: [
          {
            label: "IAS 1 Presentación de Estados Financieros",
            feedback:
              "Correcto. IAS 1 detalla la estructura y contenido de los estados financieros.",
            correct: true,
          },
          {
            label: "IFRS 7 Instrumentos Financieros",
            feedback:
              "No es la norma correcta; IFRS 7 trata de instrumentos financieros y sus revelaciones.",
            correct: false,
          },
          {
            label: "IAS 8 Políticas Contables",
            feedback:
              "IAS 8 aborda cambios contables, no la presentación básica de estados.",
            correct: false,
          },
        ],
        explanation:
          "IAS 1 define los requerimientos generales para la presentación de estados financieros, incluyendo estados de resultados y situación financiera.",
        xp: 30,
      },
    ],
  },
  {
    id: "reconocimiento",
    title: "Reconocimiento y Medición",
    description:
      "Aprende a decidir cuándo reconocer activos, pasivos, ingresos y gastos de acuerdo con las normas IFRS más relevantes.",
    scenarios: [
      {
        title: "Ingresos de contratos con clientes",
        description:
          "Has recibido un anticipo por un contrato de servicio que se ejecutará en seis meses. ¿Qué debes registrar hoy?",
        options: [
          {
            label: "Reconocer todo el ingreso hoy",
            feedback:
              "Incorrecto. IFRS 15 requiere reconocimiento conforme se transfiere el control.",
            correct: false,
          },
          {
            label: "Registrar un pasivo por contrato",
            feedback:
              "Correcto. Hasta que se satisfaga la obligación de desempeño, el anticipo es un pasivo.",
            correct: true,
          },
          {
            label: "Registrar un ingreso diferido en el patrimonio",
            feedback:
              "El ingreso diferido se refleja como pasivo, no directamente en el patrimonio.",
            correct: false,
          },
        ],
        explanation:
          "IFRS 15 indica que los anticipos generan pasivos por contratos hasta que la entidad cumple con la obligación de desempeño.",
        xp: 40,
      },
      {
        title: "Arrendamientos según IFRS 16",
        description:
          "Tu empresa firma un contrato de arrendamiento de oficinas por cinco años con pagos fijos. ¿Qué debe reconocerse al inicio?",
        options: [
          {
            label: "Un activo por derecho de uso y un pasivo por arrendamiento",
            feedback:
              "Correcto. IFRS 16 exige reconocer ambos al inicio basados en el valor presente de los pagos.",
            correct: true,
          },
          {
            label: "Solo gasto por arrendamiento mes a mes",
            feedback:
              "Ese tratamiento corresponde a arrendamientos operativos según normas antiguas.",
            correct: false,
          },
          {
            label: "Registrar el contrato como gasto diferido",
            feedback:
              "No existe tal clasificación bajo IFRS 16 para arrendamientos estándar.",
            correct: false,
          },
        ],
        explanation:
          "IFRS 16 requiere que los arrendatarios reconozcan un activo por derecho de uso y un pasivo por arrendamiento desde el inicio, medidos al valor presente de los pagos.",
        xp: 40,
      },
    ],
  },
  {
    id: "revelaciones",
    title: "Revelaciones y Comunicación",
    description:
      "Domina los requerimientos de revelación para garantizar transparencia y utilidad en los reportes financieros.",
    scenarios: [
      {
        title: "Instrumentos financieros",
        description:
          "El directorio solicita claridad sobre los riesgos de mercado de los derivados. ¿Qué información exige IFRS 7?",
        options: [
          {
            label: "Solo una descripción narrativa de los riesgos",
            feedback:
              "Insuficiente. IFRS 7 requiere datos cuantitativos y cualitativos.",
            correct: false,
          },
          {
            label: "Revelar exposiciones, sensibilidad y políticas de gestión de riesgos",
            feedback:
              "Correcto. Debes proporcionar datos sobre riesgos de crédito, liquidez y mercado con análisis de sensibilidad.",
            correct: true,
          },
          {
            label: "Informar únicamente los valores razonables",
            feedback:
              "Eso cubre parte de los requisitos, pero no los análisis de riesgo.",
            correct: false,
          },
        ],
        explanation:
          "IFRS 7 exige revelar exposiciones a riesgos, políticas de gestión y análisis de sensibilidad para proporcionar transparencia sobre instrumentos financieros.",
        xp: 35,
      },
      {
        title: "Información segmentada",
        description:
          "El CFO necesita evaluar el desempeño por unidades de negocio. ¿Qué norma cubre las revelaciones por segmento?",
        options: [
          {
            label: "IFRS 8 Segmentos Operativos",
            feedback:
              "Correcto. IFRS 8 requiere información alineada con la forma en que la dirección evalúa los segmentos.",
            correct: true,
          },
          {
            label: "IAS 34 Información Financiera Intermedia",
            feedback:
              "IAS 34 trata reportes intermedios, no segmentación.",
            correct: false,
          },
          {
            label: "IFRS 10 Estados Financieros Consolidados",
            feedback:
              "IFRS 10 se enfoca en control y consolidación, no en revelaciones segmentadas.",
            correct: false,
          },
        ],
        explanation:
          "IFRS 8 establece los requerimientos de revelación de segmentos operativos basados en la información utilizada internamente por la gerencia.",
        xp: 35,
      },
    ],
  },
];

const achievementsList = [
  {
    id: "primeros-pasos",
    title: "Primeros Pasos IFRS",
    requirement: (state) => state.completedScenarios >= 1,
    description: "Completa tu primera carta de escenario.",
  },
  {
    id: "racha",
    title: "Racha Imparable",
    requirement: (state) => state.bestStreak >= 3,
    description: "Consigue una racha de 3 respuestas correctas seguidas.",
  },
  {
    id: "especialista",
    title: "Especialista IFRS",
    requirement: (state) => state.completedScenarios >= 5,
    description: "Completa 5 cartas de escenario.",
  },
  {
    id: "maestro",
    title: "Maestro IFRS",
    requirement: (state) => state.level >= 4,
    description: "Alcanza el nivel 4 o superior.",
  },
];

const state = {
  currentMission: null,
  currentScenarioIndex: 0,
  selectedOptionIndex: null,
  xp: 0,
  level: 1,
  xpTarget: 100,
  streak: 0,
  bestStreak: 0,
  completedScenarios: 0,
  unlockedAchievements: new Set(),
};

const levelMultiplier = 1.4;

const missionListElement = document.querySelector("#missions");
const missionTitleElement = document.querySelector("#mission-title");
const missionDescriptionElement = document.querySelector("#mission-description");
const scenarioTitleElement = document.querySelector("#scenario-title");
const scenarioDescriptionElement = document.querySelector("#scenario-description");
const optionsElement = document.querySelector("#options");
const revealButton = document.querySelector("#reveal-button");
const feedbackElement = document.querySelector("#feedback");
const cardContainer = document.querySelector("#card-container");
const xpElement = document.querySelector("#xp");
const xpTargetElement = document.querySelector("#xp-target");
const levelElement = document.querySelector("#level");
const streakElement = document.querySelector("#streak");
const progressBar = document.querySelector("#progress-bar");
const achievementsElement = document.querySelector("#achievements");

function renderMissions() {
  missionListElement.innerHTML = "";

  missions.forEach((mission) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = mission.title;
    button.addEventListener("click", () => startMission(mission.id));

    const item = document.createElement("li");
    item.appendChild(button);

    const summary = document.createElement("small");
    summary.textContent = mission.description;
    item.appendChild(summary);

    missionListElement.appendChild(item);
  });
}

function startMission(missionId) {
  const mission = missions.find((m) => m.id === missionId);
  if (!mission) return;

  state.currentMission = mission;
  state.currentScenarioIndex = 0;
  missionTitleElement.textContent = mission.title;
  missionDescriptionElement.textContent = mission.description;
  cardContainer.hidden = false;
  feedbackElement.textContent = "";
  loadScenario();
}

function loadScenario() {
  if (!state.currentMission) return;

  const scenario = state.currentMission.scenarios[state.currentScenarioIndex];
  if (!scenario) {
    feedbackElement.textContent = "¡Misión completada! Selecciona otra para seguir aprendiendo.";
    feedbackElement.className = "feedback success";
    cardContainer.hidden = true;
    return;
  }

  scenarioTitleElement.textContent = scenario.title;
  scenarioDescriptionElement.textContent = scenario.description;
  optionsElement.innerHTML = "";
  state.selectedOptionIndex = null;
  revealButton.disabled = true;
  feedbackElement.textContent = "";
  feedbackElement.className = "feedback";

  scenario.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = option.label;
    button.addEventListener("click", () => selectOption(index));
    optionsElement.appendChild(button);
  });
}

function selectOption(index) {
  state.selectedOptionIndex = index;
  const optionButtons = optionsElement.querySelectorAll(".option");
  optionButtons.forEach((button, idx) => {
    button.classList.toggle("selected", idx === index);
  });
  revealButton.disabled = false;
}

function awardXp(amount) {
  state.xp += amount;
  while (state.xp >= state.xpTarget) {
    state.xp -= state.xpTarget;
    state.level += 1;
    state.xpTarget = Math.floor(state.xpTarget * levelMultiplier);
  }
}

function updateDashboard() {
  xpElement.textContent = state.xp;
  xpTargetElement.textContent = state.xpTarget;
  levelElement.textContent = state.level;
  streakElement.textContent = state.streak;
  const progress = (state.xp / state.xpTarget) * 100;
  progressBar.style.width = `${progress}%`;
}

function updateAchievements() {
  achievementsElement.innerHTML = "";
  achievementsList.forEach((achievement) => {
    const unlocked = achievement.requirement(state);
    if (unlocked) {
      state.unlockedAchievements.add(achievement.id);
    }

    const item = document.createElement("li");
    item.textContent = `${achievement.title} – ${achievement.description}`;
    if (!unlocked) {
      item.style.opacity = 0.4;
    } else {
      item.style.borderLeft = `4px solid var(--accent)`;
      item.style.paddingLeft = "0.75rem";
    }
    achievementsElement.appendChild(item);
  });
}

function revealOutcome() {
  if (state.selectedOptionIndex === null) return;
  const scenario = state.currentMission.scenarios[state.currentScenarioIndex];
  const option = scenario.options[state.selectedOptionIndex];

  if (option.correct) {
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    awardXp(scenario.xp);
    feedbackElement.className = "feedback success";
    feedbackElement.textContent = `${option.feedback} ${scenario.explanation}`;
  } else {
    state.streak = 0;
    feedbackElement.className = "feedback error";
    feedbackElement.textContent = `${option.feedback} ${scenario.explanation}`;
  }

  state.completedScenarios += 1;
  updateDashboard();
  updateAchievements();

  revealButton.disabled = true;
  setTimeout(() => {
    state.currentScenarioIndex += 1;
    loadScenario();
  }, 3000);
}

revealButton.addEventListener("click", revealOutcome);
renderMissions();
updateDashboard();
updateAchievements();
