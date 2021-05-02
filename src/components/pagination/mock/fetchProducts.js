import allProducts from './products';

export default function fetchProducts(offset, pageSize) {
    return new Promise((resolve) => {
        const to = offset + pageSize;
        console.log(`fetch products from ${offset} to ${to}...`);
        setTimeout(() => {
            resolve({
                products: allProducts.slice(offset, to),
                totalCount: allProducts.length,
            });
        }, 500);
    });
}
