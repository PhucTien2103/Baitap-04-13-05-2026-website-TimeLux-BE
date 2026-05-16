import Product from '../models/product.js';

const sampleProducts = [
    {
        id: 'watch-1',
        name: 'Chronos Heritage Squelette',
        category: 'Luxury Watches',
        brand: 'Chronos Suisse',
        price: 195000,
        salePrice: 182500,
        discount: 15,
        stock: 2,
        sold: 1,
        isPromotion: true,
        isNewest: false,
        isBestSeller: true,
        imageKeys: ['hero', 'diamond', 'chronograph'],
        description: 'Mẫu đồng hồ có thiết kế lộ máy sang trọng, dành cho người yêu phong cách cổ điển và tinh xảo.',
        specs: {
            material: '18k Rose Gold & Sapphire Crystal',
            movement: 'Skeleton Mechanical',
            waterResistance: '5 ATM',
            warranty: '5 Years',
        },
    },
    {
        id: 'watch-2',
        name: 'Aurelia Rose Mesh',
        category: "Women's Watches",
        brand: 'Aurelia',
        price: 1500,
        salePrice: 1250,
        discount: 17,
        stock: 8,
        sold: 124,
        isPromotion: true,
        isNewest: true,
        isBestSeller: true,
        imageKeys: ['roseGold', 'hero', 'diamond'],
        description: 'Đồng hồ mặt tròn thanh lịch với dây mesh màu rose gold, phù hợp phong cách tối giản.',
        specs: {
            material: 'Rose Gold Stainless Steel',
            movement: 'Quartz',
            waterResistance: '3 ATM',
            warranty: '2 Years',
        },
    },
    {
        id: 'watch-3',
        name: 'Vanguard Smart Terrain',
        category: 'Smart Watches',
        brand: 'Vanguard',
        price: 5500,
        salePrice: 4800,
        discount: 10,
        stock: 15,
        sold: 48,
        isPromotion: true,
        isNewest: true,
        isBestSeller: false,
        imageKeys: ['smart', 'chronograph', 'hero'],
        description: 'Đồng hồ thông minh cao cấp, hỗ trợ theo dõi sức khỏe và các tính năng cho người hay di chuyển.',
        specs: {
            material: 'Titanium Case & Silicone Strap',
            movement: 'Smart Digital',
            waterResistance: '10 ATM',
            warranty: '2 Years',
        },
    },
    {
        id: 'watch-4',
        name: 'Celestial Chrono II',
        category: "Men's Watches",
        brand: 'Celestial',
        price: 9200,
        salePrice: 8450,
        discount: 8,
        stock: 5,
        sold: 2,
        isPromotion: false,
        isNewest: true,
        isBestSeller: false,
        imageKeys: ['chronograph', 'hero', 'diamond'],
        description: 'Đồng hồ chronograph nam với mặt số mạnh mẽ, phù hợp cả công việc và sự kiện trang trọng.',
        specs: {
            material: 'Stainless Steel',
            movement: 'Automatic Chronograph',
            waterResistance: '10 ATM',
            warranty: '3 Years',
        },
    },
    {
        id: 'watch-5',
        name: 'Swiss Legacy 1924',
        category: 'Luxury Watches',
        brand: 'Swiss Legacy',
        price: 50000,
        salePrice: 45000,
        discount: 10,
        stock: 1,
        sold: 9,
        isPromotion: false,
        isNewest: false,
        isBestSeller: true,
        imageKeys: ['diamond', 'hero', 'chronograph'],
        description: 'Phiên bản di sản lấy cảm hứng từ đồng hồ Thụy Sĩ năm 1924, số lượng giới hạn.',
        specs: {
            material: 'Platinum Case & Leather Strap',
            movement: 'Swiss Automatic',
            waterResistance: '5 ATM',
            warranty: '5 Years',
        },
    },
    {
        id: 'watch-6',
        name: 'Rose Gold Minimal',
        category: "Women's Watches",
        brand: 'Minimal Maison',
        price: 1300,
        salePrice: 1200,
        discount: 5,
        stock: 12,
        sold: 342,
        isPromotion: false,
        isNewest: false,
        isBestSeller: true,
        imageKeys: ['roseGold', 'smart', 'hero'],
        description: 'Đồng hồ nữ màu rose gold với thiết kế gọn gàng, dễ phối với trang phục hằng ngày.',
        specs: {
            material: 'Rose Gold Stainless Steel',
            movement: 'Quartz',
            waterResistance: '3 ATM',
            warranty: '2 Years',
        },
    },
    {
        id: 'watch-7',
        name: 'Navigator Steel',
        category: "Men's Watches",
        brand: 'Navigator',
        price: 6800,
        salePrice: 6100,
        discount: 10,
        stock: 7,
        sold: 58,
        isPromotion: true,
        isNewest: false,
        isBestSeller: true,
        imageKeys: ['chronograph', 'hero', 'smart'],
        description: 'Đồng hồ nam dây thép, mặt số rõ ràng, phù hợp người thích phong cách mạnh mẽ.',
        specs: {
            material: 'Stainless Steel',
            movement: 'Automatic',
            waterResistance: '10 ATM',
            warranty: '3 Years',
        },
    },
    {
        id: 'watch-8',
        name: 'Luna Pearl',
        category: "Women's Watches",
        brand: 'Luna',
        price: 2400,
        salePrice: 2200,
        discount: 0,
        stock: 10,
        sold: 77,
        isPromotion: false,
        isNewest: true,
        isBestSeller: false,
        imageKeys: ['roseGold', 'diamond', 'hero'],
        description: 'Thiết kế nữ tính với tông sáng, phù hợp đi làm hoặc dự tiệc nhẹ.',
        specs: {
            material: 'Pearl Dial & Steel Case',
            movement: 'Quartz',
            waterResistance: '3 ATM',
            warranty: '2 Years',
        },
    },
    {
        id: 'watch-9',
        name: 'Titan Active Pro',
        category: 'Smart Watches',
        brand: 'Titan',
        price: 3900,
        salePrice: 3500,
        discount: 10,
        stock: 20,
        sold: 96,
        isPromotion: true,
        isNewest: true,
        isBestSeller: true,
        imageKeys: ['smart', 'chronograph', 'roseGold'],
        description: 'Đồng hồ thông minh cho luyện tập, theo dõi sức khỏe và thông báo hằng ngày.',
        specs: {
            material: 'Aluminum Case & Silicone Strap',
            movement: 'Smart Digital',
            waterResistance: '5 ATM',
            warranty: '2 Years',
        },
    },
    {
        id: 'watch-10',
        name: 'Diamond Regent',
        category: 'Luxury Watches',
        brand: 'Regent',
        price: 76000,
        salePrice: 72000,
        discount: 5,
        stock: 3,
        sold: 11,
        isPromotion: true,
        isNewest: false,
        isBestSeller: false,
        imageKeys: ['diamond', 'hero', 'roseGold'],
        description: 'Mẫu đồng hồ cao cấp có điểm nhấn kim loại sáng và chi tiết sang trọng.',
        specs: {
            material: 'White Gold & Diamond Bezel',
            movement: 'Swiss Automatic',
            waterResistance: '5 ATM',
            warranty: '5 Years',
        },
    },
    {
        id: 'watch-11',
        name: 'Classic Black',
        category: "Men's Watches",
        brand: 'Classic',
        price: 3200,
        salePrice: 3200,
        discount: 0,
        stock: 14,
        sold: 61,
        isPromotion: false,
        isNewest: true,
        isBestSeller: false,
        imageKeys: ['hero', 'chronograph', 'diamond'],
        description: 'Đồng hồ dây da đen, dễ dùng trong nhiều hoàn cảnh và không quá cầu kỳ.',
        specs: {
            material: 'Leather Strap & Steel Case',
            movement: 'Quartz',
            waterResistance: '3 ATM',
            warranty: '2 Years',
        },
    },
    {
        id: 'watch-12',
        name: 'Aurora Mesh',
        category: "Women's Watches",
        brand: 'Aurora',
        price: 1800,
        salePrice: 1650,
        discount: 8,
        stock: 9,
        sold: 44,
        isPromotion: true,
        isNewest: false,
        isBestSeller: false,
        imageKeys: ['roseGold', 'smart', 'hero'],
        description: 'Mẫu dây mesh nhẹ, tông rose gold dễ phối đồ và phù hợp sử dụng hằng ngày.',
        specs: {
            material: 'Rose Gold Steel Mesh',
            movement: 'Quartz',
            waterResistance: '3 ATM',
            warranty: '2 Years',
        },
    },
    {
        id: 'watch-13',
        name: 'Pulse Square',
        category: 'Smart Watches',
        brand: 'Pulse',
        price: 2800,
        salePrice: 2500,
        discount: 11,
        stock: 18,
        sold: 103,
        isPromotion: true,
        isNewest: true,
        isBestSeller: true,
        imageKeys: ['smart', 'hero', 'chronograph'],
        description: 'Đồng hồ thông minh mặt vuông, giao diện hiện đại và pin dùng tốt cho cả ngày.',
        specs: {
            material: 'Aluminum & Silicone',
            movement: 'Smart Digital',
            waterResistance: '5 ATM',
            warranty: '2 Years',
        },
    },
    {
        id: 'watch-14',
        name: 'Royal Tourbillon',
        category: 'Luxury Watches',
        brand: 'Royal',
        price: 120000,
        salePrice: 112000,
        discount: 7,
        stock: 1,
        sold: 5,
        isPromotion: true,
        isNewest: true,
        isBestSeller: false,
        imageKeys: ['diamond', 'hero', 'chronograph'],
        description: 'Phiên bản luxury số lượng rất ít, dành cho khách thích thiết kế nổi bật.',
        specs: {
            material: 'Platinum & Sapphire Crystal',
            movement: 'Tourbillon Mechanical',
            waterResistance: '5 ATM',
            warranty: '5 Years',
        },
    },
];

