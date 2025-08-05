'use server';

import { addUser, isUserFoundInMessage } from "@/lib/user";


export type FormState = {
  success: boolean;
  message: string;
};

export async function addUserData(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const userName = formData.get('name')?.toString();
  const message = formData.get('message')?.toString();


  if (!userName || !message) {
    return {
      success: false,
      message: "Username or message is missing.",
    };
  }

  if (isUserFoundInMessage(userName, message)) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
      success: false,
      message: `The user "${userName}" already exists with the message "${message}".`,
    };
  }


  addUser(userName, message);
  return {
    success: true,
    message: `User "${userName}" added successfully.`,
  };
}
