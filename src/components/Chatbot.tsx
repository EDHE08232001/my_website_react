import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

/**
 * Basic chat message structure used throughout the widget.
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

    const toggleChat = () => setIsOpen(prev => !prev);

    const sendMessage = async () => {
        if (!input.trim()) return;

        // --- 1️⃣ Show user’s raw input in the UI ---
        const displayMsg: Message = { role: 'user', content: input };
        const newMessages = [...messages, displayMsg];
        setMessages(newMessages);
        setInput('');
        setStreamingText('');
        setIsStreaming(true);

        // --- 2️⃣ Send a hidden hint to the backend ---
        const apiMsg: Message = {
            role: 'user',
            content: `${input} (Give brief answer)`
        };

        // only last 5 interactions (including this modified one) for context
        const chatHistory = [...messages, apiMsg].slice(-5);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: chatHistory }),
            });

            const data = await response.json();
            const fullReply: string = data.reply;

            // --- 3️⃣ Stream the assistant’s reply word-by-word ---
            const words = fullReply.split(/\s+/);
            let index = 0;

            const interval = setInterval(() => {
                setStreamingText(prev =>
                    prev + (prev ? ' ' : '') + words[index]
                );
                index += 1;
                if (index >= words.length) {
                    clearInterval(interval);
                    setIsStreaming(false);
                    setMessages(prev => [
                        ...prev,
                        { role: 'assistant', content: fullReply },
                    ]);
                    setStreamingText('');
                }
            }, 80); // adjust typing speed (ms) to taste
        } catch {
            setIsStreaming(false);
            setMessages([
                ...newMessages,
                { role: 'assistant', content: 'Error connecting to server.' },
            ]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendMessage();
    };

    // --- Minimized floating button ---
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

    // --- Expanded chat window ---
    return (
        <div className="fixed bottom-6 right-6 w-[28rem] h-[36rem] bg-white rounded-xl shadow-2xl flex flex-col">
            <div className="flex justify-between items-center p-3 border-b">
                <span className="font-bold text-lg">Chatbot</span>
                <button
                    onClick={toggleChat}
                    className="text-gray-500 hover:text-gray-700 text-xl"
                    aria-label="Minimize chat"
                >
                    &times;
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`text-sm p-2 rounded-xl max-w-[80%] ${
                            msg.role === 'user'
                                ? 'bg-blue-100 ml-auto text-right'
                                : 'bg-gray-100 mr-auto'
                        }`}
                    >
                        {msg.content}
                    </div>
                ))}

                {/* live typing effect */}
                {isStreaming && (
                    <div className="text-sm p-2 rounded-xl max-w-[80%] bg-gray-100 mr-auto">
                        {streamingText}
                        <span className="animate-pulse">▌</span>
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="p-3 border-t flex">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 border rounded p-2 text-sm"
                />
                <button
                    type="submit"
                    className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chatbot;