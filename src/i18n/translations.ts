export type Lang = "uk" | "en" | "es" | "de" | "pl";

export type TFunction = (
  key: TranslationKey,
  vars?: Record<string, string | number>,
) => string;

const uk = {
  "app.subtitle":
    "Натисни кнопку — і отримай випадкове тренування на 3 вправи за 5 секунд.",
  "app.difficultyLabel": "Рівень складності",
  "app.difficultyPlaceholder": "Вибери рівень...",
  "app.spin": "Зіграти тренування",
  "app.spinning": "Крутимо рулетку...",
  "app.errorSelect":
    "Будь ласка, вибери рівень складності перед запуском рулетки!",
  "app.emptyText":
    "Натисни кнопку нижче, щоб випадковим чином згенерувати своє тренування на сьогодні!",
  "app.emptyHint": "Вибери рівень складності й тисни «Зіграти тренування»",
  "app.ready": "Твоє тренування готове",
  "app.level": "Рівень: {level}",
  "app.spinAgain": "Зіграти ще раз",
  "app.footer": "Workout Roulette — тренуйся вдома без підготовки",
  "app.settingsAria": "Налаштування AI-тренера",
  "app.languageAria": "Мова інтерфейсу",

  "difficulty.beginner": "Початковий",
  "difficulty.intermediate": "Середній",
  "difficulty.pro": "Професійний",

  "card.exercise": "Вправа {n}",
  "card.seconds": "сек",
  "card.reps": "повторень",
  "card.start": "Старт",
  "card.pause": "Пауза",

  "coach.title": "AI Тренер",
  "coach.subtitle": "{model} · персональна інструкція",
  "coach.minutes": "~{n} хв",
  "coach.copy": "Копіювати промпт",
  "coach.copied": "Скопійовано",

  "settings.title": "Налаштування AI-тренера",
  "settings.subtitle": "Підлаштуй інструкцію під себе",
  "settings.close": "Закрити",
  "settings.enabled": "Увімкнено · інструкція показується",
  "settings.disabled": "Вимкнено · інструкція прихована",
  "settings.theme": "Тема оформлення",
  "settings.model": "AI модель",
  "settings.tone": "Тон тренера",
  "settings.focus": "Фокус тренування",
  "settings.sections": "Розділи інструкції",
  "settings.stateOn": "увімкнено",
  "settings.stateOff": "вимкнено",
  "settings.done": "Готово",
  "theme.violet": "Фіолетова",
  "theme.emerald": "Смарагдова",
  "theme.sunset": "Захід сонця",
  "theme.light": "Світла",
  "settings.tone.encouraging.label": "Підтримуючий",
  "settings.tone.encouraging.desc": "Мотивує й підбадьорює",
  "settings.tone.strict.label": "Суворий",
  "settings.tone.strict.desc": "Тисне на максимум",
  "settings.tone.calm.label": "Спокійний",
  "settings.tone.calm.desc": "Без стресу, у своєму темпі",
  "settings.focus.technique.label": "Техніка",
  "settings.focus.technique.desc": "Якість рухів понад усе",
  "settings.focus.intensity.label": "Інтенсивність",
  "settings.focus.intensity.desc": "Максимум зусиль, мін. пауз",
  "settings.focus.recovery.label": "Відновлення",
  "settings.focus.recovery.desc": "Дихання й паузи між вправами",
  "settings.warmup.label": "Розминка",
  "settings.warmup.desc": "Підказка для розігріву перед стартом",
  "settings.motivation.label": "Мотивація",
  "settings.motivation.desc": "Фінальний підбадьорливий підсумок",
  "settings.api.title": "API keys",
  "settings.api.desc": "Створюй і керуй ключами для AI-сервісів",
  "settings.api.addAria": "Додати API key",
  "settings.api.other": "Інший сервіс",
  "settings.api.labelPlaceholder": "Назва ключа, наприклад Production",
  "settings.api.valuePlaceholder": "Встав API key",
  "settings.api.add": "Додати ключ",
  "settings.api.warning":
    "Не використовуй цей режим для робочих секретів: ключ тимчасово живе лише у памʼяті цієї вкладки.",
  "settings.api.show": "Показати ключ",
  "settings.api.hide": "Приховати ключ",
  "settings.api.remove": "Видалити ключ",

  "exercises.squat.name": "Присідання",
  "exercises.squat.cue": "Опускайся повільно, піднімайся вибухово",
  "exercises.squat.tip":
    "У присіданнях не відривай п'яток і тримай груди піднятим.",
  "exercises.plank.name": "Планка",
  "exercises.plank.cue": "Тримай таз, не прогинай поперек",
  "exercises.plank.tip":
    "У планці стисни сідниці — це зніме навантаження з попереку.",
  "exercises.pushup.name": "Віджимання",
  "exercises.pushup.cue": "Лікті під кутом 45°",
  "exercises.pushup.tip":
    "У віджиманнях тіло — пряма лінія, не прогинай поперек.",
  "exercises.jumpingJacks.name": "Стрибки на місці",
  "exercises.jumpingJacks.cue": "М'яке приземлення на носки",
  "exercises.jumpingJacks.tip":
    "Стрибки — м'яке приземлення на носки, коліна завжди зігнуті.",
  "exercises.lunges.name": "Випади",
  "exercises.lunges.cue": "Коліно не виходить за носок",
  "exercises.lunges.tip":
    "У випадах коліно задньої ноги опускайся майже до підлоги.",
  "exercises.highKnees.name": "Бігові підйоми",
  "exercises.highKnees.cue": "Коліна до грудей у ритмі",
  "exercises.highKnees.tip": "Підйоми колін — ритм як біг, корпус стабільний.",
  "exercises.crunch.name": "Прес",
  "exercises.crunch.cue": "Підіймайся за рахунок м'язів живота",
  "exercises.crunch.tip": "Прес — підіймайся видихом, не тягни шию руками.",
  "exercises.gluteBridge.name": "Місток",
  "exercises.gluteBridge.cue": "Притисни таз до стелі",
  "exercises.gluteBridge.tip":
    "У містку натискай п'ятки в підлогу для стабільності.",
  "exercises.burpee.name": "Берпи",
  "exercises.burpee.cue": "Один рух — одна секунда",
  "exercises.burpee.tip": "Берпи — дихай ритмічно, не затримуй дихання.",
  "exercises.plankJacks.name": "Горизонтальні бігові",
  "exercises.plankJacks.cue": "Стійка на передпліччях, ритм",
  "exercises.plankJacks.tip":
    "Тримай таз на рівні плечей, не піднімай його.",
  "exercises.legRaises.name": "Накладки на прес",
  "exercises.legRaises.cue": "Не відривай поперек",
  "exercises.legRaises.tip": "Контролюй опускання — 2 секунди вниз.",
  "exercises.jumpSquat.name": "Присідання з стрибком",
  "exercises.jumpSquat.cue": "Вибух у верхній точці",
  "exercises.jumpSquat.tip": "Вибух угорі, але завжди м'яке приземлення.",
  "exercises.superman.name": "Супермен",
  "exercises.superman.cue": "Підіймай руки й ноги одночасно",
  "exercises.superman.tip":
    "Підйом плавний без ривків, фіксуй верхню точку на 1 секунду.",
  "exercises.mountainClimber.name": "Альпініст",
  "exercises.mountainClimber.cue": "Коліна до грудей по черзі",
  "exercises.mountainClimber.tip":
    "Альпініст — не стрибай широко, коліна близько до центру.",
  "exercises.tPushup.name": "Т-віджимання",
  "exercises.tPushup.cue": "Розгортання у верхній точці",
  "exercises.tPushup.tip":
    "Розворот — контрольований, не закручуйся по інерції.",

  "prompt.title": "🎯 Твоє тренування — рівень «{level}».",
  "prompt.warmup": "🟢 Розминка. {text}",
  "prompt.complex": "📋 Комплекс: {names}.",
  "prompt.technique": "💡 Техніка: {tip}",
  "prompt.loadMixed":
    "📊 Навантаження: {reps} повторень сумарно + {seconds} секунд у статичних вправах.",
  "prompt.loadReps": "📊 Навантаження: {reps} повторень сумарно.",
  "prompt.loadTime":
    "📊 Навантаження: {seconds} секунд сумарно у статичних вправах.",
  "prompt.motivation": "🔥 {text}",
  "prompt.tone.encouraging":
    "Ти зможеш. Головне — почати й не зупинятись.",
  "prompt.tone.strict":
    "Без відмазок. Робиш по максимуму або не починаєш взагалі.",
  "prompt.tone.calm": "Без стресу. Слухай тіло й рухайся у своєму темпі.",
  "prompt.focus.technique":
    "Фокус на техніці: якість кожного повтору важливіша за кількість.",
  "prompt.focus.intensity":
    "Фокус на інтенсивності: тисни на максимум, скорочуй паузи до мінімуму.",
  "prompt.focus.recovery":
    "Фокус на відновленні: між вправами роби 1–2 глибоких вдихи-видихи.",
  "warmup.0":
    "Перед стартом — 60 секунд легких стрибків на місці, щоб підняти пульс.",
  "warmup.1":
    "Розминка: 5 обертів руками вперед і назад, 10 нахилів корпуса.",
  "warmup.2":
    "Розігрій суглоби: коліна по черзі до грудей, потім махи ногами по 10 разів.",
  "pacing.beginner":
    "Темп — спокійний. Головне зараз — чиста техніка, а не швидкість. Роби паузу 30–40 секунд між вправами.",
  "pacing.intermediate":
    "Тримай стабільний темп із відпочинком 20–30 секунд між вправами. Не поспішай у першій, зберігай силу на фініш.",
  "pacing.pro":
    "Режим високої інтенсивності: відпочинок не більше 15 секунд між вправами. Можеш пройти комплекс 2–3 рази по колу.",
  "motivation.0": "Ти вже зробив найважливіше — почав. Далі легше.",
  "motivation.1":
    "Кожен повтор наближає тебе до кращої форми. Не здавайся на останній вправі.",
  "motivation.2": "5 хвилин сьогодні — це більше, ніж нуль. Погнали.",
  "motivation.3":
    "Твоє тіло вміє більше, ніж думає голова. Вірь собі.",
  "motivation.4":
    "Фінішуєш комплекс — заслужив повагу. А потім можна ще коло.",
} as const;

