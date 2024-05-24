export interface ChatMessage{
    from: "me" | "bot",
    message: string,
    date: Date
}
export interface New{
    id: number,
    title: string,
    desc: string,
    url: string
}