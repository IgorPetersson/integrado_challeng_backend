import { validateCreateUniversity, validateUpdateUniversity } from "./validateUniversity.middlewares";
import { universityExists } from "./universityExists.middleware";
import { universityNotFound } from "./universityNotFound.middleware";

export {validateCreateUniversity, universityExists, universityNotFound, validateUpdateUniversity}