export type TranslationKey = keyof typeof uk;
type Dictionary = Record<TranslationKey, string>;

const en: Dictionary = {
  "app.subtitle":
    "Hit the button and get a random 3-exercise workout in 5 seconds.",
  "app.difficultyLabel": "Difficulty level",
  "app.difficultyPlaceholder": "Choose a level...",
  "app.spin": "Spin the workout",
  "app.spinning": "Spinning the roulette...",
  "app.errorSelect": "Please choose a difficulty level before spinning!",
  "app.emptyText":
    "Press the button below to randomly generate today's workout!",
  "app.emptyHint": "Choose a difficulty level and hit “Spin the workout”",
  "app.ready": "Your workout is ready",
  "app.level": "Level: {level}",
  "app.spinAgain": "Spin again",
  "app.footer": "Workout Roulette — train at home with no prep",
  "app.settingsAria": "AI coach settings",
  "app.languageAria": "Interface language",

  "difficulty.beginner": "Beginner",
  "difficulty.intermediate": "Intermediate",
  "difficulty.pro": "Pro",

  "card.exercise": "Exercise {n}",
  "card.seconds": "sec",
  "card.reps": "reps",
  "card.start": "Start",
  "card.pause": "Pause",

  "coach.title": "AI Coach",
  "coach.subtitle": "{model} · personal instructions",
  "coach.minutes": "~{n} min",
  "coach.copy": "Copy prompt",
  "coach.copied": "Copied",

  "settings.title": "AI coach settings",
  "settings.subtitle": "Tailor the instructions to yourself",
  "settings.close": "Close",
  "settings.enabled": "On · instructions are shown",
  "settings.disabled": "Off · instructions are hidden",
  "settings.theme": "Color theme",
  "settings.model": "AI model",
  "settings.tone": "Coach tone",
  "settings.focus": "Workout focus",
  "settings.sections": "Instruction sections",
  "settings.stateOn": "on",
  "settings.stateOff": "off",
  "settings.done": "Done",
  "theme.violet": "Violet",
  "theme.emerald": "Emerald",
  "theme.sunset": "Sunset",
  "theme.light": "Light",
  "settings.tone.encouraging.label": "Supportive",
  "settings.tone.encouraging.desc": "Motivates and cheers you on",
  "settings.tone.strict.label": "Strict",
  "settings.tone.strict.desc": "Pushes you to the max",
  "settings.tone.calm.label": "Calm",
  "settings.tone.calm.desc": "No stress, at your own pace",
  "settings.focus.technique.label": "Technique",
  "settings.focus.technique.desc": "Movement quality above all",
  "settings.focus.intensity.label": "Intensity",
  "settings.focus.intensity.desc": "Maximum effort, minimum pauses",
  "settings.focus.recovery.label": "Recovery",
  "settings.focus.recovery.desc": "Breathing and pauses between exercises",
  "settings.warmup.label": "Warm-up",
  "settings.warmup.desc": "A warm-up tip before you start",
  "settings.motivation.label": "Motivation",
  "settings.motivation.desc": "An encouraging final wrap-up",
  "settings.api.title": "API keys",
  "settings.api.desc": "Create and manage keys for AI services",
  "settings.api.addAria": "Add API key",
  "settings.api.other": "Other service",
  "settings.api.labelPlaceholder": "Key name, e.g. Production",
  "settings.api.valuePlaceholder": "Paste API key",
  "settings.api.add": "Add key",
  "settings.api.warning":
    "Don't use this mode for real secrets: the key lives only in this tab's memory.",
  "settings.api.show": "Show key",
  "settings.api.hide": "Hide key",
  "settings.api.remove": "Delete key",

  "exercises.squat.name": "Squat",
  "exercises.squat.cue": "Lower slowly, drive up explosively",
  "exercises.squat.tip":
    "In squats keep your heels down and your chest up.",
  "exercises.plank.name": "Plank",
  "exercises.plank.cue": "Tuck your pelvis, don't arch your back",
  "exercises.plank.tip":
    "In the plank squeeze your glutes — it takes the load off your lower back.",
  "exercises.pushup.name": "Push-up",
  "exercises.pushup.cue": "Elbows at a 45° angle",
  "exercises.pushup.tip":
    "In push-ups your body is a straight line — don't sag your lower back.",
  "exercises.jumpingJacks.name": "Jumping jacks",
  "exercises.jumpingJacks.cue": "Land softly on the balls of your feet",
  "exercises.jumpingJacks.tip":
    "Jumps — land softly on the balls of your feet, knees always bent.",
  "exercises.lunges.name": "Lunges",
  "exercises.lunges.cue": "Knee stays behind your toes",
  "exercises.lunges.tip":
    "In lunges lower your back knee almost to the floor.",
  "exercises.highKnees.name": "High knees",
  "exercises.highKnees.cue": "Knees to chest, keep the rhythm",
  "exercises.highKnees.tip":
    "High knees — run in place with a steady rhythm, torso stable.",
  "exercises.crunch.name": "Crunch",
  "exercises.crunch.cue": "Rise with your abs, not your neck",
  "exercises.crunch.tip":
    "Crunches — exhale as you rise, don't pull your neck with your hands.",
  "exercises.gluteBridge.name": "Glute bridge",
  "exercises.gluteBridge.cue": "Press your hips up to the ceiling",
  "exercises.gluteBridge.tip":
    "In the bridge press your heels into the floor for stability.",
  "exercises.burpee.name": "Burpee",
  "exercises.burpee.cue": "One move — one second",
  "exercises.burpee.tip": "Burpees — breathe rhythmically, don't hold your breath.",
  "exercises.plankJacks.name": "Plank jacks",
  "exercises.plankJacks.cue": "Forearms down, steady rhythm",
  "exercises.plankJacks.tip":
    "Keep your hips level with your shoulders, don't lift them.",
  "exercises.legRaises.name": "Leg raises",
  "exercises.legRaises.cue": "Don't lift your lower back",
  "exercises.legRaises.tip": "Control the lowering — two seconds down.",
  "exercises.jumpSquat.name": "Jump squat",
  "exercises.jumpSquat.cue": "Explode at the top",
  "exercises.jumpSquat.tip": "Explode at the top, but always land softly.",
  "exercises.superman.name": "Superman",
  "exercises.superman.cue": "Lift arms and legs together",
  "exercises.superman.tip":
    "Lift smoothly without jerking, hold the top for one second.",
  "exercises.mountainClimber.name": "Mountain climber",
  "exercises.mountainClimber.cue": "Knees to chest, alternating",
  "exercises.mountainClimber.tip":
    "Mountain climbers — don't jump too wide, keep your knees close to the centre.",
  "exercises.tPushup.name": "T push-up",
  "exercises.tPushup.cue": "Rotate at the top",
  "exercises.tPushup.tip":
    "Rotate in a controlled way, don't twist with momentum.",

  "prompt.title": "🎯 Your workout — level: {level}.",
  "prompt.warmup": "🟢 Warm-up. {text}",
  "prompt.complex": "📋 Circuit: {names}.",
  "prompt.technique": "💡 Form: {tip}",
  "prompt.loadMixed":
    "📊 Load: {reps} reps in total + {seconds} seconds of static holds.",
  "prompt.loadReps": "📊 Load: {reps} reps in total.",
  "prompt.loadTime": "📊 Load: {seconds} seconds of static holds in total.",
  "prompt.motivation": "🔥 {text}",
  "prompt.tone.encouraging":
    "You've got this. The main thing is to start and keep going.",
  "prompt.tone.strict":
    "No excuses. Give it your all or don't start at all.",
  "prompt.tone.calm":
    "No stress. Listen to your body and move at your own pace.",
  "prompt.focus.technique":
    "Focus on form: the quality of every rep matters more than the count.",
  "prompt.focus.intensity":
    "Focus on intensity: push to the max, cut the pauses to a minimum.",
  "prompt.focus.recovery":
    "Focus on recovery: take 1–2 deep breaths between exercises.",
  "warmup.0":
    "Before you start — 60 seconds of light jumping in place to raise your heart rate.",
  "warmup.1":
    "Warm-up: 5 arm circles forward and back, 10 torso bends.",
  "warmup.2":
    "Warm up your joints: knees to chest one at a time, then 10 leg swings each side.",
  "pacing.beginner":
    "Pace: easy. Right now clean form matters, not speed. Rest 30–40 seconds between exercises.",
  "pacing.intermediate":
    "Keep a steady pace with 20–30 seconds of rest between exercises. Don't rush the first one, save energy for the finish.",
  "pacing.pro":
    "High-intensity mode: no more than 15 seconds of rest between exercises. You can run the circuit 2–3 times.",
  "motivation.0":
    "You've already done the most important thing — you started. It gets easier from here.",
  "motivation.1":
    "Every rep brings you closer to a better shape. Don't give up on the last exercise.",
  "motivation.2": "Five minutes today is more than zero. Let's go.",
  "motivation.3":
    "Your body can do more than your head thinks. Believe in yourself.",
  "motivation.4":
    "Finish the circuit — you've earned respect. And then maybe one more round.",
};

