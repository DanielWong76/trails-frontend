import User from "models/user";
import { makeApiRequest } from "./base";
import { HttpMethod } from "./base";

export async function UserSignUp(
  user: User,
): Promise<{ user: User }> {
  const url = `/user`
  return makeApiRequest(url, HttpMethod.POST, user);
}