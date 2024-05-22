 import { NextResponse } from 'next/server';
 import { productsArray } from '@/lib/assets/copy/products';

 export default function handler(req: any, res: any) {
  return NextResponse.json({data: productsArray }, { status: 200 });
}