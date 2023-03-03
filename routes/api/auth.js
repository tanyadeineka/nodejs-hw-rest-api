const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.get("/logout", authenticate, ctrl.logout);

router.patch("/avatars", authenticate, upload.single("avatarURL"), ctrl.updateAvatar);

router.get("/verify/:verificationToken", ctrl.verify);

router.post("/verify", validateBody(schemas.emailSchema), ctrl.resendVerifyEmail);

module.exports = router;