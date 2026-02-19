export type ProductType = {
	image: ProductImageType;
	name: string;
	category: string;
	price: number;
};

export type ProductImageType = {
	thumbnail: string;
	mobile: string;
	tablet: string;
	desktop: string;
};
