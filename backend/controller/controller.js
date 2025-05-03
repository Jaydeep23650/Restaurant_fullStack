import { Reservation } from '../model/ReservetionSchema.js';

export const createReservation = async (req, res, next) => {
    try {
        const { firstName,lastName, email, phone, date, time} = req.body;

        if (!firstName ||!lastName|| !email || !phone || !date || !time ) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const reservation = new Reservation({
            firstName,
            lastName,
            email,
            phone,
            date,
            time
           
        });

        await reservation.save();
        res.status(201).json({ message: 'Reservation received and saved successfully' });

    } catch (error) {
        next(error); // Pass to error handler middleware
    }
};
