const { Router } = require('express');
const router = Router();

const { sign } = require('../controllers/auth.controller')
// const verifyToken = require('../middlewares/verifyToken')
const { verifyEmail, verifyEmailyPassword } = require('../middlewares/authenticate')


router.post('/registro', verifyEmail, sign)

router.post('/ingreso', verifyEmailyPassword, sign)


//Creamos 2 rutas para devolver datos:

//esta primera es publica

// router.get('/clientes', (req, res) => {
//     res.json([
//         {
//             _id: 1,
//             name: 'Task one',
//             description: 'lorem ipsum 1',
//             date: "2021-11-25T23:05:47.836Z"
//         },
//         {
//             _id: 2,
//             name: 'Task two',
//             description: 'lorem ipsum 2',
//             date: "2021-11-25T23:05:47.836Z"
//         },
//         {
//             _id: 3,
//             name: 'Task three',
//             description: 'lorem ipsum 3',
//             date: "2021-11-25T23:05:47.836Z"
//         }
//     ])
// })


//esta segunda es privada y se necesita verificar con una funcion que se puede reutilizar
// router.get('/productos', verifyToken, (req, res) => {
//     res.json([
//         {
//             _id: 4,
//             name: 'Task one',
//             description: 'lorem ipsum 1',
//             date: "2021-11-25T23:05:47.836Z"
//         },
//         {
//             _id: 5,
//             name: 'Task two',
//             description: 'lorem ipsum 2',
//             date: "2021-11-25T23:05:47.836Z"
//         },
//         {
//             _id: 6,
//             name: 'Task three',
//             description: 'lorem ipsum 3',
//             date: "2021-11-25T23:05:47.836Z"
//         }
//     ])
// })


module.exports = router;