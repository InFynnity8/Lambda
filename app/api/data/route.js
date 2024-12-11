import fs from 'fs';
import path from 'path';

// Define the file path for storing the data
const getFilePath = () => {
  const userDataDir = process.env.APP_USER_DATA || path.join(process.cwd(), 'data');
  if (!fs.existsSync(userDataDir)) {
    fs.mkdirSync(userDataDir); // Create the directory if it doesn't exist
  }
  return path.join(userDataDir, 'scores.json');
};

export async function GET() {
  const filePath = getFilePath();

  try {
    const data = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : [];
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: `Failed to read data: ${error}` }), { status: 500 });
  }
}

export async function POST(req) {
  const filePath = getFilePath();

  try {
    const newData = await req.json();
    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: `Failed to read data: ${error}` }), { status: 500 });
  }
}
