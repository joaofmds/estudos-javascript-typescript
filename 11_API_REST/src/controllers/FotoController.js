import multer from 'multer';
import multerConfig from '../database/multerConfig';

const upload = multer(multerConfig).single('foto');

class FotoController {
  async index(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(401).json({
          errors: [err.code],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new FotoController();
