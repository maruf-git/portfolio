import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    longDescription: { type: String },
    techStack: [{ type: String }],
    category: {
      type: String,
      enum: ["web", "mobile", "backend", "fullstack"],
      default: "fullstack",
    },
    liveUrl: { type: String },
    githubUrl: { type: String },
    imageUrl: { type: String },
    featured: { type: Boolean, default: false },
    appDownloadUrl: { type: String },
    playStoreUrl: { type: String },
    appStoreUrl: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
