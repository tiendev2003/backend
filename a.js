const variantsData = [
    {
        "_id": "671c91cbe797c3aa54dbac6e",
        "title": "Color",
        "name": "Color",
        "variants": [
            { "name": "White", "status": "show", "_id": "671c91cbe797c3aa54dbac6f" },
            { "name": "Black", "status": "show", "_id": "671c9752a2fb3023b0e2540a" },
            { "name": "Green", "status": "show", "_id": "671c975da2fb3023b0e25421" },
            { "name": "Blue", "status": "show", "_id": "671c976aa2fb3023b0e25447" }
        ],
        "option": "Radio",
        "type": "attribute",
        "status": "show",
        "createdAt": "2024-10-26T06:53:00.002Z",
        "updatedAt": "2024-10-26T07:17:33.279Z",
        "__v": 0
    },
    {
        "_id": "671c9a6ca2fb3023b0e254f0",
        "title": "Size",
        "name": "Size",
        "variants": [
            { "name": "32", "status": "show", "_id": "671c9a6ca2fb3023b0e254f1" },
            { "name": "31", "status": "show", "_id": "671c9a7aa2fb3023b0e2550d" },
            { "name": "30", "status": "show", "_id": "671c9a7fa2fb3023b0e2552c" },
            { "name": "29", "status": "show", "_id": "671c9a84a2fb3023b0e25552" },
            { "name": "28", "status": "show", "_id": "671c9a88a2fb3023b0e2557f" },
            { "name": "33", "status": "show", "_id": "671c9a8ca2fb3023b0e255b3" },
            { "name": "34", "status": "show", "_id": "671c9a90a2fb3023b0e255ee" }
        ],
        "option": "Radio",
        "type": "attribute",
        "status": "show",
        "createdAt": "2024-10-26T07:29:48.416Z",
        "updatedAt": "2024-10-26T07:30:24.739Z",
        "__v": 0
    }
];

const product = {
    "variants": [
        {
            "671c9a6ca2fb3023b0e254f0": "671c9a7aa2fb3023b0e2550d",
            "originalPrice": "333",
            "price": "0",
            "quantity": 33,
            "discount": "333",
            "productId": "671c9af3a2fb3023b0e25684-0",
            "barcode": "Sản phẩm 1",
            "sku": "Sản phẩm 1",
            "image": "https://res.cloudinary.com/dfxrqzsay/image/upload/v1729927877/category/css.png"
        },
        {
            "671c9a6ca2fb3023b0e254f0": "671c9a7fa2fb3023b0e2552c",
            "originalPrice": "333",
            "price": "0",
            "quantity": 33,
            "discount": "333",
            "productId": "671c9af3a2fb3023b0e25684-1",
            "barcode": "Sản phẩm 1",
            "sku": "Sản phẩm 1",
            "image": "https://res.cloudinary.com/dfxrqzsay/image/upload/v1729927877/category/css.png"
        },
        {
            "671c9a6ca2fb3023b0e254f0": "671c9a88a2fb3023b0e2557f",
            "originalPrice": "333",
            "price": "0",
            "quantity": 33,
            "discount": "333",
            "productId": "671c9af3a2fb3023b0e25684-2",
            "barcode": "Sản phẩm 1",
            "sku": "Sản phẩm 1",
            "image": "https://res.cloudinary.com/dfxrqzsay/image/upload/v1729927877/category/css.png"
        },
        {
            "671c9a6ca2fb3023b0e254f0": "671c9a84a2fb3023b0e25552",
            "originalPrice": "333",
            "price": "0",
            "quantity": 33,
            "discount": "333",
            "productId": "671c9af3a2fb3023b0e25684-3",
            "barcode": "Sản phẩm 1",
            "sku": "Sản phẩm 1",
            "image": "https://res.cloudinary.com/dfxrqzsay/image/upload/v1729927877/category/css.png"
        },
        {
            "671c91cbe797c3aa54dbac6e": "671c91cbe797c3aa54dbac6f",
            "originalPrice": "333",
            "price": "333",
            "quantity": 91,
            "discount": "0",
            "productId": "671c9af3a2fb3023b0e25684-4",
            "barcode": "Sản phẩm 1",
            "sku": "Sản phẩm 1",
            "image": "https://res.cloudinary.com/dfxrqzsay/image/upload/v1729927877/category/css.png"
        },
        {
            "671c91cbe797c3aa54dbac6e": "671c9752a2fb3023b0e2540a",
            "originalPrice": "333",
            "price": "333",
            "quantity": 91,
            "discount": "0",
            "productId": "671c9af3a2fb3023b0e25684-5",
            "barcode": "Sản phẩm 1",
            "sku": "Sản phẩm 1",
            "image": "https://res.cloudinary.com/dfxrqzsay/image/upload/v1729927877/category/css.png"
        },
        {
            "671c91cbe797c3aa54dbac6e": "671c975da2fb3023b0e25421",
            "originalPrice": "333",
            "price": "333",
            "quantity": 91,
            "discount": "0",
            "productId": "671c9af3a2fb3023b0e25684-6",
            "barcode": "Sản phẩm 1",
            "sku": "Sản phẩm 1",
            "image": "https://res.cloudinary.com/dfxrqzsay/image/upload/v1729927877/category/css.png"
        }
    ]
};

// Hàm để lấy tên biến thể theo ID
function getVariantNames(variantIds, variantsData) {
    const variantMap = {};

    // Tạo một bản đồ cho các biến thể
    variantsData.forEach(variant => {
        variant.variants.forEach(v => {
            variantMap[v._id] = v.name;
        });
    });

    // Lấy tên biến thể từ ID
    return variantIds.map(id => variantMap[id]);
}

// Tách riêng danh sách các biến thể theo loại
const sizeVariants = [];
const colorVariants = [];

// Duyệt qua các biến thể của sản phẩm
product.variants.forEach(variant => {
    const variantId = Object.keys(variant)[0]; // Lấy ID biến thể
    const variantValue = variant[variantId]; // Giá trị của biến thể

    // Tìm tên biến thể tương ứng
    const variantName = getVariantNames([variantValue], variantsData)[0];

    // Kiểm tra xem ID thuộc về loại nào bằng cách lặp qua variantsData
    variantsData.forEach(variantData => {
        if (variantData.variants.some(v => v._id === variantValue)) {
            if (variantData.title === "Size") {
                sizeVariants.push({ id: variantValue, name: variantName,   });
            } else if (variantData.title === "Color") {
                colorVariants.push({ id: variantValue, name: variantName,   });
            }
        }
    });
});

// Kết quả
console.log("Size Variants:", sizeVariants);
console.log
