const express = require('express');
const fs = require('fs');
const PDFDocument = require('pdfkit');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/upload_table/:id', (req, res) => {
  const id = req.params.id;

  // Mock data or fetch data from your database based on the ID
  const data = {
    id: id,
    name: 'John Doe',
    email: 'johndoe@example.com'
  };

  // Create PDF using pdfkit
  const doc = new PDFDocument();
  const filePath = `downloads/${id}.pdf`;
  doc.pipe(fs.createWriteStream(filePath));
  doc.fontSize(16).text(`ID: ${data.id}`);
  doc.fontSize(16).text(`Name: ${data.name}`);
  doc.fontSize(16).text(`Email: ${data.email}`);
  doc.end();

  // Send the generated PDF file back to the client
  res.download(filePath, `${id}.pdf`, (err) => {
    if (err) {
      console.error('Error sending PDF:', err);
    }
    // Delete the PDF file after download
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Error deleting PDF:', err);
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
