import { defineCollection, z } from "astro:content";
// z -> zod schema

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        description: z.string(),
        buy: z.object({
            us: z.string().url(),
            guatemala: z.string().url()
        })
    })
})

const quotes = defineCollection({
    schema: z.object({
        book: z.string(),
        author:  z.string(),
        quotation: z.string()
    })
})


export const collections = { 
    'books': books,
    'quotes': quotes,
};