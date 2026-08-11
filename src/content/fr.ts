import { StorageCategory, FacilityArea, GalleryItem, AdvantageGroup, TourChapter } from '../types';

export const contentFR = {
  header: {
    brandName: "Promotion Crinab",
    tagline: "Entreposage Frigorifique & Logistique Industrielle — Rabat",
    taglineShort: "Entreposage Frigorifique",
    nav: {
      hero: "Accueil",
      solutions: "Solutions de Stockage",
      facility: "Nos Installations",
      virtualTour: "Visite Virtuelle",
      gallery: "Galerie Photos",
      advantages: "Pourquoi Nous",
      contact: "Devis & Contact"
    },
    ctaButton: "Demander un Devis",
    phoneDisplay: "+212 661-536504",
    phoneHref: "tel:+212661536504",
    whatsappHref: "https://wa.me/212661536504",
    addressShort: "Lot 54, TouchMark, Rabat, Maroc",
  },
  hero: {
    titleLine1: "Stockez avec précision.",
    titleLine2: "Grandissez sans limite.",
    subheadline: "Stockage frigorifique et industriel à température contrôlée à Rabat, pour les professionnels de l'agroalimentaire et de la distribution.",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Nous contacter",
    trustLine: "Professionnalisme d'exception • Sécurité 24/7 • Rigueur sanitaire • Capacité modulable sur mesure",
    tempReadoutLabel: "Température contrôlée :",
    targetTempPositive: "+2°C",
    targetTempNegative: "-20°C",
    shutterPrompt: "Glisser vers le haut ou cliquer pour ouvrir les portes",
  },
  solutions: {
    sectionTitle: "Solutions d'Entreposage Sur Mesure",
    sectionSubtitle: "3 environnements thermiques adaptés aux exigences strictes de la chaîne du froid et du stockage professionnel.",
    acceptedProductsLabel: "Exemples de produits admis :",
    tempRangeLabel: "Plage :",
    requestQuoteForCategory: "Demander un devis pour",
    mostPopularLabel: "Le plus demandé",
    activeViewLabel: "Vue active",
    categories: [
      {
        id: "positive",
        title: "Froid Positif (+2°C à +8°C)",
        subtitle: "Conservation optimale des denrées fraîches et produits périssables",
        tempRange: "+2°C / +8°C",
        badgeText: "Température Dirigée",
        description: "Chambres froides positives à hygrométrie régulée, idéales pour préserver la fraîcheur, la texture et les qualités nutritionnelles de vos marchandises à rotation rapide.",
        items: [
          "Produits laitiers et dérivés",
          "Fruits & légumes frais",
          "Plats préparés et traiteur",
          "Boissons et jus naturels",
          "Produits frais emballés"
        ],
        specs: [
          { label: "Régulation", value: "Régulation automatique de température" },
          { label: "Gestion Hygro", value: "Environnement à hygrométrie contrôlée" },
          { label: "Traçabilité", value: "Suivi et surveillance en continu" }
        ],
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "negative",
        title: "Froid Négatif (-18°C à -25°C)",
        subtitle: "Congélation et surgélation industrielle sécurisée",
        tempRange: "-18°C / -25°C",
        badgeText: "Grand Froid",
        description: "Volume de stockage négatif hautement performant doté d'équipements frigorifiques industriels de pointe. Garantie d'une chaîne du froid sans rupture.",
        items: [
          "Volailles et viandes découpées",
          "Produits de la mer et poissons",
          "Produits surgelés et glaces",
          "Ingrédients et pâtes congelées",
          "Stocks stratégiques de réserve"
        ],
        specs: [
          { label: "Capacité Froid", value: "Groupes de secours dédoublés" },
          { label: "Dégivrage", value: "Automatique intelligent" },
          { label: "Isolation", value: "Panneaux isolants haute performance" }
        ],
        imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "general",
        title: "Stockage Général & Sec",
        subtitle: "Logistique des consommables, emballages et matières premières",
        tempRange: "+15°C / +25°C",
        badgeText: "Stockage Sec",
        description: "Halles d'entreposage propres, ventilées et parfaitement étanches dédiées aux fournitures professionnelles, consommables et matières non périssables.",
        items: [
          "Emballages et cartons industriels",
          "Barquettes alimentaires et films",
          "Sacs et contenants logistiques",
          "Fournitures et consommables B2B",
          "Matières premières conditionnées"
        ],
        specs: [
          { label: "Protection", value: "Anti-poussière & anti-nuisibles" },
          { label: "Hauteur sous plafond", value: "Hauteur libre adaptée au stockage" },
          { label: "Sol", value: "Dalle béton haute résistance" }
        ],
        imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200"
      }
    ] as StorageCategory[]
  },
  facilityPresentation: {
    badge: "Infrastructures 5 000 m²", /* PLACEHOLDER — awaiting client confirmation of actual facility size */
    sectionTitle: "Infrastructures & 11 Zones Opérationnelles",
    sectionSubtitle: "Visite guidée interactive de nos 11 zones opérationnelles conçues pour la fluidité, la propreté et la sécurité industrielle.",
    certifiedLabel: "11 Zones Opérationnelles Sécurisées",
    allZonesLabel: "Toutes les 11 zones",
    zoneProgressLabel: "Zone",
    ofLabel: "sur",
    tourTitle: "Visite Guidée du Complexe Logistique",
    prevZone: "Zone précédente",
    nextZone: "Zone suivante",
    viewDetails: "Fiche détaillée & spécifications",
    specsTitle: "Spécifications techniques & Équipements :",
    closeLabel: "Fermer",
    areas: [
      {
        id: "entrance",
        title: "Portail & Entrée Sécurisée",
        category: "Accès & Sécurité",
        shortDesc: "Poste de contrôle d'accès avec barrières et filtrage des véhicules.",
        fullDesc: "L'accès au site de Promotion Crinab est rigoureusement filtré dès l'entrée. Un poste d'accueil gardienné contrôle chaque mouvement de camion et véhicule utilitaire.",
        specs: ["Poste de gardiennage", "Contrôle des accès", "Accès poids lourds"],
        imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "reception",
        title: "Accueil Logistique & Bureaux",
        category: "Administration",
        shortDesc: "Guichet administratif dédié au traitement rapide des bons de livraison et formalités d'entrée/sortie.",
        fullDesc: "Un espace moderne d'accueil permet aux chauffeurs et coordinateurs logistiques de valider les documents de transport sans perte de temps.",
        specs: ["Accueil chauffeurs", "Enregistrement des bons", "Gestion des flux"],
        imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "positive_rooms",
        title: "Chambres Froides Positives",
        category: "Froid Positif",
        shortDesc: "Volumes volumineux compartimentés pour la conservation contrôlée entre +2°C et +8°C.",
        fullDesc: "Équipées de racks industriels réglables, nos chambres positives garantissent une circulation d'air homogène.",
        specs: ["Régulation de température", "Éclairage adapté", "Sol haute résistance"],
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "negative_rooms",
        title: "Chambres Froides Négatives",
        category: "Grand Froid",
        shortDesc: "Enceintes frigorifiques grand volume maintenues en température négative pour surgelés.",
        fullDesc: "Portes isothermes à fermeture hermétique pour maintenir une étanchéité thermique optimale.",
        specs: ["Température négative contrôlée", "Portes isothermes", "Dispositifs de sécurité"],
        imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "storage_areas",
        title: "Aires de Stockage Général",
        category: "Stockage Sec",
        shortDesc: "Halles spacieuses pour palettes de marchandises, conditionnements et matériel.",
        fullDesc: "Allées de circulation permettant le déplacement fluide des engins de manutention en toute sécurité.",
        specs: ["Aire de stockage aménagée", "Allées de circulation", "Stockage palettes"],
        imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "corridors",
        title: "Couloirs de Circulation Isothermes",
        category: "Fluidité",
        shortDesc: "Sass thermiques de liaison préservant la chaîne du froid entre les zones.",
        fullDesc: "Les couloirs de transit évitent les chocs thermiques lors des manutentions et préservent la température de consigne.",
        specs: ["Sas thermiques de transit", "Protection contre les chocs", "Circulation fluide"],
        imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "loading",
        title: "Quais de Chargement & Déchargement",
        category: "Logistique",
        shortDesc: "Quais aménagés adaptés aux camions porteurs et semi-remorques frigorifiques.",
        fullDesc: "Nos quais permettent d'effectuer les opérations d'embarquement et de débarquement à l'abri des variations thermiques.",
        specs: ["Quais d'embarquement", "Niveleurs hydrauliques", "Sas d'étanchéité"],
        imageUrl: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "equipment",
        title: "Centrale Frigorifique & Équipements",
        category: "Ingénierie",
        shortDesc: "Installations frigorifiques industrielles assurant la production de froid en continu.",
        fullDesc: "Centrale technique régulièrement entretenue avec alimentation de secours pour prévenir toute interruption d'activité.",
        specs: ["Centrale frigorifique", "Alimentation de secours", "Maintenance continue"],
        imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "safety",
        title: "Dispositifs de Sécurité & Incendie",
        category: "Protection",
        shortDesc: "Systèmes de surveillance du site et équipements de protection incendie.",
        fullDesc: "Dispositifs de protection globale couvrant l'ensemble du complexe pour la sécurité des biens et des personnes.",
        specs: ["Vidéosurveillance de la zone", "Détection incendie", "Équipements de sécurité"],
        imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "access",
        title: "Zones d'Accès & Manœuvre",
        category: "Voirie",
        shortDesc: "Cour d'inversion aménagée facilitant les manœuvres des ensembles routiers.",
        fullDesc: "Aire de circulation conçue pour éviter les encombrements et fluidifier les rotations quotidiennes de livraison.",
        specs: ["Cour de manœuvre", "Espace d'attente", "Éclairage de zone"],
        imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "other_spaces",
        title: "Autres Espaces Disponibles & Extension",
        category: "Espaces Modulables",
        shortDesc: "Aires polyvalentes aménagables pour préparation de commandes, conditionnement ou stockage temporaire.",
        fullDesc: "Espaces supplémentaires modulables adaptables selon vos besoins spécifiques (préparation de lots, reconditionnement ou zones tampons).",
        specs: ["Espaces modulables", "Accès engins de manutention", "Zone aménageable"],
        imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
      }
    ] as FacilityArea[]
  },
  facilityVideo: {
    sectionTitle: "Visite Virtuelle Guidée",
    sectionSubtitle: "Découvrez l'ensemble de nos infrastructures en une visite vidéo guidée : de l'accès extérieur aux chambres froides et quais de chargement.",
    chapterSelectorTitle: "Chapitres de la visite vidéo :",
    chapters: [
      {
        id: "ch-exterior",
        title: "1. Façade & Extérieurs",
        timestamp: "0:00",
        description: "Aperçu général du bâtiment et des voies d'accès extérieures de la plateforme logistique.",
        posterUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-entrance",
        title: "2. Entrée & Accueil Logistique",
        timestamp: "0:45",
        description: "Poste de contrôle d'accès sécurisé et bureaux administratifs pour le traitement des lettres de voiture.",
        posterUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-storage",
        title: "3. Zones de Stockage Général",
        timestamp: "1:30",
        description: "Aires de stockage sec, allées de rackage et circulation sécurisée des engins de manutention.",
        posterUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-positive",
        title: "4. Chambres Froides Positives",
        timestamp: "2:15",
        description: "Volumes réfrigérés sous température dirigée (+2°C à +8°C) équipés de racks industriels.",
        posterUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-negative",
        title: "5. Chambres Froides Négatives",
        timestamp: "3:00",
        description: "Chambres de congélation pour produits surgelés avec portes isothermes rapides.",
        posterUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-equipment",
        title: "6. Centrale Frigorifique",
        timestamp: "3:45",
        description: "Centrale technique de froid et groupes compresseurs industriels régulièrement entretenus.",
        posterUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-loading",
        title: "7. Quais de Chargement",
        timestamp: "4:30",
        description: "Quais de chargement/déchargement équipés de niveleurs hydrauliques et sas d'étanchéité.",
        posterUrl: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-access",
        title: "8. Voirie & Accès Poids Lourds",
        timestamp: "5:15",
        description: "Cour de manœuvre spacieuse facilitant la rotation et l'attente des semi-remorques.",
        posterUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200"
      }
    ] as TourChapter[],
    modalPlayTitle: "Vidéo De Présentation — Promotion Crinab",
    modalPlaySubtitle: "Visite guidée intégrale des installations frigorifiques et logistiques."
  },
  gallery: {
    sectionTitle: "Découvrez nos Installations",
    sectionSubtitle: "Galerie photographique haute définition de notre parc d'entreposage frigorifique à Rabat.",
    categories: [
      { id: "all", label: "Toutes les photos" },
      { id: "cold_rooms", label: "Chambres Froides" },
      { id: "storage_areas", label: "Aires de Stockage" },
      { id: "equipment", label: "Équipements Frigorifiques" },
      { id: "facility", label: "Bâtiment & Extérieurs" },
      { id: "access", label: "Sécurité & Accès" },
      { id: "loading", label: "Quais de Chargement" }
    ],
    items: [
      {
        id: "g1",
        title: "Allée de Stockage Positif Racks Lourd",
        category: "cold_rooms",
        categoryLabel: "Chambres Froides",
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
        caption: "Organisation méthodique sur racks de stockage avec repérage clair des allées.",
        specs: "Température : +2°C à +8°C"
      },
      {
        id: "g2",
        title: "Stockage Grand Froid Surgelés",
        category: "cold_rooms",
        categoryLabel: "Chambres Froides",
        imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1000",
        caption: "Chambre négative pour palettes de volailles et viandes congelées.",
        specs: "Température : -18°C à -25°C"
      },
      {
        id: "g3",
        title: "Halle de Stockage Consommables & Emballages",
        category: "storage_areas",
        categoryLabel: "Aires de Stockage",
        imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000",
        caption: "Zone propre et ventilée pour emballages, cartons et barquettes alimentaires.",
        specs: "Espace sec contrôlé"
      },
      {
        id: "g4",
        title: "Centrale Frigorifique Industrielle",
        category: "equipment",
        categoryLabel: "Équipements Frigorifiques",
        imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000",
        caption: "Groupe de compresseurs haute performance à régulation électronique continue.",
        specs: "Groupes compresseurs industriels"
      },
      {
        id: "g5",
        title: "Quai Hydraulique de Chargement Camion",
        category: "loading",
        categoryLabel: "Quais de Chargement",
        imageUrl: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=1000",
        caption: "Niveleurs de quai et sas d'étanchéité pour camions frigorifiques.",
        specs: "Sas d'étanchéité pour camion"
      },
      {
        id: "g6",
        title: "Façade Moderne du Complexe Logistique",
        category: "facility",
        categoryLabel: "Bâtiment & Extérieurs",
        imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000",
        caption: "Bâtiment industriel isolé haute densité situé à Lot 54, TouchMark, Rabat.",
        specs: "Surface totale : 5 000 m²" /* PLACEHOLDER — awaiting client confirmation of actual facility size */
      },
      {
        id: "g7",
        title: "Contrôle d'Accès Sécurisé & Portail",
        category: "access",
        categoryLabel: "Sécurité & Accès",
        imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000",
        caption: "Poste de gardiennage 24/7 avec contrôle d'accès au site.",
        specs: "Poste de gardiennage"
      },
      {
        id: "g8",
        title: "Zone de Manœuvre & Cour Poids Lourds",
        category: "loading",
        categoryLabel: "Quais de Chargement",
        imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000",
        caption: "Cour bétonnée spacieuse permettant la manœuvre simultanée des semi-remorques.",
        specs: "Accès & Cour Poids Lourds"
      }
    ] as GalleryItem[]
  },
  whyChooseUs: {
    sectionTitle: "Pourquoi Choisir Promotion Crinab",
    sectionSubtitle: "Une plateforme logistique conçue pour garantir la conformité thermique, la sécurité de vos marchandises et une agilité commerciale totale.",
    statsLabel: "Indicateurs Clés de la Plateforme",
    stats: [
      { value: "5 000 m²", /* PLACEHOLDER — awaiting client confirmation of actual facility size */ label: "Surface Totale du Complexe", sublabel: "Chambres froides & halls de stockage" },
      { value: "3", label: "Environnements Thermiques", sublabel: "Froid positif, négatif & stockage sec" },
      { value: "11", label: "Zones Opérationnelles", sublabel: "Parcours logistique sécurisé" },
      { value: "24/7", label: "Sécurité & Présence sur Site", sublabel: "Surveillance et gardiennage continu" }
    ],
    clusters: [
      {
        clusterTitle: "1. Maîtrise Thermique, Sécurité & Rigueur Sanitaire",
        clusterSubtitle: "Normes internationales et surveillance constante pour la protection intégrale de vos produits.",
        items: [
          {
            title: "Professionnalisme d'Exception & Suivi 24/7",
            description: "Accompagnement rigoureux et suivi sur mesure par nos équipes d'experts de la chaîne du froid. Relevés de température en continu et suivi rigoureux garantissant la traçabilité de vos produits.",
            iconName: "ThermometerCheck",
            metric: "Professionnalisme d'exception"
          },
          {
            title: "Hygiène & Sécurité Sanitaire",
            description: "Plan de maîtrise sanitaire strict, nettoyage et désinfection quotidiens, traitement anti-nuisibles et protocoles d'hygiène rigoureux adaptés aux exigences agroalimentaires.",
            iconName: "ShieldCheck",
            metric: "Conformité sanitaire rigoureuse"
          },
          {
            title: "Sécurité du Site 24/7 & Redondance Électrique",
            description: "Gardiennage sur site 24h/24, vidéosurveillance, contrôle d'accès et groupe électrogène de secours assurant la continuité du froid.",
            iconName: "Zap",
            metric: "Sécurité 24/7 & Groupe Électrogène"
          }
        ]
      },
      {
        clusterTitle: "2. Flexibilité Réactive, Emplacement & Accessibilité",
        clusterSubtitle: "Une organisation sur mesure pensée pour fluidifier vos rotations et accompagner votre croissance.",
        items: [
          {
            title: "Capacité Modulable Sur Mesure",
            description: "De la réservation de quelques emplacements palettes jusqu'à la privatisation d'une chambre entière. Formules de location adaptables à votre saisonnalité (courte, moyenne ou longue durée).",
            iconName: "Layers",
            metric: "Capacité modulable sur mesure"
          },
          {
            title: "Emplacement Stratégique à Rabat",
            description: "Ancré au cœur du parc industriel Lot 54, TouchMark à Rabat, à proximité immédiate des grands axes autoroutiers, de la capitale et des axes de distribution vers tout le Maroc.",
            iconName: "MapPin",
            metric: "Proximité Axes Autoroutiers"
          },
          {
            title: "Quais de Chargement & Fluidité des Rotations",
            description: "Quais hydrauliques et sas d'étanchéité préservant la chaîne du froid et optimisant la rotation des camions. Équipes de manutention disponibles pour un chargement/déchargement fluide.",
            iconName: "Truck",
            metric: "Temps d'attente quai minimal"
          }
        ]
      }
    ] as AdvantageGroup[]
  },
  contact: {
    sectionTitle: "Demande de Devis & Contact",
    sectionSubtitle: "Calculez vos besoins en direct et obtenez une proposition commerciale personnalisée dans les plus brefs délais.",
    infoBoxTitle: "Informations Directes",
    companyFullName: "Promotion Crinab S.A.R.L.",
    addressLine1: "Lot 54, TouchMark",
    addressLine2: "Rabat, Maroc",
    phonePrimary: "+212 661-536504",
    phoneSecondary: "",
    whatsappNumber: "212661536504",
    emailPrimary: "nisrinecm@gmail.com",
    hoursWeekday: "Horaires d'ouverture : Sur demande / À confirmer",
    hoursSaturday: "Accès & Réception : Sur rendez-vous",
    hoursSunday: "Dimanche : Sur rendez-vous",
    whatsappCta: "Discussion WhatsApp Directe",
    formTitle: "Formulaire de Cotation d'Entreposage",
    formSubtitle: "Remplissez les détails de vos marchandises pour mettre à jour l'estimation récapitulative en direct.",
    fields: {
      companyName: "Nom de l'Entreprise / Société",
      contactName: "Nom et Prénom du Responsable",
      phone: "Numéro de Téléphone (Mobile / Fixe)",
      email: "Adresse E-mail Professionnelle",
      productType: "Type de Marchandise / Produit",
      productTypePlaceholder: "Ex: Produits laitiers, Volailles surgelées, Cartons d'emballage...",
      storageType: "Option de Température Réquis",
      volumeNum: "Volume / Quantité Estimée",
      volumeUnit: "Unité de Mesure",
      durationMonths: "Durée de Stockage Estimée (Mois)",
      startDate: "Date de Début Souhaitée",
      additionalNotes: "Précisions ou Besoins Particuliers"
    },
    options: {
      durationUnit: "Mois",
      durationOptions: [
        { value: 1, label: "1 Mois (Court terme)" },
        { value: 3, label: "3 Mois (Saisonnier)" },
        { value: 6, label: "6 Mois (Moyen terme)" },
        { value: 12, label: "12 Mois (Contrat Annuel)" }
      ],
      storageTypes: [
        { value: "positive", label: "Froid Positif (+2°C / +8°C)" },
        { value: "negative", label: "Froid Négatif (-18°C / -25°C)" },
        { value: "general", label: "Stockage Sec / Ambiant" }
      ],
      volumeUnits: [
        { value: "pallets", label: "Emplacements Palettes (EUR/VMF)" },
        { value: "m3", label: "Mètres Cubes (m³)" },
        { value: "tons", label: "Tonnes" }
      ]
    },
    summaryPanel: {
      title: "Récapitulatif de la Demande",
      subtitle: "Mise à jour dynamique en temps réel",
      selectedTypeLabel: "Régime thermique :",
      estimatedVolumeLabel: "Volume estimé :",
      durationLabel: "Durée engagée :",
      serviceIncludedLabel: "Détails de l'offre :",
      includedFeatures: [
        "Prestations, garanties et conditions de stockage à définir avec notre équipe commercial lors de votre cotation."
      ],
      submitButton: "Envoyer ma Demande de Devis",
      submitSuccess: "Votre demande a été transmise avec succès ! Notre équipe commerciale vous recontactera sous 24h.",
      requiredDisclaimer: "*Champs obligatoires. Données traitées confidentiellement."
    },
    mapTitle: "Localisation à Rabat"
  },
  footer: {
    tagline: "Promotion Crinab — Prestataire indépendant spécialisé dans l'entreposage frigorifique sous température dirigée et la logistique industrielle à Rabat.",
    quickLinksTitle: "Navigation Rapide",
    legalTitle: "Engagements & Informations",
    legalList: [
      "Suivi & Sécurité Sanitaire",
      "Maintien de la Chaîne du Froid",
      "Protection & Gardiennage du site",
      "Mentions Légales & Confidentialité"
    ],
    copyright: "© 2026 Promotion Crinab. Tous droits réservés. Rabat, Maroc."
  }
};

export type ContentFR = typeof contentFR;
