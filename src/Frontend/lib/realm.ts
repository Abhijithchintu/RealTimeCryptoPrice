import * as Realm from "realm-web";

const app = new Realm.App({ id: "your-realm-app-id" });

const loginAnonymous = async () => {
  const user = await app.logIn(Realm.Credentials.anonymous());
  return user;
};

export { app, loginAnonymous };
