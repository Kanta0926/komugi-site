export default defineEventHandler(async (event) => {
  const res = await $fetch("http://xs666826.xsrv.jp/wp-json/wp/v2/posts", {
    query: {
      categories: 7,
      _embed: "",
      per_page: 4,
    },
  });

  return res;
});
