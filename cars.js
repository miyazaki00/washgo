/** メーカー → 車種 → サイズ（S / M / L / LL / XL） */
window.WASHGO_CARS = {
  manufacturers: [
    {
      id: "lexus",
      name: "レクサス",
      models: [
        { name: "CT", size: "S" }, { name: "UX", size: "S" }, { name: "LBX", size: "S" },
        { name: "IS", size: "M" }, { name: "ES", size: "M" }, { name: "HS", size: "M" },
        { name: "NX", size: "M" }, { name: "RC", size: "M" }, { name: "RZ", size: "M" }, { name: "SC", size: "M" },
        { name: "GS", size: "L" }, { name: "LC", size: "L" }, { name: "LS", size: "L" }, { name: "RX", size: "L" },
        { name: "GX", size: "LL" }, { name: "LM", size: "LL" },
        { name: "LX", size: "XL" }, { name: "LFA", size: "L" },
        { name: "その他", size: "M" },
      ],
    },
    {
      id: "toyota",
      name: "トヨタ",
      models: [
        { name: "アクア", size: "S" }, { name: "ヤリス", size: "S" }, { name: "ヤリスクロス", size: "S" },
        { name: "カローラ", size: "M" }, { name: "カローラツーリング", size: "M" }, { name: "プリウス", size: "M" },
        { name: "カムリ", size: "M" }, { name: "bZ4X", size: "M" }, { name: "C-HR", size: "M" },
        { name: "ハリアー", size: "L" }, { name: "RAV4", size: "L" }, { name: "クラウン", size: "L" },
        { name: "ノア", size: "L" }, { name: "ヴォクシー", size: "L" }, { name: "シエンタ", size: "M" },
        { name: "アルファード", size: "LL" }, { name: "ヴェルファイア", size: "LL" }, { name: "グランエース", size: "LL" },
        { name: "ランドクルーザー", size: "XL" }, { name: "ランドクルーザープラド", size: "LL" },
        { name: "ハイエース", size: "LL" }, { name: "その他", size: "M" },
      ],
    },
    {
      id: "nissan",
      name: "日産",
      models: [
        { name: "ノート", size: "S" }, { name: "マーチ", size: "S" }, { name: "ルークス", size: "S" },
        { name: "セレナ", size: "L" }, { name: "エクストレイル", size: "L" }, { name: "スカイライン", size: "M" },
        { name: "フーガ", size: "L" }, { name: "リーフ", size: "M" }, { name: "アリア", size: "M" },
        { name: "キックス", size: "M" }, { name: "ジューク", size: "S" }, { name: "エルグランド", size: "LL" },
        { name: "パトロール", size: "XL" }, { name: "その他", size: "M" },
      ],
    },
    {
      id: "honda",
      name: "ホンダ",
      models: [
        { name: "N-BOX", size: "S" }, { name: "N-WGN", size: "S" }, { name: "N-ONE", size: "S" },
        { name: "フィット", size: "S" }, { name: "シビック", size: "M" }, { name: "インサイト", size: "M" },
        { name: "ヴェゼル", size: "M" }, { name: "ZR-V", size: "M" }, { name: "ステップワゴン", size: "L" },
        { name: "オデッセイ", size: "L" }, { name: "フリード", size: "M" }, { name: "CR-V", size: "L" },
        { name: "その他", size: "M" },
      ],
    },
    {
      id: "mazda",
      name: "マツダ",
      models: [
        { name: "MAZDA2", size: "S" }, { name: "MAZDA3", size: "M" }, { name: "MAZDA6", size: "M" },
        { name: "CX-3", size: "S" }, { name: "CX-30", size: "M" }, { name: "CX-5", size: "L" },
        { name: "CX-60", size: "L" }, { name: "CX-8", size: "LL" }, { name: "MX-5", size: "S" },
        { name: "その他", size: "M" },
      ],
    },
    {
      id: "subaru",
      name: "スバル",
      models: [
        { name: "インプレッサ", size: "M" }, { name: "レヴォーグ", size: "M" }, { name: "WRX", size: "M" },
        { name: "XV", size: "M" }, { name: "フォレスター", size: "L" }, { name: "アウトバック", size: "L" },
        { name: "レガシィ", size: "M" }, { name: "BRZ", size: "S" }, { name: "その他", size: "M" },
      ],
    },
    {
      id: "mitsubishi",
      name: "三菱",
      models: [
        { name: "eK", size: "S" }, { name: "デリカD:5", size: "LL" }, { name: "アウトランダー", size: "L" },
        { name: "エクリプスクロス", size: "M" }, { name: "パジェロ", size: "XL" }, { name: "その他", size: "M" },
      ],
    },
    {
      id: "suzuki",
      name: "スズキ",
      models: [
        { name: "アルト", size: "S" }, { name: "ワゴンR", size: "S" }, { name: "スペーシア", size: "S" },
        { name: "ハスラー", size: "S" }, { name: "スイフト", size: "S" }, { name: "ソリオ", size: "S" },
        { name: "ジムニー", size: "S" }, { name: "エブリイ", size: "S" }, { name: "その他", size: "S" },
      ],
    },
    {
      id: "daihatsu",
      name: "ダイハツ",
      models: [
        { name: "タント", size: "S" }, { name: "ムーヴ", size: "S" }, { name: "ミライース", size: "S" },
        { name: "タフト", size: "S" }, { name: "ロッキー", size: "S" }, { name: "トール", size: "S" },
        { name: "その他", size: "S" },
      ],
    },
    {
      id: "mitsuoka",
      name: "光岡自動車",
      models: [
        { name: "オロチ", size: "L" }, { name: "ヒミコ", size: "M" }, { name: "その他", size: "M" },
      ],
    },
    {
      id: "mercedes",
      name: "メルセデス・ベンツ",
      models: [
        { name: "Aクラス", size: "M" }, { name: "Cクラス", size: "M" }, { name: "Eクラス", size: "L" },
        { name: "Sクラス", size: "L" }, { name: "GLA", size: "M" }, { name: "GLB", size: "M" },
        { name: "GLC", size: "L" }, { name: "GLE", size: "LL" }, { name: "GLS", size: "XL" },
        { name: "Gクラス", size: "XL" }, { name: "その他", size: "M" },
      ],
    },
    {
      id: "mercedes-amg",
      name: "メルセデスAMG",
      models: [
        { name: "A 35", size: "M" }, { name: "C 43", size: "M" }, { name: "E 53", size: "L" },
        { name: "GT", size: "L" }, { name: "その他", size: "M" },
      ],
    },
    {
      id: "mercedes-maybach",
      name: "メルセデスマイバッハ",
      models: [{ name: "Sクラス", size: "L" }, { name: "GLS", size: "XL" }, { name: "その他", size: "L" }],
    },
    {
      id: "maybach",
      name: "マイバッハ",
      models: [{ name: "57", size: "L" }, { name: "62", size: "L" }, { name: "その他", size: "L" }],
    },
    {
      id: "smart",
      name: "スマート",
      models: [{ name: "fortwo", size: "S" }, { name: "forfour", size: "S" }, { name: "その他", size: "S" }],
    },
    {
      id: "bmw",
      name: "BMW",
      models: [
        { name: "1シリーズ", size: "M" }, { name: "2シリーズ", size: "M" }, { name: "3シリーズ", size: "M" },
        { name: "5シリーズ", size: "L" }, { name: "7シリーズ", size: "L" }, { name: "X1", size: "M" },
        { name: "X3", size: "L" }, { name: "X5", size: "LL" }, { name: "X7", size: "XL" },
        { name: "その他", size: "M" },
      ],
    },
    {
      id: "audi",
      name: "アウディ",
      models: [
        { name: "A1", size: "S" }, { name: "A3", size: "M" }, { name: "A4", size: "M" },
        { name: "A6", size: "L" }, { name: "A8", size: "L" }, { name: "Q2", size: "M" },
        { name: "Q3", size: "M" }, { name: "Q5", size: "L" }, { name: "Q7", size: "LL" },
        { name: "Q8", size: "XL" }, { name: "その他", size: "M" },
      ],
    },
    {
      id: "vw",
      name: "フォルクスワーゲン",
      models: [
        { name: "ポロ", size: "S" }, { name: "ゴルフ", size: "M" }, { name: "パサート", size: "M" },
        { name: "T-Cross", size: "M" }, { name: "T-Roc", size: "M" }, { name: "ティグアン", size: "L" },
        { name: "トゥアレグ", size: "LL" }, { name: "その他", size: "M" },
      ],
    },
    {
      id: "opel",
      name: "オペル",
      models: [
        { name: "コルサ", size: "S" }, { name: "アストラ", size: "M" }, { name: "その他", size: "M" },
      ],
    },
    {
      id: "porsche",
      name: "ポルシェ",
      models: [
        { name: "718", size: "M" }, { name: "911", size: "M" }, { name: "パナメーラ", size: "L" },
        { name: "マカン", size: "M" }, { name: "カイエン", size: "L" }, { name: "タイカン", size: "L" },
        { name: "その他", size: "M" },
      ],
    },
    {
      id: "mini",
      name: "ミニ",
      models: [
        { name: "3ドア", size: "S" }, { name: "5ドア", size: "S" }, { name: "クラブマン", size: "M" },
        { name: "カントリーマン", size: "M" }, { name: "その他", size: "S" },
      ],
    },
    {
      id: "cadillac",
      name: "キャデラック",
      models: [
        { name: "CT4", size: "M" }, { name: "CT5", size: "L" }, { name: "エスカレード", size: "XL" },
        { name: "その他", size: "L" },
      ],
    },
    {
      id: "chevrolet",
      name: "シボレー",
      models: [
        { name: "ボルト", size: "M" }, { name: "タホ", size: "XL" }, { name: "コルベット", size: "M" },
        { name: "その他", size: "M" },
      ],
    },
    {
      id: "pontiac",
      name: "ポンティアック",
      models: [{ name: "その他", size: "M" }],
    },
    {
      id: "hummer",
      name: "ハマー",
      models: [{ name: "H2", size: "XL" }, { name: "H3", size: "LL" }, { name: "その他", size: "XL" }],
    },
    {
      id: "gmc",
      name: "GMC",
      models: [{ name: "ユーコン", size: "XL" }, { name: "その他", size: "LL" }],
    },
    {
      id: "ford",
      name: "フォード",
      models: [
        { name: "フィエスタ", size: "S" }, { name: "フォーカス", size: "M" }, { name: "マスタング", size: "M" },
        { name: "エクスプローラー", size: "L" }, { name: "F-150", size: "XL" }, { name: "その他", size: "M" },
      ],
    },
    {
      id: "lincoln",
      name: "リンカーン",
      models: [
        { name: "ナビゲーター", size: "XL" }, { name: "その他", size: "L" },
      ],
    },
    {
      id: "chrysler",
      name: "クライスラー",
      models: [{ name: "300C", size: "L" }, { name: "その他", size: "L" }],
    },
    {
      id: "dodge",
      name: "ダッジ",
      models: [
        { name: "チャレンジャー", size: "L" }, { name: "チャージャー", size: "L" }, { name: "その他", size: "L" },
      ],
    },
    {
      id: "jeep",
      name: "ジープ",
      models: [
        { name: "レネゲード", size: "M" }, { name: "コンパス", size: "M" }, { name: "チェロキー", size: "L" },
        { name: "グランドチェロキー", size: "LL" }, { name: "ラングラー", size: "L" }, { name: "その他", size: "L" },
      ],
    },
    {
      id: "volvo",
      name: "ボルボ",
      models: [
        { name: "XC40", size: "M" }, { name: "XC60", size: "L" }, { name: "XC90", size: "LL" },
        { name: "V60", size: "M" }, { name: "S60", size: "M" }, { name: "その他", size: "M" },
      ],
    },
    {
      id: "landrover",
      name: "ランドローバー",
      models: [
        { name: "ディフェンダー", size: "LL" }, { name: "レンジローバー", size: "XL" },
        { name: "レンジローバー Evoque", size: "M" }, { name: "その他", size: "L" },
      ],
    },
    {
      id: "jaguar",
      name: "ジャガー",
      models: [
        { name: "XE", size: "M" }, { name: "XF", size: "L" }, { name: "F-PACE", size: "L" }, { name: "その他", size: "L" },
      ],
    },
    {
      id: "peugeot",
      name: "プジョー",
      models: [
        { name: "208", size: "S" }, { name: "308", size: "M" }, { name: "3008", size: "M" }, { name: "その他", size: "M" },
      ],
    },
    {
      id: "renault",
      name: "ルノー",
      models: [
        { name: "ルーテシア", size: "M" }, { name: "カングー", size: "M" }, { name: "その他", size: "M" },
      ],
    },
    {
      id: "tesla",
      name: "テスラ",
      models: [
        { name: "Model 3", size: "M" }, { name: "Model Y", size: "L" },
        { name: "Model S", size: "L" }, { name: "Model X", size: "LL" }, { name: "その他", size: "M" },
      ],
    },
  ],
};

