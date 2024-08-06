
import { CloudflareWorkersAI } from "@langchain/cloudflare";
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import pdf from 'pdf-parse';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const input = formData.get('input');

    // Load PDF files from public/data folder
    const dataFolder = path.join(process.cwd(), 'public', 'data');
    const files = await fs.readdir(dataFolder);
    let context = '';

    for (const file of files) {
      if (file.toLowerCase().endsWith('.pdf')) {
        const filePath = path.join(dataFolder, file);
        const dataBuffer = await fs.readFile(filePath);
        const pdfContent = await pdf(dataBuffer);
        context += `${file}:\n${pdfContent.text}\n\n`;
      }
    }

    console.log('Context length:', context.length);

    const model = new CloudflareWorkersAI({
      model: "@cf/meta/llama-2-7b-chat-int8",
      cloudflareAccountId: process.env.CLOUDFLARE_ACCOUNT_ID,
      cloudflareApiToken: process.env.CLOUDFLARE_API_TOKEN,
    });

    const prompt = `Context:\n${context}\n\nQuestion: ${input}\n\nAnswer:`;
    console.log('Prompt length:', prompt.length);

    const response = await model.invoke(prompt);
    console.log('Response:', response);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error details:', error);
    return NextResponse.json({ error: error.message || 'An unknown error occurred' }, { status: 500 });
  }
}