// Configuración centralizada de proyectos paisajísticos
import { LandscapeProject } from './types';

export { type LandscapeProject } from './types';

export const landscapeProjects: LandscapeProject[] = [
  { 
    id: 1, 
    filename: 'image-landscape-project-01.jpg', 
    title: 'Cubierta verde · Residencia Sanitas Consell de Cent', 
    description: 'Cubierta vegetal como espacio de bienestar y refugio biofílico en altura.',
    location: 'Barcelona, España',
    year: '2026',
    area: '168 m²',
    category: 'Proyecto conceptual',
    // medium: 'Paisajismo',
    features: [
      'Cubierta vegetal semi-intensiva adaptada al clima mediterráneo',
      'Jardín elevado como sistema de confort térmico y ambiental',
      'Vegetación de bajo consumo hídrico y mantenimiento reducido',
      'Recorrido accesible y continuo para personas mayores',
      'Espacios de sombra, estancia y contemplación orientados al bienestar'
    ],
    additionalInfo: 'Este proyecto plantea la transformación de una azotea dura e infrautilizada en un oasis vegetal elevado, concebido como un jardín mediterráneo adaptado al clima de Barcelona. La intervención busca mejorar el confort térmico, visual y emocional del espacio, integrando vegetación, recorridos accesibles y zonas de descanso orientadas al bienestar de los usuarios de la residencia. ',
    detailImages: [
      { filename: 'image-landscape-project-2.jpg', caption: 'Vista aérea. Estado previo de la cubierta y relación con el entorno urbano.' },
      { filename: 'image-landscape-project-4.jpg', caption: 'Azotea existente, sin un sistema vegetal integrado ni espacios de estancia definidos.' },
      { filename: 'image-landscape-project-6.jpg', caption: 'Misma azotea pero con una sombra de vela para verano.' }
    ],
    featureImage: { 
      filename: 'image-landscape-project-3.jpg', 
      caption: 'Superficie dura y fragmentada antes de la intervención.' 
    },
    planImage: { 
      filename: 'image-landscape-project-5.jpg', 
      caption: 'Planta general del proyecto · Distribución y zonificación' 
    },
    strategy: {
      title: 'Estrategia de intervención',
      description: 'La propuesta organiza la cubierta mediante un sistema continuo de vegetación, recorridos accesibles y áreas de estancia. La plantación se concibe como una capa climática activa, capaz de mitigar el calor, retener agua y generar una experiencia sensorial ligada al paisaje mediterráneo.',
      planCaption: 'Planta general del proyecto · Distribución y zonificación'
    },
    authorNote: 'Este proyecto supone un primer acercamiento a la arquitectura del paisaje como herramienta para humanizar espacios urbanos y mejorar la calidad de vida a través del diseño vegetal.',
    plantsAndTextures: [
      { filename: 'plant-salvia-rosmarinus.jpg', name: 'SALVIA ROSMARINUS' },
      { filename: 'plant-lavandula-spica.jpg', name: 'LAVANDULA SPICA' },
      { filename: 'plant-thymus-vulgaris.jpg', name: 'THYMUS VULGARIS' },
      { filename: 'plant-gaura-lindheimeri.jpg', name: 'GAURA LINDHEIMERI' },
      { filename: 'plant-salvia-nemorosa.jpg', name: 'SALVIA NEMOROSA' },
      { filename: 'plant-verbena-bonariensis.jpg', name: 'VERBENA BONARIENSIS' },
      { filename: 'plant-pittosporum-tobira.jpg', name: 'PITTOSPORUM TOBIRA' },
      { filename: 'plant-pistacia-lentiscus.jpg', name: 'PISTACIA LENTISCUS' },
      { filename: 'plant-myrtus-communis.jpg', name: 'MYRTUS COMMUNIS' },
      { filename: 'plant-pennisetum-setaceum.jpg', name: 'PENNISETUM SETACEUM' },
      { filename: 'texture-pavimento-ceramico.jpg', name: 'PAVIMENTO CERÁMICO ECO KLINKER' }
    ]
  },
  { 
    id: 2, 
    filename: 'image-landscape-02.jpg', 
    title: 'Passatge Valeri Serra · Paisajismo de paso', 
    description: 'Una intervención paisajística mínima que cualifica un pasaje urbano silencioso, transformando el tránsito cotidiano en una experiencia más sensible y amable sin convertirlo en lugar de estancia.',
    location: 'Barcelona',
    year: '2026',
    area: '589 m²',
    distance: '237m',
    category: 'Proyecto conceptual',
    features: [
      'Paisajismo ligero y reversible: jardineras con banco y macetas en los bordes del pasaje',
      'Paso prioritario: corredor central libre para tránsito puntual de servicio',
      'Vegetación mediterránea: especies resistentes, de bajo mantenimiento y valor estacional',
      'Viabilidad urbana: reorganización compatible con los accesos existentes al aparcamiento'
    ],
    additionalInfo: [
      'El proyecto propone una renaturalización ligera y reversible del Passatge de Valeri Serra, reforzando su condición de espacio tranquilo y de paso mediante jardineras con banco y macetas de vegetación mediterránea dispuestas en los laterales del recorrido.',
      'La intervención no busca activar ni transformar el pasaje en un lugar de estancia, sino cualificar el tránsito cotidiano introduciendo pequeñas presencias vegetales que aportan textura, sombra y cambio estacional.',
      'Todos los elementos se sitúan junto a las fachadas, manteniendo libre un corredor central continuo que permite el paso puntual de vehículos de servicio o emergencia, sin perder la prioridad peatonal.',
      'La propuesta se apoya en la reorganización de uno de los accesos del aparcamiento, poco utilizado al conducir hacia una calle ya pacificada, concentrando la salida habitual hacia una vía claramente vehicular y haciendo viable la intervención sin pérdida funcional.'
    ],
    detailImages: [
      { filename: 'image-landscape-02-1.jpg', caption: 'Vista del pasaje con la intervención paisajística' },
      { filename: 'image-landscape-02-2.jpg', caption: 'Detalle de las jardineras y vegetación mediterránea' }
    ],
    plantsAndTextures: [
      { filename: 'plant-salvia-rosmarinus.jpg', name: 'SALVIA ROSMARINUS' },
      { filename: 'plant-lavandula-spica.jpg', name: 'LAVANDULA SPICA' },
      { filename: 'plant-thymus-vulgaris.jpg', name: 'THYMUS VULGARIS' },
      { filename: 'plant-gaura-lindheimeri.jpg', name: 'GAURA LINDHEIMERI' },
      { filename: 'plant-salvia-nemorosa.jpg', name: 'SALVIA NEMOROSA' },
      { filename: 'plant-verbena-bonariensis.jpg', name: 'VERBENA BONARIENSIS' },
      { filename: 'plant-pittosporum-tobira.jpg', name: 'PITTOSPORUM TOBIRA' },
      { filename: 'plant-pistacia-lentiscus.jpg', name: 'PISTACIA LENTISCUS' },
      { filename: 'plant-myrtus-communis.jpg', name: 'MYRTUS COMMUNIS' },
      { filename: 'plant-pennisetum-setaceum.jpg', name: 'PENNISETUM SETACEUM' },
      { filename: 'texture-pavimento-ceramico.jpg', name: 'PAVIMENTO CERÁMICO ECO KLINKER' }
    ]
  }
];