const es: Dictionary = {
  "app.subtitle":
    "Pulsa el botón y obtén un entrenamiento aleatorio de 3 ejercicios en 5 segundos.",
  "app.difficultyLabel": "Nivel de dificultad",
  "app.difficultyPlaceholder": "Elige un nivel...",
  "app.spin": "Girar el entrenamiento",
  "app.spinning": "Girando la ruleta...",
  "app.errorSelect": "¡Elige un nivel de dificultad antes de girar la ruleta!",
  "app.emptyText":
    "¡Pulsa el botón de abajo para generar al azar el entrenamiento de hoy!",
  "app.emptyHint": "Elige un nivel de dificultad y pulsa «Girar el entrenamiento»",
  "app.ready": "Tu entrenamiento está listo",
  "app.level": "Nivel: {level}",
  "app.spinAgain": "Girar otra vez",
  "app.footer": "Workout Roulette — entrena en casa sin preparación",
  "app.settingsAria": "Ajustes del entrenador IA",
  "app.languageAria": "Idioma de la interfaz",

  "difficulty.beginner": "Principiante",
  "difficulty.intermediate": "Intermedio",
  "difficulty.pro": "Profesional",

  "card.exercise": "Ejercicio {n}",
  "card.seconds": "seg",
  "card.reps": "repeticiones",
  "card.start": "Iniciar",
  "card.pause": "Pausa",

  "coach.title": "Entrenador IA",
  "coach.subtitle": "{model} · instrucciones personales",
  "coach.minutes": "~{n} min",
  "coach.copy": "Copiar prompt",
  "coach.copied": "Copiado",

  "settings.title": "Ajustes del entrenador IA",
  "settings.subtitle": "Adapta las instrucciones a ti",
  "settings.close": "Cerrar",
  "settings.enabled": "Activado · se muestran las instrucciones",
  "settings.disabled": "Desactivado · instrucciones ocultas",
  "settings.theme": "Tema de color",
  "settings.model": "Modelo de IA",
  "settings.tone": "Tono del entrenador",
  "settings.focus": "Enfoque del entrenamiento",
  "settings.sections": "Secciones de la instrucción",
  "settings.stateOn": "activado",
  "settings.stateOff": "desactivado",
  "settings.done": "Listo",
  "theme.violet": "Violeta",
  "theme.emerald": "Esmeralda",
  "theme.sunset": "Atardecer",
  "theme.light": "Clara",
  "settings.tone.encouraging.label": "Motivador",
  "settings.tone.encouraging.desc": "Motiva y te anima",
  "settings.tone.strict.label": "Estricto",
  "settings.tone.strict.desc": "Te exige al máximo",
  "settings.tone.calm.label": "Tranquilo",
  "settings.tone.calm.desc": "Sin estrés, a tu ritmo",
  "settings.focus.technique.label": "Técnica",
  "settings.focus.technique.desc": "La calidad del movimiento ante todo",
  "settings.focus.intensity.label": "Intensidad",
  "settings.focus.intensity.desc": "Máximo esfuerzo, mínimas pausas",
  "settings.focus.recovery.label": "Recuperación",
  "settings.focus.recovery.desc": "Respiración y pausas entre ejercicios",
  "settings.warmup.label": "Calentamiento",
  "settings.warmup.desc": "Consejo de calentamiento antes de empezar",
  "settings.motivation.label": "Motivación",
  "settings.motivation.desc": "Un cierre final de ánimo",
  "settings.api.title": "API keys",
  "settings.api.desc": "Crea y gestiona claves para servicios de IA",
  "settings.api.addAria": "Añadir API key",
  "settings.api.other": "Otro servicio",
  "settings.api.labelPlaceholder": "Nombre de la clave, p. ej. Producción",
  "settings.api.valuePlaceholder": "Pega la API key",
  "settings.api.add": "Añadir clave",
  "settings.api.warning":
    "No uses este modo para secretos reales: la clave vive solo en la memoria de esta pestaña.",
  "settings.api.show": "Mostrar clave",
  "settings.api.hide": "Ocultar clave",
  "settings.api.remove": "Eliminar clave",

  "exercises.squat.name": "Sentadilla",
  "exercises.squat.cue": "Baja despacio, sube con potencia",
  "exercises.squat.tip":
    "En la sentadilla no levantes los talones y mantén el pecho alto.",
  "exercises.plank.name": "Plancha",
  "exercises.plank.cue": "Aprieta el glúteo, no arquees la espalda",
  "exercises.plank.tip":
    "En la plancha aprieta los glúteos: quita carga a la zona lumbar.",
  "exercises.pushup.name": "Flexiones",
  "exercises.pushup.cue": "Codos a 45°",
  "exercises.pushup.tip":
    "En las flexiones el cuerpo es una línea recta, no hundas la lumbar.",
  "exercises.jumpingJacks.name": "Saltos en el sitio",
  "exercises.jumpingJacks.cue": "Aterriza suave sobre las puntas",
  "exercises.jumpingJacks.tip":
    "Saltos: aterriza suave sobre las puntas, rodillas siempre flexionadas.",
  "exercises.lunges.name": "Zancadas",
  "exercises.lunges.cue": "La rodilla no pasa la punta del pie",
  "exercises.lunges.tip":
    "En las zancadas baja la rodilla trasera casi hasta el suelo.",
  "exercises.highKnees.name": "Rodillas altas",
  "exercises.highKnees.cue": "Rodillas al pecho, mantén el ritmo",
  "exercises.highKnees.tip":
    "Rodillas altas: ritmo de carrera, tronco estable.",
  "exercises.crunch.name": "Abdominales",
  "exercises.crunch.cue": "Sube con el abdomen, no con el cuello",
  "exercises.crunch.tip":
    "Abdominales: sube al exhalar, no tires del cuello con las manos.",
  "exercises.gluteBridge.name": "Puente de glúteos",
  "exercises.gluteBridge.cue": "Empuja la cadera hacia el techo",
  "exercises.gluteBridge.tip":
    "En el puente presiona los talones contra el suelo.",
  "exercises.burpee.name": "Burpee",
  "exercises.burpee.cue": "Un movimiento, un segundo",
  "exercises.burpee.tip":
    "Burpees: respira con ritmo, no aguantes la respiración.",
  "exercises.plankJacks.name": "Plancha con saltos",
  "exercises.plankJacks.cue": "Antebrazos firmes, ritmo constante",
  "exercises.plankJacks.tip":
    "Mantén la cadera a la altura de los hombros, no la subas.",
  "exercises.legRaises.name": "Elevación de piernas",
  "exercises.legRaises.cue": "No despegues la lumbar",
  "exercises.legRaises.tip": "Controla el descenso: dos segundos bajando.",
  "exercises.jumpSquat.name": "Sentadilla con salto",
  "exercises.jumpSquat.cue": "Explota arriba",
  "exercises.jumpSquat.tip":
    "Explosión arriba, pero siempre aterrizaje suave.",
  "exercises.superman.name": "Superman",
  "exercises.superman.cue": "Levanta brazos y piernas a la vez",
  "exercises.superman.tip":
    "Sube suave sin tirones, fija arriba un segundo.",
  "exercises.mountainClimber.name": "Escalador",
  "exercises.mountainClimber.cue": "Rodillas al pecho alternando",
  "exercises.mountainClimber.tip":
    "Escalador: no saltes muy abierto, rodillas cerca del centro.",
  "exercises.tPushup.name": "Flexión en T",
  "exercises.tPushup.cue": "Gira en la parte superior",
  "exercises.tPushup.tip":
    "El giro es controlado, no te dejes llevar por la inercia.",

  "prompt.title": "🎯 Tu entrenamiento — nivel «{level}».",
  "prompt.warmup": "🟢 Calentamiento. {text}",
  "prompt.complex": "📋 Circuito: {names}.",
  "prompt.technique": "💡 Técnica: {tip}",
  "prompt.loadMixed":
    "📊 Carga: {reps} repeticiones en total + {seconds} segundos en ejercicios estáticos.",
  "prompt.loadReps": "📊 Carga: {reps} repeticiones en total.",
  "prompt.loadTime":
    "📊 Carga: {seconds} segundos en total en ejercicios estáticos.",
  "prompt.motivation": "🔥 {text}",
  "prompt.tone.encouraging":
    "Puedes hacerlo. Lo importante es empezar y no parar.",
  "prompt.tone.strict": "Sin excusas. Hazlo al máximo o no empieces.",
  "prompt.tone.calm":
    "Sin estrés. Escucha a tu cuerpo y muévete a tu ritmo.",
  "prompt.focus.technique":
    "Enfoque en la técnica: la calidad de cada repetición importa más que la cantidad.",
  "prompt.focus.intensity":
    "Enfoque en la intensidad: dale al máximo y reduce las pausas al mínimo.",
  "prompt.focus.recovery":
    "Enfoque en la recuperación: haz 1–2 respiraciones profundas entre ejercicios.",
  "warmup.0":
    "Antes de empezar: 60 segundos de saltos suaves en el sitio para subir el pulso.",
  "warmup.1":
    "Calentamiento: 5 círculos de brazos hacia delante y atrás, 10 inclinaciones del torso.",
  "warmup.2":
    "Calienta las articulaciones: rodillas al pecho alternando y luego 10 balanceos de piernas por lado.",
  "pacing.beginner":
    "Ritmo tranquilo. Ahora lo importante es la técnica limpia, no la velocidad. Descansa 30–40 segundos entre ejercicios.",
  "pacing.intermediate":
    "Mantén un ritmo estable con 20–30 segundos de descanso entre ejercicios. No te apresures en el primero, guarda fuerza para el final.",
  "pacing.pro":
    "Modo de alta intensidad: máximo 15 segundos de descanso entre ejercicios. Puedes hacer el circuito 2–3 veces.",
  "motivation.0":
    "Ya has hecho lo más importante: empezar. Ahora es más fácil.",
  "motivation.1":
    "Cada repetición te acerca a una mejor forma. No te rindas en el último ejercicio.",
  "motivation.2": "Cinco minutos hoy es más que cero. ¡Vamos!",
  "motivation.3":
    "Tu cuerpo puede más de lo que piensa tu cabeza. Cree en ti.",
  "motivation.4":
    "Termina el circuito: te has ganado el respeto. Y luego quizá otra vuelta.",
};

