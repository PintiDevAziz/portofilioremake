export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "project_title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "project_slug",
      title: "Project_slug",
      type: "slug",
      options: {
        source: "project_title",
        maxLength: 96,
      },
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "project_url",
      title: "Link",
      type: "url",
    },
  ],
};
