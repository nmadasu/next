// import mongoose,{Document,Schema} from "mongoose";
// import { date, string } from "zod";
// export interface IProduct extends Document{
//     id:string;
//     title:string;
//     desc:string;
//     date:Date
// }

// const productSchema:Schema= new mongoose.Schema({
//     id:{
//         type:String
//     },
//     title:{
//         type:String
//     },
//     desc:{
//         type:String
//     },
//     date:{
//         type:Date
//     }
// })

// const Product = mongoose.models.product || mongoose.model<IProduct>('Product',productSchema)

// export default Product;


import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
    id:string;
    title: string;
    desc: string;
    date: Date;
}

const productSchema: Schema = new mongoose.Schema({
    id:String,
    title: String,
    desc: String,
    date: Date
}, { collection: 'products' }); // Optional: Explicitly set collection name

const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);

export default Product;
