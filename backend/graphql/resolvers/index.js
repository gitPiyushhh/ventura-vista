const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Post = require("../../models/post");
const User = require("../../models/user");

module.exports = {
  posts: async () => {
    const posts = await Post.find().populate("author");

    const formattedPosts = posts.map((post) => {
      return { ...post._doc, createdAt: post.createdAt.toISOString() };
    });

    return formattedPosts;
  },

  createPost: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("You are not authenticated..");
    }

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

  login: async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("No user exists with this mail id..");
    }

    const isEqual = await bcrypt.compare(password, user.password);

    if (!isEqual) {
      throw new Error("Invalid credentials..");
    }

    const token = await jwt.sign(
      { userId: user?._id, email: user?.email },
      process.env.JWT_KEY,
      {
        expiresIn: "1h",
      }
    );

    return { userId: user._id, token, tokenExpiration: 1 };
  },
};
