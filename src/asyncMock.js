const products = [
    {
        id:'1',
        name:'ACEITE ORIGINAL BEBE JJ X 50 ML',
        price:'6.100',
        category: 'cuidado_personal',
        img:'https://tododrogas.com.co/archivos/foto-producto-xs/20200528_072207.jpg',
        stock:24,
        description:'Diseñado para formar una barrera protectora que hidrata la pie'
    },
    {
        id:'2',
        name:'PEINE ELIMINADOR DE PIOJOS',
        price:'21.900',
        category: 'cuidado_personal',
        img:'https://drogueriasaludvital.com/wp-content/uploads/2023/04/b_7707267907501-1.jpg',
        stock:12,
        description:'Diseñado para eliminar los piojos de raiz'
    },
    {
        id:'3',
        name:'CEPILLO GUM ELENA DE AVALON',
        price:'13.500',
        category: 'cuidado_personal',
        img:'https://i0.wp.com/dentaldaza.com/wp-content/uploads/2019/04/2851021_f.jpg',
        stock:12,
        description:'Cepillo dental niños'
    },
    {
        id:'4',
        name:'DESODORANTE DOVE BARRA TONO UNIFORME',
        price:'22.200',
        category: 'cuidado_personal',
        img:'https://farmaciauniversal.com/assets/sources/PRODUCTOS/DESODORANTE%20EN%20BARRA%20TONO%20UNIFORME%20DOVE%20X%2050%20G-09817-Farmacia%20Universal.jpg',
        stock:29,
        description:'antitranspirante DOVE Invisible Black and White Clear cuenta con la protección patentada contra manchas en tu ropa'
    },
    {
        id:'5',
        name:'CREMA TEATRICAL CUIDADO FACIAL',
        price:'12.200',
        category: 'cosmeticos',
        img:'https://tododrogas.com.co/archivos/foto-producto-xs/20221219_092232.jpg',
        stock:13,
        description:'Rejuvenece con la nueva formula de treatical'
    },
    {
        id:'6',
        name:'CHAP STICK FRESA SALVAJE X 4.2 GR ',
        price:'13.200',
        category: 'cosmeticos',
        img:'https://tododrogas.com.co/archivos/foto-producto-xs/20200722_082528.jpg',
        stock:45,
        description:'Hidrata tus labios'
    },
    {
        id:'7',
        name:'CICATRICURE CREMA ANTIARRUGAS X 30 GR',
        price:'19.200',
        category: 'cosmeticos',
        img:'https://tododrogas.com.co/archivos/foto-producto-xs/20220714_050419.jpg',
        stock:59,
        description:'Hidrata tus labios'
    },
    {
        id:'8',
        name:'LENZETTO 1.53 MG SOLUCION TOPICA',
        price:'138.200',
        category: 'medicamentos',
        img:'https://tododrogas.com.co/archivos/foto-producto-xs/20210924_122150.jpg',
        stock:91,
        description:'Solución para pulverización transdérmica'
    },
    {
        id:'9',
        name:'HIDROCLOROTIAZIDA MK 12.5 MG X 30 TABLETAS',
        price:'4.200',
        category: 'medicamentos',
        img:'https://tododrogas.com.co/archivos/foto-producto-xs/20200615_015955.jpg',
        stock:15,
        description:'MEDICAMENTO'
    },
    {
        id:'10',
        name:'IBANDRONATO MK 150 MG X 1 TABLETA',
        price:'6.200',
        category: 'medicamentos',
        img:'https://tododrogas.com.co/archivos/foto-producto-xs/20200714_092257.jpg',
        stock:34,
        description:' Es un medicamento, no exceder su consumo, leer indicaciones y contraindicaciones. Venta bajo fórmula facultativa'
    },
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    })
}

export const getCategoryId = (categoryId) =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.find(prod => prod.category === categoryId))
        }, 500);
    })
}
