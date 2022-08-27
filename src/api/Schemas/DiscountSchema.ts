export const DiscountSchema = {
  name: 'Discount',
  properties: {
    _id: 'int',
    name: 'string',
    description: 'string',
    quantity: 'int',
    price: 'float',
  },
  primaryKey: '_id',
};

export interface DiscountInterface {
  _id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
}
