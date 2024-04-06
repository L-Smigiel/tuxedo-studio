"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NodemailerSettings;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NodemailerSettings(req, res) {
  var _req$body, name, email, message, transporter, mailData, info;

  return regeneratorRuntime.async(function NodemailerSettings$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, message = _req$body.message;
          transporter = _nodemailer["default"].createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS
            }
          });
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(transporter.verify());

        case 5:
          console.log("Server is ready to take our messages");
          mailData = {
            from: process.env.MAIL_USER,
            replyTo: email,
            to: "malgorzata.drozdek@studio-tuxedo.com, lukasz.smigiel@studio-tuxedo.com",
            subject: "Contact form submission from ".concat(name),
            html: "<p>Name: ".concat(name, "</p><p>Email: ").concat(email, "</p><p>Message: ").concat(message, "</p>")
          }; // Send mail

          _context.next = 9;
          return regeneratorRuntime.awrap(transporter.sendMail(mailData));

        case 9:
          info = _context.sent;
          console.log("Message sent:", info.messageId);
          return _context.abrupt("return", res.status(200).json({
            message: "success"
          }));

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](2);
          console.error(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            message: "Le message n'a pas pu être envoyé en raison d'une erreur, veuillez réessayer plus tard."
          }));

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 14]]);
}