import moment from "moment";
export const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "api";

export function converDate(date) {
  return moment(date).fromNow();
} 

export const sortByDate = (arr) => {
  return [...arr].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
}