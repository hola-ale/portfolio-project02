import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Aloha Hair")
    .items([
      S.listItem()
        .title("Landing Page Section")
        .child(
          S.document()
            .schemaType("landingPage")
            .documentId("landingPage")
            .title("Landing Page")
        ),
      S.listItem()
        .title("About Me Section")
        .child(
          S.document()
            .schemaType("author")
            .documentId("author")
            .title("About Me Page")
        ),
      S.listItem()
        .title("Catch Me Section")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Catch Me Section Documents")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Catch Me title & subtitle")
                .child(
                  S.document()
                    .schemaType("siteDescription")
                    .documentId("siteDescription")
                    .title("Catch Me title & subtitle")
                ),
              S.listItem()
                .title("Catch Me locations")
                .child(
                  S.document()
                    .schemaType("details")
                    .documentId("details")
                    .title("Catch Me locations")
                ),
            ])
        ),
      S.listItem()
        .title("Book Section")
        .child(
          S.document().schemaType("book").documentId("book").title("Book")
        ),
      S.listItem()
        .title("Blog Section")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Blog Section Documents")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Blog")
                .child(
                  S.document()
                    .schemaType("blog")
                    .documentId("blog")
                    .title("Blog")
                ),
              S.listItem()
                .title("Posts")
                .child(
                  S.document()
                    .schemaType("posts")
                    .documentId("posts")
                    .title("Posts")
                ),
            ])
        ),
      S.listItem()
        .title("Subscribe Section")
        .child(
          S.document()
            .schemaType("subscribe")
            .documentId("subscribe")
            .title("Subscribe")
        ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "siteDescription",
            "details",
            "landingPage",
            "author",
            "book",
            "blog",
            "posts",
            "subscribe",
          ].includes(listItem.getId())
      ),
    ]);
