const router = require('express').Router()
const multer = require('multer');
const upload= multer({dest:'uploads'});
const productController = require('./controller')

// router.get('/', (req, res) => {
//   res.send({ // res.send -> pengiriman datanya bisa bentuk html & json
//     status: 'Succesfully',
//     message: 'Welcome to Express JS Tutorial'
//   });
// });


// router.get('/product/:id', (req, res) => {
//   res.json({ // res.json -> pengiriman datanya bentuk json
//     // id: req.params.id
//   });
// });

router.get('/product', productController.index);

//dinamic route
// router.get('/:category/:tag', (req, res) => {
//   const { category, tag } = req.params;
//   res.json({ category, tag });// ini cara kalau nama paramsnya sama
//   // res.json({
//   //   category: category,
//   //   tag: tag
//   // });
// });



//query string --> parameter yang beruppa key dan value
// http://localhost:3000/post?page=2&sort=title --> setelah tanda tanya itu semuanya berua query string
router.get('/product/:id', productController.view);


// menangani request body dengan middleware
// router.post('/product/', (req, res) => {
//   res.json(req.body);
// });


// menggunakan multer untuk upload file
// router.post('/product/', upload.single('image'), (req, res) => {
//   const {name, price, stock, status} = req.body
//   const image = req.file
//   if(image){ //merubah nama image ketika di upload
//     const target = path.join(__dirname, 'uploads',image.originalname)// direktory, nama direktory, nama imagenya
//     fs.renameSync(image.path, target)// rubah nama image sesuai nama aslinya
//     res.json({
//       name,
//       price,
//       stock,
//       status,
//       image
//     });
//   }
// });

router.post('/product/', upload.single('image'), productController.store);
router.put('/product/:id', upload.single('image'), productController.update)
router.delete('/product/:id', upload.single('image'), productController.destroy)





module.exports = router;