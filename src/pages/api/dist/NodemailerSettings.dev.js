"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NodemailerSettings;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NodemailerSettings(req, res) {
  var _req$body, name, email, message, mailUser, mailPass, mailData, transporter, mail;

  return regeneratorRuntime.async(function NodemailerSettings$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, message = _req$body.message;
          mailUser = process.env.MAIL_USER;
          mailPass = process.env.MAIL_PASS;
          mailData = {
            name: name,
            email: email,
            message: message
          };
          transporter = _nodemailer["default"].createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: mailUser,
              pass: mailPass
            }
          });
          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: mailUser,
            to: "malgorzata.drozdek@studio-tuxedo.com, lukasz.smigiel@studio-tuxedo.com",
            // you have to retrieve the emails from the database later
            replyTo: email,
            subject: "Contact form submission from ".concat(name),
            html: "\n            <p>Name: ".concat(name, "</p>\n            <p>Email: ").concat(email, "</p>\n            <p>Message: ").concat(message, "</p>\n            ")
          }));

        case 8:
          mail = _context.sent;
          console.log("Message sent:", mail.messageId);
          return _context.abrupt("return", res.status(200).json({
            message: "success"
          }));

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](5);
          console.log(_context.t0);
          res.status(500).json({
            message: "Le message n'a pas pu être envoyé en raison d'une erreur, veuillez réessayer plus tard."
          });

        case 17:
          return _context.abrupt("return", res.status(200).json({
            message: "success"
          }));

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 13]]);
}