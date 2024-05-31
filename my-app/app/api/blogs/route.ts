import { addPost, getData } from "@/lib/data";
import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    await dbConnect();
    try {
        const posts = getData()
        const product = await Product.find({})
        return NextResponse.json({ message: 'ok', product }, { status: 200 })
    } catch (err) {
        return NextResponse.json(
            { message: 'Error', err },
            { status: 500 }
        )
    }

}

export async function POST(request: Request, res: Response) {
    await dbConnect();
    console.log("data outside");
    try {
        const { id, title, desc, date } = await request.json()
        const newProduct = await Product.create({ id, title, desc, date })
        return NextResponse.json({ message: 'ok', newProduct }, { status: 201 })
    } catch (err) {
        return NextResponse.json(
            { message: 'Error', err },
            { status: 500 }
        )
    }
}

export async function DELETE(request: any) {
    try {
        const id = request.nextUrl.searchParams.get("id")
        await dbConnect();
        await Product.findByIdAndDelete(id)
        return NextResponse.json({ message: 'deleted' }, { status: 200 })
    } catch (err) {
        return NextResponse.json(
            { message: 'Error', err },
            { status: 500 }
        )
    }
}