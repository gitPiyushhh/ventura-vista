const bcrypt = require("bcrypt");

const Post = require("../../models/post");
const User = require("../../models/user");
const post = require("../../models/post");

module.exports = {
  posts: async () => {
    const posts = await Post.find().populate("author");

    const formattedPosts = posts.map((post) => {
        return {...post._doc, createdAt: post.createdAt.toISOString()}
    })

    return formattedPosts
  },

  createPost: async (args) => {
    const newPost = await Post.create({
      title: args.post.title,
      description: args.post.description,
      domain: args.post.domain,
      date: new Date(args.post.date),
      author: "65dbaab53e5c94bba05c7c9d",
    });

    const user = await User.findByIdAndUpdate(
      "65dbaab53e5c94bba05c7c9d",
      { $push: { posts: newPost._id } },
      { new: true }
    );

    if (!user) {
      throw new Error("User not found!");
    }

    await Post.findByIdAndDelete(newPost._id);

    return newPost;
  },

  users: async () => {
    return await User.find().populate("posts");
  },

  user: async ({ userId }) => {
    return await User.findById(userId);
  },

  createUser: async (args) => {
    const hashedPassword = await bcrypt.hash(args.user.password, 12);

    const existingUser = await User.findOne({ email: args.user.email });

    if (existingUser) {
      throw new Error("User with this name already exists");
    }

    const newUser = await User.create({
      email: args.user.email,
      password: hashedPassword,
    });

    return newUser;
  },
};
