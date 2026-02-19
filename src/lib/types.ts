export type ProductType = {
	id: number;
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

export type ProductInCartType = {
	id: number;
	name: string;
	quantity: number;
	price: number;
};
