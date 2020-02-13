import * as Yup from 'yup'

import Recipiente from '../models/Recipiente'

class RecipienteController {
  async store(req, res) {

    const schema = new Yup.object().shape({
      nome: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.number().required(),
      complemento: Yup.string().required(),
      estado: Yup.string().required(),
      cidade: Yup.string().required(),
      cep: Yup.number().required()
    })
    if (!(await schema.isValid(req.body.recipiente))) {
      return res.json({ error: 'Alguma coisa deu errado' })
    }

    const { nome } = req.body.recipiente

    if (await Recipiente.findOne({ where: { nome: nome } })) {
      return res.status(401).json({ error: 'Já existe um recipiente com esse nome' })
    }

    const { rua, numero } = await Recipiente.create(req.body.recipiente)

    return res.json({
      nome,
      rua,
      numero
    })
  }
}

export default new RecipienteController()