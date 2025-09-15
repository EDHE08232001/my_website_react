import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

/**
 * Basic chat message structure used throughout the widget.
 * `role` distinguishes between messages from the user and the assistant.
 */
interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const API_URL = import.meta.env.VITE_CHAT_API || '/api/chat';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [streamingText, setStreamingText] = useState(''); // live typing buffer
    const [isStreaming, setIsStreaming] = useState(false);

    const toggleChat = () => setIsOpen((prev) => !prev);

    const sendMessage = async () => {
        if (!input.trim()) return;

        // Create a typed user message so TypeScript retains literal types.
        const userMessage: Message = { role: 'user', content: input };
        const newMessages: Message[] = [...messages, userMessage];

        setMessages(newMessages);
        setInput('');
        setStreamingText('');
        setIsStreaming(true);

        // prepare only the last 5 interactions to send for context
        const chatHistory = newMessages.slice(-5);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: chatHistory }),
            });

            const data = await response.json();
            const fullReply: string = data.reply;

            // ---- stream word-by-word like ChatGPT ----
            const words = fullReply.split(/\s+/);
            let index = 0;

            const interval = setInterval(() => {
                setStreamingText((prev) =>
                    prev + (prev ? ' ' : '') + words[index]
                );
                index += 1;
                if (index >= words.length) {
                    clearInterval(interval);
                    setIsStreaming(false);
                    // finally commit the full assistant message to messages[]
                    setMessages((prev) => [
                        ...prev,
                        { role: 'assistant', content: fullReply },
                    ]);
                    setStreamingText('');
                }
            }, 80); // adjust speed (ms) to taste
        } catch {
            setIsStreaming(false);

            // Append an error message if the request fails.
            const errorMessage: Message = {
                role: 'assistant',
                content: 'Error connecting to server.',
            };
            setMessages([...newMessages, errorMessage]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendMessage();
    };

    // When minimized – floating button bottom right
    if (!isOpen) {
        return (
            <button
                onClick={toggleChat}
                className="fixed bottom-4 right-4 p-3 rounded-full bg-blue-600 text-white shadow-lg"
                aria-label="Open chat"
            >
                <MessageCircle size={24} />
            </button>
        );
    }

    // Expanded chat window – enlarged dimensions
    return (
        <div className="fixed bottom-6 right-6 w-[28rem] h-[36rem] bg-white rounded-xl shadow-2xl flex flex-col">
            <div className="flex justify-between items-center p-3 border-b">
                {/* ... rest of the component remains unchanged ... */}
            </div>
        </div>
    );
};

export default Chatbot;
