"use client";

import { getNavItems, postSidebarItems } from "@/lib/actions";
import { ISidebarItem } from "@/types";
import { createContext, ReactNode, useCallback, useContext, useEffect, useState, useTransition } from "react";

interface initValue {
  editingItemId: number | null;
  handleEdit: (index: number) => void;
  handleSaveEdit: () => void;
  handleVisibility: (id: number) => void;
  newTitle: string;
  setNewTitle: React.Dispatch<React.SetStateAction<string>>;
  isPending: boolean;
}

const SidebarContext = createContext<initValue | undefined>(undefined);

const SidebarItemProvider = ({ children }: { children: ReactNode }) => {
  const [navItems, setNavItems] = useState<ISidebarItem[]>([]);

  const [isPending, startTransition] = useTransition();

  // Fetch navigation items when the component mounts
  const fetchNavItems = useCallback(async () => {
    try {
      const items = await getNavItems();
      setNavItems(items);
    } catch (error) {
      console.error('Failed to fetch nav items:', error);
    }
  }, []);

  useEffect(() => {
    console.log('useEffect triggered');
    startTransition(() => {
      fetchNavItems();
    });
  }, [fetchNavItems]);

  // Id for selected element
  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  // New title for selected element
  const [newTitle, setNewTitle] = useState<string>("");

  // to check selected item is child or parent
  const findItemById = (items: ISidebarItem[], id: number): ISidebarItem | null => {
    for (const item of items) {
      if (item.id === id) {
        return item;
      }
      if (item.children && item.children.length > 0) {
        const found = findItemById(item.children, id);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  // Fined item by id and set editing item id and title
  const handleEdit = (id: number) => {

    if (id === editingItemId) {
      setEditingItemId(null);
      setNewTitle("");
    } else {
      const item = findItemById(navItems, id);
      if (item) {
        setEditingItemId(id);
        setNewTitle(item.title);
      }
    }
  };

  // Update item by id
  const updateItemById = (items: ISidebarItem[], id: number, newTitle: string): ISidebarItem[] => {
    return items.map((item) => {
      if (item.id === id) {
        return { ...item, title: newTitle };
      }
      if (item.children && item.children.length > 0) {
        return { ...item, children: updateItemById(item.children, id, newTitle) };
      }
      return item;
    });
  };

  const handleSaveEdit = async () => {
    if (editingItemId) {
      const updatedItems = updateItemById(navItems, editingItemId, newTitle);
      setNavItems(updatedItems);
      setEditingItemId(null);
      setNewTitle("");

      try {
        await postSidebarItems(updatedItems);
        console.log("Item successfully updated");
      } catch (error) {
        console.error("Failed to update item", error);
      }
    }
  };

  // Update visibility by id
  const updateVisibilityById = (items: ISidebarItem[], id: number): ISidebarItem[] => {
    return items.map((item) => {
      if (item.id === id) {
        return { ...item, visible: !item.visible };
      }
      if (item.children && item.children.length > 0) {
        return { ...item, children: updateVisibilityById(item.children, id) };
      }
      return item;
    });
  };

  const handleVisibility = async (id: number) => {
    const updatedItems = updateVisibilityById(navItems, id);
    setNavItems(updatedItems);

    try {
      await postSidebarItems(updatedItems);
      console.log("Visibility successfully updated");
    } catch (error) {
      console.error("Failed to update visibility", error);
    }
  };

  const value = {
    editingItemId,
    handleEdit,
    handleSaveEdit,
    handleVisibility,
    newTitle,
    setNewTitle,
    isPending,
  };

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};

// Custom hook for consuming the context
const useSidebarItemContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useEdit must be used within an EditProvider");
  }
  return context;
};

export { SidebarItemProvider, useSidebarItemContext };