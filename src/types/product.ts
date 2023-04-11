export interface Product {
  id: number;
  name: string;
  price: string;
  asset: string;
  fn?: (id: number) => void;
}

interface Preview {
  preview: string;
}

interface Asset {
  featuredAsset: Preview;
}

export interface ProductVariant extends Product {
  variants?: ProductVariant[];
  product: Asset;
}