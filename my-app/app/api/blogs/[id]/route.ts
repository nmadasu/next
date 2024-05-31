import { deletePost, getById, updatePost } from "@/lib/data";
import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Products";
import { NextResponse } from "next/server";

export async function GET(request: Request,{params}) {
    try {
        // const id = request.url.split("blogs/")[1]
        // console.log(id);
        // const post = getById(id)
        const {id}=params
        await dbConnect();
        const post=await Product.findOne({_id:id})
        if (!post) {
            return NextResponse.json({ message: 'ERROR' }, { status: 404 })
        }
        return NextResponse.json({ message: 'ok', post }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: 'ERROR' }, { status: 500 })
    }
}

export async function PUT(request:Request,{params}) {
    try {
        console.log(params);        
        const {id}=params
        const {newTitle:title,newDesc:desc}=await request.json()
        console.log(title,desc);
        await dbConnect();
        await Product.findByIdAndUpdate(id,{title,desc})
        // const { title, desc } = await request.json()
        // const id = request.url.split("blogs/")[1]
        // updatePost(id, title, desc)
        return NextResponse.json({ message: 'Data updated' }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: 'ERROR' }, { status: 500 })
    }
}

export async function DELETE(request: Request) {
    try {
        const id = request.url.split("blogs/")[1]
        deletePost(id)
        return NextResponse.json({ message: 'ok' }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: 'ERROR' }, { status: 500 })
    }
}