let categories = [
  {
    type: "libros",
    path: "/libros",
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677958682/WhatsApp_Image_2021-03-03_at_2.38.34_PM_1_lray3x.jpg",
  },
  {
    type: "Serigrafías",
    path: "/serigrafías",
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677959710/seris_x2kk3x.jpg",
  },
  {
    type: "Postales",
    path: "/postales",
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677960620/postales_usqqoh.jpg",
  },
  {
    type: "Metálicos",
    path: "/metalicos",
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677811637/WhatsApp_Image_2021-03-03_at_2.38.34_PM_1_msl8cb.jpg",
  },
  {
    type: "Remeras",
    path: "/remeras",
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677960941/remeras_s5cwoj.jpg",
  },
  {
    type: "accesorios",
    path: "/accesorios",
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677961705/accesorios_jayqfs.jpg",
  },
];
let database = [
  {
    name: "Solos y de Noche",
    category: "libros",
    stock: 8,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677984397/IMG_20210211_162158_111_zbsncw.jpg",
    available: true,
    price: "$6500",
    id: 1,
    description:
      "Solos y de Noche es un álbum de recuerdos, un libro de 256 páginas se rememora la trayectoria de Los Redondos, sus discos, sus misas, su mística. Con prólogo de la pluma del Maestro Rocambole.",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677984397/IMG_20210211_162158_111_zbsncw.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677958682/WhatsApp_Image_2021-03-03_at_2.38.34_PM_1_lray3x.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677984335/IMG_20201110_110822_069_kulre3.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677984335/IMG_20201110_110822_067_xy2s0v.jpg",
    ],
  },
  {
    name: "De Regreso a Oktubre",
    category: "libros",
    stock: 8,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677984566/290398162_874374700193715_3732830641627625658_n_fjhq5y.jpg",
    available: true,
    price: "$5500",
    id: 2,
    description:
      "De Regreso a Oktubre es un libro que reúne todo el proceso creativo que llevó al desarrollo final del arte de tapas del mítico disco Oktubre, incluyendo imágenes inéditas que han quedado excluídas en la obra final. ",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677984566/290398162_874374700193715_3732830641627625658_n_fjhq5y.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677984567/280154675_739379957234433_2883155155783990434_n_kcr06l.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677984566/279794500_4544230905677158_151688253146294200_n_s0iycp.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677984566/279901162_527480322238725_3916588293613717300_n_r7q8gm.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677984566/279920666_321177733421868_6357175507633618512_n_u2onus.jpg",
    ],
  },
  {
    name: "Arte Diseño y Contracultura",
    category: "libros",
    stock: 8,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677984650/image-3_locayd.jpg",
    available: true,
    price: "$6500",
    id: 3,
    description:
      "Rocambole - Arte, Diseño y Contracultura recorre a través de 200 páginas toda la obra de Rocambole. Su universo estético y temático, La Cofradía, el arte ricotero, la obra plástica y la experiencia docente, se despliegan a través de textos propios, ilustraciones, pinturas, aerografías, bocetos, dibujos, gráfica, fotografías y material inédito.",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677984650/image-3_locayd.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677984834/IMG_20220926_123824061_HDR_oodztf.jpg",
    ],
  },

  {
    name: "Postales Rocambole Vol.1",
    category: "Postales",
    stock: 8,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047224/Coleccion%202/image-4_rd24pj.jpg",
    available: true,
    price: "$2000",
    id: 4,
    description: "14 postales Rocambole con packaging.",
    measure: "10x15cm.",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047224/Coleccion%202/image-4_rd24pj.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677985747/Postales_Rojas_ovnx9p.jpg",
    ],
  },
  {
    name: "Postales Rocambole Vol.2",
    category: "Postales",
    stock: 8,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046640/Coleccion%202/image-5_cunh5b.jpg",
    available: false,
    price: "$2000",
    id: 5,
    description: "13 postales Rocambole con packaging.",
    measure: "10x15cm.",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046640/Coleccion%202/image-5_cunh5b.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677985747/Postales_negras_zrnzui.jpg",
    ],
  },
  {
    name: "Postales Rocambole Vol.3",
    category: "Postales",
    stock: 8,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046854/Coleccion%202/image-6_bq6kad.jpg",
    available: true,
    price: "$2000",
    id: 6,
    description: "12 postales Rocambole con packaging.",
    measure: "10x15cm.",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046854/Coleccion%202/image-6_bq6kad.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677986202/IMG_20221030_151447674_HDR_vackxz.jpg",
    ],
  },
  {
    name: "Postales Rocambole Vol.3 Extended",
    category: "Postales",
    stock: 8,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047073/IMG_20221020_134815315_HDR_tkwanh.jpg",
    available: true,
    price: "$2500",
    id: 7,
    description: "20 postales Rocambole con packaging. ",
    measure: "10x15cm.",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047073/IMG_20221020_134815315_HDR_tkwanh.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677986197/IMG_20221020_135824610_HDR_orr1ok.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677986295/IMG_20221020_135555721_HDR_auzjr4.jpg",
    ],
  },

  {
    name: "Estatuilla Luzbelito",
    category: "metalicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677986349/IMG-20210303-WA0018_yekzgf.jpg",
    available: false,
    price: "$3000",
    id: 8,
    description:
      "Busto réplica de Luzbelito sobre box de doble función, contenedora y también a modo de atril de exposición. Fabricado por el orfebre Julio Crispino, responsable de la creación del Escapulario Momo Sampler.",
    measure: "17cm de altura (abierto)",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677986349/IMG-20210303-WA0018_yekzgf.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677986352/IMG-20210303-WA0022_iocj0d.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677986378/IMG_20210922_104712016_HDR_fkoixp.jpg",
    ],
  },
  {
    name: "Escapulario Momo Sampler",
    category: "metalicos",
    stock: 3,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677986802/momo_tmxdkv.jpg",
    available: true,
    price: "$1000",
    id: 9,
    description:
      "Escapulario realizado en una aleación compuesta por plomo, antimonio y estaño. Fabricados por el orfebre Julio Crispino, responsable de la creación del Escapulario Momo Sampler.",
    measure: "6cm de diámetro, 0,5 cm de espesor",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677986802/momo_tmxdkv.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678056012/IMG-20210219-WA0052_p9mr6u.jpg",
    ],
  },
  {
    name: "Medallón Luzbelito",
    category: "metalicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678040655/image-10_ytloqw.png",
    available: true,
    price: "$1500",
    id: 10,
    description:
      "Medallones realizados en una aleación compuesta por plomo, antimonio y estaño. Fabricados por el orfebre Julio Crispino, responsable de la creación del Escapulario Momo Sampler. Dorso grabado con escudo de Rocambole",
    measure: "6cm de diámetro, 0,5 cm de espesor",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678040655/image-10_ytloqw.png",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678040606/luzbelito_ieb842.jpg",
    ],
  },
  {
    name: "Medallón Esclavo",
    category: "metalicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678040753/image-11_hou3k0.jpg",
    available: true,
    price: "$1500",
    id: 11,
    description:
      "Medallones realizados en una aleación compuesta por plomo, antimonio y estaño. Fabricados por el orfebre Julio Crispino, responsable de la creación del Escapulario Momo Sampler. Dorso grabado con escudo de Rocambole",
    measure: "6cm de diámetro, 0,5 cm de espesor",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678040753/image-11_hou3k0.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678040605/esclavo_ys2thc.jpg",
    ],
  },
  {
    name: "Medallón Oktubre",
    category: "metalicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678040809/image-12_md5fay.jpg",
    available: true,
    price: "$1500",
    id: 12,
    description:
      "Medallones realizados en una aleación compuesta por plomo, antimonio y estaño. Fabricados por el orfebre Julio Crispino, responsable de la creación del Escapulario Momo Sampler. Dorso grabado con escudo de Rocambole",
    measure: "6cm de diámetro, 0,5 cm de espesor",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678040809/image-12_md5fay.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678040606/oktubre_bhdtbh.jpg",
    ],
  },
  {
    name: "Colección Medallones Esclavo ed. limitada",
    category: "metalicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678041060/coleccion_esclavo_2_xtcm31.jpg",
    available: true,
    price: "$1500 c/u",
    id: 13,
    description:
      "Medallones realizados en una aleación compuesta por plomo, antimonio y estaño. Fabricados por el orfebre Julio Crispino, responsable de la creación del Escapulario Momo Sampler. Dorso grabado con escudo de Rocambole",
    measure: "6cm de diámetro, 0,5 cm de espesor",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678041060/coleccion_esclavo_2_xtcm31.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678041058/coleccion_esclavo_eqgzgn.jpg",
    ],
  },
  {
    name: "Escapulario Gigante Super Momo",
    category: "metalicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678041561/IMG_20201111_191729_168_fpuzym.jpg",
    available: true,
    price: "$30.000",
    id: 14,
    description:
      "Numerado y firmado por Julio Crispino, orfebre responsable de la fabricación del original Momo Sampler. Contenido en un Boxset Premium junto a un Escapulario medida original y facsímiles históricos.",
    measure: "16x15cm, 3cm de espesor. Peso aproximado: 3Kg.",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678041561/IMG_20201111_191729_168_fpuzym.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678041534/IMG_20201102_145014_978_lh6wav.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678041481/IMG-20210304-WA0002_znfhux.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678041509/IMG-20201105-WA0042_hlmwgg.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678041505/IMG-20201112-WA0072_oqvv0h.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678041240/Super_Momo_bxyhk1.jpg",
    ],
  },

  {
    name: "Remera Oktubre Unisex",
    category: "Remeras",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678042829/image-15_jqfft2.jpg",
    available: false,
    price: "$5500",
    id: 15,
    description: "Remeras oficiales Rocambole. Edición limitada",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678042829/image-15_jqfft2.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678134276/descarga_dadnn5.png",
    ],
  },
  {
    name: "Remera Oktubre Dama",
    category: "Remeras",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678042788/image-16_vnwjqc.jpg",
    available: true,
    price: "$5500",
    id: 16,
    description: "Remeras oficiales Rocambole. Edición limitada",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678042788/image-16_vnwjqc.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678134276/descarga_dadnn5.png",
    ],
  },
  {
    name: "Remera Momo Sampler Unisex",
    category: "Remeras",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678042897/image-17_pxznol.png",
    available: true,
    price: "$5500",
    id: 17,
    description: "Remeras oficiales Rocambole. Edición limitada",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678042897/image-17_pxznol.png",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678134409/WhatsApp_Image_2020-12-02_at_7.50.05_PM_dcfwgo.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678134278/descarga_1_nh79v3.png",
    ],
  },
  {
    name: "Remera Momo Sampler Dama",
    category: "Remeras",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678042906/image-18_kxo7zg.jpg",
    available: true,
    price: "$5500",
    id: 18,
    description: "Remeras oficiales Rocambole. Edición limitada",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678042906/image-18_kxo7zg.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678134409/WhatsApp_Image_2020-12-02_at_7.50.05_PM_dcfwgo.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678134278/descarga_1_nh79v3.png",
    ],
  },
  {
    name: "Remera Luzbelito Unisex",
    category: "Remeras",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678042907/image-19_nrss5k.jpg",
    available: true,
    price: "$5500",
    id: 19,
    description: "Remeras oficiales Rocambole. Edición limitada",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678042907/image-19_nrss5k.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678134435/WhatsApp_Image_2021-07-12_at_5.59.24_PM_1_ugsxji.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678134276/descarga_dadnn5.png",
    ],
  },
  {
    name: "Remera Luzbelito Dama",
    category: "Remeras",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678042905/image-20_y2xzlo.jpg",
    available: true,
    price: "$5500",
    id: 20,
    description: "Remeras oficiales Rocambole. Edición limitada",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678042905/image-20_y2xzlo.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678134435/WhatsApp_Image_2021-07-12_at_5.59.25_PM_whd56c.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678134276/descarga_dadnn5.png",
    ],
  },

  {
    name: "Llavero metálico PR",
    category: "accesorios",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678043123/image-21_xwiigw.jpg",
    available: true,
    price: "$500",
    id: 21,
    description:
      "Llavero artesanal fabricado en una aleación de plomo, antimonio y estaño",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678043123/image-21_xwiigw.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678043182/IMG_20221222_125111802_brwoek.jpg",
    ],
  },
  {
    name: "Llavero Oktubre",
    category: "accesorios",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678043212/image-22_pliqqy.jpg",
    available: false,
    price: "$500",
    id: 22,
    description:
      "Llavero artesanal fabricado en una aleación de plomo, antimonio y estaño",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678043212/image-22_pliqqy.jpg",
    ],
  },
  {
    name: "Llavero Luzbelito 3D",
    category: "accesorios",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678044135/IMG_20230305_161836195_HDR_ysxiwg.jpg",
    available: true,
    price: "$1000",
    id: 23,
    description: "Llavero artesanal fabricado en impresión 3D",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678044135/IMG_20230305_161836195_HDR_ysxiwg.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678044137/IMG_20230305_160857571_HDR_ungdql.jpg",
    ],
  },
  {
    name: "Pin Rocambole",
    category: "accesorios",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678043963/IMG_20230305_161000691_sx8mze.jpg",
    available: true,
    price: "$400",
    id: 24,
    description:
      "Pin artesanal fabricado en una aleación de plomo, antimonio y estaño",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678043963/IMG_20230305_161000691_sx8mze.jpg",
    ],
  },

  {
    name: "Libreta A6 Rocambole",
    category: "accesorios",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045093/IMG_20230305_162812969_HDR_mt3ok6.jpg",
    available: true,
    price: "$1500",
    id: 25,
    description: "Libretas anilladas con ilustración en su tapa.",
    measure: "10x15cm.",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045093/IMG_20230305_162812969_HDR_mt3ok6.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045093/IMG_20230305_163011579_HDR_d5s1um.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045093/IMG_20230305_162928755_HDR_efueze.jpg",
    ],
  },

  {
    name: "Colección Afiches Ed. Limitada Vol. I",
    category: "Serigrafías",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045889/image-26_guede5.png",
    measures: "35x50cm",
    available: true,
    price: "$7500",
    id: 51,
    description:
      "Colección de 5 Afiches de recitales históricos, impresos en serigrafía artesanal. Sobre contenedor incluído. Modelos: Huracán 1993, Paladium 1986, Margarita Xirgu 1982, Cerrito 1978, La Plata 1989.",
    measure: "35x50cm.",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045889/image-26_guede5.png",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045870/descarga_4_cdwwnu.png",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045870/descarga_3_jtfbze.png",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045870/descarga_2_czvrsn.png",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045870/descarga_1_l3iua7.png",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045870/descarga_g8thqz.png",
    ],
  },
  {
    name: "Colección Afiches Ed. Limitada Vol. II",
    category: "Serigrafías",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045991/Coleccion%202/descarga_5_zodjqe.png",
    measures: "35x50cm",
    available: true,
    price: "$7500",
    id: 26,
    description:
      "Colección de 5 Afiches de recitales históricos, impresos en serigrafía artesanal. Sobre contenedor incluído. Modelos: Atenas 1986, La Nave de los Locos 1984, La Plata 1988, Microestado de Lanús 1992, Teatro Bambalinas 1982 ",
    measure: "35x50cm.",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045991/Coleccion%202/descarga_5_zodjqe.png",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045990/Coleccion%202/descarga_10_jyetly.png",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045990/Coleccion%202/descarga_6_uzrn4e.png",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045991/Coleccion%202/descarga_8_kdc32h.png",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045991/Coleccion%202/descarga_9_buey4u.png",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678045991/Coleccion%202/descarga_7_aio5sb.png",
    ],
  },
  {
    name: "Serigrafía Esclavo",
    category: "Serigrafías",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046045/Coleccion%202/image-27_wx5cdh.jpg",
    measures: "50x70cm",
    available: true,
    price: "$3750",
    id: 27,
    description:
      "Láminas artesanales firmadas, selladas y numeradas. Contenidas en un sobre individual de cartulina kraft, con el escudo de Rocambole impreso.",
    measure: "50x70cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046045/Coleccion%202/image-27_wx5cdh.jpg",
    ],
  },
  {
    name: "Serigrafía Oktubre",
    category: "Serigrafías",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046060/Coleccion%202/image-28_emvfgh.jpg",
    measures: "50x70cm",
    available: true,
    price: "$3750",
    id: 28,
    description:
      "Láminas artesanales firmadas, selladas y numeradas. Contenidas en un sobre individual de cartulina kraft, con el escudo de Rocambole impreso.",
    measure: "50x70cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046060/Coleccion%202/image-28_emvfgh.jpg",
    ],
  },
  {
    name: "Serigrafía Luzbelito",
    category: "Serigrafías",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678048087/Coleccion%202/image-29_iau4vh_ujxc4v.jpg",
    measures: "50x70cm",
    available: true,
    price: "$3750",
    id: 29,
    description:
      "Láminas artesanales firmadas, selladas y numeradas. Contenidas en un sobre individual de cartulina kraft, con el escudo de Rocambole impreso.",
    measure: "50x70cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678048087/Coleccion%202/image-29_iau4vh_ujxc4v.jpg",
    ],
  },
  {
    name: "Serigrafía San Martín",
    category: "Serigrafías",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678048015/Coleccion%202/image-30_kgkmzl_ge9wbk.jpg",
    measures: "50x70cm",
    available: true,
    price: "$3750",
    id: 30,
    description:
      "Láminas artesanales firmadas, selladas y numeradas. Contenidas en un sobre individual de cartulina kraft, con el escudo de Rocambole impreso.",
    measure: "50x70cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678048015/Coleccion%202/image-30_kgkmzl_ge9wbk.jpg",
    ],
  },
  {
    name: "Serigrafía Benkos",
    category: "Serigrafías",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047873/Coleccion%202/image-31_o34k7t_sl3mdv.jpg",
    measures: "50x70cm",
    available: true,
    price: "$3750",
    id: 31,
    description:
      "Láminas artesanales firmadas, selladas y numeradas. Contenidas en un sobre individual de cartulina kraft, con el escudo de Rocambole impreso.",
    measure: "50x70cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047873/Coleccion%202/image-31_o34k7t_sl3mdv.jpg",
    ],
  },
  {
    name: "Serigrafía Huitzilopochtli",
    category: "Serigrafías",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047818/Coleccion%202/image-32_eth5h9_uolxtj.jpg",
    measures: "50x70cm",
    available: false,
    price: "$3750",
    id: 32,
    description:
      "Láminas artesanales firmadas, selladas y numeradas. Contenidas en un sobre individual de cartulina kraft, con el escudo de Rocambole impreso.",
    measure: "50x70cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047818/Coleccion%202/image-32_eth5h9_uolxtj.jpg",
    ],
  },
  {
    name: "Serigrafía El Puño",
    category: "Serigrafías",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047740/Coleccion%202/image-33_fi1f1z_hyyiy2.jpg",
    measures: "50x70cm",
    available: true,
    price: "$3750",
    id: 33,
    description:
      "Láminas artesanales firmadas, selladas y numeradas. Contenidas en un sobre individual de cartulina kraft, con el escudo de Rocambole impreso.",
    measure: "50x70cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047740/Coleccion%202/image-33_fi1f1z_hyyiy2.jpg",
    ],
  },
  {
    name: "Serigrafía El Pensador",
    category: "Serigrafías",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047635/Coleccion%202/image-34_otrjfc_c60gho.jpg",
    measures: "50x70cm",
    available: false,
    price: "$3750",
    id: 34,
    description:
      "Láminas artesanales firmadas, selladas y numeradas. Contenidas en un sobre individual de cartulina kraft, con el escudo de Rocambole impreso.",
    measure: "50x70cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047635/Coleccion%202/image-34_otrjfc_c60gho.jpg",
    ],
  },
  {
    name: "Serigrafía El Cincuentayseis",
    category: "Serigrafías",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047586/Coleccion%202/image-35_yracpi_kkdyu5.jpg",
    measures: "50x70cm",
    available: true,
    price: "$3750",
    id: 35,
    description:
      "Láminas artesanales firmadas, selladas y numeradas. Contenidas en un sobre individual de cartulina kraft, con el escudo de Rocambole impreso.",
    measure: "50x70cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047586/Coleccion%202/image-35_yracpi_kkdyu5.jpg",
    ],
  },
  {
    name: "Serigrafía Frida y León",
    category: "Serigrafías",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047524/Coleccion%202/image-36_k36xym_xmvlc1.jpg",
    measures: "50x70cm",
    available: true,
    price: "$3750",
    id: 36,
    description:
      "Láminas artesanales firmadas, selladas y numeradas. Contenidas en un sobre individual de cartulina kraft, con el escudo de Rocambole impreso.",
    measure: "50x70cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047524/Coleccion%202/image-36_k36xym_xmvlc1.jpg",
    ],
  },
  {
    name: "Serigrafía Lenin",
    category: "Serigrafías",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046256/Coleccion%202/image-37_yka7sm.jpg",
    measures: "50x70cm",
    available: true,
    price: "$3750",
    id: 37,
    description:
      "Láminas artesanales firmadas, selladas y numeradas. Contenidas en un sobre individual de cartulina kraft, con el escudo de Rocambole impreso.",
    measure: "50x70cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046256/Coleccion%202/image-37_yka7sm.jpg",
    ],
  },
  {
    name: "Serigrafía Conectado",
    category: "Serigrafías",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047489/Coleccion%202/image-38_ynlzp3_m0upw9.jpg",
    measures: "50x70cm",
    available: false,
    price: "$3750",
    id: 38,
    description:
      "Láminas artesanales firmadas, selladas y numeradas. Contenidas en un sobre individual de cartulina kraft, con el escudo de Rocambole impreso.",
    measure: "50x70cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047489/Coleccion%202/image-38_ynlzp3_m0upw9.jpg",
    ],
  },
  {
    name: "Serigrafía Ahora!",
    category: "Serigrafías",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047429/Coleccion%202/image-39_oc6nvu_hhkdxb.jpg",
    measures: "50x70cm",
    available: false,
    price: "$3750",
    id: 39,
    description:
      "Láminas artesanales firmadas, selladas y numeradas. Contenidas en un sobre individual de cartulina kraft, con el escudo de Rocambole impreso.",
    measure: "50x70cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678047429/Coleccion%202/image-39_oc6nvu_hhkdxb.jpg",
    ],
  },

  {
    name: "Oktubre",
    category: "Cerámicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046346/Coleccion%202/image-40_lbtfno.jpg",
    measures: "20x20cm",
    available: false,
    price: "$2500",
    id: 40,
    description:
      "Placas de cerámico impresas de los discos de PR. Incluye atriles para exponer",
    measure: "20x20cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046346/Coleccion%202/image-40_lbtfno.jpg",
    ],
  },
  {
    name: "Esclavo",
    category: "Cerámicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046349/Coleccion%202/image-41_q58i3o.jpg",
    measures: "20x20cm",
    available: false,
    price: "$2500",
    id: 41,
    description:
      "Placas de cerámico impresas de los discos de PR. Incluye atriles para exponer",
    measure: "20x20cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046349/Coleccion%202/image-41_q58i3o.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046407/Coleccion%202/IMG-20201015-WA0024_vpf2qc.jpg",
    ],
  },
  {
    name: "Luzbelito",
    category: "Cerámicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046387/Coleccion%202/IMG_20200808_202600287_ubizt0.jpg",
    measures: "20x20cm",
    available: false,
    price: "$2500",
    id: 42,
    description:
      "Placas de cerámico impresas de los discos de PR. Incluye atriles para exponer",
    measure: "20x20cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046387/Coleccion%202/IMG_20200808_202600287_ubizt0.jpg",
    ],
  },
  {
    name: "Un baión para el ojo idiota",
    category: "Cerámicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046348/Coleccion%202/image-43_elj2n8.jpg",
    measures: "20x20cm",
    available: false,
    price: "$2500",
    id: 43,
    description:
      "Placas de cerámico impresas de los discos de PR. Incluye atriles para exponer",
    measure: "20x20cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046348/Coleccion%202/image-43_elj2n8.jpg",
    ],
  },
  {
    name: "Último bondi a Finisterre",
    category: "Cerámicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046348/Coleccion%202/image-44_b0y9gr.jpg",
    measures: "20x20cm",
    available: true,
    price: "$2500",
    id: 44,
    description:
      "Placas de cerámico impresas de los discos de PR. Incluye atriles para exponer",
    measure: "20x20cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046348/Coleccion%202/image-44_b0y9gr.jpg",
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046390/Coleccion%202/IMG_20200808_202502449_zgjf0n.jpg",
    ],
  },
  {
    name: "Lobo Suelto",
    category: "Cerámicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046349/Coleccion%202/image-45_mvvzak.jpg",
    measures: "20x20cm",
    available: true,
    price: "$2500",
    id: 45,
    description:
      "Placas de cerámico impresas de los discos de PR. Incluye atriles para exponer",
    measure: "20x20cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046349/Coleccion%202/image-45_mvvzak.jpg",
    ],
  },
  {
    name: "La Mosca y la Sopa",
    category: "Cerámicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046347/Coleccion%202/image-46_e7kdgo.jpg",
    measures: "20x20cm",
    available: false,
    price: "$2500",
    id: 46,
    description:
      "Placas de cerámico impresas de los discos de PR. Incluye atriles para exponer",
    measure: "20x20cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046347/Coleccion%202/image-46_e7kdgo.jpg",
    ],
  },
  {
    name: "¡Bang! ¡Bang! Estás liquidado",
    category: "Cerámicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046347/Coleccion%202/image-47_k9vgpp.jpg",
    measures: "20x20cm",
    available: false,
    price: "$2500",
    id: 47,
    description:
      "Placas de cerámico impresas de los discos de PR. Incluye atriles para exponer",
    measure: "20x20cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046347/Coleccion%202/image-47_k9vgpp.jpg",
    ],
  },
  {
    name: "Momo Sampler",
    category: "Cerámicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046347/Coleccion%202/image-48_nwlzpp.jpg",
    measures: "20x20cm",
    available: false,
    price: "$2500",
    id: 48,
    description:
      "Placas de cerámico impresas de los discos de PR. Incluye atriles para exponer",
    measure: "20x20cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046347/Coleccion%202/image-48_nwlzpp.jpg",
    ],
  },
  {
    name: "Patricio Rey",
    category: "Cerámicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046348/Coleccion%202/image-49_apg4cn.jpg",
    measures: "20x20cm",
    available: false,
    price: "$2500",
    id: 49,
    description:
      "Placas de cerámico impresas de los discos de PR. Incluye atriles para exponer",
    measure: "20x20cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046348/Coleccion%202/image-49_apg4cn.jpg",
    ],
  },
  {
    name: "Gulp!",
    category: "Cerámicos",
    stock: 0,
    img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046348/Coleccion%202/image-50_rcyjy0.jpg",
    measures: "20x20cm",
    available: false,
    price: "$2500",
    id: 50,
    description:
      "Placas de cerámico impresas de los discos de PR. Incluye atriles para exponer",
    measure: "20x20cm",
    allPics: [
      "https://res.cloudinary.com/dcbswyqrd/image/upload/v1678046348/Coleccion%202/image-50_rcyjy0.jpg",
    ],
  },
];
module.exports = { categories, database };
