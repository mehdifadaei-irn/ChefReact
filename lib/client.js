import sanityClient from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId: 'wxy5f78y',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: 'skCYXjTn66T2CapsjR1QiKXDRdHO5cjfVksqze9mNoPYq7Rqh4KbsFs5c6OXhtbYsqPHGrFTQOxtUPemZ11AC0w254jrLKNaPajMJ0svxclBOOjcC2H1rKuOhIAprClvgRqMM90XjzSZ17KbdhcbNviQL4VgrtGOrKatezYBRO9AW7vTxk2B'
});

const builder = imageUrlBuilder(client);


export const urlFor = (source) => builder.image(source);
