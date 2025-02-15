// import { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken"
// import dotenv from "dotenv";

// dotenv.config();

// import {Usuario} from '../entity/Usuario'
// import { AppDataSource } from "../../src/database/data-source";

// export default async (req:Request, res:Response, next:NextFunction) => {
//     try{
//         const token = req.cookies.token
//         if(!token) return next()
//         const {nomeDeUsuario}:any = jwt.verify(token,process.env.JWT_SECRET)
//          const userRepository = AppDataSource.getRepository(Usuario);

//       const usuario = await userRepository.findOne({ where: { nomeDeUsuario: nomeDeUsuario } });

//       res.locals.user = usuario

//       return next()
//     }catch(err){
//       console.log(err)
//       return res.status(401).json({error:"Unauthenticated"})
//     }}
// import { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { AppDataSource } from "../../src/database/data-source";
// import { Usuario } from "../entity/Usuario";
// import dotenv from "dotenv";

// dotenv.config();

// export default async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const token =  req.cookies['token'];
//         if (!token) return next();

//         const decoded = jwt.verify(token, process.env.JWT_SECRET) as jwt.JwtPayload;
//         const idUsuario = decoded.idUsuario;
//         if (!idUsuario) throw new Error('Invalid token');

//         const userRepository = AppDataSource.getRepository(Usuario);
//         const usuario = await userRepository.findOne({ where: { idUsuario } });

//         if (!usuario) throw new Error('User not found');
//         return next();
//     } catch (err) {
//         console.log(err);
//         return res.status(401).json({ error: "Unauthenticated" });
//     }
// };




import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies['token'] || req.headers.authorization?.split(' ')[1]; // Tenta obter o token das cookies ou do cabeçalho
        if (!token) {
            return res.status(401).json({ error: "Token não fornecido" });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.error(err);
                return res.status(401).json({ error: "Unauthenticated" });
            }
            
       
        const idUsuario = decoded.idUsuario;
        if (!idUsuario) throw new Error('Invalid token');

            next();
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
};
