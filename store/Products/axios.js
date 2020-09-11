export const actions = { 
    async _Product(){
        let  product = [
            {
                ProductCard:{
                    id: 30,
                    name: "Товар1",
                    sku:{
                        original: "6534-ку",
                        normalized: "6534-ru"
                    },
                    ProductCardImage:{
                        url: "https://www.pantus.ru/upload/iblock/739/10034697ASP%20-%20%D0%9F%D1%80%D0%BE%D0%BA%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%20%D0%B1%D0%B5%D0%BD%D0%B7%D0%BE%D0%BD%D0%B0%D1%81%D0%BE%D1%81%D0%B0%20%D0%92%D0%90%D0%97%2021082%20%D1%81%D0%B8%D0%BB%D0%B8%D0%BA%D0%BE%D0%BD%20%D1%81%D0%B8%D0%BD%D0%B8%D0%B9%20-%20A-Sport.jpg"
                    },
                    ProductCardOem:[
                        "21082-1101138",
                        "1082-1101138-00",
                        "21082-1101138СИНA-sport",
                        "210821101138",
                        "21082110113800",
                    ],
                    brand:{
                        id: 5,
                        name: "A-Sport"
                    }
                },
                ProductOffer:{
                    prices:{
                        wholesale: "356"
                    },
                    quantity: 411
                }
            }
        ];
    return product;
    }  
}