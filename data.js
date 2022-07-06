var APP_DATA = {
  "scenes": [
    {
      "id": "0-extcaseta",
      "name": "ExtCaseta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6634442486166847,
        "pitch": -0.3211706497954623,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 1.4937869275050772,
          "pitch": 0.05367070004573726,
          "rotation": 0,
          "target": "1-extpuerta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-extpuerta",
      "name": "ExtPuerta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.075333817356551,
        "pitch": -0.48489178170935787,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 3.114184958168247,
          "pitch": 0.018678544282344944,
          "rotation": 0,
          "target": "2-planta-baja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-planta-baja",
      "name": "Planta baja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.877725406240554,
        "pitch": 0,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -3.034819114645213,
          "pitch": -0.19475945438868436,
          "rotation": 0,
          "target": "3-401"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-401",
      "name": "401",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "4-distribuidor",
      "name": "Distribuidor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.571826098455558,
        "pitch": 0.006822941287115469,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 2.0325027243613114,
          "pitch": 0.14304993303690416,
          "rotation": 0,
          "target": "5-cocina"
        },
        {
          "yaw": 1.0095738912519892,
          "pitch": 0.12047933189195703,
          "rotation": 0,
          "target": "6-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.3754286877086308,
        "pitch": 0.04991532183185754,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 1.3788770156278183,
          "pitch": 0.05335846887018647,
          "rotation": 0,
          "target": "6-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-sala",
      "name": "Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5400245589248618,
        "pitch": 0.29122601447869556,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 2.3465915377965567,
          "pitch": 0.0314276138443077,
          "rotation": 1.5707963267948966,
          "target": "7-bao"
        },
        {
          "yaw": 1.5451276492793973,
          "pitch": 0.09982296238117172,
          "rotation": 0,
          "target": "5-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.0341856262477744,
        "pitch": 0.40984852887331513,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -1.3308437571799239,
          "pitch": 0.005437255700433852,
          "rotation": 1.5707963267948966,
          "target": "8-recmara-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-recmara-1",
      "name": "Recámara 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.611983614938226,
        "pitch": 0.08029385118068788,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -0.325527198042483,
          "pitch": 0.09457751884871435,
          "rotation": 7.853981633974483,
          "target": "9-recmara-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-recmara-2",
      "name": "Recámara 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.1315288217469757,
        "pitch": 0.12596997113012876,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -2.5229957694294534,
          "pitch": 0.07646564005916012,
          "rotation": 1.5707963267948966,
          "target": "4-distribuidor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Demo 2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
