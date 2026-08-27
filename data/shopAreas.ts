export type Shop = {
  name: string;
  address: string;
  mapUrl: string;
};

export type ShopArea = {
  area: string;
  shops: Shop[];
};

const createShop = (name: string, address: string): Shop => ({
  name,
  address,
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${address}`)}`,
});

const shops = [
  createShop("いい麺亭", "佐賀県佐賀市三瀬村三瀬2768-8"),
  createShop("マックスバリュエクスプレス野芥店", "福岡県福岡市早良区野芥4-45-61"),
  createShop("マックスバリュエクスプレス内野店", "福岡県福岡市早良区早良1-14-53"),
  createShop("マックスバリュエクスプレス二日市店", "福岡県筑紫野市二日市西2-10-1"),
  createShop("マックスバリュ尼寺店", "佐賀県佐賀市大和町尼寺1477-4"),
  createShop("マックスバリュ若楠店", "佐賀県佐賀市高木瀬西3-2-2"),
  createShop("にしてつストア七隈店", "福岡県福岡市城南区七隈3-1-17"),
  createShop("にしてつストア周船寺店", "福岡県福岡市西区周船寺2-14-15"),
  createShop("にしてつストア有田店", "福岡県福岡市早良区有田6-7-1"),
  createShop("にしてつストア北茂安店", "佐賀県三養基郡みやき町白壁2182"),
  createShop("にしてつストアレガネットマルシェ四箇田", "福岡県福岡市早良区四箇田団地1-2"),
  createShop("にしてつストアレガネット南長住", "福岡県福岡市南区長住6-9-1"),
  createShop("にしてつストアレガネット飯倉", "福岡県福岡市早良区飯倉5-16-43"),
  createShop("あんくる夢市場久留米店", "福岡県久留米市小森野4-7-11"),
  createShop("あんくる夢市場鳥栖弥生が丘店", "佐賀県鳥栖市弥生が丘1-36"),
  createShop("薬院バリュー", "福岡県福岡市中央区薬院4-1-27-101"),
  createShop("ハイマート福浜店", "福岡県福岡市中央区福浜2-4-1"),
  createShop("ミスターマックス篠栗店", "福岡県糟屋郡篠栗町庄1-2-1"),
  createShop("ミスターマックス土井店", "福岡県福岡市東区青葉7-61-1"),
  createShop("アスタラビスタ城島店", "福岡県久留米市城島町楢津1381-7"),
  createShop("アスタラビスタ下庄店", "福岡県みやま市瀬高町下庄1537-1"),
  createShop("アスタラビスタ大和店", "福岡県柳川市大和町鷹ノ尾137"),
  createShop("アスタラビスタ大川店", "福岡県大川市一木577-1"),
  createShop("アスタラビスタ柳川西店", "福岡県柳川市東蒲池1520"),
  createShop("アスタラビスタ高田店", "福岡県みやま市高田町北新開209"),
];

export const shopAreas: ShopArea[] = [
  { area: "販売店舗", shops },
];
