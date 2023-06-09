import { getVideoId } from '../../utils/index'
const adaptStores = (payload: any) => {
    return {
        id: payload?.data.attributes?.provider?.data?.id,
        name: payload?.data.attributes?.provider?.data?.attributes?.name,
        description: payload?.data.attributes?.provider?.data?.attributes?.description,
        urlVideo: getVideoId(payload?.data.attributes?.provider?.data?.attributes?.videoPresentation),
        products: adaptProducts(payload?.data.attributes?.products?.data),
        urlHeader: payload?.data.attributes?.provider?.data?.attributes?.header?.data?.attributes?.url
    }
}

const adaptProducts = (payload: any) => {
    return payload.map((product: any) => (
        {
            id: product.id,
            description: product.attributes.Description,
            photos: adaptProductPhotos(product.attributes.Photo.data),
            name: product?.attributes.Name,
            price: product.attributes.UnitPrice
        }
    ))
}

const adaptProductPhotos = (payload: any) => {
    return payload.map((photo: any) => (
        {
            id: photo.id,
            urlPhoto: photo.attributes.url
        }
    ))
}

export {
    adaptStores,
    adaptProducts,
    adaptProductPhotos,
}
