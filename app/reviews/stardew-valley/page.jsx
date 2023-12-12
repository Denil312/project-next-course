import{ readFile } from "node:fs/promises";
import {marked} from "marked";
import Heading from "@/components/Heading"

export default async function StardewValleyPage(){
    const text = await readFile ('./content/reviews/stardew-valley.md', "utf8");
    const html = marked(text, {headerIds: false, mangle:false});

    return (
        <>
        <Heading>Stardew Valley</Heading>
        <img src="/images/stardew-valley.jpg" alt="stardew-valley"
        width="640" height="360" className="mb-5 rounded"
        />
        <article dangerouslySetInnerHTML={{__html: html}}
            className="max-w-screen-sm prose prose-slate"
        />
        </>
    );
}

//localhost:3000/reviews/stardew-valley



