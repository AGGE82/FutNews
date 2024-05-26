export interface ChatMessage{
    from: "me" | "bot",
    message: string,
    date: Date
}
export interface New{
    id: number,
    source: string,
    title: string,
    description: string,
    urlToImage: string,
    url:string,
    content: string
}