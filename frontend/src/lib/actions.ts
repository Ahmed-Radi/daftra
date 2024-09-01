"use server";

import { ISidebarItem } from "@/types";
import { revalidatePath } from "next/cache";

export async function getNavItems() {
  try {
    const response = await fetch("http://localhost:8081/nav");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data) {
      throw new Error('Empty JSON response');
    }

    revalidatePath('/');
    return data;
  } catch (error) {
    console.error("Failed to fetch navigation items:", error);
    throw error;
  }
}

export async function postTrackItem({ id, from, to }: { id: number, from: number, to: number }) {
  const response = await fetch("http://localhost:8081/track", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, from, to }),
  });

  if (response.status === 204) {
    return { message: 'No Content' };
  } else {
    return await response.json();
  }
}

export const postSidebarItems = async (items: ISidebarItem[]) => {
  try {
    const response = await fetch('http://localhost:8081/nav', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(items),
    });

    if (response.status === 204) {
      const updatedItems = await getNavItems();
      console.log('Items successfully saved');
      return updatedItems;
    } else {
      console.error('Failed to save items', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
