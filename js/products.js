const PRODUCTS = [
{
    id: 1,
    name: {
        en: "UltraBook Pro 14",
        sv: "UltraBook Pro 14",
        fr: "UltraBook Pro 14"
    },
    price: 14000,
    image: "img/ultraBook.png",
    category: "laptop",
    stock: 5,
    rating: 4.7,
    colors: ["black","blue","white","pink"],

    overview: {
        en: "High performance laptop for work and gaming.",
        sv: "Högpresterande laptop för arbete och gaming.",
        fr: "Ordinateur haute performance pour le travail et le gaming."
    },

    features: [
        "Intel i7",
        "16GB RAM",
        "1TB SSD"
    ],

    specs: {
        CPU: "Intel Core i7",
        GPU: "Integrated Iris Xe",
        RAM: "16GB",
        Storage: "1TB SSD",
        Display: "14-inch Full HD"
    },

    description: {
        en: "A powerful ultrabook designed for professionals who need speed, reliability, and portability.",
        sv: "En kraftfull ultrabook designad för professionella som behöver hastighet, pålitlighet och portabilitet.",
        fr: "Un ultrabook puissant conçu pour les professionnels qui ont besoin de vitesse, de fiabilité et de portabilité."
    }
},

{
    id: 2,
    name: {
        en: "Smart X Phone 13",
        sv: "Smart X Phone 13",
        fr: "Smart X Phone 13"
    },
    price: 9000,
    image: "img/smartphone.png",
    category: "phones",
    stock: 10,
    rating: 4.5,
    colors: ["black","blue","white","pink"],

    overview: {
        en: "OLED display with 5G.",
        sv: "OLED-skärm med 5G.",
        fr: "Écran OLED avec 5G."
    },

    features: [
        "128GB",
        "5G",
        "OLED"
    ],

    specs: {
        Display: "6.5-inch OLED",
        Storage: "128GB",
        Camera: "48MP Dual Camera",
        Battery: "4500mAh"
    },

    description: {
        en: "A sleek smartphone with stunning visuals, fast performance, and long battery life.",
        sv: "En elegant smartphone med fantastiska bilder, snabb prestanda och lång batteritid.",
        fr: "Un smartphone élégant avec des visuels impressionnants, des performances rapides et une longue autonomie."
    }
},

{
    id: 3,
    name: {
        en: "NoiseBeat Headphone",
        sv: "NoiseBeat Hörlurar",
        fr: "Casque NoiseBeat"
    },
    price: 5000,
    image: "img/headphone.png",
    category: "audio",
    stock: 0,
    rating: 4.9,
    colors: ["black","blue","white","pink"],

    overview: {
        en: "Premium noise-cancelling headphones.",
        sv: "Premium hörlurar med brusreducering.",
        fr: "Casque premium avec réduction du bruit."
    },

    features: [
        "Active Noise Cancellation",
        "40hr battery"
    ],

    specs: {
        Type: "Over-ear",
        Battery: "40hrs",
        Connectivity: "Bluetooth 5.2",
        Charging: "USB-C Fast Charge"
    },

    description: {
        en: "Enjoy immersive sound with advanced ANC and long lasting comfort.",
        sv: "Njut av uppslukande ljud med avancerad ANC och långvarig komfort.",
        fr: "Profitez d'un son immersif avec ANC avancé et un confort durable."
    }
},

{
    id: 4,
    name: {
        en: "WatchPro X",
        sv: "WatchPro X",
        fr: "WatchPro X"
    },
    price: 3000,
    image: "img/smartwatch.png",
    category: "wearable",
    stock: 8,
    rating: 4.2,
    colors: ["black","blue","white","pink"],

    overview: {
        en: "Smart fitness tracking watch.",
        sv: "Smart träningsklocka.",
        fr: "Montre intelligente de suivi sportif."
    },

    features: [
        "GPS",
        "Waterproof",
        "Heart Rate Monitor"
    ],

    specs: {
        Display: "1.8-inch AMOLED",
        Battery: "7 days",
        Sensors: "Heart Rate, Sp02",
        WaterResistance: "5ATM",
        Connectivity: "Bluetooth"
    },

    description: {
        en: "Track your health and workouts with precision and style.",
        sv: "Spåra din hälsa och träning med precision och stil.",
        fr: "Suivez votre santé et vos entraînements avec précision et style."
    }
},

{
    id: 5,
    name: {
        en: "Game Series 1",
        sv: "Game Series 1",
        fr: "Game Series 1"
    },
    price: 10000,
    image: "img/gaming pc.png",
    category: "game",
    stock: 10,
    rating: 4.9,
    colors: ["black","blue","white","pink"],

    overview: {
        en: "High performance gaming desktop built for competitive and immersive gameplay.",
        sv: "Högpresterande gamingdator byggd för konkurrenskraftigt och immersivt spelande.",
        fr: "PC gaming haute performance conçu pour un gameplay compétitif et immersif."
    },

    features: [
        "RTX Graphics Card",
        "16GB RAM",
        "1TB SSD Storage",
        "RGB Lighting",
        "Advanced Cooling System"
    ],

    specs: {
        CPU: "Intel / AMD High Performance",
        GPU: "RTX Series",
        RAM: "16GB",
        Display: "External Monitor Required"
    },

    description: {
        en: "Dominate every game with ultra-fast performance and stunning visuals.",
        sv: "Dominera varje spel med ultrasnabb prestanda och fantastisk grafik.",
        fr: "Dominez chaque jeu avec des performances ultra rapides et des graphismes impressionnants."
    }
},

{
    id: 6,
    name: {
        en: "Meta Quest 3S",
        sv: "Meta Quest 3S",
        fr: "Meta Quest 3S"
    },
    price: 6500,
    category: "wearable",
    image: "img/meta quest 3s.png",
    stock: 14,
    rating: 4.7,
    colors: ["black","blue","white","pink"],

    overview: {
        en: "Next-gen mixed reality headset.",
        sv: "Nästa generations mixed reality-headset.",
        fr: "Casque de réalité mixte nouvelle génération."
    },

    features: [
        "Mixed Reality",
        "Wireless Freedom",
        "Advanced Hand Tracking"
    ],

    description: {
        en: "Step into the future with immersive virtual experiences.",
        sv: "Kliv in i framtiden med uppslukande virtuella upplevelser.",
        fr: "Entrez dans le futur avec des expériences virtuelles immersives."
    }
},

{
    id: 7,
    name: {
        en: "AirBeat Earbuds",
        sv: "AirBeat Hörlurar",
        fr: "Écouteurs AirBeat"
    },
    price: 1800,
    category: "audio",
    image: "img/earbuds.png",
    stock: 50,
    rating: 4.5,
    colors: ["black","blue","white","pink"],

    overview: {
        en: "Compact wireless earbuds with immersive sound.",
        sv: "Kompakta trådlösa hörlurar med uppslukande ljud.",
        fr: "Écouteurs sans fil compacts avec un son immersif."
    },

    features: [
        "Bluetooth 5.3",
        "Touch Controls",
        "Fast Charging"
    ],

    specs: {
        Battery: "20 hours",
        Connectivity: "Bluetooth 5.3",
        Control: "Touch",
        Charging: "USB-C"
    },

    description: {
        en: "Experience true wireless freedom with crystal clear audio.",
        sv: "Upplev äkta trådlös frihet med kristallklart ljud.",
        fr: "Profitez d'une véritable liberté sans fil avec un son cristallin."
    }
},

{
    id: 8,
    name: {
        en: "Pro Laptop X",
        sv: "Pro Laptop X",
        fr: "Pro Laptop X"
    },
    price: 160000,
    category: "laptop",
    image: "img/laptop.png",
    stock: 6,
    rating: 4.8,
    colors: ["black","blue","white","pink"],

    overview: {
        en: "Ultra powerful laptop for creators and professionals.",
        sv: "Ultrakraftfull laptop för kreatörer och professionella.",
        fr: "Ordinateur ultra puissant pour créateurs et professionnels."
    },

    features: [
        "Intel Core i9",
        "32GB RAM",
        "RTX Graphics"
    ],

    specs: {
        CPU: "Intel Core i9",
        GPU: "RTX Graphics",
        Display: "16-inch 4K",
        Storage: "1TB SSD"
    },

    description: {
        en: "Built for video editing, rendering, and high-end multitasking.",
        sv: "Byggd för videoredigering, rendering och avancerad multitasking.",
        fr: "Conçu pour le montage vidéo, le rendu et le multitâche avancé."
    }
},

{
    id: 9,
    name: {
        en: "Pro Game M2",
        sv: "Pro Game M2",
        fr: "Pro Game M2"
    },
    price: 12000,
    category: "monitor",
    image: "img/computer Monitor.png",
    stock: 12,
    rating: 4.7,
    colors: ["black","blue","white","pink"],

    overview: {
        en: "High-refresh rate gaming monitor.",
        sv: "Gamingmonitor med hög uppdateringsfrekvens.",
        fr: "Moniteur gaming à haute fréquence."
    },

    features: [
        "165Hz",
        "1ms Response Time",
        "QHD Display"
    ],

    specs: {
        Size: "27-inch",
        Resolution: "QHD",
        RefreshRate: "165Hz"
    },

    description: {
        en: "Smooth visuals and ultra-fast response for competitive gaming.",
        sv: "Mjuka bilder och ultrasnabb respons för konkurrenskraftigt gaming.",
        fr: "Visuels fluides et réponse ultra rapide pour le gaming compétitif."
    }
},

{
    id: 10,
    name: {
        en: "Game Series 1",
        sv: "Game Series 1",
        fr: "Game Series 1"
    },
    price: 10000,
    category: "game",
    image: "img/gaming pc.png",
    stock: 9,
    rating: 4.8,
    colors: ["black","blue","white","pink"],

    overview: {
        en: "Next-level gaming desktop.",
        sv: "Gamingdator på nästa nivå.",
        fr: "PC gaming nouvelle génération."
    },

    features: [
        "AMD Ryzen 7",
        "16GB RAM",
        "RGB Cooling"
    ],

    description: {
        en: "Enjoy smooth gameplay and fast performance.",
        sv: "Njut av smidigt spelande och snabb prestanda.",
        fr: "Profitez d'un gameplay fluide et de performances rapides."
    }
},

{
    id: 11,
    name: {
        en: "Boom Speaker",
        sv: "Boom Högtalare",
        fr: "Boom Haut-Parleur"
    },
    price: 25000,
    category: "audio",
    image: "img/speaker.png",
    stock: 15,
    rating: 4.6,
    colors: ["black","blue","white","pink"],

    overview: {
        en: "Powerful wireless speaker with deep bass.",
        sv: "Kraftfull trådlös högtalare med djup bas.",
        fr: "Haut-parleur sans fil puissant avec basses profondes."
    },

    features: [
        "Bluetooth 5.0",
        "360 Sound",
        "12-Hour Battery"
    ],

    description: {
        en: "Rich bass and crisp sound perfect for parties.",
        sv: "Rik bas och klart ljud perfekt för fester.",
        fr: "Basses riches et son clair parfaits pour les fêtes."
    }
},

{
    id: 12,
    name: {
        en: "Smart TV",
        sv: "Smart TV",
        fr: "Smart TV"
    },
    price: 180000,
    image: "img/smart tv.png",
    category: "home_appliance",
    stock: 8,
    rating: 4.8,
    colors: ["black","blue","white","pink"],

    overview: {
        en: "Ultra HD 75-inch Smart TV.",
        sv: "Ultra HD 75-tums Smart TV.",
        fr: "Smart TV Ultra HD 75 pouces."
    },

    features: [
        "4K Display",
        "HDR",
        "Voice Control"
    ],

    description: {
        en: "Enjoy cinema quality visuals at home.",
        sv: "Njut av biokvalitet hemma.",
        fr: "Profitez d'une qualité cinéma à la maison."
    }
},

{
    id: 13,
    name: {
        en: "ProShot DSLR Camera",
        sv: "ProShot DSLR Kamera",
        fr: "Caméra DSLR ProShot"
    },
    price: 9500,
    image: "img/camera.png",
    category: "camera",
    stock: 6,
    rating: 4.5,
    colors: ["black","blue","white","pink"],

    overview: {
        en: "High performance DSLR camera.",
        sv: "Högpresterande DSLR-kamera.",
        fr: "Caméra DSLR haute performance."
    },

    features: [
        "24MP Sensor",
        "4K Video",
        "Fast Autofocus"
    ],

    description: {
        en: "Exceptional image quality for professionals and enthusiasts.",
        sv: "Exceptionell bildkvalitet för professionella och entusiaster.",
        fr: "Qualité d'image exceptionnelle pour professionnels et passionnés."
    }
},

{
    id: 14,
    name: {
        en: "Pocket SSD 1TB",
        sv: "Pocket SSD 1TB",
        fr: "Pocket SSD 1TB"
    },
    price: 2500,
    image: "img/portable hardware.png",
    category: "portable hardware",
    stock: 15,
    rating: 4.6,
    colors: ["black","blue","white","pink"],

    overview: {
        en: "Compact portable SSD with fast speeds.",
        sv: "Kompakt portabel SSD med hög hastighet.",
        fr: "SSD portable compact avec vitesses rapides."
    },

    features: [
        "1TB Storage",
        "USB-C",
        "Shock Resistant"
    ],

    description: {
        en: "Perfect portable storage for professionals on the go.",
        sv: "Perfekt portabel lagring för professionella på språng.",
        fr: "Stockage portable parfait pour les professionnels mobiles."
    }
},

{
    id: 15,
    name: {
        en: "XGame Console",
        sv: "XGame Konsol",
        fr: "Console XGame"
    },
    price: 7000,
    category: "game",
    image: "img/Xgame.png",
    stock: 20,
    rating: 4.7,
    colors: ["black","blue","white","pink"],

    overview: {
        en: "Immersive next-level gaming console.",
        sv: "Uppslukande gamingkonsol på nästa nivå.",
        fr: "Console de jeu immersive nouvelle génération."
    },

    features: [
        "4K Gaming",
        "Fast SSD",
        "Online Multiplayer"
    ],

    description: {
        en: "Smooth gameplay and stunning visuals for endless entertainment.",
        sv: "Smidigt spelande och fantastisk grafik för oändlig underhållning.",
        fr: "Gameplay fluide et graphismes impressionnants pour un divertissement sans fin."
    }
},

{ 
    id: 16,
    
    name: {
        en: "HomeSound Pro System",
        sv: "HomeSound Pro System",
        fr: "Système Audio HomeSound Pro",
    },

    price: 8500, 
    image: "img/soundsystem.png",
    category: "audio",
    stock: 6,
    rating: 4.8,
    colors: ["black","white"],

    overview: {
        en: "High-quality home sound system.",
        sv: "Högkvalitativt hemmaljudsystem.",
        fr: "Système audio domestique haute qualité.",
    },

    features: [
        "Dolby Surround Sound",
        "Wireless Subwoofer",
        "Bluetooth 5.0"
    ],

    specs: {
        Type: "5.1 Channel",
        Power: "500W",
        Connectivity: "Bluetooth, AUX, HDMI",
        Control: "Remote + App"
    },

    description: {
        en: "Transform your home into a cinema with powerful surround sound and deep bass.",
        sv: "Förvandla ditt hem till en biograf med kraftfullt surroundljud och djup bas.",
        fr: "Transformez votre maison en cinéma avec un son surround puissant et des basses profondes.",
    }
},

{ 
    id: 17,
    
    name: {
        en: "Robot Vacuum",
        sv: "Robotdammsugare",
        fr: "Aspirateur Robot",
    },

    price: 12000, 
    image: "img/robotvacuum.png",
    category: "home",
    stock: 4,
    rating: 4.7,
    colors: ["black","white"],

    overview: {
        en: "Smart robotic vacuum cleaner.",
        sv: "Smart robotdammsugare.",
        fr: "Aspirateur robot intelligent.",
    },

    features: [
        "Auto Mapping",
        "App Control",
        "Self-Charging"
    ],

    specs: {
        Type: "Robot Vacuum",
        Battery: "120min runtime",
        Connectivity: "WiFi",
        CleaningModes: "Auto, Spot, Edge"
    },

    description: {
        en: "Keep your floors spotless effortlessly with intelligent navigation and scheduling.",
        sv: "Håll dina golv rena utan ansträngning med intelligent navigering och schemaläggning.",
        fr: "Gardez vos sols impeccables grâce à une navigation intelligente et une programmation automatique.",
    }
},

{ 
    id: 18,
    
    name: {
        en: "HeatWave Microwave",
        sv: "HeatWave Mikrovågsugn",
        fr: "Micro-ondes HeatWave",
    },

    price: 3000, 
    image: "img/microwave.png",
    category: "kitchen",
    stock: 10,
    rating: 4.5,
    colors: ["silver","black"],

    overview: {
        en: "Compact and efficient microwave oven.",
        sv: "Kompakt och effektiv mikrovågsugn.",
        fr: "Micro-ondes compact et efficace.",
    },

    features: [
        "Quick Heat",
        "Defrost Mode",
        "Digital Timer"
    ],

    specs: {
        Capacity: "20L",
        Power: "800W",
        Control: "Digital",
        Material: "Stainless Steel"
    },

    description: {
        en: "Perfect for quick meals with reliable heating and easy controls.",
        sv: "Perfekt för snabba måltider med pålitlig uppvärmning och enkla kontroller.",
        fr: "Parfait pour des repas rapides avec un chauffage fiable et des commandes simples.",
    }
},

{ 
    id: 19,
    
    name: {
        en: "Nintendo Switch Console",
        sv: "Nintendo Switch Konsol",
        fr: "Console Nintendo Switch",
    },

    price: 6000, 
    image: "img/switch.png",
    category: "gaming",
    stock: 8,
    rating: 4.9,
    colors: ["red","blue","black"],

    overview: {
        en: "Portable and home gaming console.",
        sv: "Bärbar spelkonsol för hemmet.",
        fr: "Console de jeu portable et domestique.",
    },

    features: [
        "Hybrid Play",
        "Joy-Con Controllers",
        "Multiplayer"
    ],

    specs: {
        Screen: "6.2 inch",
        Storage: "32GB",
        Battery: "4.5-9 hrs",
        Modes: "TV, Tabletop, Handheld"
    },

    description: {
        en: "Enjoy gaming anywhere with a versatile console designed for both home and travel.",
        sv: "Njut av spel var som helst med en mångsidig konsol designad för både hem och resor.",
        fr: "Profitez du jeu partout avec une console polyvalente conçue pour la maison et les voyages.",
    }
},

{ 
    id: 20,
    
    name: {
        en: "AutoCut Lawn Mower",
        sv: "AutoCut Gräsklippare",
        fr: "Tondeuse AutoCut",
    },

    price: 9500, 
    image: "img/lawnmower.png",
    category: "outdoor",
    stock: 3,
    rating: 4.6,
    colors: ["green","black"],

    overview: {
        en: "Automatic lawn mowing solution.",
        sv: "Automatisk lösning för gräsklippning.",
        fr: "Solution automatique de tonte de pelouse.",
    },

    features: [
        "Self Navigation",
        "Weather Resistant",
        "Low Noise"
    ],

    specs: {
        Type: "Robotic Mower",
        Battery: "90min runtime",
        CuttingHeight: "20-60mm",
        Control: "App + Manual"
    },

    description: {
        en: "Maintain a perfectly trimmed lawn without effort using smart automation.",
        sv: "Håll gräsmattan perfekt klippt utan ansträngning med smart automation.",
        fr: "Gardez une pelouse parfaitement tondue sans effort grâce à une automatisation intelligente.",
    }
},

{ 
    id: 21,
    
    name: {
        en: "WarmAir Smart Heater",
        sv: "WarmAir Smart Värmare",
        fr: "Chauffage Intelligent WarmAir",
    },

    price: 4000, 
    image: "img/heater.png",
    category: "home",
    stock: 7,
    rating: 4.4,
    colors: ["white","black"],

    overview: {
        en: "Efficient room heating system.",
        sv: "Effektivt värmesystem för rum.",
        fr: "Système de chauffage efficace pour pièce.",
    },

    features: [
        "Energy Saving",
        "Remote Control",
        "Safety Shutoff"
    ],

    specs: {
        Power: "2000W",
        Type: "Electric Heater",
        Coverage: "20-30 sqm",
        Control: "Remote + App"
    },

    description: {
        en: "Stay warm and comfortable with a safe and energy-efficient heating solution.",
        sv: "Håll dig varm och bekväm med en säker och energieffektiv värmelösning.",
        fr: "Restez au chaud et confortable grâce à une solution de chauffage sûre et écoénergétique.",
    }
},

{ 
    id: 22,
    
    name: {
        en: "FreshBlend Fruit Mixer",
        sv: "FreshBlend Fruktmixer",
        fr: "Mixeur FreshBlend",
    },

    price: 2500, 
    image: "img/blender.png",
    category: "kitchen",
    stock: 12,
    rating: 4.6,
    colors: ["white","pink","black"],

    overview: {
        en: "Powerful fruit and smoothie blender.",
        sv: "Kraftfull mixer för frukt och smoothies.",
        fr: "Mixeur puissant pour fruits et smoothies.",
    },

    features: [
        "High-Speed Blades",
        "Easy Clean",
        "Portable Jar"
    ],

    specs: {
        Power: "600W",
        Capacity: "1.5L",
        Material: "BPA-Free Plastic",
        SpeedLevels: "3"
    },

    description: {
        en: "Blend smoothies, juices, and more quickly with powerful performance and ease.",
        sv: "Mixa smoothies, juicer och mer snabbt med kraftfull prestanda och enkel användning.",
        fr: "Préparez rapidement smoothies, jus et bien plus grâce à des performances puissantes et simples.",
    }
},

{
    id: 23,

    name: {
        en: "DeepBass Subwoofer X",
        sv: "DeepBass Subwoofer X",
        fr: "Caisson DeepBass X",
    },

    price: 3200,
    image: "img/subwoofer.png",
    category: "audio",
    stock: 8,
    rating: 4.7,
    colors: ["black"],

    overview: {
        en: "High-performance subwoofer with deep bass output.",
        sv: "Högpresterande subwoofer med djup bas.",
        fr: "Caisson de basses haute performance avec basses profondes.",
    },

    features: [
        "Powerful Bass",
        "Compact Design",
        "Low Distortion"
    ],

    specs: {
        Power: "150W",
        FrequencyResponse: "20Hz - 200Hz",
        Connectivity: "Wired",
        Material: "Wood Enclosure"
    },

    description: {
        en: "Enhance your audio experience with rich, deep bass perfect for home theaters and music setups.",
        sv: "Förbättra din ljudupplevelse med rik och djup bas perfekt för hemmabio och musiksystem.",
        fr: "Améliorez votre expérience audio avec des basses riches et profondes parfaites pour le home cinéma et la musique.",
    }
},

{
    id: 24,

    name: {
        en: "SmartTab X10",
        sv: "SmartTab X10",
        fr: "SmartTab X10",
    },

    price: 7500,
    image: "img/tablet.png",
    category: "tablet",
    stock: 10,
    rating: 4.5,
    colors: ["black","silver","blue"],

    overview: {
        en: "Sleek and powerful tablet for work and entertainment.",
        sv: "Elegant och kraftfull surfplatta för arbete och underhållning.",
        fr: "Tablette élégante et puissante pour le travail et le divertissement.",
    },

    features: [
        "10-inch Display",
        "Fast Processor",
        "Long Battery Life"
    ],

    specs: {
        Display: "10.1-inch HD",
        Storage: "128GB",
        RAM: "6GB",
        Battery: "7000mAh"
    },

    description: {
        en: "Enjoy seamless multitasking, streaming, and browsing with a lightweight and stylish tablet.",
        sv: "Njut av smidig multitasking, streaming och surfning med en lätt och stilren surfplatta.",
        fr: "Profitez du multitâche, du streaming et de la navigation avec une tablette légère et élégante.",
    }
}

];