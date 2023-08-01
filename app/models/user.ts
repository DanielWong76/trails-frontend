class User {
  public id?: string;
  public firstName: string;
  public lastName: string;
  public username: string;
  public email: string;
  public passwordDigest: string;
  public sessionToken?: string;
  public sessionExpiration?: string;
  public updateSessionToken?: string;

  constructor({
    id, firstName, lastName, username, email, passwordDigest, sessionToken, sessionExpiration, updateSessionToken
  }: { id?: string, firstName: string, lastName: string, username: string, email: string, passwordDigest: string, sessionToken?: string, sessionExpiration?: string, updateSessionToken?: string }) {
    this.id = id;
    this.firstName = (firstName || '').trim();
    this.lastName = lastName || ''.trim();
    this.username = username;
    this.email = email;
    this.passwordDigest = passwordDigest;
    this.sessionToken = sessionToken;
    this.sessionExpiration = sessionExpiration;
    this.updateSessionToken = updateSessionToken;
  }
}

export default User;