const de: Dictionary = {
  "app.subtitle":
    "Drück den Button und erhalte in 5 Sekunden ein zufälliges Training mit 3 Übungen.",
  "app.difficultyLabel": "Schwierigkeitsstufe",
  "app.difficultyPlaceholder": "Stufe wählen...",
  "app.spin": "Training auslosen",
  "app.spinning": "Rad dreht...",
  "app.errorSelect": "Bitte wähle zuerst eine Schwierigkeitsstufe!",
  "app.emptyText":
    "Drück den Button unten und lass dir dein heutiges Training zufällig generieren!",
  "app.emptyHint": "Wähle eine Stufe und drück „Training auslosen“",
  "app.ready": "Dein Training ist bereit",
  "app.level": "Stufe: {level}",
  "app.spinAgain": "Nochmal auslosen",
  "app.footer": "Workout Roulette — zu Hause trainieren ohne Vorbereitung",
  "app.settingsAria": "KI-Trainer-Einstellungen",
  "app.languageAria": "Sprache der Oberfläche",

  "difficulty.beginner": "Anfänger",
  "difficulty.intermediate": "Fortgeschritten",
  "difficulty.pro": "Profi",

  "card.exercise": "Übung {n}",
  "card.seconds": "Sek.",
  "card.reps": "Wdh.",
  "card.start": "Start",
  "card.pause": "Pause",

  "coach.title": "KI-Trainer",
  "coach.subtitle": "{model} · persönliche Anleitung",
  "coach.minutes": "~{n} Min.",
  "coach.copy": "Prompt kopieren",
  "coach.copied": "Kopiert",

  "settings.title": "KI-Trainer-Einstellungen",
  "settings.subtitle": "Passe die Anleitung an dich an",
  "settings.close": "Schließen",
  "settings.enabled": "An · Anleitung wird angezeigt",
  "settings.disabled": "Aus · Anleitung ist ausgeblendet",
  "settings.theme": "Farbschema",
  "settings.model": "KI-Modell",
  "settings.tone": "Ton des Trainers",
  "settings.focus": "Trainingsfokus",
  "settings.sections": "Abschnitte der Anleitung",
  "settings.stateOn": "an",
  "settings.stateOff": "aus",
  "settings.done": "Fertig",
  "theme.violet": "Violett",
  "theme.emerald": "Smaragd",
  "theme.sunset": "Sonnenuntergang",
  "theme.light": "Hell",
  "settings.tone.encouraging.label": "Unterstützend",
  "settings.tone.encouraging.desc": "Motiviert und muntert auf",
  "settings.tone.strict.label": "Streng",
  "settings.tone.strict.desc": "Treibt dich ans Maximum",
  "settings.tone.calm.label": "Ruhig",
  "settings.tone.calm.desc": "Kein Stress, in deinem Tempo",
  "settings.focus.technique.label": "Technik",
  "settings.focus.technique.desc": "Bewegungsqualität über alles",
  "settings.focus.intensity.label": "Intensität",
  "settings.focus.intensity.desc": "Maximaler Einsatz, minimale Pausen",
  "settings.focus.recovery.label": "Erholung",
  "settings.focus.recovery.desc": "Atmung und Pausen zwischen den Übungen",
  "settings.warmup.label": "Aufwärmen",
  "settings.warmup.desc": "Ein Aufwärmtipp vor dem Start",
  "settings.motivation.label": "Motivation",
  "settings.motivation.desc": "Ein ermutigender Abschluss",
  "settings.api.title": "API keys",
  "settings.api.desc": "Erstelle und verwalte Schlüssel für KI-Dienste",
  "settings.api.addAria": "API-Key hinzufügen",
  "settings.api.other": "Anderer Dienst",
  "settings.api.labelPlaceholder": "Name des Schlüssels, z. B. Production",
  "settings.api.valuePlaceholder": "API-Key einfügen",
  "settings.api.add": "Schlüssel hinzufügen",
  "settings.api.warning":
    "Nutze diesen Modus nicht für echte Geheimnisse: Der Schlüssel lebt nur im Speicher dieses Tabs.",
  "settings.api.show": "Schlüssel anzeigen",
  "settings.api.hide": "Schlüssel verbergen",
  "settings.api.remove": "Schlüssel löschen",

  "exercises.squat.name": "Kniebeuge",
  "exercises.squat.cue": "Langsam runter, explosiv hoch",
  "exercises.squat.tip":
    "Bei Kniebeugen die Fersen unten lassen und die Brust hoch halten.",
  "exercises.plank.name": "Unterarmstütz",
  "exercises.plank.cue": "Becken halten, nicht ins Hohlkreuz",
  "exercises.plank.tip":
    "Im Unterarmstütz die Gesäßmuskeln anspannen – das entlastet den Rücken.",
  "exercises.pushup.name": "Liegestütz",
  "exercises.pushup.cue": "Ellbogen im 45°-Winkel",
  "exercises.pushup.tip":
    "Beim Liegestütz ist der Körper eine gerade Linie – nicht ins Hohlkreuz.",
  "exercises.jumpingJacks.name": "Hampelmann",
  "exercises.jumpingJacks.cue": "Sanft auf den Fußballen landen",
  "exercises.jumpingJacks.tip":
    "Hampelmann: sanft auf den Fußballen landen, Knie immer gebeugt.",
  "exercises.lunges.name": "Ausfallschritte",
  "exercises.lunges.cue": "Knie bleibt hinter den Zehen",
  "exercises.lunges.tip":
    "Beim Ausfallschritt das hintere Knie fast bis zum Boden senken.",
  "exercises.highKnees.name": "Kniehebelauf",
  "exercises.highKnees.cue": "Knie zur Brust, im Rhythmus",
  "exercises.highKnees.tip":
    "Kniehebelauf: Laufrhythmus, Oberkörper stabil.",
  "exercises.crunch.name": "Crunches",
  "exercises.crunch.cue": "Mit dem Bauch hoch, nicht mit dem Nacken",
  "exercises.crunch.tip":
    "Crunches: beim Hochkommen ausatmen, Nacken nicht mit den Händen ziehen.",
  "exercises.gluteBridge.name": "Beckenheben",
  "exercises.gluteBridge.cue": "Becken zur Decke drücken",
  "exercises.gluteBridge.tip":
    "Beim Beckenheben die Fersen in den Boden drücken.",
  "exercises.burpee.name": "Burpee",
  "exercises.burpee.cue": "Eine Bewegung – eine Sekunde",
  "exercises.burpee.tip":
    "Burpees: rhythmisch atmen, Atem nicht anhalten.",
  "exercises.plankJacks.name": "Plank Jacks",
  "exercises.plankJacks.cue": "Unterarme fest, gleichmäßiger Rhythmus",
  "exercises.plankJacks.tip":
    "Becken auf Schulterhöhe halten, nicht anheben.",
  "exercises.legRaises.name": "Beinheben",
  "exercises.legRaises.cue": "Kreuz nicht abheben",
  "exercises.legRaises.tip": "Das Absenken kontrollieren – zwei Sekunden runter.",
  "exercises.jumpSquat.name": "Sprungkniebeuge",
  "exercises.jumpSquat.cue": "Explosion oben",
  "exercises.jumpSquat.tip": "Explosion oben, aber immer weich landen.",
  "exercises.superman.name": "Superman",
  "exercises.superman.cue": "Arme und Beine gleichzeitig heben",
  "exercises.superman.tip":
    "Flüssig heben, oben eine Sekunde halten.",
  "exercises.mountainClimber.name": "Mountain Climber",
  "exercises.mountainClimber.cue": "Knie abwechselnd zur Brust",
  "exercises.mountainClimber.tip":
    "Mountain Climber: nicht zu breit springen, Knie nah zur Mitte.",
  "exercises.tPushup.name": "T-Liegestütz",
  "exercises.tPushup.cue": "Oben drehen",
  "exercises.tPushup.tip":
    "Die Drehung kontrolliert ausführen, nicht mit Schwung.",

  "prompt.title": "🎯 Dein Training — Stufe „{level}“.",
  "prompt.warmup": "🟢 Aufwärmen. {text}",
  "prompt.complex": "📋 Zirkel: {names}.",
  "prompt.technique": "💡 Technik: {tip}",
  "prompt.loadMixed":
    "📊 Belastung: insgesamt {reps} Wiederholungen + {seconds} Sekunden statische Übungen.",
  "prompt.loadReps": "📊 Belastung: insgesamt {reps} Wiederholungen.",
  "prompt.loadTime":
    "📊 Belastung: insgesamt {seconds} Sekunden statische Übungen.",
  "prompt.motivation": "🔥 {text}",
  "prompt.tone.encouraging":
    "Du schaffst das. Das Wichtigste ist anzufangen und dranzubleiben.",
  "prompt.tone.strict":
    "Keine Ausreden. Alles geben oder gar nicht erst anfangen.",
  "prompt.tone.calm":
    "Kein Stress. Hör auf deinen Körper und bewege dich in deinem Tempo.",
  "prompt.focus.technique":
    "Fokus auf Technik: die Qualität jeder Wiederholung zählt mehr als die Anzahl.",
  "prompt.focus.intensity":
    "Fokus auf Intensität: gib alles, verkürze die Pausen auf ein Minimum.",
  "prompt.focus.recovery":
    "Fokus auf Erholung: atme zwischen den Übungen 1–2-mal tief ein und aus.",
  "warmup.0":
    "Vor dem Start: 60 Sekunden leichtes Hampeln auf der Stelle, um den Puls zu heben.",
  "warmup.1":
    "Aufwärmen: 5 Armkreise vorwärts und rückwärts, 10 Rumpfbeugen.",
  "warmup.2":
    "Gelenke aufwärmen: Knie abwechselnd zur Brust, dann je 10 Beinschwünge.",
  "pacing.beginner":
    "Tempo: ruhig. Jetzt zählt saubere Technik, nicht Geschwindigkeit. Pause 30–40 Sekunden zwischen den Übungen.",
  "pacing.intermediate":
    "Halte ein gleichmäßiges Tempo mit 20–30 Sekunden Pause zwischen den Übungen. Hetze nicht bei der ersten, spare Kraft fürs Finale.",
  "pacing.pro":
    "Hochintensivmodus: höchstens 15 Sekunden Pause zwischen den Übungen. Du kannst den Zirkel 2–3-mal durchlaufen.",
  "motivation.0":
    "Du hast das Wichtigste schon geschafft — angefangen. Ab jetzt wird es leichter.",
  "motivation.1":
    "Jede Wiederholung bringt dich näher an eine bessere Form. Gib bei der letzten Übung nicht auf.",
  "motivation.2": "Fünf Minuten heute sind mehr als null. Los geht's.",
  "motivation.3":
    "Dein Körper kann mehr, als dein Kopf denkt. Glaub an dich.",
  "motivation.4":
    "Bring den Zirkel zu Ende — das hast du dir verdient. Und dann vielleicht noch eine Runde.",
};

