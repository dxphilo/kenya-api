export interface Tribe {
    name: string;
    location: string;
    language: string;
    traditions: string;
    region: string;
    population: number | string; // Number for estimates, string for "Unknown"
    culturalHighlights: string;
  }
  
  export const tribes: Tribe[] = [
    {
      name: "Kikuyu",
      location: "Kiambu, Murang’a, Nyeri",
      language: "Kikuyu (Gikuyu)",
      traditions: "Ancestor reverence, circumcision ceremonies, traditional marriage with dowry (ruracio), and communal farming.",
      region: "Central Kenya",
      population: 9405000,
      culturalHighlights: "Largest tribe, known for entrepreneurship and farming (coffee, tea). Believed to descend from Gikuyu and Mumbi, with nine clans."
    },
    {
      name: "Luhya",
      location: "Kakamega, Vihiga, Bungoma",
      language: "Luhya (varies by dialect, e.g., Luyia, Maragoli)",
      traditions: "Bullfighting as a cultural sport, Sikuti dance with drums, and elaborate funeral ceremonies.",
      region: "Western Kenya",
      population: 7865000,
      culturalHighlights: "Consists of 18 clans, known for hospitality and music (Sikuti dance)."
    },
    {
      name: "Kalenjin",
      location: "Uasin Gishu, Kericho, Nandi",
      language: "Kalenjin (includes dialects like Kipsigis, Nandi)",
      traditions: "Circumcision and initiation (tumdo) for boys, mursik (fermented milk) on special occasions, and communal herding.",
      region: "Rift Valley",
      population: 7370000,
      culturalHighlights: "Known as the 'running tribe' for athletic prowess, herbal medicine knowledge, and Kalenjin media growth."
    },
    {
      name: "Luo",
      location: "Kisumu, Siaya, Homa Bay",
      language: "Dholuo",
      traditions: "Elaborate funeral wailing and mourning rituals (now reduced by Christianity), fishing culture, and music (e.g., Ohangla).",
      region: "Nyanza (Lake Victoria Basin)",
      population: 5885000,
      culturalHighlights: "Proud of their language and culture, historically fishermen, with a strong oral storytelling tradition."
    },
    {
      name: "Kamba",
      location: "Machakos, Kitui, Makueni",
      language: "Kikamba",
      traditions: "Woodcarving and basketry, traditional healing practices, and communal farming.",
      region: "Eastern Kenya",
      population: 5390000,
      culturalHighlights: "Skilled artisans (carvings, baskets), known for military service and trade."
    },
    {
      name: "Somali",
      location: "Garissa, Wajir, Mandera",
      language: "Somali",
      traditions: "Nomadic pastoralism, Islamic rituals, and camel herding.",
      region: "North Eastern Kenya",
      population: 3190000,
      culturalHighlights: "Predominantly Muslim, engaged in trade, with historical ties to Somalia."
    },
    {
      name: "Kisii",
      location: "Kisii, Nyamira",
      language: "Ekegusii",
      traditions: "Soapstone carving, communal farming, and traditional circumcision ceremonies.",
      region: "Nyanza",
      population: 3135000,
      culturalHighlights: "Known for craftsmanship (soapstone carvings) and banana farming."
    },
    {
      name: "Mijikenda",
      location: "Kilifi, Kwale, Mombasa",
      language: "Mijikenda (includes Giriama, Digo)",
      traditions: "Sacred Kaya forests for rituals, traditional healing, and Swahili-influenced coastal culture.",
      region: "Coastal Kenya",
      population: 2860000,
      culturalHighlights: "Guardians of the Sacred Mijikenda Kaya Forests (UNESCO site), known for pilau cuisine."
    },
    {
      name: "Meru",
      location: "Meru, Tharaka-Nithi",
      language: "Kimeru",
      traditions: "Njuri Ncheke council of elders for governance, miraa (khat) cultivation, and traditional dances.",
      region: "Eastern Kenya",
      population: 2310000,
      culturalHighlights: "Closely related to Kikuyu, known for miraa trade and governance systems."
    },
    {
      name: "Maasai",
      location: "Kajiado, Narok",
      language: "Maa",
      traditions: "Cattle herding, moran (warrior) initiation, and Engilakinoto dance after lion hunts.",
      region: "Rift Valley (extends to Tanzania)",
      population: 935000,
      culturalHighlights: "Nomadic pastoralists, globally recognized for red shukas and beadwork, resist modernization."
    },
    {
      name: "Turkana",
      location: "Turkana",
      language: "Turkana",
      traditions: "Nomadic pastoralism, adornment with beads and metalwork, and diet of cow’s blood and milk.",
      region: "Northern Kenya",
      population: 200000,
      culturalHighlights: "Known for resilience in arid regions, skilled in metalwork and carving."
    },
    {
      name: "Samburu",
      location: "Samburu",
      language: "Samburu (Maa dialect)",
      traditions: "Nomadic herding, moran warrior culture, and colorful beadwork.",
      region: "Rift Valley",
      population: "Unknown",
      culturalHighlights: "Closely related to Maasai, known for cultural preservation and tourism."
    },
    {
      name: "Embu",
      location: "Embu",
      language: "Kiembu",
      traditions: "Agricultural rituals, traditional dances, and council of elders for governance.",
      region: "Eastern Kenya",
      population: "Unknown",
      culturalHighlights: "Bantu tribe related to Kikuyu, known for farming near Mount Kenya."
    },
    {
      name: "Taita",
      location: "Taita/Taveta",
      language: "Taita (Dawida, Saghala)",
      traditions: "Mining gemstones, ancestor worship, and traditional healing.",
      region: "Coastal Kenya",
      population: "Unknown",
      culturalHighlights: "Known for mining (e.g., green malachite, tiger’s eye) and cultural resilience."
    },
    {
      name: "Swahili",
      location: "Mombasa, Lamu, Malindi",
      language: "Swahili (Kiswahili)",
      traditions: "Islamic rituals, Swahili art (jewelry, carpets), and coastal festivals.",
      region: "Coastal Kenya",
      population: "Unknown",
      culturalHighlights: "Descended from Bantu-Arab intermarriages, creators of Swahili culture and language."
    },
    {
      name: "Pokot",
      location: "West Pokot, Baringo",
      language: "Pokot",
      traditions: "Nomadic herding, traditional beadwork, and initiation ceremonies.",
      region: "Rift Valley",
      population: 778000,
      culturalHighlights: "Part of Kalenjin group, known for pastoralism and cultural adornments."
    },
    {
      name: "Rendille",
      location: "Marsabit",
      language: "Rendille",
      traditions: "Camel herding, nomadic lifestyle, and traditional beadwork.",
      region: "Northern Kenya",
      population: "Unknown",
      culturalHighlights: "Cushitic tribe, known for resilience in arid regions and unique camel-based culture."
    },
    {
      name: "Ogiek",
      location: "Nakuru, Narok",
      language: "Ogiek",
      traditions: "Honey harvesting, forest conservation, and traditional healing.",
      region: "Rift Valley",
      population: 52000,
      culturalHighlights: "Indigenous forest dwellers, advocates for Mau Forest conservation."
    },
    {
      name: "El Molo",
      location: "Marsabit (Lake Turkana)",
      language: "El Molo",
      traditions: "Fishing, traditional boat-making, and oral storytelling.",
      region: "Northern Kenya",
      population: "Unknown",
      culturalHighlights: "Smallest tribe, facing cultural erosion, known for fishing on Lake Turkana."
    },
    // Remaining 25 tribes
    {
      name: "Kuria",
      location: "Migori, Nyamira",
      language: "Kuria",
      traditions: "Cattle herding, beer brewing (e.g., marwa), and initiation rites.",
      region: "Nyanza",
      population: "Unknown",
      culturalHighlights: "Known for cattle keeping and cross-border trade with Tanzania."
    },
    {
      name: "Teso",
      location: "Busia, Teso",
      language: "Ateso",
      traditions: "Agricultural rituals, traditional dances, and communal farming.",
      region: "Western Kenya",
      population: 400000, // Estimated from Web ID 12
      culturalHighlights: "Nilotic group with ties to Uganda, known for millet farming."
    },
    {
      name: "Oromo",
      location: "Marsabit, Isiolo",
      language: "Oromo (Boran dialect)",
      traditions: "Nomadic pastoralism, gada system of governance, and cattle herding.",
      region: "Northern Kenya",
      population: "Unknown",
      culturalHighlights: "Cushitic group with cultural ties to Ethiopia, known for the gada age-set system."
    },
    {
      name: "Borana",
      location: "Marsabit",
      language: "Borana (Oromo dialect)",
      traditions: "Camel and cattle herding, traditional dances, and Islamic rituals.",
      region: "Northern Kenya",
      population: "Unknown",
      culturalHighlights: "Sub-group of Oromo, known for pastoralism and resilience in arid areas."
    },
    {
      name: "Gabbra",
      location: "Marsabit, Moyale",
      language: "Gabbra",
      traditions: "Camel herding, seasonal migrations, and oral poetry.",
      region: "Northern Kenya",
      population: "Unknown",
      culturalHighlights: "Cushitic pastoralists, known for their camel-based economy."
    },
    {
      name: "Bajuni",
      location: "Lamu",
      language: "Kibajuni (Swahili dialect)",
      traditions: "Fishing, Islamic festivals, and coastal trade practices.",
      region: "Coastal Kenya",
      population: "Unknown",
      culturalHighlights: "Swahili-related group, known for maritime skills and trade."
    },
    {
      name: "Tharaka",
      location: "Tharaka-Nithi",
      language: "Kitharaka",
      traditions: "Agricultural ceremonies, traditional dances, and elder councils.",
      region: "Eastern Kenya",
      population: "Unknown",
      culturalHighlights: "Related to Meru, known for farming and cultural preservation."
    },
    {
      name: "Chonyi",
      location: "Kilifi",
      language: "Kichonyi",
      traditions: "Sacred forest rituals, traditional healing, and dance.",
      region: "Coastal Kenya",
      population: "Unknown",
      culturalHighlights: "Sub-group of Mijikenda, known for cultural heritage."
    },
    {
      name: "Digo",
      location: "Kwale",
      language: "Kidigo",
      traditions: "Farming, Islamic rituals, and traditional music.",
      region: "Coastal Kenya",
      population: "Unknown",
      culturalHighlights: "Mijikenda sub-group, known for coastal farming and Islam."
    },
    {
      name: "Duruma",
      location: "Kwale",
      language: "Kiduruma",
      traditions: "Agricultural rituals, circumcision ceremonies, and dance.",
      region: "Coastal Kenya",
      population: "Unknown",
      culturalHighlights: "Mijikenda sub-group, known for farming and cultural dances."
    },
    {
      name: "Giriama",
      location: "Kilifi",
      language: "Kigiriama",
      traditions: "Sacred Kaya forests, traditional healing, and dance.",
      region: "Coastal Kenya",
      population: "Unknown",
      culturalHighlights: "Largest Mijikenda group, known for Kaya forest conservation."
    },
    {
      name: "Jibana",
      location: "Kilifi",
      language: "Kijibana",
      traditions: "Farming, traditional dances, and elder councils.",
      region: "Coastal Kenya",
      population: "Unknown",
      culturalHighlights: "Mijikenda sub-group, known for agricultural practices."
    },
    {
      name: "Kauma",
      location: "Kilifi",
      language: "Kikauma",
      traditions: "Farming, traditional rituals, and music.",
      region: "Coastal Kenya",
      population: "Unknown",
      culturalHighlights: "Mijikenda sub-group, known for cultural music."
    },
    {
      name: "Kamba",
      location: "Kilifi",
      language: "Kikamba",
      traditions: "Farming, traditional dances, and healing.",
      region: "Coastal Kenya",
      population: "Unknown",
      culturalHighlights: "Mijikenda sub-group, known for coastal farming."
    },
    {
      name: "Rabai",
      location: "Kilifi",
      language: "Kirabai",
      traditions: "Agricultural rituals, Christian-influenced ceremonies, and dance.",
      region: "Coastal Kenya",
      population: "Unknown",
      culturalHighlights: "Mijikenda sub-group, early adopters of Christianity."
    },
    {
      name: "Ribe",
      location: "Kilifi",
      language: "Kiribe",
      traditions: "Farming, traditional healing, and music.",
      region: "Coastal Kenya",
      population: "Unknown",
      culturalHighlights: "Mijikenda sub-group, known for cultural resilience."
    },
    {
      name: "Njemps",
      location: "Baringo",
      language: "Njemps (Samburu dialect)",
      traditions: "Fishing, cattle herding, and traditional dances.",
      region: "Rift Valley",
      population: "Unknown",
      culturalHighlights: "Related to Samburu, known for Lake Baringo fishing."
    },
    {
      name: "Sabaot",
      location: "Bungoma, Trans Nzoia",
      language: "Sabaot",
      traditions: "Cattle herding, initiation rites, and traditional music.",
      region: "Western Kenya",
      population: "Unknown",
      culturalHighlights: "Kalenjin sub-group, known for pastoralism."
    },
    {
      name: "Tachoni",
      location: "Kakamega",
      language: "Tachoni",
      traditions: "Agricultural rituals, traditional dances, and communal living.",
      region: "Western Kenya",
      population: "Unknown",
      culturalHighlights: "Luhya sub-group, known for farming and music."
    },
    {
      name: "Kabras",
      location: "Kakamega",
      language: "Lukabras",
      traditions: "Bullfighting, traditional dances, and farming.",
      region: "Western Kenya",
      population: "Unknown",
      culturalHighlights: "Luhya sub-group, known for cultural sports."
    },
    {
      name: "Maragoli",
      location: "Vihiga",
      language: "Lumaragoli",
      traditions: "Agricultural ceremonies, dances, and funeral rites.",
      region: "Western Kenya",
      population: "Unknown",
      culturalHighlights: "Luhya sub-group, known for farming and community life."
    },
    {
      name: "Nyala",
      location: "Kakamega",
      language: "Lunyala",
      traditions: "Farming, traditional dances, and communal rituals.",
      region: "Western Kenya",
      population: "Unknown",
      culturalHighlights: "Luhya sub-group, known for agricultural traditions."
    },
    {
      name: "Samia",
      location: "Busia",
      language: "Lusamia",
      traditions: "Fishing, farming, and traditional dances.",
      region: "Western Kenya",
      population: "Unknown",
      culturalHighlights: "Luhya sub-group, known for Lake Victoria fishing."
    },
    {
      name: "Tugen",
      location: "Baringo",
      language: "Tugen",
      traditions: "Cattle herding, initiation rites, and mursik preparation.",
      region: "Rift Valley",
      population: "Unknown",
      culturalHighlights: "Kalenjin sub-group, known for pastoralism."
    },
    {
      name: "Keiyo",
      location: "Elgeyo/Marakwet",
      language: "Keiyo",
      traditions: "Cattle herding, initiation ceremonies, and traditional dances.",
      region: "Rift Valley",
      population: "Unknown",
      culturalHighlights: "Kalenjin sub-group, known for athletic talent."
    },
    {
      name: "Kipsigis",
      location: "Kericho",
      language: "Kipsigis",
      traditions: "Cattle herding, circumcision rites, and communal gatherings.",
      region: "Rift Valley",
      population: "Unknown",
      culturalHighlights: "Kalenjin sub-group, known for tea farming and athletics."
    }
  ];
  
  export const tribeData = {
    data: tribes,
    count: tribes.length,
    status: 200
  };