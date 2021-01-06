import toast from "react-hot-toast";

import { INotification } from "../types/components/notification.module";

export const createNotification = ({
  type,
  message,
}: INotification): void => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
  }
}