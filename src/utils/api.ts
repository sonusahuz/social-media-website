export const GET_POST_URL =
  "https://652b4cd74791d884f1fdb370.mockapi.io/todo/posts";

export const getUserPosts = async () => {
  try {
    const response = await fetch(GET_POST_URL);
    const data = await response.json();
    return data;
  } catch (error: any) {
    alert(
      `Something went wrong Please Check your Network connection ${error.message}`
    );
  }
};

export const getSingleUserPosts = async (id: string) => {
  try {
    const response = await fetch(`${GET_POST_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    alert(
      `Something went wrong Please Check your Network connection ${error.message}`
    );
  }
};

export const getReels = async () => {
  try {
    const response = await fetch(
      "https://652b4cd74791d884f1fdb370.mockapi.io/todo/reels"
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    alert(
      `Something went wrong Please Check your Network connection ${error.message}`
    );
  }
};
