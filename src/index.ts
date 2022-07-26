import Ajv from "ajv";
import type { JSONSchemaType } from "ajv";

interface TheType {
  key?: string;
}
const schema: JSONSchemaType<TheType> = {
  additionalProperties: false,
  required: [],
  properties: {
    key: { nullable: false, type: "string" },
  },
  type: "object",
}

const ajv = new Ajv({
  allErrors: true,
});
export const validate = ajv.compile(schema);
