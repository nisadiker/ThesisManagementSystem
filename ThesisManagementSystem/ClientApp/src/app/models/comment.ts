export interface Comment {
  id: number;
  taskId: number;
  dateAdded: Date;
  commentText: string;
  commentType: string;
  reminderDate: Date;
}
