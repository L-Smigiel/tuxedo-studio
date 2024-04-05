import nodemailer from "nodemailer"

export default async function Contact (req, res) {
    const { name, email, message } = req.body

    const mailUser = process.env.user
    const mailPass = process.env.pass
    
    const mailData = {
        name, email, message
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: mailUser,
            pass: mailPass,
        }
    })

    try {

        const mail = await transporter.sendMail({
            from: mailUser,
            to: "malgorzata-drozdek@studio-tuxedo.com, lukasz.smigiel@studio-tuxedo.com", // you have to retrieve the emails from the database later
            replyTo: email,
            subject: `Contact form submission from ${name}`,
            text: message, // check if it's even needed
            html:`
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `,
        })
        console.log("Message sent:", mail.messageId)
        return res.status(200).json({ message: "success"})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Le message n'a pas pu être envoyé en raison d'une erreur, veuillez réessayer plus tard.",
        })
    }

    return res.status(200).json({ message: "success" })
}