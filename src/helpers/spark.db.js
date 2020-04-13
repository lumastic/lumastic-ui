import { drew, keith, atishay } from "./user.db";

export const spark1 = {
  title: "Drew's spark",
  createdBy: drew,
  description:
    "This is a spark description. This is a spark description.  It cannot contain rich text and it must be less than 240 characters. This makes for better share-ability and also makes sure that the user doesn't write an essay about their project.",
  tags: [{ name: "Woodworking" }, { name: "Baking" }],
  followers: [keith, atishay],
  posts: []
};

export const spark2 = {
  title: "Keith's spark",
  createdBy: keith,
  description:
    "This is a spark description. This is a spark description.  It cannot contain rich text and it must be less than 240 characters. This makes for better share-ability and also makes sure that the user doesn't write an essay about their project.",
  tags: [{ name: "Woodworking" }, { name: "Baking" }],
  followers: [drew, atishay],
  posts: []
};

export const spark3 = {
  title: "Atishay's spark",
  createdBy: atishay,
  description:
    "This is a spark description. This is a spark description.  It cannot contain rich text and it must be less than 240 characters. This makes for better share-ability and also makes sure that the user doesn't write an essay about their project.",
  tags: [{ name: "Woodworking" }, { name: "Baking" }, { name: "Hacking" }],
  followers: [keith, drew],
  posts: []
};
