export const noMentionsContent = [
  {
    id: 1213425038528,
    name: "type",
    value: [
      {
        name: "default",
        children: [{ text: "Chris Schwarz Ideas and Writeup", larger: true }]
      },
      {
        name: "default",
        children: [
          {
            text:
              "Chis Schwarz brought attention to this style of Tool Chest. He has a few writeups on it and blog posts so hes definately a good place to start."
          }
        ]
      },
      {
        name: "default",
        children: [{ text: "Chris Schwarz plans and sketchup" }]
      }
    ]
  },
  {
    id: 722590329122,
    name: "link",
    value: {
      url:
        "https://www.popularwoodworking.com/woodworking-blogs/dutch-tool-chest-lower-storage-unit/",
      base: "www.popularwoodworking.com",
      image:
        "https://s26462.pcdn.co/wp-content/uploads/Dutch-Chest-With-Lower-Case-e1402947709808.jpg",
      title:
        "Dutch Tool Chest with a Lower Storage Unit | Popular Woodworking Magazine"
    }
  },
  {
    id: 189761849362,
    name: "link",
    value: {
      url:
        "https://blog.lostartpress.com/2012/12/23/lets-go-dutch-tool-chest/\\n",
      base: "blog.lostartpress.com\\n",
      image:
        "https://lostartpress.files.wordpress.com/2012/12/dutch_bench_planes_img_5256.jpg",
      title: "Let’s Go Dutch (Tool Chest) | Lost Art Press"
    }
  },
  {
    id: 474640913276,
    name: "link",
    value: {
      url:
        "https://lostartpress.files.wordpress.com/2013/01/dutch_open_img_4536.jpg\\n",
      base: "lostartpress.files.wordpress.com\\n",
      title: ""
    }
  },
  {
    id: 1256103301600,
    name: "link",
    value: {
      url:
        "https://blog.lostartpress.com/2013/01/11/a-quick-tour-of-the-dutch-tool-chest/",
      base: "blog.lostartpress.com",
      image:
        "https://lostartpress.files.wordpress.com/2013/01/dutch_covered_img_4538.jpg?w=229",
      title: "A Quick Tour of the Dutch Tool Chest | Lost Art Press"
    }
  }
];

export const singleMentionInvalidUserProfileObject = [
  {
    name: "type",
    id: 11656267897,
    value: [
      {
        name: "default",
        children: [
          { text: "test " },
          {
            name: "mention",
            state: {
              id: "asdf",
              name: "Drew",
              username: null,
              avatarURL: "https://cdn.lumastic.com/defaultAvatar.png",
              userProfile: null,
              __typename: "User"
            },
            children: [{ text: "" }]
          },
          { text: "" }
        ]
      }
    ]
  }
];

export const multipleMentions = [
  {
    name: "type",
    id: 604610477636,
    value: [
      {
        name: "default",
        children: [
          { text: "" },
          {
            name: "mention",
            state: {
              id: "asdf123",
              name: "Keith Stolte",
              username: "keith",
              avatarURL:
                "https://cdn.lumastic.com/1i7w_cc9-bkgyjxqjskt8qtqhmv4nd",
              userProfile: {
                id: "asdf1234",
                name: "keith",
                bio:
                  "Coder, Adventurer, and Enthusiast of the finer things. Self-professed continuous integration enthusiast.",
                avatarURL:
                  "https://cdn.lumastic.com/1i7w_cc9-bkgyjxqjskt8qtqhmv4nd",
                headerURL: null,
                isUserOrganization: true,
                __typename: "Organization"
              },
              __typename: "User"
            },
            children: [{ text: "" }]
          },
          { text: " " },
          {
            name: "mention",
            state: {
              id: "jkl123",
              name: "Keith Stolte",
              username: "kstolte",
              avatarURL: "https://cdn.lumastic.com/defaultAvatar.png",
              userProfile: {
                id: "jkl1234",
                name: "kstolte",
                bio: null,
                avatarURL: "https://cdn.lumastic.com/defaultAvatar.png",
                headerURL: null,
                isUserOrganization: true,
                __typename: "Organization"
              },
              __typename: "User"
            },
            children: [{ text: "" }]
          },
          { text: " " },
          {
            name: "mention",
            state: {
              id: "LumasticTestUser1",
              name: "Keith-LumasticTestUser",
              username: "Keith-LumasticTestUser",
              avatarURL: "https://cdn.lumastic.com/defaultAvatar.png",
              userProfile: {
                id: "LumasticTestUser12",
                name: "Keith-LumasticTestUser",
                bio: "",
                avatarURL: "https://cdn.lumastic.com/defaultAvatar.png",
                headerURL: null,
                isUserOrganization: true,
                __typename: "Organization"
              },
              __typename: "User"
            },
            children: [{ text: "" }]
          },
          { text: "" }
        ]
      }
    ]
  }
];

export const singleMentions = [
  {
    name: "type",
    id: 489469851891,
    value: [
      {
        name: "default",
        children: [
          { text: " " },
          {
            name: "mention",
            state: {
              id: "jkl123",
              name: "Keith Stolte",
              username: "kstolte",
              avatarURL: "https://cdn.lumastic.com/defaultAvatar.png",
              userProfile: {
                id: "jkl1234",
                name: "kstolte",
                bio: null,
                avatarURL: "https://cdn.lumastic.com/defaultAvatar.png",
                headerURL: null,
                isUserOrganization: true,
                __typename: "Organization"
              },
              __typename: "User"
            },
            children: [{ text: "" }]
          },
          { text: "" }
        ]
      }
    ]
  }
];
