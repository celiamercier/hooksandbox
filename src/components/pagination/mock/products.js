const allProducts = [
    {
        "id": 1164,
        "brand": "Belkin",
        "sku": "MKP100000000003512"
    },
    {
        "id": 1155,
        "brand": "Playgro",
        "sku": "MKP100000000005241"
    },
    {
        "id": 1158,
        "brand": "Fisher Price",
        "sku": "MKP100000000005292"
    },
    {
        "id": 1145,
        "brand": "Guy Leech",
        "sku": "MKP100000000004637"
    },
    {
        "id": 1112,
        "brand": "Just Kidding",
        "sku": "MKP100000000037169"
    },
    {
        "id": 1135,
        "brand": "Nerf",
        "sku": "MKP100000000039660"
    },
    {
        "id": 1102,
        "brand": "Blizzard",
        "sku": "MKP100000000999902"
    },
    {
        "id": 1156,
        "brand": "Raco",
        "sku": "MKP100000000006735"
    },
    {
        "id": 1108,
        "brand": "Canada Goose",
        "sku": "MKP100000000999908"
    },
    {
        "id": 1128,
        "brand": "Sport XInce",
        "sku": "MKP100000000028153"
    },
    {
        "id": 1127,
        "brand": "Capture",
        "sku": "MKP100000000200587"
    },
    {
        "id": 1163,
        "brand": "GoPro",
        "sku": "MKP100000000039497"
    },
    {
        "id": 1149,
        "brand": "Breville",
        "sku": "MKP100000000037254"
    },
    {
        "id": 1114,
        "brand": "Breville",
        "sku": "MKP100000000036959"
    },
    {
        "id": 1148,
        "brand": "LEGO",
        "sku": "MKP100000000041362"
    },
    {
        "id": 1136,
        "brand": "Spiderman",
        "sku": "MKP100000000037937"
    },
    {
        "id": 1123,
        "brand": "Capture",
        "sku": "MKP100000000200562"
    },
    {
        "id": 1113,
        "brand": "Take & Toss",
        "sku": "MKP100000000005216"
    },
    {
        "id": 1118,
        "brand": "Capture",
        "sku": "MKP100000000154841"
    },
    {
        "id": 1115,
        "brand": "Childcare",
        "sku": "MKP100000000005069"
    },
    {
        "id": 1103,
        "brand": "Rockstar",
        "sku": "MKP100000000999903"
    },
    {
        "id": 1109,
        "brand": "Nintendo",
        "sku": "MKP100000000999909"
    },
    {
        "id": 1106,
        "brand": "Ubisoft",
        "sku": "MKP100000000999906"
    },
    {
        "id": 1151,
        "brand": "Home",
        "sku": "MKP100000000193522"
    },
    {
        "id": 1121,
        "brand": "Capture",
        "sku": "MKP100000000200550"
    },
    {
        "id": 1160,
        "brand": "House & Home",
        "sku": "MKP100000000003682"
    },
    {
        "id": 1104,
        "brand": "EA Sports",
        "sku": "MKP100000000999904"
    },
    {
        "id": 1134,
        "brand": "Driclad",
        "sku": "MKP100000000038448"
    },
    {
        "id": 1133,
        "brand": "INTE",
        "sku": "MKP100000000028096"
    },
    {
        "id": 1153,
        "brand": "Home",
        "sku": "MKP100000000193625"
    },
    {
        "id": 1137,
        "brand": null,
        "sku": "MKP100000000006637"
    },
    {
        "id": 1101,
        "brand": "Activision",
        "sku": "MKP100000000999901"
    },
    {
        "id": 1152,
        "brand": "Home",
        "sku": "MKP100000000193612"
    },
    {
        "id": 1144,
        "brand": "Guy Leech",
        "sku": "MKP100000000003873"
    },
    {
        "id": 1138,
        "brand": "LEGO",
        "sku": "MKP100000000027978"
    },
    {
        "id": 1142,
        "brand": "Tefal",
        "sku": "MKP100000000037975"
    },
    {
        "id": 1132,
        "brand": "Rok",
        "sku": "MKP100000000037233"
    },
    {
        "id": 1146,
        "brand": "Abode",
        "sku": "MKP100000000038262"
    },
    {
        "id": 1141,
        "brand": "Dunlop",
        "sku": "MKP100000000037797"
    },
    {
        "id": 1122,
        "brand": "Capture",
        "sku": "MKP100000000200561"
    },
    {
        "id": 1140,
        "brand": "Dunlop",
        "sku": "MKP100000000027984"
    },
    {
        "id": 1139,
        "brand": "FIFA",
        "sku": "MKP100000000004610"
    },
    {
        "id": 1110,
        "brand": "Driclad",
        "sku": "MKP100000000999910"
    },
    {
        "id": 1161,
        "brand": "Belkin",
        "sku": "MKP100000000037905"
    },
    {
        "id": 1130,
        "brand": "Philips",
        "sku": "MKP100000000003467"
    },
    {
        "id": 1154,
        "brand": "Home",
        "sku": "MKP100000000193674"
    },
    {
        "id": 1129,
        "brand": "Disney",
        "sku": "MKP100000000039183"
    },
    {
        "id": 1159,
        "brand": "Samsung",
        "sku": "MKP100000000040663"
    },
    {
        "id": 1120,
        "brand": "Capture",
        "sku": "MKP100000000154908"
    },
    {
        "id": 1150,
        "brand": "Hyper Extension",
        "sku": "MKP100000000041324"
    },
    {
        "id": 1124,
        "brand": "Capture",
        "sku": "MKP100000000200568"
    },
    {
        "id": 1119,
        "brand": "Capture",
        "sku": "MKP100000000154874"
    },
    {
        "id": 1105,
        "brand": "Ubisoft",
        "sku": "MKP100000000999905"
    },
    {
        "id": 1116,
        "brand": "Capture",
        "sku": "MKP100000000154824"
    },
    {
        "id": 1131,
        "brand": "Tinkers",
        "sku": "MKP100000000037994"
    },
    {
        "id": 1143,
        "brand": "Kenwood",
        "sku": "MKP100000000040474"
    },
    {
        "id": 1125,
        "brand": "Capture",
        "sku": "MKP100000000200571"
    },
    {
        "id": 1100,
        "brand": "Ubisoft",
        "sku": "MKP100000000999900"
    },
    {
        "id": 1147,
        "brand": "Wiltshire",
        "sku": "MKP100000000003922"
    },
    {
        "id": 1117,
        "brand": "Capture",
        "sku": "MKP100000000154829"
    },
    {
        "id": 1111,
        "brand": "Samsung",
        "sku": "MKP100000000999911"
    },
    {
        "id": 1107,
        "brand": "Folio SF",
        "sku": "MKP100000000999907"
    },
    {
        "id": 1162,
        "brand": "Samsung",
        "sku": "MKP100000000025008"
    },
    {
        "id": 1126,
        "brand": "Capture",
        "sku": "MKP100000000200585"
    },
    {
        "id": 1157,
        "brand": "Coolway",
        "sku": "MKP100000000037097"
    }
];

export default allProducts;
