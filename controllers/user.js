const { response, request } = require('express')


const usuariosGet = (req, res = response) => {

    const query = req.query

    res.json({
        msg: 'get API - controlador',
        query
    })
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params

    res.json({
        msg: 'put API - controlador',
        id
    })
}


const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body

    res.json({
        msg: 'get post - controlador',
        nombre,
        edad
    })
}

const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'delete API - controlador'
    })
}

const usuariosPatch = (req, res = response) => {

    res.json({
        msg: 'patch API - controlador'
    })
}




module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}