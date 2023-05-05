export interface Store {
    id: number,
    name: string,
    description: string,
    urlVideo: string,
    products: Product[],
    urlHeader: string,
}

export interface Product {
    id: number,
    name: string,
    description: string,
    photos: ProductPhotos[],
    price: number,
}

export interface ProductPhotos {
    id: number,
    urlPhoto: string,
}
