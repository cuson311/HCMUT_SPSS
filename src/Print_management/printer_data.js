let item_0 = {
  id_printer: "20301",
  brand_name: "Canon",
  model_name: "MG 2570s",
  campus_name: "BK_CS1",
  building_name: "B1",
  location_name: "403",
  img_source:
    "https://toanviink.vn/Image/Picture/Canon/Print/Canon%20PIXMA%20MG2570S.jpg",
  status: true,
};

let item_1 = {
  id_printer: "20302",
  brand_name: "Epson",
  model_name: "XP-4100",
  campus_name: "BK_CS2",
  building_name: "H1",
  location_name: "801",
  img_source:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6348/6348813ld.jpg",
  status: true,
};

let item_2 = {
  id_printer: "20303",
  brand_name: "HP",
  model_name: "OfficeJet Pro 6978",
  campus_name: "BK_CS1",
  building_name: "B3",
  location_name: "101",
  img_source:
    "https://i.pcmag.com/imagery/reviews/07nRKcMcL7OvTsfClZHYHXj-10..v1569477804.jpg",
  status: true,
};

let item_3 = {
  id_printer: "20304",
  brand_name: "Brother",
  model_name: "HL-L2380DW",
  campus_name: "BK_CS2",
  building_name: "H6",
  location_name: "301",
  img_source:
    "https://cdn-tp1.mozu.com/21830-33325/cms/33325/files/90277d84-e236-4abe-a430-f9acd307ab47?max=500&_mzcb=_1690895244960",
  status: true,
};

let item_4 = {
  id_printer: "20305",
  brand_name: "Xerox",
  model_name: "WorkCentre 6515",
  campus_name: "BK_CS1",
  building_name: "B1",
  location_name: "102",
  img_source:
    "https://i.pcmag.com/imagery/reviews/01quDe03AAip9dVTbBfZb6j-3.fit_scale.size_760x427.v1569483452.jpg",
  status: true,
};

let item_5 = {
  id_printer: "20306",
  brand_name: "Lexmark",
  model_name: "CS510de",
  campus_name: "BK_CS2",
  building_name: "H2",
  location_name: "401",
  img_source:
    "https://i0.wp.com/www.alphr.com/wp-content/uploads/2014/11/it_photo_210007.jpg?resize=690%2C518&ssl=1",
  status: true,
};

let item_6 = {
  id_printer: "20307",
  brand_name: "Samsung",
  model_name: "Xpress M2020W",
  campus_name: "BK_CS1",
  building_name: "B3",
  location_name: "201",
  img_source:
    "https://www.cnet.com/a/img/resize/01afd78317620c89d89585ba73ff890c00dc3384/hub/2014/08/13/6e228418-5fa4-4fc5-be33-3a4510884a9b/samsung-xpress-m2020w-printer-product-photos01.jpg?auto=webp&fit=crop&height=900&width=1200",
  status: true,
};

let item_7 = {
  id_printer: "20308",
  brand_name: "Dell",
  model_name: "E310dw",
  campus_name: "BK_CS2",
  building_name: "H3",
  location_name: "202",
  img_source:
    "https://i.pcmag.com/imagery/reviews/05OuPX0UbsTnku7cq58MHHn-5.fit_scale.size_760x427.v1569476427.jpg",
  status: true,
};

let item_8 = {
  id_printer: "20309",
  brand_name: "Kyocera",
  model_name: "ECOSYS P2040dn",
  campus_name: "BK_CS1",
  building_name: "B1",
  location_name: "403",
  img_source:
    "https://phucanhcdn.com/media/product/47873_kyocera_ecosys_p2040dn_a2.jpg",
  status: true,
};

let item_9 = {
  id_printer: "20310",
  brand_name: "Ricoh",
  model_name: "SP C261SFNw",
  campus_name: "BK_CS2",
  building_name: "H2",
  location_name: "101",
  img_source:
    "https://vietbis.vn/Image/Picture/Ricoh/May_in/ricoh_sp_c261sfnw.png",
  status: true,
};

let item_10 = {
  id_printer: "20311",
  brand_name: "Panasonic",
  model_name: "KX-MB2061",
  campus_name: "BK_CS2",
  building_name: "H3",
  location_name: "301",
  img_source: "https://www.manua.ls/gallery/1188710.jpg",
  status: true,
};

let dataarray = [
  item_0,
  item_1,
  item_2,
  item_3,
  item_4,
  item_5,
  item_6,
  item_7,
  item_8,
  item_9,
  item_10,
];

const get_array = () => {
  return dataarray;
};

const onChangeItem = (item) => {
  let index = dataarray.findIndex((x) => x.id_printer === item.id_printer);
  if (dataarray[index].status === true) {
    dataarray[index].status = false;
  } else {
    dataarray[index].status = true;
  }
};

const add_printer = (item) => {
  let index = dataarray.findIndex((x) => x.id_printer === item.id_printer);
  if (index > 0) {
    alert("This printer is already exist");
    return;
  } else {
    dataarray.push(item);
  }
};
module.exports = {
  get_array,
  onChangeItem,
  add_printer,
};
