"use client"

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PDFChatbot() {
  const [file, setFile] = useState<File | null>(null);
  const [chatHistory, setChatHistory] = useState<Array<{ role: string; content: string }>>([]);
  const [input, setInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
    } else {
      alert('Please select a valid PDF file.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setChatHistory((prev) => [...prev, { role: 'user', content: input }]);
  
    try {
      const formData = new FormData();
      formData.append('input', input);
  
      const response = await fetch('/api/chat', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }
  
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
  
      setChatHistory((prev) => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Error invoking AI model:', error);
      setChatHistory((prev) => [...prev, { role: 'assistant', content: `Error: ${(error as Error).message}` }]);
    }
  
  
    setInput('');
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>PDF Chatbot</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
          />
          {file && <span className="ml-2">{file.name}</span>}
        </div>
        <ScrollArea className="h-[400px] border rounded-md p-4">
          {chatHistory.map((message, index) => (
            <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                {message.content}
              </span>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow mr-2"
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}