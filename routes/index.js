const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users/login:
 *   post:
 *     tags:
 *       - users
 *     summary: ユーザー認証
 *     description: ユーザー名とパスワードで認証を行う。
 *     parameters:
 *       - in: body
 *         name: body
 *         description: ユーザー情報
 *         required: true
 *         schema:
 *           $ref: '#/definitions/LoginUser'
 *     responses:
 *       200:
 *         description: 認証OK
 *         schema:
 *           type: object
 *           properties:
 *             token:
 *               type: string
 *               description: 認証トークン
 *       400:
 *         description: 認証NG
 *         schema:
 *           type: string
 */
router.post('/users/login', (req, res) => {
  return res.json({'message': 'OK'})
})

module.exports = router;
