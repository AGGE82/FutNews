export interface ChatMessage{
    from: "me" | "bot",
    message: string,
    date: Date
}