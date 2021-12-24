export const LANGUAGES = ["JavaScript", "C++", "Ruby", "Java", "PHP", "Go"];
// 状況によっては下記コメントアウト
export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000);
  });
};
