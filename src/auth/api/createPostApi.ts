import {
  Client,
  Account,
  ID,
  AppwriteException,
  Databases,
  Storage,
  Query,
} from "appwrite";

const databaseId = "654b9ac6e55fb580184d";
const collectionId = "654b9e8c0e11314ebf8f";
const projectId = "654b7712b43e815d2252";
const appwriteUrl = "https://cloud.appwrite.io/v1";
const bucketId = "654b7eb1197eb801ffda";

export const client = new Client()
  .setEndpoint(appwriteUrl)
  .setProject(projectId);

const databases = new Databases(client);
export const bucket = new Storage(client);
// create new post
export const createNewPosts = async (title: string, blogImage: string) => {
  try {
    return await databases.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      {
        title,
        blogImage,
      }
    );
  } catch (error) {
    const appwriteError = error as AppwriteException;
    throw new Error(appwriteError.message);
  }
};

/// update post
export const updatePost = async (title: string, blogImage: string) => {
  try {
    return await databases.updateDocument(
      databaseId,
      collectionId,
      ID.unique(),
      {
        title,
        blogImage,
      }
    );
  } catch (error) {
    const appwriteError = error as AppwriteException;
    throw new Error(appwriteError.message);
  }
};

// delete posts
export const deletPost = async (id: string) => {
  try {
    return await databases.deleteDocument(databaseId, collectionId, id);
  } catch (error) {
    const appwriteError = error as AppwriteException;
    throw new Error(appwriteError.message);
  }
};

// get all posts
export const getAllPost = async () => {
  try {
    return await databases.listDocuments(databaseId, collectionId);
  } catch (error) {
    const appwriteError = error as AppwriteException;
    throw new Error(appwriteError.message);
  }
};

// get single posts
export const SinglePost = async (id: string) => {
  try {
    return await databases.getDocument(databaseId, collectionId, id);
  } catch (error) {
    const appwriteError = error as AppwriteException;
    throw new Error(appwriteError.message);
  }
};
// upload Image
export const uploadImage = async (blogImage: any) => {
  try {
    const imageBlob = new Blob(["Image data"], { type: "image/jpeg" });
    const blogImageFile = new File([imageBlob], "blogImage.jpg", {
      lastModified: new Date().getTime(),
      type: "image/jpeg",
    });

    const bucket = new Storage(client);
    const uploadedImageURL = await bucket.createFile(
      "images",
      blogImage,
      blogImageFile
    );

    return uploadedImageURL;
  } catch (error) {
    const appwriteError = error as AppwriteException;
    throw new Error(appwriteError.message);
  }
};
