'use client'
import { useState } from 'react';

const faqs = [
    {
        question: "What is Synoptix AI Evaluations?",
        answer: "A real-time AI performance tracker that measures accuracy, efficiency, and user sentiment to optimize workflows."
    },
    {
        question: "How does it improve AI performance?",
        answer: "Tracks response time, accuracy, hallucinations, and token usage, helping refine AI models for precision and speed."
    },
    {
        question: "Why is AI evaluation important?",
        answer: "Ensures AI-driven decisions are accurate, relevant, and optimized, reducing errors and workflow inefficiencies."
    },
    {
        question: "What are AI hallucinations, and how does Synoptix detect them?",
        answer: "Hallucinations are misleading AI responses. Synoptix identifies them by analysing factual accuracy and consistency."
    },
    {
        question: "Can Synoptix AI help reduce costs?",
        answer: "Yes! Monitors token usage to prevent waste, optimize resource allocation, and cut AI processing costs."
    },
    {
        question: "How fast can I see results?",
        answer: "Expect faster workflows and improved accuracy within 90 days, with real-time tracking for continuous optimization."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative w-full py-24 px-4 bg-gradient-to-b from-[#F7FAFF] to-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="bg-white"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-6 flex items-start justify-between text-left"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                                <span className="text-2xl text-gray-400 flex-shrink-0 leading-none font-light">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            
                            <div 
                                id={`faq-answer-${index}`}
                                role="region"
                                aria-labelledby={`faq-question-${index}`}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="pb-6 text-gray-600 text-base">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 