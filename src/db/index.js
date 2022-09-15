const dataUser = [
  {
      name:"Vieri Cervantes",
      edad:"20",
      direccion:"Ate Vitarte"
  },
  {
      name:"David Cervantes",
      edad:"49",
      direccion:"Ate Vitarte"
  },
  {
      name:"Milagros Orihuela",
      edad:"46",
      direccion:"Ate Vitarte"
  }
];

const dataProduct = [
  {
      nombre:"Monitor Samsung 144Hz",
      precio:"1399.90",
      stock:"10"
  },
  {
      nombre:"Laptop Lenovo",
      precio:"2399.90",
      stock:"15"
  },
  {
      nombre:"Mouse LogiTech",
      precio:"139.90",
      stock:"20"
  }
];

export const findAllUser = () => {
  return dataUser;
};

export const findAllProduct = () => {
  return dataProduct;
};