window.WASHGO_PRICES = {
  sizeLabels: {
    S: "軽・コンパクト",
    M: "セダン・ハッチ",
    L: "SUV・ミニバン",
    LL: "大型SUV・ワンボックス",
    XL: "フルサイズSUV",
  },
  menus: [
    {
      id: "basic",
      name: "基本洗車",
      badge: "STANDARD",
      includes: ["手洗い洗車", "ボディ洗浄", "ホイール洗浄", "拭き上げ"],
      prices: { S: 1800, M: 3000, L: 3600, LL: 4000, XL: 5200 },
    },
    {
      id: "wax",
      name: "ワックスコート洗車",
      badge: "WAX",
      includes: ["基本洗車の内容すべて", "撥水ワックスコート"],
      prices: { S: 2600, M: 3600, L: 4200, LL: 4700, XL: 5900 },
    },
    {
      id: "polymer",
      name: "ポリマーコート洗車",
      badge: "PREMIUM",
      includes: ["基本洗車の内容すべて", "撥水ポリマーコート"],
      prices: { S: 9000, M: 10000, L: 11000, LL: 12000, XL: 13000 },
    },
  ],
  options: [
    { name: "窓ガラス1面", key: "glassOne", prices: { S: 1000, M: 1000, L: 1000, LL: 1000, XL: 1000 } },
    { name: "窓ガラス全面", key: "glassAll", prices: { S: 2000, M: 2000, L: 3000, LL: 3000, XL: 3000 } },
    { name: "車内清掃", key: "interior", prices: { S: 1800, M: 2300, L: 2800, LL: 3300, XL: 3800 } },
    { name: "除菌＆消臭", key: "disinfect", prices: { S: 2200, M: 2200, L: 2200, LL: 3300, XL: 3300 } },
    { name: "虫取り", key: "bug", prices: { S: 500, M: 500, L: 500, LL: 500, XL: 500 } },
  ],
};
