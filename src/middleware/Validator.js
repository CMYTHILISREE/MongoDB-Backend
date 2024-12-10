export function postValidator(req, res, next) {
    const { firstName, lastName, email, hobby } = req.body;
    const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (typeof firstName !== "string" || !firstName || !firstName.trim()) {
      res
        .status(400)
        .json({ message: "firstName is required and must be a non-empty string" });
    } else if (typeof lastName !== "string" || !lastName || !lastName.trim()) {
      res
        .status(400)
        .json({ message: "lastName is required and must be a non-empty string" });
    } else if (!email || !email.trim() || !emailregex.test(email)) {
      res
        .status(400)
        .json({ message: "email is required and must be a valid email format" });
    } else if (typeof hobby !== "string" || !hobby || !hobby.trim()) {
      res
        .status(400)
        .json({ message: "hobby is required and must be a non-empty string" });
    } else {
      next();
    }
  }
  
  export function putValidator(req, res, next) {
    const { firstName, lastName, email, hobby } = req.body;
    const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    // Validating firstName if present
    if (req.body.hasOwnProperty("firstName")) {
      if (typeof firstName !== "string" || firstName.trim() === "") {
        res
          .status(400)
          .json({ message: "Invalid 'firstName'. It must be a non-empty string." });
        return;
      }
    }
  
    // Validating lastName if present
    if (req.body.hasOwnProperty("lastName")) {
      if (typeof lastName !== "string" || lastName.trim() === "") {
        res
          .status(400)
          .json({ message: "Invalid 'lastName'. It must be a non-empty string." });
        return;
      }
    }
  
    // Validating email if present
    if (req.body.hasOwnProperty("email")) {
      if (
        typeof email !== "string" ||
        email.trim() === "" ||
        !emailregex.test(email)
      ) {
        res
          .status(400)
          .json({ message: "Invalid 'email'. It must be a valid email address." });
        return;
      }
    }
  
    // Validating hobby if present
    if (req.body.hasOwnProperty("hobby")) {
      if (typeof hobby !== "string" || hobby.trim() === "") {
        res
          .status(400)
          .json({ message: "Invalid 'hobby'. It must be a non-empty string." });
        return;
      }
    }
  
    next();
  }