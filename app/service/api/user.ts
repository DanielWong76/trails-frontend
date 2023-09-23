import User from "models/user";
import { makeApiRequest } from "./base";
import { HttpMethod } from "./base";

export async function UserSignUp(
  user: User,
): Promise<{ user: User }> {
  const url = `/user`
  return makeApiRequest(url, HttpMethod.POST, user);
}

export async function UserLogin(
  username: string,
  encoded_password: string
): Promise<{ user: User }> {
  const url = `/login`
  return makeApiRequest(url, HttpMethod.POST, { username: username, password: encoded_password});
}

export async function UserImage(
  userId: string,
  imageData: string
): Promise<{response: string}> {
  const url = '/user/' + userId + '/image';
  return makeApiRequest(url, HttpMethod.POST, {imageData: imageData})
}