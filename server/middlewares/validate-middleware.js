
const validate = (schema) => async (req, res, next)=>{

    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next();
    } catch (error) {

       
        const status = 401
        const message= "fill the inputs properly"
        const extraMessage = error.errors[0].message
        const err = {
            status, 
            message,
            extraMessage
        }
        next(err)
        
    }
}

module.exports = validate;