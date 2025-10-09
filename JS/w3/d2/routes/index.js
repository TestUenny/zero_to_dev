import express from 'express';
const router = express.Router();

// Basic GET
router.get('/', (req, res) => {
 res.send('Hello from Express with ES6!');
});

// Example POST
router.post('/echo', (req, res) => {
 const { message } = req.body;
 res.json({ received: message });
});

const cats = [
 { id: 1, name: 'Mittens', color: 'gray' },
 { id: 2, name: 'Luna', color: 'black' },
 { id: 3, name: 'Simba', color: 'orange' }
];

router.get('/cats/:id', (req, res) => {
    const {id} = req.params;
    const catId = Number(id);

    const cat = cats.find(catObj => catObj.id === catId);
    if (cat === undefined) {
        return res.status(404).json({ message: 'Cat not found 😿' });
    }
 res.json(cat);
});


router.post('/cats', (req, res) => {
 const { name, color} = req.body;
 const newCat = {
    id: cats.sort((a, b) => a.id - b.id)[cats.length - 1].id + 1,
    name,
    color
 }
 cats.push(newCat);
 res.json(newCat);
});

export default router;
