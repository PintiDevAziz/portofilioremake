export default {
  name: "galery",
  title: "Galery",
  type: "document",
  fields: [
    {
      name: "image_title",
      title: "Image Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
  ],
};
