import { Router, Request, Response } from "express";
import { Book, IBook } from "../models/Book";

const router: Router = Router();


router.post('/api/book', async (req: Request, res: Response) => {
    try{
        const book: IBook = new Book({
            author: req.body.author,
            name: req.body.name,
            pages: req.body.pages

        });
        await book.save();
        res.status(200).json({message: "Book added successfully", book: book});


    }catch(err: any){
        res.status(500).json({message: err.message});
    }



});



export default router;