import * as Realm from "realm-web";

const app = new Realm.App({ id:  process.env.NEXT_PUBLIC_MONGODB_APP_ID});

const loginAnonymous = async () => {
  const user = await app.logIn(Realm.Credentials.anonymous());
  return user;
};

export { app, loginAnonymous };
