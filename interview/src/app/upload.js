const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
// const { JitEvaluator } = require('angular/compiler');
const app = express();



app.use(cors());

app.use(bodyparser.json());

// database connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root@123',
    database: 'newone',
    port:3306
});

//   check database connection

db.connect(err => {
    if (err) { console.log(err, 'db err'); }
    console.log('Database connected...');
});


// get all data

// app.get('/upload_table', (req, res) => {
//     let qr = select * from upload_table;
//     db.query(qr, (err, result) => {
//         if (err) {
//             console.log(err, 'errs');
//         }
//         if (result.length > 0) {
//             res.send({
//                 message: 'all upload_table data',
//                 data: result
//             });
//         }
//     });
// });

app.get('/upload_table', (req, res) => {
    let qr = 'SELECT * FROM upload_table'; // Enclose SQL query in quotes
  
    db.query(qr, (err, result) => {
      if (err) {
        console.log(err); // Log the error
        res.status(500).send({ message: 'Internal server error' }); // Send error response
      } else {
        if (result.length > 0) {
          res.send({ message: 'All upload_table data', data: result }); // Send data response
        } else {
          res.send({ message: 'No data found' }); // Send no data response
        }
      }
    });
  });

//   get single data

// app.get('/upload_table/:id', (req, res) => {
//     let gID = req.params.id;
//     let qr = select * from upload_table where id= ${gID};
//     db.query(qr, (err, result) => {
//         if (err) { console.log(err); }

//         if (result.length > 0) {
//             res.send({
//                 message: 'Single candidate_data data',
//                 data: result
//             });
//         }
//         else {
//             res.send({
//                 message: 'data not found'
//             });
//         }
//     })
// });


// create data

app.post('/upload_table', (req, res) => {
    // let gID = req.params.id;
    console.log(req.body, 'createdata');
    let id = req.body.id;
    let file_name = req.body.file_name;
    let file_size=req.body.file_size;
    let file_type=req.body.file_type;
    let file_path=req.body.file_path;

    
    

    const sql = 'INSERT INTO upload_table (id, file_name, file_size, file_type, file_path) VALUES (?, ?, ?, ?, ?)';

    db.query(qr, (err, result) => {
        if (err) { 
            res.status(500).json({error:'Failed'});
            console.log(err);
         }
        else{
           res.json(result);
        }
        
    })
});

// update single data

// app.put('/candidate_data/:id',(req,res)=>{
//     console.log(req.body,'update data');

//     let id = req.params.id;
//     let name = req.body.name;
//     let screened=req.body.screened;
//     let shortlisted=req.body.shortlist;
//     let discussion=req.body.discuss;
//     let mailsent=req.body.mailsent;
//     let interviewdate=req.body.schedule;
//     let attended=req.body.attended;
//     let staus=req.body.candidatestatus;
//     let qr=update candidate_data set id='${id}',name='${name}',screened='${screened}',shortlisted='${shortlisted}',discussion='${discussion}',mailsent='${mailsent}',interviewdate='${interviewdate}',attended='${attended}',staus='${staus}' where id=${id};

//     // let qr=update candidate_data set id='${id}',name='${name}',screened='${screened}',shortlisted='${shortlisted}' where id=${id}
//     db.query(qr,(err,result)=>{
//         if(err){console.log(err);}

//         console.log(result,'result');
//         res.send({
//             message:'data updated',
//         });
//     })
// });

// delete single data

// app.delete('/candidate_data/:id', (req, res) => {
//     let qID = req.params.id;
//     let qr = delete from candidate_data where id=${qID};
//     db.query(qr, (err, result) => {
//         if (err) { console.log(err); }

//         res.send({
//             message: 'data deleted'
//         });
//     })
// });



app.listen(4200, () => {
    console.log('Server running...');
});