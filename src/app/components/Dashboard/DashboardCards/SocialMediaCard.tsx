import { SocialPost } from "@/app/types/types";
import React from "react";

const SocialMediaCard = ({
  socialMediaPost,
}: {
  socialMediaPost: SocialPost;
}) => {
  return (
    <div className="flex flex-col gap-2 bg-white p-4 rounded-2xl ">
      {/*User Id */}
      <h4 className="text-lg text-blue-500">@{socialMediaPost.username}</h4>
      {/*Post Content */}
      <p>{socialMediaPost.content}</p>
      {/*Meta Data */}
      <div className=" flex flex-col gap-1">
        {socialMediaPost.hashTags.map((hashtag: string, index: number) => (
          <span key={index} className="text-blue-500">
            {hashtag}
          </span>
        ))}
        <span>
          Posted On:{" "}
          {new Date(socialMediaPost.createdAt).toISOString().split("T")[0]}
        </span>
      </div>
    </div>
  );
};

export default SocialMediaCard;