const pl: Dictionary = {
  "app.subtitle":
    "Naciśnij przycisk i otrzymaj losowy trening z 3 ćwiczeń w 5 sekund.",
  "app.difficultyLabel": "Poziom trudności",
  "app.difficultyPlaceholder": "Wybierz poziom...",
  "app.spin": "Zagraj trening",
  "app.spinning": "Kręcimy ruletką...",
  "app.errorSelect": "Najpierw wybierz poziom trudności!",
  "app.emptyText":
    "Naciśnij przycisk poniżej, aby wylosować trening na dziś!",
  "app.emptyHint": "Wybierz poziom trudności i naciśnij „Zagraj trening”",
  "app.ready": "Twój trening jest gotowy",
  "app.level": "Poziom: {level}",
  "app.spinAgain": "Zagraj jeszcze raz",
  "app.footer": "Workout Roulette — trenuj w domu bez przygotowań",
  "app.settingsAria": "Ustawienia trenera AI",
  "app.languageAria": "Język interfejsu",

  "difficulty.beginner": "Początkujący",
  "difficulty.intermediate": "Średni",
  "difficulty.pro": "Zaawansowany",

  "card.exercise": "Ćwiczenie {n}",
  "card.seconds": "sek.",
  "card.reps": "powtórzeń",
  "card.start": "Start",
  "card.pause": "Pauza",

  "coach.title": "Trener AI",
  "coach.subtitle": "{model} · spersonalizowana instrukcja",
  "coach.minutes": "~{n} min",
  "coach.copy": "Kopiuj prompt",
  "coach.copied": "Skopiowano",

  "settings.title": "Ustawienia trenera AI",
  "settings.subtitle": "Dostosuj instrukcję do siebie",
  "settings.close": "Zamknij",
  "settings.enabled": "Włączone · instrukcja jest widoczna",
  "settings.disabled": "Wyłączone · instrukcja jest ukryta",
  "settings.theme": "Motyw kolorystyczny",
  "settings.model": "Model AI",
  "settings.tone": "Ton trenera",
  "settings.focus": "Fokus treningu",
  "settings.sections": "Sekcje instrukcji",
  "settings.stateOn": "włączone",
  "settings.stateOff": "wyłączone",
  "settings.done": "Gotowe",
  "theme.violet": "Fioletowy",
  "theme.emerald": "Szmaragdowy",
  "theme.sunset": "Zachód słońca",
  "theme.light": "Jasny",
  "settings.tone.encouraging.label": "Wspierający",
  "settings.tone.encouraging.desc": "Motywuje i dodaje otuchy",
  "settings.tone.strict.label": "Surowy",
  "settings.tone.strict.desc": "Ciśnie na maksa",
  "settings.tone.calm.label": "Spokojny",
  "settings.tone.calm.desc": "Bez stresu, we własnym tempie",
  "settings.focus.technique.label": "Technika",
  "settings.focus.technique.desc": "Jakość ruchu ponad wszystko",
  "settings.focus.intensity.label": "Intensywność",
  "settings.focus.intensity.desc": "Maksymalny wysiłek, minimalne przerwy",
  "settings.focus.recovery.label": "Regeneracja",
  "settings.focus.recovery.desc": "Oddech i przerwy między ćwiczeniami",
  "settings.warmup.label": "Rozgrzewka",
  "settings.warmup.desc": "Wskazówka do rozgrzewki przed startem",
  "settings.motivation.label": "Motywacja",
  "settings.motivation.desc": "Mobilizujące podsumowanie na koniec",
  "settings.api.title": "API keys",
  "settings.api.desc": "Twórz i zarządzaj kluczami do usług AI",
  "settings.api.addAria": "Dodaj API key",
  "settings.api.other": "Inna usługa",
  "settings.api.labelPlaceholder": "Nazwa klucza, np. Production",
  "settings.api.valuePlaceholder": "Wklej API key",
  "settings.api.add": "Dodaj klucz",
  "settings.api.warning":
    "Nie używaj tego trybu do prawdziwych sekretów: klucz żyje tylko w pamięci tej karty.",
  "settings.api.show": "Pokaż klucz",
  "settings.api.hide": "Ukryj klucz",
  "settings.api.remove": "Usuń klucz",

  "exercises.squat.name": "Przysiad",
  "exercises.squat.cue": "Schodź powoli, wstawaj wybuchowo",
  "exercises.squat.tip":
    "W przysiadzie nie odrywaj pięt i trzymaj klatkę wysoko.",
  "exercises.plank.name": "Deska",
  "exercises.plank.cue": "Trzymaj miednicę, nie wyginaj pleców",
  "exercises.plank.tip":
    "W desce napnij pośladki – odciąży to odcinek lędźwiowy.",
  "exercises.pushup.name": "Pompki",
  "exercises.pushup.cue": "Łokcie pod kątem 45°",
  "exercises.pushup.tip":
    "W pompce ciało to prosta linia, nie opadaj w lędźwiach.",
  "exercises.jumpingJacks.name": "Pajacyki",
  "exercises.jumpingJacks.cue": "Miękkie lądowanie na palcach",
  "exercises.jumpingJacks.tip":
    "Pajacyki: ląduj miękko na palcach, kolana zawsze ugięte.",
  "exercises.lunges.name": "Wykroki",
  "exercises.lunges.cue": "Kolano nie wychodzi za palce",
  "exercises.lunges.tip":
    "W wykrokach kolano tylnej nogi opuszczaj prawie do podłogi.",
  "exercises.highKnees.name": "Wysokie kolana",
  "exercises.highKnees.cue": "Kolana do klatki, trzymaj rytm",
  "exercises.highKnees.tip":
    "Wysokie kolana: rytm jak w biegu, tułów stabilny.",
  "exercises.crunch.name": "Brzuszki",
  "exercises.crunch.cue": "Unoś się mięśniami brzucha, nie szyją",
  "exercises.crunch.tip":
    "Brzuszki: unoś się na wydechu, nie ciągnij szyi rękami.",
  "exercises.gluteBridge.name": "Mostek",
  "exercises.gluteBridge.cue": "Wypychaj miednicę do sufitu",
  "exercises.gluteBridge.tip":
    "W mostku dociskaj pięty do podłogi.",
  "exercises.burpee.name": "Burpee",
  "exercises.burpee.cue": "Jeden ruch – jedna sekunda",
  "exercises.burpee.tip":
    "Burpee: oddychaj rytmicznie, nie wstrzymuj oddechu.",
  "exercises.plankJacks.name": "Deska z podskokami",
  "exercises.plankJacks.cue": "Przedramiona stabilnie, równe tempo",
  "exercises.plankJacks.tip":
    "Trzymaj miednicę na wysokości barków, nie unoś jej.",
  "exercises.legRaises.name": "Unoszenie nóg",
  "exercises.legRaises.cue": "Nie odrywaj lędźwi",
  "exercises.legRaises.tip": "Kontroluj opuszczanie – dwie sekundy w dół.",
  "exercises.jumpSquat.name": "Przysiad ze skokiem",
  "exercises.jumpSquat.cue": "Wybuch w górze",
  "exercises.jumpSquat.tip":
    "Wybuch w górze, ale zawsze miękkie lądowanie.",
  "exercises.superman.name": "Superman",
  "exercises.superman.cue": "Unieś ręce i nogi jednocześnie",
  "exercises.superman.tip":
    "Unieś płynnie bez szarpnięć, zatrzymaj na sekundę w górze.",
  "exercises.mountainClimber.name": "Wspinacz",
  "exercises.mountainClimber.cue": "Kolana na zmianę do klatki",
  "exercises.mountainClimber.tip":
    "Wspinacz: nie skacz szeroko, kolana blisko środka.",
  "exercises.tPushup.name": "Pompka T",
  "exercises.tPushup.cue": "Obrót w górze",
  "exercises.tPushup.tip":
    "Obrót kontrolowany, nie kręć się z bezwładności.",

  "prompt.title": "🎯 Twój trening — poziom „{level}”.",
  "prompt.warmup": "🟢 Rozgrzewka. {text}",
  "prompt.complex": "📋 Obwód: {names}.",
  "prompt.technique": "💡 Technika: {tip}",
  "prompt.loadMixed":
    "📊 Obciążenie: łącznie {reps} powtórzeń + {seconds} sekund ćwiczeń statycznych.",
  "prompt.loadReps": "📊 Obciążenie: łącznie {reps} powtórzeń.",
  "prompt.loadTime":
    "📊 Obciążenie: łącznie {seconds} sekund ćwiczeń statycznych.",
  "prompt.motivation": "🔥 {text}",
  "prompt.tone.encouraging":
    "Dasz radę. Najważniejsze to zacząć i nie przestawać.",
  "prompt.tone.strict":
    "Bez wymówek. Dajesz z siebie wszystko albo w ogóle nie zaczynasz.",
  "prompt.tone.calm":
    "Bez stresu. Słuchaj ciała i ruszaj się we własnym tempie.",
  "prompt.focus.technique":
    "Skup się na technice: jakość każdego powtórzenia jest ważniejsza niż liczba.",
  "prompt.focus.intensity":
    "Skup się na intensywności: ciśnij na maksa, skracaj przerwy do minimum.",
  "prompt.focus.recovery":
    "Skup się na regeneracji: między ćwiczeniami zrób 1–2 głębokie wdechy i wydechy.",
  "warmup.0":
    "Przed startem — 60 sekund lekkich podskoków w miejscu, żeby podnieść tętno.",
  "warmup.1":
    "Rozgrzewka: 5 krążeń ramion w przód i w tył, 10 skłonów tułowia.",
  "warmup.2":
    "Rozgrzej stawy: kolana na zmianę do klatki, potem 10 wymachów nóg na stronę.",
  "pacing.beginner":
    "Tempo spokojne. Teraz liczy się czysta technika, nie szybkość. Rób 30–40 sekund przerwy między ćwiczeniami.",
  "pacing.intermediate":
    "Utrzymuj równe tempo z 20–30 sekundami przerwy między ćwiczeniami. Nie spiesz się w pierwszym, zachowaj siły na finisz.",
  "pacing.pro":
    "Tryb wysokiej intensywności: przerwa nie dłuższa niż 15 sekund między ćwiczeniami. Możesz przejść obwód 2–3 razy.",
  "motivation.0":
    "Zrobiłeś już najważniejsze — zacząłeś. Dalej będzie łatwiej.",
  "motivation.1":
    "Każde powtórzenie przybliża cię do lepszej formy. Nie odpuszczaj na ostatnim ćwiczeniu.",
  "motivation.2": "Pięć minut dzisiaj to więcej niż zero. Jedziemy.",
  "motivation.3":
    "Twoje ciało potrafi więcej, niż myśli głowa. Uwierz w siebie.",
  "motivation.4":
    "Skończ obwód — zasłużyłeś na szacunek. A potem może jeszcze jedna runda.",
};

export const translations: Record<Lang, Dictionary> = { uk, en, es, de, pl };

export const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: "uk", label: "Українська", short: "UK" },
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "pl", label: "Polski", short: "PL" },
];
