import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

// -------------------------------
// Chatbot Widget – Bottom Right + Last 5 Messages
// -------------------------------

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const API_URL = import.meta.env.VITE_CHAT_API || '/api/chat';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');

    const toggleChat = () => setIsOpen((prev) => !prev);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput('');

        // prepare only the last 5 interactions to send for context
        const chatHistory = newMessages.slice(-5);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    // pass the whole last-5 chat history to backend
                    messages: chatHistory,
                }),
            });

            const data = await response.json();
            setMessages([
                ...newMessages,
                { role: 'assistant', content: data.reply },
            ]);
        } catch {
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

    // Expanded chat window bottom right
    return (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col">
            <div className="flex justify-between items-center p-2 border-b">
                <span className="font-bold">Chatbot</span>
                <button
                    onClick={toggleChat}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Minimize chat"
                >
                    &times;
                </button>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-2">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`text-sm p-2 rounded max-w-[75%] ${msg.role === 'user'
                                ? 'bg-blue-100 ml-auto text-right'
                                : 'bg-gray-100 mr-auto'
                            }`}
                    >
                        {msg.content}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="p-2 border-t flex">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 border rounded p-1 text-sm"
                />
                <button
                    type="submit"
                    className="ml-2 px-3 py-1 bg-blue-600 text-white rounded"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chatbot;