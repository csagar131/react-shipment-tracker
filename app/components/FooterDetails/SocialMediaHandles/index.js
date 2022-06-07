import React from "react";

const SocialMediaHandles = ({ footerData, getSocialMediaLink }) => {
  return (
    <>
      {getSocialMediaLink(footerData?.social_media, "facebook") && (
        <a
          href={getSocialMediaLink(footerData?.social_media, "facebook")}
          target="_blank"
        >
          <img
            src="https://d10srchmli830n.cloudfront.net/1654153662790_a54d45a8-5c32-488d-b7f1-8225876974f2_Facebookfb_icon.svg"
            alt="fb-icon"
          />
        </a>
      )}
      {getSocialMediaLink(footerData?.social_media, "instagram") && (
        <a
          href={getSocialMediaLink(footerData?.social_media, "instagram")}
          target="_blank"
        >
          <img
            src="https://d10srchmli830n.cloudfront.net/1654153868600_0a077458-1763-4f91-a524-2df93d640aa2_Groupinsta_icon.svg"
            alt="insta-icon"
            style={{ marginLeft: "12px" }}
          />
        </a>
      )}

      {getSocialMediaLink(footerData?.social_media, "twitter") && (
        <a
          href={getSocialMediaLink(footerData?.social_media, "twitter")}
          target="_blank"
        >
          <img
            src="https://d10srchmli830n.cloudfront.net/1654153692421_f9b87b8c-d6ae-4498-b298-4daabfdb9f58_Twittertwitter_icon.svg"
            alt="twiiter-icon"
            style={{ marginLeft: "12px" }}
          />
        </a>
      )}

      {getSocialMediaLink(footerData?.social_media, "youtube") && (
        <a
          href={getSocialMediaLink(footerData?.social_media, "youtube")}
          target="_blank"
        >
          <img
            src="https://d10srchmli830n.cloudfront.net/1654153737272_cad9331b-aee1-4a09-963b-96c815d79a14_YouTubeyoutube_icon.svg"
            alt="youtube-icon"
            style={{ marginLeft: "12px" }}
          />
        </a>
      )}

      {getSocialMediaLink(footerData?.social_media, "pinterest") && (
        <a
          href={getSocialMediaLink(footerData?.social_media, "pinterest")}
          target="_blank"
        >
          <img
            src="https://d10srchmli830n.cloudfront.net/1654510255756_92e4d242-d9fb-40ba-983f-6a86335857c2_pinterestpinterest.svg"
            alt="pinterest-icon"
            style={{ marginLeft: "12px" }}
          />
        </a>
      )}
    </>
  );
};

export default SocialMediaHandles;
