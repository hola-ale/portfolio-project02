export default {
  name: "blog",
  title: "Blog Section",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "subtitle",
      type: "text",
    },
    {
      name: "buttonTextGoToBlog",
      type: "text",
    },
    {
      name: "buttonTextViewOlder",
      type: "text",
    },
    {
      name: "text",
      title: "title for Read also",
      type: "string",
    },
  ],
};
