import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sorts";
import {
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";

const BoardContent = ({ board }) => {
  // Yêu cầu chuột di chuyển 10px mới kích hoạt event
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });
  //Nhấn giữ 250ms và dung sai cảm ứng thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 },
  });
  // const sensors = useSensors(pointerSensor);
  // Ưu tiên kết hợp 2 loại sensors mouse và touch để có trải nghiệm tốt nhất trên moblie
  const sensors = useSensors(mouseSensor, touchSensor);

  const [orderdColumns, setOrderdColumns] = useState([]);

  useEffect(() => {
    setOrderdColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  const handleDragEnd = (event) => {
    // console.log("handleDragEnd", event);
    const { active, over } = event;

    if (!over) return;

    //Nếu vị trí sau khi kéo thả khác vị trí ban đầu
    if (active.id !== over.id) {
      // Lấy vị trí cũ từ  active
      const oldIndex = orderdColumns.findIndex((c) => c._id === active.id);
      // Lấy vị trí mới từ over
      const newIndex = orderdColumns.findIndex((c) => c._id === over.id);

      const dndOrderedColumns = arrayMove(orderdColumns, oldIndex, newIndex);
      // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id);

      // Cập nhật lại state columns ban đầu sau khi đã kéo thả
      setOrderdColumns(dndOrderedColumns);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          width: "100%",
          height: (theme) => theme.trello.boardContentHeight,
          p: "10px 0",
        }}
      >
        <ListColumns columns={orderdColumns} />
      </Box>
    </DndContext>
  );
};

export default BoardContent;
