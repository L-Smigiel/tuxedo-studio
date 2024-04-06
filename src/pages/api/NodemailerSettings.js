import nodemailer from "nodemailer";

export default async function NodemailerSettings(req, res) {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    try {
        // Verify connection configuration
        await transporter.verify();
        console.log("Server is ready to take our messages");

        const mailData = {
            from: process.env.MAIL_USER,
            replyTo: email,
            to: "malgorzata.drozdek@studio-tuxedo.com, lukasz.smigiel@studio-tuxedo.com",
            subject: `Contact form submission from ${name}`,
            html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
        };

        // Send mail
        const info = await transporter.sendMail(mailData);
        console.log("Message sent:", info.messageId);

        return res.status(200).json({ message: "success" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Le message n'a pas pu être envoyé en raison d'une erreur, veuillez réessayer plus tard.",
        });
    }
}
