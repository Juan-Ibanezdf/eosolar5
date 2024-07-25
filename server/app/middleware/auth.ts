// import { NextFunction, Request, Response } from "express";
//
// export default async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const usuario = res.locals.user; // Usar res.locals.user, não res.locals.usuario
//         if (!usuario) throw new Error('Unauthenticated');

//         return next();
//     } catch (err) {
//         console.log(err);
//         return res.status(401).json({ error: "Unauthenticated" });
//     }
// };


// export default async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const token = req.cookies.token; // Obter o token do cookie
//         if (!token) throw new Error('Unauthenticated');

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         res.locals.user = decoded; // Armazenar informações do usuário decodificadas em res.locals.user

//         return next();
//     } catch (err) {
//         console.log(err);
//         return res.status(401).json({ error: "Unauthenticated" });
//     }
// };
// import { NextFunction, Request, Response } from "express";
// import jwt from 'jsonwebtoken';
// export default async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const token = req.cookies.token;
//         if (!token) {
//             throw new Error('Unauthenticated');
//         }

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         res.locals.user = decoded;

//         next();
//     } catch (err) {
//         console.log(err);
//         res.status(401).json({ error: "Unauthenticated" });
//     }
// };

import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies['token']; // Alterado o nome do token
        if (!token) {
            throw new Error('Unauthenticated');
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.locals.user = decoded;

        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ error: "Unauthenticated" });
    }
};
