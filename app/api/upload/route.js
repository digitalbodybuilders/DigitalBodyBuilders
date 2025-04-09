import fs from 'fs';
import path from 'path';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false, // Disable body parser to handle form data manually
  },
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), 'public/images/gallery'); // Directory to save images
    form.keepExtensions = true; // Keep the file extension

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Error during file parsing:', err);
        return res.status(500).json({ error: 'Something went wrong during file upload.' });
      }

      const file = files.image[0];
      const filePath = path.join('/images/gallery', file.newFilename); // Relative file path

      // You can save the file path to your database here if needed

      res.status(200).json({
        message: 'File uploaded successfully!',
        filePath: filePath,
      });
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
