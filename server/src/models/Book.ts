import mongoose, { Schema, Document, mongo } from 'mongoose';



interface IBook extends Document {
    author: string;
    name: string;
    pages: number;

}

const BookSchema: Schema = new Schema({
    author : {type: String, required: true},
    name : {type: String, required: true},
    pages : {type: Number, required: true}
},{collection: 'Books'});

const Book: mongoose.Model<IBook> = mongoose.model<IBook>('Book', BookSchema);

export {Book, IBook};