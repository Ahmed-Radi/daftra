import { ISidebarItem } from "@/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import { Eye, EyeOff, GripVertical, Pencil } from "lucide-react";

export interface ItemProviderProps {
  children: React.ReactNode;
  item: ISidebarItem;
  handleOpenEdit: (index: number) => void;
  handleVisibility: (id: number) => void;
}

const ItemProvider = ({ children, item, handleOpenEdit, handleVisibility }: ItemProviderProps) => {
  const { attributes, listeners, setNodeRef, transition, transform } = useSortable(item);

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  return (
    <div
      className='p-3 bg-gray-100 font-semibold flex gap-2 items-center justify-between cursor-default'
      ref={setNodeRef} {...attributes} style={style}>
        <div className="w-fit flex items-center">
          <span {...listeners} style={{ cursor: 'grab', padding: '2px 1px' }}>
            <GripVertical />
          </span>
          {children}
        </div>
      <div className="flex items-center gap-3">
        <span className="text-gray-400" onClick={() => handleOpenEdit(item.id)}><Pencil /></span>
        <span className="text-gray-400" onClick={() => handleVisibility(item.id)}>{item.visible === undefined || item.visible === true ? <Eye /> : <EyeOff />}</span>
      </div>
    </div>
  )
}

export default ItemProvider