// CONTENU DE L'APP
// C'est le seul fichier à modifier pour changer les textes.
// Chaque catégorie a un titre, une icône et une ou plusieurs pages.
// Une catégorie avec une seule page ouvre directement son texte.
// Chaque retour à la ligne dans un texte crée un nouveau paragraphe.
// Icônes disponibles : courbe, graphique, personne, puzzle, portefeuille, maison, groupe, livre, etoile

const APP = {
  surtitre: "AUREP",
  titre: "Calculatrice",
  logo: "",
  mention: "",
};

const CHAPITRES = [
  { titre: "Actualisation / Capitalisation / Emprunt", icone: "courbe", pages: [
    { titre: "Actualisation / Capitalisation / Emprunt", texte: `Présentation et DER. J’interviens en qualité de conseiller en gestion de patrimoine du cabinet [nom]. Lors de notre premier rendez-vous, je vous ai remis notre document d’entrée en relation (DER), que vous avez daté et signé. Il précise nos statuts : conseiller en investissements financiers (CIF) non indépendant, adhérent d’une association agréée par l’AMF ; courtier en assurance (IAS) et courtier en opérations de banque (IOBSP), immatriculé à l’ORIAS ; titulaire de la carte T sans maniement de fonds ; compétence juridique appropriée à titre accessoire. Il indique aussi notre assurance de responsabilité civile professionnelle, le médiateur compétent et nos modes de rémunération : honoraires et, en tant que CIF non indépendant, rétrocessions sur les produits conseillés, en toute transparence.
Recueil et profil. Nous avons rempli ensemble, pour chacun de vous, un questionnaire de connaissance client et un questionnaire de profil de risque, datés et signés : situation personnelle et professionnelle, connaissances et expérience, capacité à subir des pertes, sensibilité aux risques, préférences de durabilité (ESG). J’ai vérifié votre capacité juridique à agir. Vous êtes clients non professionnels.
Lettre de mission. Elle reprend vos objectifs, le périmètre de mon intervention, nos droits et obligations, la protection de vos données (RGPD) et le traitement des réclamations. Mes honoraires : un forfait fixé dans la lettre de mission pour l’audit, puis 1 % par an des encours conseillés pour le suivi. Les rétrocessions éventuelles vous sont communiquées, avec un récapitulatif annuel des coûts.
Restitution. Je vous remettrai un rapport écrit avec une déclaration d’adéquation, présenté lors d’un rendez-vous.

Vos objectifs, classés par ordre d’importance et dans le temps : 1) maintenir votre niveau de vie de [x] € par an ; 2) [projet daté] ; 3) protéger le conjoint survivant ; 4) transmettre à vos [n] enfants, y compris [l’enfant du premier mariage].` },
  ]},
  { titre: "Assurance-Vie", icone: "personne", pages: [
    { titre: "Assurance-Vie", texte: "Contenu à venir." },
  ]},
  { titre: "Démembrement & rente", icone: "puzzle", pages: [
    { titre: "Démembrement & rente", texte: "Contenu à venir." },
  ]},
  { titre: "Fiscalité des particuliers", icone: "portefeuille", pages: [
    { titre: "Fiscalité des particuliers", texte: "Contenu à venir." },
  ]},
  { titre: "Immobilier", icone: "maison", pages: [
    { titre: "Immobilier", texte: "Contenu à venir." },
  ]},
  { titre: "Société", icone: "graphique", pages: [
    { titre: "Société", texte: "Contenu à venir." },
  ]},
  { titre: "Succession / Donation", icone: "groupe", pages: [
    { titre: "Succession / Donation", texte: "Contenu à venir." },
  ]},
];
