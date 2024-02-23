const {z} = require("zod");

const signupSchema = z.object({
    username: z
    .string({required_error:"name is required"})
    .trim()
    .min(5, {message:"at least 5 characters"})
    .max(20, {message:"maximum 20 characters"}),
    email: z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"invalid email address"})
    .min(5, {message:"at least 5 characters"})
    .max(50, {message:"maximum 50 characters"}),
    password: z
    .string({required_error:"password is required"})
    .min(5, {message:"at least 5 characters"})
    .max(20, {message:"maximum 20 characters"}),
    phone: z
    .string({required_error:"phone is required"})
    .trim()
    .min(10, {message:"at least 10 characters"})
    .max(20, {message:"maximum 20 characters"})
})

module.exports = {signupSchema}