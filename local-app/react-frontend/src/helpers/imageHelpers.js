import { imageList } from './imageList';

export const getProductImage = (ProductName) => {

    var imageListNames = [];

    //strip file extension
    imageList.forEach((imageNameWithFileExtension) => {
        imageListNames.push(imageNameWithFileExtension.split('.')[0]);
    });

    //only use first part to match it, should be sufficient
    // const ProductNameBase = ProductName.split()
    if (ProductName.includes(' ')) {
        ProductName = ProductName.split(' ')[0];
    }

    //return image path if the product has an image
    for (var i=0; i < imageListNames.length; i++) {
        if (imageListNames[i].includes(ProductName.toLowerCase())) {
            return `/images/${imageListNames[i]}.jpg`;
        }
    };

    return '/images/no_image.png'; 
    



    // const pnLowerCase = ProductName.toLowerCase();

    // const imagePath = `public/images/${productNameStandardized}`;
}