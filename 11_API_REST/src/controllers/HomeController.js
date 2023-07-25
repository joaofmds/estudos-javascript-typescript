import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'Santos',
      email: 'luiz@gmail.com',
      idade: 112,
      peso: 300,
      altura: 2.5,
    });
    res.json({
      tudoCerto: true,
    });
  }
}

export default new HomeController();
