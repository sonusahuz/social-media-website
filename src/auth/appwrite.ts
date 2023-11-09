import { Client, Account, ID, AppwriteException, Databases } from "appwrite";

const databaseId = "654b9ac6e55fb580184d";
const collectionId = "654b9e8c0e11314ebf8f";
const projectId = "654b7712b43e815d2252";
const appwriteUrl = "https://cloud.appwrite.io/v1";
const bucketId = "654b7eb1197eb801ffda";

export const client = new Client()
  .setEndpoint(appwriteUrl) // Your API Endpoint
  .setProject(projectId); // Your project ID
export const databases = new Databases(client);
const account = new Account(client);

// register new user
export const register = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    return await account.create(ID.unique(), email, password, name);
  } catch (error) {
    const appwriteError = error as AppwriteException;
    throw new Error(appwriteError.message);
  }
};

// get user datails
export const getCurrentUser = async () => {
  try {
    return await account.get();
  } catch (error) {
    const appwriteError = error as AppwriteException;
    throw new Error(appwriteError.message);
  }
};

// login user
export const login = async (email: string, password: string) => {
  try {
    return await account.createEmailSession(email, password);
  } catch (error) {
    const appwriteError = error as AppwriteException;
    throw new Error(appwriteError.message);
  }
};

// logout user
export const logout = async () => {
  try {
    return await account.deleteSession("current");
  } catch (error) {
    const appwriteError = error as AppwriteException;
    throw new Error(appwriteError.message);
  }
};