const ensureSampleProducts = async () => {
    const totalProducts = await Product.countDocuments();

    if (totalProducts === 0) {
        await Product.insertMany(sampleProducts);
    }
};

const getSortOption = (sortBy) => {
    if (sortBy === 'best-selling') return { sold: -1 };
    if (sortBy === 'price-low') return { salePrice: 1 };
    if (sortBy === 'price-high') return { salePrice: -1 };
    return { isNewest: -1, createdAt: -1 };
};

export const getProducts = async (req, res) => {
    try {
        await ensureSampleProducts();

        const {
            search = '',
            category = 'All',
            maxPrice = 200000,
            promotionOnly = 'false',
            sortBy = 'newest',
        } = req.query;

        const filter = {
            salePrice: { $lte: Number(maxPrice) || 200000 },
        };

        if (search.trim()) {
            filter.name = { $regex: search.trim(), $options: 'i' };
        }

        if (category !== 'All') {
            filter.category = category;
        }

        if (promotionOnly === 'true') {
            filter.isPromotion = true;
        }

        const products = await Product.find(filter).sort(getSortOption(sortBy)).lean();

        return res.status(200).json({
            errCode: 0,
            products,
        });
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Lỗi server khi lấy danh sách sản phẩm',
        });
    }
};

export const getProductById = async (req, res) => {
    try {
        await ensureSampleProducts();

        const product = await Product.findOne({ id: req.params.id }).lean();

        if (!product) {
            return res.status(404).json({
                errCode: 1,
                errMessage: 'Không tìm thấy sản phẩm',
            });
        }

        return res.status(200).json({
            errCode: 0,
            product,
        });
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Lỗi server khi lấy chi tiết sản phẩm',
        });
    }
};
