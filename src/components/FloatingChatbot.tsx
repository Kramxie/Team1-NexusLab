"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { generateBotResponse, ChatMessage } from "@/lib/chatbot";
import {
  checkMessage,
  getModerationState,
  addStrike,
  formatRemainingTime,
  getInappropriateContentResponse,
  ModerationState,
} from "@/lib/chatModeration";

const MAX_STRIKES = 3;

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "bot",
      content:
        "Hi there! 👋 I'm Nexxusbot, your virtual assistant. How can I help you learn about Nexxus Lab today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Moderation state - lazy initialize from localStorage
  const [moderation, setModeration] = useState<ModerationState>(() => {
    // This will only run on client-side after hydration
    if (typeof window !== 'undefined') {
      return getModerationState();
    }
    return {
      strikes: 0,
      isLockedOut: false,
      lockoutEndTime: null,
      remainingLockoutMs: 0,
      totalViolations: 0,
    };
  });

  // Track previous lockout state for unlock message
  const prevLockedOutRef = useRef(false);

  // Initialize ref and poll moderation state with countdown timer
  useEffect(() => {
    // Initialize ref with current localStorage state (not React state) to avoid dependency
    const initialState = getModerationState();
    prevLockedOutRef.current = initialState.isLockedOut;
    
    const interval = setInterval(() => {
      const state = getModerationState();
      setModeration(state);
      
      // If lockout just ended, show a message
      if (!state.isLockedOut && prevLockedOutRef.current) {
        const unlockMessage: ChatMessage = {
          id: `bot-unlock-${Date.now()}`,
          role: "bot",
          content: "✅ **Restriction lifted!**\n\nYou can now use the chatbot again. Please keep the conversation respectful. 🙏",
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, unlockMessage]);
      }
      
      prevLockedOutRef.current = state.isLockedOut;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Open chatbot when other buttons dispatch "open-chatbot"
  useEffect(() => {
    const openChat = () => setIsOpen(true);

    window.addEventListener("open-chatbot", openChat);
    return () => window.removeEventListener("open-chatbot", openChat);
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Check if user is locked out
    const currentState = getModerationState();
    if (currentState.isLockedOut) {
      setInputValue("");
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Check for inappropriate content
    const moderationResult = checkMessage(userMessage.content);
    
    if (moderationResult.isInappropriate && moderationResult.severity !== 'none') {
      // Add a strike and get the warning response
      const strikeResult = addStrike(moderationResult.severity);
      
      // Update moderation state immediately
      setModeration(getModerationState());
      
      setTimeout(() => {
        const warningMessage: ChatMessage = {
          id: `bot-warning-${Date.now()}`,
          role: "bot",
          content: getInappropriateContentResponse(strikeResult),
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, warningMessage]);
        setIsTyping(false);
      }, 500);
      
      return;
    }

    // Normal response flow
    setTimeout(() => {
      const botResponse = generateBotResponse(userMessage.content);
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: "bot",
        content: botResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome",
        role: "bot",
        content:
          "Hi there! 👋 I'm Nexxusbot, your virtual assistant. How can I help you learn about Nexxus Lab today?",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-black hover:bg-[rgba(0,102,255,0.1)]"
            : "bg-gradient-to-r from-[#0066ff] to-[#00aaff] hover:shadow-[0_4px_25px_rgba(0,102,255,0.5)]"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </motion.svg>
          )}
        </AnimatePresence>

        {!isOpen && (
          <motion.span
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-150px)] bg-[rgba(10,10,10,0.98)] border border-[rgba(0,102,255,0.3)] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0066ff]/10 to-[#00aaff]/10 border-b border-[rgba(0,102,255,0.3)] p-4 flex items-center gap-3">
              <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00aaff] flex items-center justify-center">
                  <Image
                    src="/images/logo/nexxuslab-logo.png"
                    alt="Nexxusbot"
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                </div>
                <span className={`absolute bottom-0 right-0 w-3 h-3 ${moderation.isLockedOut ? 'bg-red-500' : 'bg-green-500'} border-2 border-black rounded-full`} />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm">Nexxusbot</h3>
                <p className="text-xs text-gray-400">
                  {moderation.isLockedOut 
                    ? `🔒 Restricted • ${formatRemainingTime(moderation.remainingLockoutMs)} remaining`
                    : "Online • Ask me about Nexxus Lab"
                  }
                </p>
              </div>
              
              {/* Warning counter badge */}
              {moderation.strikes > 0 && !moderation.isLockedOut && (
                <div 
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    moderation.strikes === 1 
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}
                  title={`${moderation.strikes} warning(s) - ${MAX_STRIKES - moderation.strikes} remaining`}
                >
                  ⚠️ {moderation.strikes}/{MAX_STRIKES}
                </div>
              )}
              
              <button
                onClick={handleReset}
                className="p-2 text-gray-400 hover:text-white hover:bg-[rgba(0,102,255,0.1)] rounded-lg transition-colors"
                title="Reset conversation"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line ${
                      message.role === "user"
                        ? "bg-[rgba(0,102,255,0.4)] text-white rounded-br-md"
                        : "bg-[rgba(0,102,255,0.2)] text-gray-200 rounded-bl-md"
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-[rgba(0,102,255,0.2)] px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <motion.span
                        className="w-2 h-2 bg-gray-500 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0,
                        }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-gray-500 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-gray-500 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "What services do you offer?",
                    "How can I contact you?",
                    "Tell me about pricing",
                  ].map((q) => (
                    <button
                      key={q}
                      onClick={() => {
                        setInputValue(q);
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                      className="px-3 py-1.5 text-xs bg-[rgba(0,102,255,0.1)] border border-[rgba(0,102,255,0.3)] hover:bg-[rgba(0,102,255,0.2)] text-[#cccccc] rounded-full transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="border-t border-[rgba(0,102,255,0.3)] p-4">
              {moderation.isLockedOut ? (
                /* Lockout overlay with countdown */
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m12-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-red-400 font-semibold text-sm">Chatbot Restricted</span>
                  </div>
                  <div className="text-2xl font-bold text-red-300 mb-1">
                    {formatRemainingTime(moderation.remainingLockoutMs)}
                  </div>
                  <p className="text-xs text-gray-400">
                    Please wait before sending messages
                  </p>
                </motion.div>
              ) : (
                /* Normal input area */
                <>
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 bg-[rgba(255,255,255,0.05)] text-white text-sm px-4 py-3 rounded-full border border-[rgba(0,102,255,0.3)] focus:border-[#0066ff] focus:bg-[rgba(255,255,255,0.08)] focus:outline-none transition-colors placeholder-gray-500"
                      disabled={isTyping}
                    />
                    <motion.button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="px-4 py-3 bg-gradient-to-r from-[#0066ff] to-[#00aaff] text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-opacity font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </motion.button>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">
                    Powered by Nexxus Lab 🚀
                  </p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
