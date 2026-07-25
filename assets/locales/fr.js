/**
 * French translations - Français
 */
I18n.addTranslations('fr', {
    // Navigation
    nav: {
        home: 'Accueil',
        solutions: 'Solutions',
        features: 'Fonctionnalités',
        exploreSolutions: 'Explorer les solutions',
        download: 'Télécharger',
        pricing: 'Tarifs',
        infrastructure: 'Infrastructure',
        bonuses: 'Bonus',
        affiliate: 'Affiliation',
        legal: 'Mentions légales',
        getStarted: 'Commencer',
        allSolutions: '← Toutes les solutions',
        menu: 'Menu',
        guide: 'Guide'
    },

    // Hero section (index.html)
    hero: {
        badge: 'Sécurité IA',
        title: 'Sécurisez le trafic<br>de votre agent IA',
        description: 'Connectez-vous en toute sécurité aux plateformes IA via un relais chiffré. Utilisez OpenClaw, ChatGPT, Claude, DeepSeek et d\'autres services IA en toute confiance.',
        cta: 'Explorer les solutions'
    },

    // Hero section (template.html - app pages)
    appHero: {
        badge: 'Sécurité agent IA',
        description: 'Relais IA chiffré de bout en bout avancé, aucune journalisation de données et infrastructure mondiale. Conformité CNCERT/CC pour des connexions IA sécurisées.',
        viewPlans: 'Voir les offres'
    },

    // Apps/Solutions section
    apps: {
        title: 'Solutions de sécurité IA',
        description: 'Choisissez le service de relais IA qui correspond le mieux à vos besoins.',
        viewDetails: 'Voir les détails',
        cardDesc: 'Relais IA chiffré avancé avec chiffrement de bout en bout et aucune journalisation de données.',
        badgeEncrypted: 'Chiffré',
        badgeZeroLogs: 'Zéro journaux',
        badgeGlobal: 'Réseau mondial',
        statNodes: 'Nœuds',
        statPlatforms: 'Plateformes',
        statPlans: 'Offres',
        fromPrice: 'À partir de',
        bonusDaysFree: 'Jours gratuits',
        bonusHoursFree: 'Heures gratuites',
        bonusMinsFree: 'Min. gratuites'
    },

    // Features section
    features: {
        title: 'Pourquoi nous choisir',
        description: 'Sécurité agent IA de pointe pour tous nos services.',
        zeroData: {
            title: 'Zéro journalisation de données',
            description: 'Nous ne journalisons jamais les prompts ni les réponses IA. Vos sessions IA sont entièrement privées.'
        },
        encryption: {
            title: 'Chiffrement de bout en bout',
            description: 'Des protocoles de chiffrement avancés protègent vos sessions IA contre l\'interception.'
        },
        anonymous: {
            title: 'Isolation du trafic IA',
            description: 'Tunnel fractionné dédié pour le trafic IA et académique, séparant la navigation normale des communications IA.'
        },
        global: {
            title: 'Réseau mondial de relais IA',
            description: 'Des noeuds de relais IA distribués dans le monde entier pour des connexions rapides et fiables.'
        },
        multiPlatform: {
            title: 'Multi-plateforme',
            description: 'Protégez tous vos appareils avec un seul abonnement — ordinateur, mobile et plus encore.'
        },
        support: {
            title: 'Assistance 24h/24 7j/7',
            description: 'Nos experts en confidentialité sont disponibles à tout moment pour vous aider.'
        }
    },

    // Contact section
    contact: {
        title: 'Contactez-nous',
        description: 'Nous sommes là pour vous aider. Contactez notre équipe pour toute question ou assistance.',
        infoTitle: 'Coordonnées',
        formTitle: 'Envoyez-nous un message',
        email: 'E-mail',
        businessReg: 'Immatriculation commerciale',
        form: {
            name: 'Nom',
            namePlaceholder: 'Votre nom',
            email: 'E-mail',
            emailPlaceholder: 'votrenom@exemple.com',
            subject: 'Objet',
            subjectPlaceholder: 'Comment pouvons-nous vous aider ?',
            message: 'Message',
            messagePlaceholder: 'Dites-nous en plus sur votre demande...',
            submit: 'Envoyer le message'
        }
    },

    // Download section
    download: {
        title: 'Télécharger l\'application',
        description: 'Obtenez l\'application pour votre appareil. Choisissez votre plateforme ci-dessous.',
        appStores: 'INSTALLER DEPUIS L\'APP STORE (Officiel)',
        directDownload: 'Télécharger et installer manuellement (Optionnel)',
        guideHint: {
            apple: 'Besoin d\'un compte régional pour accéder à l\'App Store ?',
            android: 'Besoin d\'un compte régional pour accéder à Google Play ?',
            windows: 'Besoin d\'un compte régional pour accéder au Microsoft Store ?'
        },
        guideLink: {
            apple: 'Guide de création d\'un Apple ID international',
            android: 'Guide de création d\'un Google Account international',
            windows: 'Guide de création d\'un Microsoft Account'
        },
        popupGuide: 'Besoin d\'aide pour créer un compte ?',
        popupTitle: 'Obtenir {{app}} pour {{platform}}',
        popupSubtitle: 'Nous avons détecté que vous utilisez {{platform}}.<br>Téléchargez l\'application maintenant !',
        popupVersion: 'Version {{version}}',
        popupOrDirect: 'ou télécharger directement',
        popupBrowseAll: 'Voir toutes les plateformes',
        downloadNow: 'Télécharger maintenant',
        storeGuideHint: {
            apple: '<small>Apprenez à créer un</small><span>Apple ID</span>',
            android: '<small>Apprenez à créer un</small><span>Google Account</span>',
            windows: '<small>Apprenez à créer un</small><span>Microsoft Account</span>'
        },
        windows: {
            name: 'Windows'
        },
        android: {
            name: 'Android'
        },
        apple: {
            name: 'Apple'
        }
    },

    // Pricing section
    pricing: {
        title: 'Des tarifs simples et transparents',
        description: 'Choisissez l\'offre qui vous convient le mieux. Toutes les offres incluent un accès complet.',
        previous: 'Précédent',
        next: 'Suivant',
        featurePrivacy: 'Protection complète du trafic IA',
        featureNodes: 'Tous les nœuds de relais mondiaux',
        featureBandwidth: 'Bande passante illimitée',
        featureSupport: 'Assistance sécurité IA 24h/24 7j/7',
        days: 'Jours',
        day: 'Jour'
    },

    // Servers/Infrastructure section
    servers: {
        title: 'Réseau mondial de relais IA',
        description: 'Nœuds de relais chiffrés pour plateformes IA répartis dans le monde entier pour des performances optimales.'
    },

    // Bonuses section
    bonuses: {
        title: 'Bonus exclusifs',
        description: 'Soyez récompensé en vous inscrivant et en partageant avec vos amis.',
        daysFree: 'Jours gratuits',
        hoursFree: 'Heures gratuites',
        minutesFree: 'Minutes gratuites',
        welcomeBonus: {
            title: 'Bonus de bienvenue',
            description: 'Obtenez un accès gratuit lors de votre inscription'
        },
        referralBonus: {
            title: 'Bonus de parrainage',
            description: 'Gagnez des jours pour chaque ami que vous parrainez'
        },
        shareBonus: {
            title: 'Bonus de partage',
            description: 'Partagez sur les réseaux sociaux et soyez récompensé'
        }
    },

    // Affiliate section
    affiliate: {
        title: 'Programme d\'affiliation',
        description: 'Rejoignez notre réseau de partenaires et grandissez avec nous.',
        heroTitle: 'Gagnez à chaque parrainage',
        heroDescription: 'Transformez votre réseau en revenus. Partagez la protection de sécurité IA et soyez récompensé pour chaque parrainage réussi.',
        startingCommission: 'Commission de départ',
        commissionTiers: 'Niveaux de commission',
        payouts: 'Paiements',
        anytime: 'À tout moment',
        becomePartner: 'Devenir partenaire',
        tierBronze: 'Bronze',
        tierSilver: 'Argent',
        tierGold: 'Or',
        tierPlatinum: 'Platine',
        tierDiamond: 'Diamant',
        viewFullProgram: 'Voir le programme complet'
    },

    // Legal section
    legal: {
        title: 'Informations légales',
        description: 'La transparence est importante pour nous.',
        userAgreement: 'Conditions d\'utilisation',
        privacyPolicy: 'Politique de confidentialité'
    },

    // Footer
    footer: {
        brand: 'Root Corporation',
        brandDescription: 'Sécurité avancée des plateformes IA pour des connexions sécurisées. Approuvé par des chercheurs du monde entier.',
        solutions: 'Solutions',
        company: 'Entreprise',
        download: 'Télécharger',
        contactUs: 'Contactez-nous',
        support: 'Assistance',
        copyright: '© 2025 Root Corporation Pty Ltd. Tous droits réservés.',
        abn: 'ABN 34 686 229 532 · Australia',
        affiliate: 'Affiliation'
    },

    // Affiliate Page (affiliate.html)
    aff: {
        navHow: 'Comment ça marche',
        navCommission: 'Commission',
        navExamples: 'Exemples',
        navPayout: 'Paiement',
        navFaq: 'FAQ',
        heroBadge: 'Réseau de partenaires',
        heroTitle: 'Développez vos<br>revenus d\'affiliation',
        heroDesc: 'Rejoignez notre programme d\'affiliation multi-niveaux et gagnez des commissions sur chaque parrainage. Plus vous développez votre réseau, plus vous débloquez de niveaux de gains.',
        heroRate: '80%',
        heroRateLabel: 'Commission de départ',
        heroTiersLabel: 'Niveaux de gains',
        heroPayoutValue: 'Instantané',
        heroPayoutLabel: 'Crédit portefeuille',
        howTitle: 'Comment ça marche',
        howDesc: 'Commencez à gagner en quatre étapes simples.',
        step1Title: 'Inscrivez-vous et obtenez votre code',
        step1Desc: 'Inscrivez-vous à l\'un de nos services. Vous recevez automatiquement un code de parrainage unique de 6 caractères que vous pouvez partager avec n\'importe qui.',
        step2Title: 'Partagez et développez votre réseau',
        step2Desc: 'Partagez votre code de parrainage. Lorsque quelqu\'un s\'inscrit avec votre code, il rejoint votre réseau. Au fur et à mesure que votre réseau grandit, vous progressez dans les niveaux et débloquez des gains plus profonds.',
        step3Title: 'Gagnez des commissions multi-niveaux',
        step3Desc: 'Lorsque quelqu\'un dans votre réseau effectue un achat, vous gagnez une commission. Les niveaux supérieurs vous permettent de gagner sur plus de profondeurs dans votre réseau. Les commissions sont créditées instantanément sur votre portefeuille.',
        step4Title: 'Retirez vers votre banque',
        step4Desc: 'Peu importe le pays dans lequel vous vivez, vous pouvez retirer vos commissions sur votre compte bancaire local dans votre devise locale en un seul clic dans l\'application. Nous prenons en charge plus de 50 devises et 80 pays.',
        insightMultiLevel: '<strong>Gains multi-niveaux :</strong> Votre niveau détermine la profondeur de vos gains. Au niveau Bronze, vous gagnez sur les parrainages directs (Niveau 1). Au niveau Diamant, vous gagnez jusqu\'à 5 niveaux de profondeur. Le taux de commission pour chaque niveau est fixe — progresser dans les niveaux débloque simplement plus de niveaux de revenus passifs.',
        commissionTitle: 'Structure des commissions',
        commissionDesc: 'Taux de commission détaillés et conditions de niveau pour chaque service.',
        matrixTitle: 'Matrice des commissions',
        yourTier: 'Votre niveau',
        direct: '(Direct)',
        totalEarning: 'Total',
        reqTitle: 'Conditions par niveau',
        tier: 'Niveau',
        membersNeeded: 'Membres requis',
        orRevenueNeeded: 'OU Revenus requis',
        levelsUnlocked: 'Niveaux débloqués',
        matrixInsight: '<strong>Point clé :</strong> Le taux de commission est déterminé par le niveau (distance par rapport à vous), et non par votre rang. Votre rang détermine simplement combien de niveaux de profondeur vous pouvez gagner. Par exemple, un affilié Or gagne 15% au Niveau 1, 7% au Niveau 2 et 5% au Niveau 3.',
        firstPurchaseNote: '<strong data-live-first>80%</strong> du premier achat de votre filleul direct vous est reversé en commission. Les taux ci-dessous s’appliquent à ses achats récurrents suivants.',
        examplesTitle: 'Scénarios de gains',
        examplesDesc: 'Découvrez comment vos gains augmentent au fur et à mesure que vous développez votre réseau.',
        exBronzeScenario: 'Vous parrainez <strong>5 utilisateurs</strong> qui dépensent chacun <strong>A$100</strong> pour un abonnement mensuel.',
        exSilverScenario: 'Vos <strong>5 filleuls directs</strong> parrainent chacun <strong>3 utilisateurs supplémentaires</strong>. Chaque membre parrainé dépense <strong>A$100</strong>.',
        exGoldScenario: 'Vous avez <strong>10 filleuls directs</strong>, chacun avec <strong>3 sous-filleuls</strong>, et chacun parraine <strong>3 de plus</strong>. Chaque membre parrainé dépense <strong>A$100</strong>.',
        exPlatinumScenario: 'Vous avez <strong>25 filleuls directs</strong> avec un réseau en croissance de <strong>3 membres par niveau</strong> sur 4 niveaux. Chaque membre parrainé dépense <strong>A$100</strong>.',
        exTier: 'Niveau',
        exDiamondScenario: 'Vous avez <strong>50+ filleuls directs</strong> avec un réseau profond de 5 niveaux avec <strong>3 membres par branche</strong>. Chaque membre parrainé dépense <strong>A$100</strong>.',
        exTotal: 'Total',
        exLocked: 'verrouillé',
        scrollHint: 'Faites défiler pour voir tous les niveaux',
        payoutTitle: 'Informations de paiement',
        payoutDesc: 'Vos commissions sont déposées instantanément sur votre portefeuille intégré à l\'application. Retirez à tout moment depuis l\'application.',
        minWithdrawal: 'Retrait minimum',
        withdrawFee: 'Frais de retrait',
        payoutMethod: 'Méthode de paiement',
        payoutMethodValue: 'Virement bancaire',
        creditSpeed: 'Crédit de commission',
        creditSpeedValue: 'En temps réel',
        payoutNote: '<strong>Comment ça marche :</strong> Lorsque quelqu\'un dans votre réseau effectue un achat, votre commission est calculée et déposée sur votre portefeuille intégré en temps réel. Vous pouvez retirer votre solde à tout moment directement depuis l\'application par virement bancaire, avec prise en charge de <strong>plus de 50 devises</strong> et <strong>plus de 80 pays</strong>. Des frais de retrait fixes de <strong id="aff-withdraw-fee">A$2.00</strong> s\'appliquent par transaction, et de petits frais de conversion de devise peuvent s\'appliquer selon votre devise locale. Les utilisateurs parrainés reçoivent également un <strong>bonus gratuit de 3 jours</strong> en cadeau de bienvenue.',
        faqTitle: 'Questions fréquemment posées',
        faqDesc: 'Tout ce que vous devez savoir sur le programme d\'affiliation.',
        faq1Q: 'Comment rejoindre le programme d\'affiliation ?',
        faq1A: 'Chaque utilisateur inscrit reçoit automatiquement un code de parrainage unique. Partagez simplement votre code avec d\'autres personnes. Il n\'y a pas de processus de candidature séparé — vous êtes déjà affilié.',
        faq2Q: 'Comment les taux de commission sont-ils déterminés ?',
        faq2A: 'Les taux de commission sont fixes par niveau de gain (par exemple, 20% pour le Niveau 1, 10% pour le Niveau 2). Votre rang détermine combien de niveaux vous rapportent. Progressez dans les rangs en augmentant votre nombre de filleuls directs ou vos revenus totaux de commission — selon le seuil atteint en premier.',
        faq3Q: 'Quelle est la différence entre rang et niveau ?',
        faq3A: 'Votre rang (Bronze, Argent, Or, Platine, Diamant) reflète votre position dans le programme et est basé sur vos filleuls directs ou vos revenus. Les niveaux (N1–N5) représentent la profondeur dans votre réseau de parrainage. Un rang supérieur débloque plus de niveaux de gains. Par exemple, un affilié Or gagne des niveaux 1, 2 et 3.',
        faq4Q: 'Quand est-ce que je reçois mes commissions ?',
        faq4A: 'Les commissions sont crÃ©ditÃ©es sur votre portefeuille intÃ©grÃ© en temps rÃ©el dÃ¨s qu\'un achat dans votre rÃ©seau est effectuÃ©. Vous pouvez retirer votre solde Ã  tout moment directement depuis l’application sur votre compte bancaire via Wise, sous rÃ©serve d\'un montant minimum de retrait et de frais de traitement forfaitaires â consultez la section paiement ci-dessus pour plus de dÃ©tails.',
        faq5Q: 'Puis-je gagner sur plusieurs services/salons ?',
        faq5A: 'Oui. Votre code de parrainage fonctionne pour tous les services. Les taux de commission et les conditions de rang peuvent varier selon le service — consultez les tableaux de structure des commissions ci-dessus pour les détails de chaque service.',
        faq6Q: 'Que reçoivent les utilisateurs parrainés ?',
        faq6A: 'Les utilisateurs qui s\'inscrivent avec votre code de parrainage reçoivent un bonus gratuit de 3 jours ajouté à leur compte. Cela facilite la promotion — vos filleuls bénéficient d\'un avantage immédiat en utilisant votre code.',
        faq7Q: 'Y a-t-il une limite à mes gains ?',
        faq7A: 'Non. Il n\'y a aucun plafond de gains. Plus votre réseau grandit et plus ils effectuent d\'achats, plus vous gagnez. Au rang Diamant, vous gagnez des commissions sur 5 niveaux de profondeur sans limite supérieure.',
        ctaTitle: 'Prêt à commencer à gagner ?',
        ctaDesc: 'Téléchargez l\'application, obtenez votre code de parrainage et commencez à développer votre réseau dès aujourd\'hui.',
        qrScan: 'Scannez pour partager cette page'
    },

    // Account Setup Guides
    accountGuide: {
        title: 'Guide de création de compte',
        description: 'Créez un Apple ID, un Google Account ou un Microsoft Account international pour télécharger des applications depuis la boutique de votre plateforme préférée.',

        // Platform selector
        appleName: 'Apple ID',
        appleDesc: 'iPhone & iPad',
        androidName: 'Google Account',
        androidDesc: 'Appareils Android',
        windowsName: 'Microsoft Account',
        windowsDesc: 'PC Windows',

        // Shared region tabs
        tabAU: 'Australie',
        tabUS: 'États-Unis',
        tabHK: 'Hong Kong',

        // Apple Guide
        apple: {
            step1Title: 'Préparation',
            step2Title: 'Créer un Apple ID dans le navigateur',
            step3Title: 'Remplir l\'adresse de livraison',
            step4Title: 'Préparer votre iPhone',
            step5Title: 'Se connecter et activer',
            tip: 'Ne vous déconnectez jamais de votre Apple ID depuis les Réglages — changez de compte uniquement dans l\'App Store. Vos données iCloud resteront en sécurité.',
            us: {
                step1_1: 'Vous devez utiliser une adresse e-mail toute neuve qui n\'a jamais été utilisée avec un Apple ID. Créez un nouvel e-mail (Outlook, Hotmail, Gmail, etc. — n\'utilisez pas de fournisseurs de messagerie de régions restreintes comme QQ Mail ou 163 Mail).',
                step1_2: 'Préparez un numéro de téléphone pouvant recevoir des codes de vérification par SMS — tout numéro de téléphone non enregistré avec un Apple ID fonctionnera, quel que soit le pays/la région.',
                step1_3: 'Vous aurez besoin d\'un iPhone pour terminer l\'activation.',
                step1_4: 'Vous aurez besoin d\'une adresse américaine valide dans un État sans taxe de vente (Alaska, Montana, Oregon ou Delaware) et d\'un numéro de téléphone américain pour les étapes suivantes — visitez le générateur d\'adresses à l\'adresse https://www.meiguodizhi.com pour les générer. Si le site est indisponible, recherchez "US address generator" sur www.bing.com.',
                step2_1: 'Ouvrez un navigateur sur n\'importe quel appareil en mode navigation privée et accédez à account.apple.com/us (Google Chrome ou Edge est recommandé pour la meilleure expérience). Cliquez sur "Create Your Apple Account" en haut à droite.',
                step2_2: 'Remplissez votre prénom et votre nom (ils peuvent être quelconques).',
                step2_3: 'Sélectionnez "United States" comme pays/région.',
                step2_4: 'Entrez votre date de naissance (vous devez avoir 18 ans ou plus).',
                step2_5: 'Entrez votre nouvelle adresse e-mail — l\'e-mail ne doit jamais avoir été utilisé pour enregistrer un Apple ID. Assurez-vous qu\'il peut recevoir des codes de vérification.',
                step2_6: 'Créez un mot de passe (au moins 8 caractères, incluant des majuscules, des minuscules, des chiffres et des symboles spéciaux).',
                step2_7: 'Entrez votre numéro de téléphone — il sera utilisé pour recevoir le code de vérification par SMS. Il peut s\'agir de n\'importe quel numéro (il n\'a pas besoin d\'être un numéro américain). Ce numéro est différent de celui que vous entrerez plus tard pour l\'adresse de livraison. Cliquez sur "Continue".',
                step2_8: 'Vérifiez votre e-mail et votre numéro de téléphone avec les codes envoyés par Apple.',
                step3_1: 'Dans votre navigateur, accédez à votre compte Apple sur account.apple.com. Dans la page de gestion du compte, sélectionnez "Payment & Shipping", puis "Add Shipping Address". Remplissez l\'adresse américaine générée par le site générateur d\'adresses (comme préparé à l\'étape 1). Vous n\'avez pas besoin d\'ajouter de moyen de paiement.',
                step3_2: 'Après la soumission, l\'inscription de votre Apple ID américain sur le web est terminée.',
                step4_1: 'Sur votre iPhone, allez dans Réglages > Confidentialité et sécurité > Service de localisation et désactivez-le.',
                step4_2: 'Allez dans Réglages > Général > Langue et région — définissez la langue sur "English (US)" et la région sur "United States".',
                step4_3: 'Ouvrez l\'App Store, appuyez sur l\'icône de profil en haut à droite, faites défiler vers le bas et appuyez sur "Sign Out" pour vous déconnecter de votre Apple ID actuel dans l\'App Store uniquement (cela n\'affecte pas votre Apple ID système dans les Réglages).',
                step5_1: 'Dans l\'App Store, appuyez sur l\'icône de profil en haut à droite et connectez-vous avec votre Apple ID nouvellement enregistré. Sélectionnez n\'importe quelle application gratuite à télécharger. Un message apparaîtra indiquant "This Apple ID has not yet been used in the iTunes Store".',
                step5_2: 'Appuyez sur "Review". Sélectionnez "United States" comme région (vous devez sélectionner la bonne région), acceptez les conditions et appuyez sur "Next". Ne sélectionnez aucun moyen de paiement. Remplissez l\'adresse et le numéro de téléphone américains de l\'étape 1 — le numéro de téléphone ici doit être un numéro américain du générateur, pas votre numéro personnel.',
                step5_3: 'Appuyez sur "Next" pour terminer. Votre Apple ID américain est maintenant entièrement activé et prêt à l\'emploi.'
            },
            au: {
                step1_1: 'Vous devez utiliser une adresse e-mail toute neuve qui n\'a jamais été utilisée avec un Apple ID. Créez un nouvel e-mail (Outlook, Hotmail, Gmail, etc. — n\'utilisez pas de fournisseurs de messagerie de régions restreintes comme QQ Mail ou 163 Mail).',
                step1_2: 'Préparez un numéro de téléphone pouvant recevoir des codes de vérification par SMS — tout numéro de téléphone non enregistré avec un Apple ID fonctionnera, quel que soit le pays/la région.',
                step1_3: 'Vous aurez besoin d\'un iPhone pour terminer l\'activation.',
                step1_4: 'Vous aurez besoin d\'une adresse australienne valide et d\'un numéro de téléphone australien pour les étapes suivantes — visitez le générateur d\'adresses à l\'adresse https://www.meiguodizhi.com/au-address pour les générer. Si le site est indisponible, recherchez "Australia address generator" sur www.bing.com.',
                step2_1: 'Ouvrez un navigateur sur n\'importe quel appareil en mode navigation privée et accédez à account.apple.com/au (Google Chrome ou Edge est recommandé pour la meilleure expérience). Cliquez sur "Create Your Apple Account" en haut à droite.',
                step2_2: 'Remplissez votre prénom et votre nom (ils peuvent être quelconques).',
                step2_3: 'Sélectionnez "Australia" comme pays/région.',
                step2_4: 'Entrez votre date de naissance (vous devez avoir 18 ans ou plus).',
                step2_5: 'Entrez votre nouvelle adresse e-mail — l\'e-mail ne doit jamais avoir été utilisé pour enregistrer un Apple ID. Assurez-vous qu\'il peut recevoir des codes de vérification.',
                step2_6: 'Créez un mot de passe (au moins 8 caractères, incluant des majuscules, des minuscules, des chiffres et des symboles spéciaux).',
                step2_7: 'Entrez votre numéro de téléphone — il sera utilisé pour recevoir le code de vérification par SMS. Il peut s\'agir de n\'importe quel numéro (il n\'a pas besoin d\'être un numéro australien). Ce numéro est différent de celui que vous entrerez plus tard pour l\'adresse de livraison. Cliquez sur "Continue".',
                step2_8: 'Vérifiez votre e-mail et votre numéro de téléphone avec les codes envoyés par Apple.',
                step3_1: 'Dans votre navigateur, accédez à votre compte Apple sur account.apple.com. Dans la page de gestion du compte, sélectionnez "Payment & Shipping", puis "Add Shipping Address". Remplissez l\'adresse australienne générée par le site générateur d\'adresses (comme préparé à l\'étape 1). Vous n\'avez pas besoin d\'ajouter de moyen de paiement.',
                step3_2: 'Après la soumission, l\'inscription de votre Apple ID australien sur le web est terminée.',
                step4_1: 'Sur votre iPhone, allez dans Réglages > Confidentialité et sécurité > Service de localisation et désactivez-le.',
                step4_2: 'Allez dans Réglages > Général > Langue et région — définissez la langue sur "English (Australia)" et la région sur "Australia".',
                step4_3: 'Ouvrez l\'App Store, appuyez sur l\'icône de profil en haut à droite, faites défiler vers le bas et appuyez sur "Sign Out" pour vous déconnecter de votre Apple ID actuel dans l\'App Store uniquement (cela n\'affecte pas votre Apple ID système dans les Réglages).',
                step5_1: 'Dans l\'App Store, appuyez sur l\'icône de profil en haut à droite et connectez-vous avec votre Apple ID nouvellement enregistré. Sélectionnez n\'importe quelle application gratuite à télécharger. Un message apparaîtra indiquant "This Apple ID has not yet been used in the iTunes Store".',
                step5_2: 'Appuyez sur "Review". Sélectionnez "Australia" comme région (vous devez sélectionner la bonne région), acceptez les conditions et appuyez sur "Next". Ne sélectionnez aucun moyen de paiement. Remplissez l\'adresse et le numéro de téléphone australiens de l\'étape 1 — le numéro de téléphone ici doit être un numéro australien du générateur, pas votre numéro personnel.',
                step5_3: 'Appuyez sur "Next" pour terminer. Votre Apple ID australien est maintenant entièrement activé et prêt à l\'emploi.'
            },
            hk: {
                step1_1: 'Vous devez utiliser une adresse e-mail toute neuve qui n\'a jamais été utilisée avec un Apple ID. Créez un nouvel e-mail (Outlook, Hotmail, Gmail, etc. — n\'utilisez pas de fournisseurs de messagerie de régions restreintes comme QQ Mail ou 163 Mail).',
                step1_2: 'Préparez un numéro de téléphone pouvant recevoir des codes de vérification par SMS — tout numéro de téléphone non enregistré avec un Apple ID fonctionnera, quel que soit le pays/la région.',
                step1_3: 'Vous aurez besoin d\'un iPhone pour terminer l\'activation.',
                step1_4: 'Vous aurez besoin d\'une adresse hongkongaise valide et d\'un numéro de téléphone hongkongais pour les étapes suivantes — visitez le générateur d\'adresses à l\'adresse https://www.meiguodizhi.com/hk-address pour les générer. Si le site est indisponible, recherchez "Hong Kong address generator" sur www.bing.com.',
                step2_1: 'Ouvrez un navigateur sur n\'importe quel appareil en mode navigation privée et accédez à account.apple.com/hk (Google Chrome ou Edge est recommandé pour la meilleure expérience). Cliquez sur "\u5efa\u7acb\u4f60\u7684 Apple \u5e33\u6236" en haut à droite.',
                step2_2: 'Remplissez votre prénom et votre nom (ils peuvent être quelconques).',
                step2_3: 'Sélectionnez "\u9999\u6e2f" (Hong Kong) comme pays/région.',
                step2_4: 'Entrez votre date de naissance (vous devez avoir 18 ans ou plus).',
                step2_5: 'Entrez votre nouvelle adresse e-mail — l\'e-mail ne doit jamais avoir été utilisé pour enregistrer un Apple ID. Assurez-vous qu\'il peut recevoir des codes de vérification.',
                step2_6: 'Créez un mot de passe (au moins 8 caractères, incluant des majuscules, des minuscules, des chiffres et des symboles spéciaux).',
                step2_7: 'Entrez votre numéro de téléphone — il sera utilisé pour recevoir le code de vérification par SMS. Il peut s\'agir de n\'importe quel numéro (il n\'a pas besoin d\'être un numéro hongkongais). Ce numéro est différent de celui que vous entrerez plus tard pour l\'adresse de livraison. Cliquez sur "Continue".',
                step2_8: 'Vérifiez votre e-mail et votre numéro de téléphone avec les codes envoyés par Apple.',
                step3_1: 'Dans votre navigateur, accédez à votre compte Apple sur account.apple.com. Dans la page de gestion du compte, sélectionnez "Payment & Shipping", puis "Add Shipping Address". Remplissez l\'adresse hongkongaise générée par le site générateur d\'adresses (comme préparé à l\'étape 1). Vous n\'avez pas besoin d\'ajouter de moyen de paiement.',
                step3_2: 'Après la soumission, l\'inscription de votre Apple ID hongkongais sur le web est terminée.',
                step4_1: 'Sur votre iPhone, allez dans Réglages > Confidentialité et sécurité > Service de localisation et désactivez-le.',
                step4_2: 'Allez dans Réglages > Général > Langue et région — définissez la langue sur "\u7e41\u9ad4\u4e2d\u6587 (Traditional Chinese)" et la région sur "\u9999\u6e2f".',
                step4_3: 'Ouvrez l\'App Store, appuyez sur l\'icône de profil en haut à droite, faites défiler vers le bas et appuyez sur "Sign Out" pour vous déconnecter de votre Apple ID actuel dans l\'App Store uniquement (cela n\'affecte pas votre Apple ID système dans les Réglages).',
                step5_1: 'Dans l\'App Store, appuyez sur l\'icône de profil en haut à droite et connectez-vous avec votre Apple ID nouvellement enregistré. Sélectionnez n\'importe quelle application gratuite à télécharger. Un message apparaîtra indiquant "This Apple ID has not yet been used in the iTunes Store".',
                step5_2: 'Appuyez sur "Review". Sélectionnez "Hong Kong" comme région (vous devez sélectionner la bonne région), acceptez les conditions et appuyez sur "Next". Ne sélectionnez aucun moyen de paiement. Remplissez l\'adresse et le numéro de téléphone hongkongais de l\'étape 1 — le numéro de téléphone ici doit être un numéro hongkongais du générateur, pas votre numéro personnel.',
                step5_3: 'Appuyez sur "Next" pour terminer. Votre Apple ID hongkongais est maintenant entièrement activé et prêt à l\'emploi.'
            },
            faqTitle: 'Questions fréquemment posées',
            faq1Q: 'Puis-je utiliser mon e-mail existant pour m\'inscrire ?',
            faq1A: 'Non. Votre e-mail doit être tout neuf et n\'avoir jamais été lié à un Apple ID. Si l\'e-mail a déjà été utilisé, Apple refusera l\'inscription. Créez un nouvel e-mail Outlook, Hotmail ou Gmail. Le numéro de téléphone n\'a aucune restriction — tout numéro pouvant recevoir des SMS fonctionnera.',
            faq2Q: 'Est-ce que cela affectera mes données iCloud ?',
            faq2A: 'Non. Déconnectez-vous uniquement de l\'App Store, pas des Réglages > Apple ID. Vos données iCloud, photos, contacts et autres services resteront inchangés.',
            faq3Q: 'Puis-je basculer entre plusieurs Apple ID ?',
            faq3A: 'Oui, vous pouvez librement basculer entre votre Apple ID d\'origine et votre Apple ID régional dans l\'App Store à tout moment. Les applications téléchargées avec un identifiant resteront installées même après le changement.'
        },

        // Android Guide
        android: {
            step1Title: 'Préparation',
            step1Desc: 'Vous aurez besoin d\'un numéro de téléphone fonctionnel pour la vérification et d\'une adresse e-mail de secours (optionnel). Assurez-vous d\'avoir accès au Google Play Store sur votre appareil Android. Utilisez un navigateur ou l\'application Gmail pour créer votre nouveau compte.',
            step2Title: 'Créer un Google Account',
            au: {
                step2Desc: 'Rendez-vous sur accounts.google.com/signup dans votre navigateur. Entrez votre prénom et votre nom, choisissez un nom d\'utilisateur Gmail et définissez un mot de passe sécurisé. Lorsqu\'on vous demande votre pays, sélectionnez "Australia". Effectuez la vérification par téléphone pour finaliser la création de votre compte.'
            },
            us: {
                step2Desc: 'Rendez-vous sur accounts.google.com/signup dans votre navigateur. Entrez votre prénom et votre nom, choisissez un nom d\'utilisateur Gmail et définissez un mot de passe sécurisé. Lorsqu\'on vous demande votre pays, sélectionnez "United States". Effectuez la vérification par téléphone pour finaliser la création de votre compte.'
            },
            hk: {
                step2Desc: 'Rendez-vous sur accounts.google.com/signup dans votre navigateur. Entrez votre prénom et votre nom, choisissez un nom d\'utilisateur Gmail et définissez un mot de passe sécurisé. Lorsqu\'on vous demande votre pays, sélectionnez "Hong Kong". Effectuez la vérification par téléphone pour finaliser la création de votre compte.'
            },
            step3Title: 'Ajouter le compte à votre appareil',
            step3Desc: 'Sur votre appareil Android, allez dans Paramètres > Comptes (ou Utilisateurs et comptes). Appuyez sur "Ajouter un compte" et sélectionnez Google. Connectez-vous avec les identifiants de votre nouveau Google Account. Cela liera le compte à votre appareil et au Play Store.',
            step4Title: 'Changer de compte dans le Play Store',
            step4Desc: 'Ouvrez le Google Play Store. Appuyez sur l\'icône de votre profil en haut à droite et appuyez sur la flèche vers le bas à côté de votre nom. Sélectionnez votre nouveau Google Account dans la liste. Le Play Store se rechargera avec le contenu disponible pour ce compte.',
            step5Title: 'Télécharger votre application',
            step5Desc: 'Recherchez l\'application dans le Play Store en étant connecté avec votre nouveau compte. Appuyez sur "Install" pour télécharger. Si vous y êtes invité, acceptez les conditions d\'utilisation. L\'application sera liée à votre nouveau Google Account pour les futures mises à jour.',
            tip: 'Vous pouvez avoir plusieurs Google Account sur votre appareil Android simultanément. Basculez entre eux dans le Play Store sans supprimer aucun compte.',
            faqTitle: 'Questions fréquemment posées',
            faq1Q: 'Dois-je supprimer mon Google Account existant ?',
            faq1A: 'Non. Android prend en charge plusieurs Google Account. Vous pouvez ajouter le nouveau compte aux côtés de votre compte existant et basculer entre eux dans le Play Store.',
            faq2Q: 'Mes applications ou données existantes seront-elles affectées ?',
            faq2A: 'Non. L\'ajout d\'un nouveau Google Account n\'affecte pas vos applications, contacts, photos ou autres données existantes. Chaque compte fonctionne de manière indépendante.',
            faq3Q: 'Puis-je utiliser l\'application sans Google Account ?',
            faq3A: 'Vous pouvez installer l\'APK directement depuis la section de téléchargement sans Google Account. Cependant, utiliser le Play Store garantit les mises à jour automatiques et les installations vérifiées.'
        },

        // Windows Guide
        windows: {
            step1Title: 'Préparation',
            step1Desc: 'Vous aurez besoin d\'une adresse e-mail ou d\'un numéro de téléphone fonctionnel. Assurez-vous que votre PC Windows est connecté à Internet. Vous pouvez créer un Microsoft Account via un navigateur ou directement depuis les Paramètres Windows.',
            step2Title: 'Créer un Microsoft Account',
            au: {
                step2Desc: 'Rendez-vous sur account.microsoft.com et cliquez sur "Create a Microsoft account". Entrez votre adresse e-mail ou choisissez "Get a new email address" pour un compte Outlook. Définissez un mot de passe sécurisé. Lorsqu\'on vous demande votre pays/région, sélectionnez "Australia". Effectuez les étapes de vérification.'
            },
            us: {
                step2Desc: 'Rendez-vous sur account.microsoft.com et cliquez sur "Create a Microsoft account". Entrez votre adresse e-mail ou choisissez "Get a new email address" pour un compte Outlook. Définissez un mot de passe sécurisé. Lorsqu\'on vous demande votre pays/région, sélectionnez "United States". Effectuez les étapes de vérification.'
            },
            hk: {
                step2Desc: 'Rendez-vous sur account.microsoft.com et cliquez sur "Create a Microsoft account". Entrez votre adresse e-mail ou choisissez "Get a new email address" pour un compte Outlook. Définissez un mot de passe sécurisé. Lorsqu\'on vous demande votre pays/région, sélectionnez "Hong Kong". Effectuez les étapes de vérification.'
            },
            step3Title: 'Se connecter sur Windows',
            step3Desc: 'Sur votre PC Windows, ouvrez Paramètres > Comptes > "Courrier et comptes" et cliquez sur "Ajouter un compte Microsoft". Connectez-vous avec vos nouveaux identifiants. Vous pouvez également vous connecter directement via l\'application Microsoft Store.',
            step4Title: 'Ouvrir le Microsoft Store',
            step4Desc: 'Ouvrez le Microsoft Store depuis la barre des tâches ou le menu Démarrer. Cliquez sur l\'icône de votre profil en haut à droite et assurez-vous d\'être connecté avec votre nouveau Microsoft Account. Si vous avez plusieurs comptes, sélectionnez le bon.',
            step5Title: 'Télécharger votre application',
            step5Desc: 'Recherchez l\'application dans le Microsoft Store. Cliquez sur "Get" ou "Install" pour télécharger. S\'il s\'agit de votre premier téléchargement, vous devrez peut-être accepter les conditions d\'utilisation. L\'application sera associée à votre Microsoft Account pour les futures mises à jour.',
            tip: 'Vous pouvez également télécharger l\'application directement depuis la section de téléchargement ci-dessus sans utiliser le Microsoft Store. Le téléchargement direct fonctionne sans Microsoft Account.',
            faqTitle: 'Questions fréquemment posées',
            faq1Q: 'Ai-je besoin d\'un Microsoft Account pour utiliser l\'application ?',
            faq1A: 'Pas nécessairement. Vous pouvez télécharger l\'application directement depuis la section de téléchargement sans Microsoft Account. Un Microsoft Account n\'est nécessaire que si vous souhaitez installer depuis le Microsoft Store.',
            faq2Q: 'Puis-je utiliser mon Microsoft Account existant ?',
            faq2A: 'Oui, vous pouvez utiliser n\'importe quel Microsoft Account existant (Outlook, Hotmail, Xbox, etc.) pour vous connecter au Microsoft Store et télécharger l\'application.',
            faq3Q: 'L\'application se mettra-t-elle à jour automatiquement ?',
            faq3A: 'Si elle est installée depuis le Microsoft Store, les mises à jour sont gérées automatiquement. Pour les téléchargements directs, vous devrez peut-être télécharger la dernière version manuellement depuis cette page.'
        }
    },

    // Marketing/Promotion Guide
    mkt: {
        navOnline: 'Promotion en ligne',
        navOffline: 'Promotion hors ligne',
        navPrint: 'Configuration d\'impression',
        navStrategy: 'Stratégie',
        heroBadge: 'Guide de promotion',
        heroTitle: 'Promouvez &amp; Gagnez<br>des revenus récurrents',
        heroDesc: 'Votre code de parrainage est bien plus qu\'un simple code — c\'est une opportunité de générer des revenus récurrents. Gagnez des commissions sur vos filleuls et les filleuls de vos filleuls.',
        heroMultiLevel: 'Multi-niveaux',
        heroMultiLevelLabel: 'Réseau de gains',
        heroRecurring: 'Récurrent',
        heroRecurringLabel: 'Revenu de commissions',
        heroGlobal: 'Mondial',
        heroGlobalLabel: 'Portée & Promotion',
        step1Title: 'Créez votre affiche promotionnelle exclusive',
        step1Intro: 'Faire voir votre code de parrainage est la première étape pour commencer à gagner.',
        step1_1: 'Téléchargez le modèle d\'affiche promotionnelle officiel.',
        step1_2: 'Inscrivez-vous et utilisez <a href="https://www.lovart.ai/" target="_blank" rel="noopener">lovart.ai</a>, envoyez l\'affiche téléchargée sur ce site. (Gratuit, mais nécessite une connexion via 12345VPN.)',
        step1_3: 'Utilisez l\'IA pour modifier l\'affiche et remplacer le code de parrainage original par votre propre code exclusif. Utilisez l\'IA pour traduire l\'affiche dans votre langue locale. Utilisez le prompt suivant : <em>« Pour l\'affiche jointe, changez le code de parrainage en [Votre Code], et exportez la version 4K. »</em>',
        step1_4: 'Téléchargez la nouvelle affiche générée et commencez immédiatement à la promouvoir en ligne.',
        channelsTitle: 'Canaux de promotion en ligne',
        channelSocial: 'Réseaux sociaux',
        channelMessenger: 'Telegram / WhatsApp',
        channelCommunity: 'Groupes communautaires',
        channelForums: 'Forums / Commentaires',
        step1Goal: 'Votre objectif est simple : amener plus de personnes à s\'inscrire et à utiliser le service grâce à votre code de parrainage.',
        step2Title: 'Promotion hors ligne (Haute visibilité, Haute conversion)',
        step2Intro: 'Si vous souhaitez étendre votre portée, envisagez la promotion par affiches physiques. Dans les zones à fort trafic, la visibilité est synonyme d\'opportunité.',
        step2Insight: '<strong>Point clé :</strong> Plus vous obtenez de visibilité, plus vous recevez de scans — et plus vos commissions deviennent stables.',
        step2SuppliesTitle: 'Ce dont vous aurez besoin',
        supplyPaper: 'Papier autocollant A4',
        supplyPrinter: 'Imprimante laser standard',
        supplyFile: 'Fichier d\'affiche haute résolution',
        step3Title: 'Améliorez votre affiche en haute résolution pour l\'impression',
        step3Intro: 'Pour que vos supports imprimés soient clairs, professionnels et inspirent confiance, suivez ces étapes :',
        step3_1: 'Allez sur <a href="https://www.photopea.com/" target="_blank" rel="noopener">photopea.com</a>',
        step3_2: 'Cliquez sur le menu en haut à gauche : Image → Taille de l\'image',
        step3_3: 'Réglez la résolution (DPI) à 350 dpi',
        step3_4: 'Enregistrez l\'image',
        step3_5: 'Imprimez avec une imprimante laser',
        step3Insight: '<strong>Conseil pro :</strong> Une résolution de 350 dpi améliore considérablement la qualité visuelle et augmente le taux de scans. Une meilleure qualité d\'impression inspire confiance et encourage plus de personnes à scanner votre code.',
        strategyTitle: 'Stratégie principale',
        strategyDesc: 'Suivez ces principes pour maximiser vos revenus de parrainage.',
        strategy1Title: 'Rendements à long terme',
        strategy1Desc: 'Une seule promotion peut générer des revenus à long terme. Vos efforts d\'aujourd\'hui continuent de porter leurs fruits au fil du temps.',
        strategy2Title: 'Croissance du réseau',
        strategy2Desc: 'Quand vous parrainez une personne et qu\'elle en parraine d\'autres, la croissance se multiplie. Construisez votre propre réseau de revenus.',
        strategy3Title: 'Exposition maximale',
        strategy3Desc: 'Plus d\'exposition signifie plus de scans. Promouvez à la fois en ligne et hors ligne pour de meilleurs résultats.',
        strategy4Title: 'Agissez maintenant',
        strategy4Desc: 'Plus tôt vous agissez, plus tôt vos revenus commencent à s\'accumuler. Commencez dès aujourd\'hui.',
        ctaTitle: 'Prêt à commencer la promotion ?',
        ctaDesc: 'Téléchargez l\'application, obtenez votre code de parrainage et commencez à construire votre réseau de revenus dès aujourd\'hui.',
        ctaAffiliate: 'Voir le programme d\'affiliation'
    },

});
